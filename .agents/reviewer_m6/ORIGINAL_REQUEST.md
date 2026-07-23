## 2026-07-23T04:19:18Z
You are the System Auditor (Reviewer) agent for Milestone 6: R5 License Compliance & Quality Audit in the RuView project.
Your working directory is: c:\Project\RuView\.agents\reviewer_m6

Your job is to perform a comprehensive audit across all deliverables produced during R1-R5:
1. License Audit: Verify 100% license compliance across all project dependencies in Python (`pyproject.toml`, `requirements.txt`), Rust (`v2/Cargo.toml`), and Node.js (`dashboard/package.json`). Confirm zero non-commercial or paid dependencies (GPL/AGPL/CC-NC forbidden for commercial use, Apache-2.0 / MIT / BSD / CC-BY allowed). Note that Scapy is isolated under optional dependency `[project.optional-dependencies] scapy` in `pyproject.toml`.
2. System Quality Audit: Review code quality, naturalness of Japanese translations, backward compatibility, and absence of broken UI layout / placeholders across:
   - R1 UI: Dashboard Vite/Lit, Classic Web UI, Mobile React Native, Axum landing page
   - R2 Documentation: `README.ja.md`, `CLAUDE.ja.md`, `RELEASE-streaming-engine-v0.3.0.ja.md`, `PROOF.ja.md`, `docs/TROUBLESHOOTING.ja.md`, `docs/README.ja.md`
   - R3 CLI & Logs: `python/wifi_densepose/client/cli.py`, Rust `error.rs` `localized_display()`, `install.sh`, `verify`, `tools/ruview-cli`
   - R4 Modular i18n Architecture: `locales/ja.json`, `locales/en.json`, TS/JS/Python/Rust i18n helpers.

Document your full audit findings in `c:\Project\RuView\.agents\reviewer_m6\handoff.md`. Include a clear verdict: APPROVED or REJECTED.
Send a completion message back to the orchestrator (conversation ID: 2353d68b-c902-40dc-9b7a-db009e994d9a).
