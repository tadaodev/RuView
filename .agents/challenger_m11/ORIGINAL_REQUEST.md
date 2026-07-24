## 2026-07-24T16:14:07Z

You are the Tester / Challenger for Milestone 11 (Final 3-Role Verification).
Your working directory is c:\Project\RuView\.agents\challenger_m11.

Tasks:
1. Vite Dashboard Build:
   - Run `$env:PYTHONUTF8=1; [Console]::OutputEncoding = [System.Text.Encoding]::UTF8; cd dashboard; npx vite build`.
2. Rust Workspace Unit & Integration Tests:
   - Run `$env:PYTHONUTF8=1; [Console]::OutputEncoding = [System.Text.Encoding]::UTF8; cd v2; cargo test --workspace --no-default-features`.
3. Python Test Suite:
   - Run `$env:PYTHONUTF8=1; [Console]::OutputEncoding = [System.Text.Encoding]::UTF8; pytest python/tests/test_i18n.py python/tests/test_error_guard.py`.
4. Verification Script:
   - Run `$env:PYTHONUTF8=1; [Console]::OutputEncoding = [System.Text.Encoding]::UTF8; python verify`.
5. Report Results:
   - Confirm all test suites pass with zero failures.
   - Write handoff report to `c:\Project\RuView\.agents\challenger_m11\handoff.md` and notify orchestrator with verdict (PASS / FAIL).
