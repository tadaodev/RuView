## 2026-07-25T01:06:33+09:00

You are the Worker for Milestone 10 (R3 Error Pausing Guard & Retry Control).
Your working directory is c:\Project\RuView\.agents\worker_m10.
Read c:\Project\RuView\.agents\explorer_m7\analysis.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or bypass error logic. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks:
1. Implement `python/ruview_error_guard.py`:
   - Create `RuViewErrorGuard` class with error tracking for "Agent execution terminated due to error." or repeated task errors.
   - Implement `check_and_guard(error_message)` method:
     - Detect consecutive failures (default threshold = 3).
     - Determine current JST (UTC+9) hour (0 to 5, i.e., 24:00 to 06:00 JST late night window).
     - If triggered during JST 24:00 - 6:00: log clear Japanese notice ("深夜帯(JST 24:00-6:00)での連続エラー発生を検知したため、1時間(3600秒)安全一時停止します。") and pause safely for 3600 seconds before auto-resuming.
     - If triggered outside late night: perform standard retry backoff.
     - Implement `reset()` method to reset consecutive failure count upon successful execution.
2. Implement `scripts/run_with_error_guard.py`:
   - CLI script wrapper supporting target job execution under Error Pausing Guard protection.
3. Implement `python/tests/test_error_guard.py`:
   - Unit tests covering threshold detection, JST late-night window logic (mocked time/timezone), 3600-second pause behavior, and reset on success.
   - Run `pytest python/tests/test_error_guard.py` (with PowerShell UTF-8 encoding `$env:PYTHONUTF8=1; [Console]::OutputEncoding = [System.Text.Encoding]::UTF8; pytest python/tests/test_error_guard.py`). Ensure 100% tests PASS.
4. Handoff:
   - Write details to `c:\Project\RuView\.agents\worker_m10\changes.md` and `c:\Project\RuView\.agents\worker_m10\handoff.md`.
   - Send completion message to orchestrator with pytest results.
