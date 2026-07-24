# Project: RuView Japanese Localization and 3-Role Development

## Architecture Overview
RuView is a Rust/Python/Web application for WiFi DensePose, spatial monitoring, dashboard UI, and CLI tools.
Localization requires translating UI elements, README/documentation, and CLI/log messages into natural Japanese, while extending the architecture to support modular, extensible i18n without breaking existing behavior or commercial license rules.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Baseline Exploration & License Audit | Explore repository structure, dependencies, license compliance, existing test suite | None | DONE |
| M2 | R4: Modular i18n Architecture Extension | Design & implement extensible i18n module/framework for UI & CLI without breaking existing APIs; isolate GPL scapy dependency | M1 | DONE |
| M3 | R1: UI Dashboard & Web Screen Localization | Localize dashboard HTML/JS/CSS/React/Template strings to natural Japanese | M2 | DONE |
| M4 | R2: Documentation & README Localization | Localize README.md and key docs under `docs/` to Japanese | M1 | DONE |
| M5 | R3: CLI, Console Logs & Error Messages | Localize CLI help, log messages, error strings to Japanese using i18n system | M2 | DONE |
| M6 | R5: Final 3-Role Audit, Testing & Verification | Perform complete Developer, Auditor, Tester verification & Forensic Integrity Audit | M3, M4, M5 | DONE |
| M7 | Baseline Exploration & Codebase Inspection (Phase 2) | Audit hardcoded UI strings, doc gaps, and error pausing logic | M6 | DONE |
| M8 | R1: Web UI Full Japanese Localization & Friendly Terms | Translate Classic UI, Observatory 3D, Vite Dashboard with friendly Japanese terms & helpful descriptions | M7 | DONE |

| M9 | R2: Major Documentation Polish | Synchronize & refine `README.ja.md` and `docs/` with intuitive explanations | M7 | DONE |
| M10 | R3: Error Pausing Guard & Retry Control | Add error pausing rule (JST 24:00-6:00 late night 1h safe pause/auto-resume) | M7 | DONE |
| M11 | R4: Final 3-Role Verification & Forensic Audit | Run `npx vite build`, Rust & Python tests, license compliance & forensic integrity audit | M8, M9, M10 | DONE |



## Interface Contracts & Guidelines
- Commercial License Compliance: NO non-commercial or paid dependencies (GPL/AGPL/CC-NC forbidden for commercial use, Apache-2.0 / MIT / BSD / CC-BY allowed).
- Backward Compatibility: English fallback for missing keys; existing CLI flags and API signatures remain functional.
- Friendly Japanese Terminology: `Empty Room` -> `空部屋測定（ベースライン校正）`, `Fall Detect` -> `転倒検知アラート`, `Vital Signs` -> `バイタル測定（心拍・呼吸）`, `CSI Variance` -> `電波変動量（動作強度）`.
- Error Pausing Guard: Repeated errors trigger job pause; JST 24:00-6:00 triggers 1-hour safe pause before auto-resuming.

