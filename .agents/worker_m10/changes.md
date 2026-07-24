# Changes Summary — Milestone 10 (R3 Error Pausing Guard & Retry Control)

## Modified & Created Files

### 1. `python/ruview_error_guard.py` (New File)
- Implemented `RuViewErrorGuard` class and `GuardResult` helper class.
- Added `check_and_guard(error_message)` method:
  - Tracks consecutive failure count (default threshold = 3).
  - Determines if current time is within JST late-night window (00:00 to 06:00 JST, corresponding to JST 24:00 - 6:00).
  - Triggers 3600-second (1 hour) safe pause during late night with exact Japanese notice: `"深夜帯(JST 24:00-6:00)での連続エラー発生を検知したため、1時間(3600秒)安全一時停止します。"` and auto-resumes after pause.
  - Triggers standard retry backoff (default 60s) outside late night.
- Implemented `reset()` method to clear consecutive failure count on successful execution or explicit reset.

### 2. `scripts/run_with_error_guard.py` (New File)
- Implemented CLI runner script supporting target job execution protected by `RuViewErrorGuard`.
- Configurable CLI options: `--threshold`, `--pause-sec`, `--backoff-sec`, `--max-retries`.
- Executes commands in subprocess and delegates error handling and pausing to `RuViewErrorGuard`.

### 3. `python/tests/test_error_guard.py` (New File)
- Implemented comprehensive unit tests:
  - `test_threshold_detection`: Verifies failure counter increment and guard trigger at 3 consecutive failures.
  - `test_jst_late_night_window_logic`: Verifies JST 0..5 hour window detection (True) vs 6..23 hour (False).
  - `test_late_night_3600s_pause_behavior`: Verifies 3600s sleep function call, exact Japanese notice log, and post-pause reset.
  - `test_reset_on_success`: Verifies `reset()` and success input (`None`) reset failure counter.
  - `test_custom_threshold_and_error_types`: Tests custom failure threshold and Exception object error tracking.
  - `test_run_job_under_guard_success` & `test_run_job_under_guard_failure`: Verifies CLI runner wrapper logic.
