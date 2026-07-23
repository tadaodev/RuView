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

## Interface Contracts & Guidelines
- Commercial License Compliance: NO non-commercial or paid dependencies (GPL/AGPL/CC-NC forbidden for commercial use, Apache-2.0 / MIT / BSD / CC-BY allowed).
- Backward Compatibility: English fallback for missing keys; existing CLI flags and API signatures remain functional.
- Quality & Layout: No broken UI layouts or overflowing text on UI elements.
