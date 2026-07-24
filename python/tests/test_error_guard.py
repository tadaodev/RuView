"""
Unit tests for RuViewErrorGuard and run_with_error_guard script.
"""

import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path
from unittest.mock import MagicMock

# Ensure python directory is in sys.path
root_dir = Path(__file__).resolve().parent.parent
if str(root_dir) not in sys.path:
    sys.path.insert(0, str(root_dir))
project_root = root_dir.parent
if str(project_root) not in sys.path:
    sys.path.insert(0, str(project_root))

from ruview_error_guard import RuViewErrorGuard, GuardResult, LATE_NIGHT_NOTICE, JST_TZ
from scripts.run_with_error_guard import run_job_under_guard


def test_threshold_detection():
    mock_sleep = MagicMock()
    # Daytime datetime: JST 14:00
    daytime = datetime(2026, 7, 25, 14, 0, 0, tzinfo=JST_TZ)
    guard = RuViewErrorGuard(
        failure_threshold=3,
        backoff_duration_sec=10.0,
        sleep_fn=mock_sleep,
        now_fn=lambda tz=None: daytime,
    )

    assert guard.consecutive_failures == 0

    # 1st failure
    res1 = guard.check_and_guard("Agent execution terminated due to error.")
    assert guard.consecutive_failures == 1
    assert res1.triggered is False
    assert res1["action"] == "tracked"
    mock_sleep.assert_not_called()

    # 2nd failure
    res2 = guard.check_and_guard("Agent execution terminated due to error.")
    assert guard.consecutive_failures == 2
    assert res2.triggered is False
    assert res2["action"] == "tracked"
    mock_sleep.assert_not_called()

    # 3rd failure (Threshold reached!)
    res3 = guard.check_and_guard("Agent execution terminated due to error.")
    assert res3.triggered is True
    assert res3.late_night is False
    assert res3.action == "backoff"
    assert res3.paused_seconds == 10.0
    mock_sleep.assert_called_once_with(10.0)


def test_jst_late_night_window_logic():
    guard = RuViewErrorGuard()

    # Test hours 0..5 (24:00 - 06:00 JST late night window) -> True
    for hour in range(0, 6):
        dt = datetime(2026, 7, 25, hour, 30, 0, tzinfo=JST_TZ)
        assert guard.is_late_night_jst(dt) is True, f"Hour {hour} should be late night"

    # Test hours 6..23 (Outside late night window) -> False
    for hour in range(6, 24):
        dt = datetime(2026, 7, 25, hour, 0, 0, tzinfo=JST_TZ)
        assert guard.is_late_night_jst(dt) is False, f"Hour {hour} should not be late night"

    # Naive datetime conversion check
    naive_dt = datetime(2026, 7, 25, 2, 0, 0)  # 02:00
    assert guard.is_late_night_jst(naive_dt) is True


def test_late_night_3600s_pause_behavior(caplog, capsys):
    mock_sleep = MagicMock()
    # Late night datetime: JST 02:30 AM
    late_night_dt = datetime(2026, 7, 25, 2, 30, 0, tzinfo=JST_TZ)

    guard = RuViewErrorGuard(
        failure_threshold=3,
        pause_duration_sec=3600.0,
        sleep_fn=mock_sleep,
        now_fn=lambda tz=None: late_night_dt,
    )

    guard.check_and_guard("Error 1")
    guard.check_and_guard("Error 2")

    # 3rd failure during late night
    with caplog.at_level("WARNING"):
        res = guard.check_and_guard("Agent execution terminated due to error.")

    assert res.triggered is True
    assert res.late_night is True
    assert res.action == "pause"
    assert res.paused_seconds == 3600.0
    assert res.message == LATE_NIGHT_NOTICE
    assert LATE_NIGHT_NOTICE in LATE_NIGHT_NOTICE

    # Verify 3600s sleep was called
    mock_sleep.assert_called_once_with(3600.0)

    # Verify Japanese notice logged
    captured_stderr = capsys.readouterr().err
    assert LATE_NIGHT_NOTICE in captured_stderr or LATE_NIGHT_NOTICE in caplog.text

    # Verify consecutive failures count reset to 0 after safe pause auto-resume
    assert guard.consecutive_failures == 0


def test_reset_on_success():
    mock_sleep = MagicMock()
    guard = RuViewErrorGuard(failure_threshold=3, sleep_fn=mock_sleep)

    guard.check_and_guard("Error 1")
    guard.check_and_guard("Error 2")
    assert guard.consecutive_failures == 2

    # Successful execution resets count
    res_reset = guard.check_and_guard(None)
    assert res_reset.triggered is False
    assert res_reset.action == "reset"
    assert guard.consecutive_failures == 0

    # Manual reset() call
    guard.check_and_guard("Error 1")
    assert guard.consecutive_failures == 1
    guard.reset()
    assert guard.consecutive_failures == 0


def test_custom_threshold_and_error_types():
    mock_sleep = MagicMock()
    daytime = datetime(2026, 7, 25, 12, 0, 0, tzinfo=JST_TZ)
    guard = RuViewErrorGuard(
        failure_threshold=2,
        backoff_duration_sec=30.0,
        sleep_fn=mock_sleep,
        now_fn=lambda tz=None: daytime,
    )

    # Custom threshold = 2
    guard.check_and_guard(RuntimeError("Task failed"))
    res = guard.check_and_guard("Agent execution terminated due to error.")
    assert res.triggered is True
    assert res.consecutive_failures == 2
    mock_sleep.assert_called_once_with(30.0)


def test_run_job_under_guard_success(monkeypatch):
    import subprocess
    mock_run = MagicMock(return_value=subprocess.CompletedProcess(args=["python", "-c", "print(1)"], returncode=0))
    monkeypatch.setattr(subprocess, "run", mock_run)

    exit_code = run_job_under_guard(["python", "-c", "print(1)"], threshold=3, max_retries=1)
    assert exit_code == 0
    mock_run.assert_called_once()


def test_run_job_under_guard_failure(monkeypatch):
    import subprocess
    mock_run = MagicMock(return_value=subprocess.CompletedProcess(args=["fail"], returncode=1, stderr="Error!"))
    monkeypatch.setattr(subprocess, "run", mock_run)

    # Max retries = 2
    exit_code = run_job_under_guard(
        ["fail"],
        threshold=2,
        pause_sec=10.0,
        backoff_sec=5.0,
        max_retries=2,
    )
    assert exit_code == 1
    assert mock_run.call_count == 2
