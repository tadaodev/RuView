"""
RuView Error Pausing Guard & Retry Control Module.

This module provides error tracking and safe pause functionality for RuView system.
When consecutive errors occur, it detects whether the system is currently in the JST
late-night window (24:00 - 06:00 JST, i.e., 00:00 to 06:00 JST). If so, it safely pauses
for 3600 seconds (1 hour) before auto-resuming. Outside the late-night window, it performs
standard retry backoff.
"""

import logging
import sys
import time
from datetime import datetime, timezone, timedelta
from typing import Any, Callable, Dict, Optional, Union

logger = logging.getLogger("ruview.error_guard")

JST_TZ = timezone(timedelta(hours=9))
LATE_NIGHT_NOTICE = "深夜帯(JST 24:00-6:00)での連続エラー発生を検知したため、1時間(3600秒)安全一時停止します。"


class GuardResult(dict):
    """Result object returned by RuViewErrorGuard.check_and_guard.
    
    Acts as a dictionary, supports property access, and evaluates to True
    when the guard was triggered (pause or backoff executed).
    """

    def __init__(
        self,
        triggered: bool,
        late_night: bool,
        action: str,
        consecutive_failures: int,
        paused_seconds: float,
        message: str = "",
    ):
        super().__init__(
            triggered=triggered,
            late_night=late_night,
            action=action,
            consecutive_failures=consecutive_failures,
            paused_seconds=paused_seconds,
            message=message,
        )

    @property
    def triggered(self) -> bool:
        return self["triggered"]

    @property
    def late_night(self) -> bool:
        return self["late_night"]

    @property
    def action(self) -> str:
        return self["action"]

    @property
    def consecutive_failures(self) -> int:
        return self["consecutive_failures"]

    @property
    def paused_seconds(self) -> float:
        return self["paused_seconds"]

    @property
    def message(self) -> str:
        return self["message"]

    def __bool__(self) -> bool:
        return self["triggered"]


class RuViewErrorGuard:
    """Error tracking and safe pause controller.
    
    Tracks consecutive errors (e.g. "Agent execution terminated due to error.")
    and guards against error bursts.
    """

    def __init__(
        self,
        failure_threshold: int = 3,
        pause_duration_sec: float = 3600.0,
        backoff_duration_sec: float = 60.0,
        sleep_fn: Optional[Callable[[float], None]] = None,
        now_fn: Optional[Callable[[Optional[timezone]], datetime]] = None,
    ):
        self.failure_threshold = failure_threshold
        self.pause_duration_sec = pause_duration_sec
        self.backoff_duration_sec = backoff_duration_sec
        self.consecutive_failures = 0
        self.sleep_fn = sleep_fn if sleep_fn is not None else time.sleep
        self.now_fn = now_fn if now_fn is not None else (lambda tz=None: datetime.now(tz or JST_TZ))

    def is_late_night_jst(self, dt: Optional[datetime] = None) -> bool:
        """Determine if current time is within JST late night window (00:00 to 06:00 JST / JST 24:00 - 6:00)."""
        if dt is None:
            now_jst = self.now_fn(JST_TZ)
        else:
            if dt.tzinfo is None:
                now_jst = dt.replace(tzinfo=JST_TZ)
            else:
                now_jst = dt.astimezone(JST_TZ)
        return 0 <= now_jst.hour < 6

    def reset(self) -> None:
        """Reset consecutive failure count upon successful execution."""
        self.consecutive_failures = 0
        logger.info("RuViewErrorGuard: Consecutive failure count reset to 0.")

    def check_and_guard(
        self, error_message: Optional[Union[str, Exception, Any]] = None
    ) -> GuardResult:
        """Check error condition and apply pause guard or retry backoff if threshold met.
        
        Args:
            error_message: Error string or Exception. If None or empty, treats execution as successful and resets guard.
            
        Returns:
            GuardResult indicating whether guard triggered, action taken, and paused duration.
        """
        if error_message is None or (isinstance(error_message, str) and not error_message.strip()):
            self.reset()
            return GuardResult(
                triggered=False,
                late_night=False,
                action="reset",
                consecutive_failures=0,
                paused_seconds=0.0,
                message="",
            )

        self.consecutive_failures += 1
        err_str = str(error_message)
        logger.warning(
            f"RuViewErrorGuard: Recorded failure #{self.consecutive_failures}/{self.failure_threshold}. Error: {err_str}"
        )

        if self.consecutive_failures >= self.failure_threshold:
            late_night = self.is_late_night_jst()
            if late_night:
                notice = LATE_NIGHT_NOTICE
                logger.warning(notice)
                print(f"[RuViewErrorGuard] {notice}", file=sys.stderr)
                
                # Safe pause for 3600s
                self.sleep_fn(self.pause_duration_sec)
                
                # Auto-resume after safe pause, reset failure count
                res = GuardResult(
                    triggered=True,
                    late_night=True,
                    action="pause",
                    consecutive_failures=self.consecutive_failures,
                    paused_seconds=self.pause_duration_sec,
                    message=notice,
                )
                self.reset()
                return res
            else:
                notice = (
                    f"連続エラー発生({self.consecutive_failures}回)を検知したため、"
                    f"リトライバックオフ({self.backoff_duration_sec}秒)を実行します。"
                )
                logger.warning(notice)
                print(f"[RuViewErrorGuard] {notice}", file=sys.stderr)
                
                # Standard retry backoff
                self.sleep_fn(self.backoff_duration_sec)
                
                return GuardResult(
                    triggered=True,
                    late_night=False,
                    action="backoff",
                    consecutive_failures=self.consecutive_failures,
                    paused_seconds=self.backoff_duration_sec,
                    message=notice,
                )
        else:
            return GuardResult(
                triggered=False,
                late_night=False,
                action="tracked",
                consecutive_failures=self.consecutive_failures,
                paused_seconds=0.0,
                message="",
            )
