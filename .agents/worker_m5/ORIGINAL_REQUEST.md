## 2026-07-23T04:11:12Z
<USER_REQUEST>
You are the Developer (Worker) agent for Milestone 5: R3 CLI, Console Logs & Error Message Localization.

Your assigned working directory is: c:\Project\RuView\.agents\worker_m5 (please create your handoff report and state files here).

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or summarize content. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Objectives & Implementation Steps:
1. Update `locales/ja.json` and `locales/en.json` with complete CLI subcommand descriptions, CLI help strings, console log messages, error messages, and installer prompts.
2. Python CLI & Logging Localization (`python/wifi_densepose/client/cli.py`, `python/ruview-meta/`):
   - Wire `python/wifi_densepose/i18n.py` (`t(...)`) into CLI help strings, command option help, log output messages, and error messages.
3. Rust CLI & Error Message Localization (`v2/crates/wifi-densepose-cli/src/main.rs`, `v2/crates/wifi-densepose-core/src/error.rs`, `v2/crates/wifi-densepose-sensing-server/src/error_response.rs`):
   - Integrate `v2/crates/wifi-densepose-core/src/i18n.rs` (`t(...)`, `t_format(...)`) for Clap CLI subcommand help, `tracing` log messages, and `thiserror` error output descriptions.
4. Shell & Script Tool Localization (`install.sh`, `verify`, `tools/ruview-cli/`):
   - Add Japanese localization support for installer console outputs and tool messages.
5. Placeholders & Format Specifiers:
   - Ensure all format specifiers (`{host}`, `{port}`, `{path}`, `{reason}`, `{}` etc.) remain 100% intact across English and Japanese strings.
6. Verification:
   - Run tests (`cd v2 && cargo test --workspace --no-default-features`, `pytest python/tests/test_i18n.py`, `python archive/v1/data/proof/verify.py`).

Document all localized CLI modules, error files, and verification output in `c:\Project\RuView\.agents\worker_m5\handoff.md`. Send a completion message when done.
</USER_REQUEST>
