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
| M12 | Phase 3 Baseline Exploration & Inspection | Inspect Lit components in `dashboard/`, Onboarding, Help Center (5 tabs), Settings drawer, Command palette, Observatory 3D, and shortcut bindings | M11 | DONE |
| M13 | R1: Component Render, Localization & Windows Shortcut Fixes | Fix Lit component rendering, translate Onboarding, Help (5 tabs), Settings, Palette, 3D dialogs, add Windows `Ctrl+K/R/,` shortcuts & `Ctrl+K / ⌘K` labels | M12 | DONE |
| M14 | R2: Code Quality, UI & License Audit (Auditor) | System quality audit, regression verification, UI translation check, license compliance | M13 | DONE |
| M15 | R3: Build & Operational Verification (Tester) | Execute `npx vite build` in `dashboard/` (0 errors), run test suites, verify operation | M13 | DONE |
| M16 | R4: Final Forensic Integrity Audit | Forensic audit for zero hardcoding/fake implementations across component fixes and shortcuts | M14, M15 | DONE |
| M17 | Phase 4 Baseline Exploration & App Store Inspection | Inspect all 66 edge apps in `dashboard/src/store/apps.ts` and `dashboard/src/components/nv-app-store.ts`, category definitions, search/filter behavior | M16 | DONE |
| M18 | R1 & R2: App Store Edge Apps Japanese Localization & UI Integration | Define `name_ja`, `summary_ja`, Japanese category mapping for all 66 apps, update `nv-app-store.ts` for Japanese priority rendering & filter handling | M17 | IN_PROGRESS |
| M19 | R3: Quality Review & Vite Build Verification | Code review & run `npx vite build` in `dashboard/` to verify zero type errors or build failures | M18 | PLANNED |
| M20 | R4: Final Forensic Integrity Audit | Forensic audit verifying complete 66 app Japanese localization without hardcoded stubs or fake outputs | M19 | PLANNED |

## Interface Contracts & Guidelines
- Commercial License Compliance: NO non-commercial or paid dependencies (GPL/AGPL/CC-NC forbidden for commercial use, Apache-2.0 / MIT / BSD / CC-BY allowed).
- Backward Compatibility: English fallback for missing keys; existing CLI flags and API signatures remain functional.
- Friendly Japanese Terminology: `Empty Room` -> `空部屋測定（ベースライン校正）`, `Fall Detect` -> `転倒検知アラート`, `Vital Signs` -> `バイタル測定（心拍・呼吸）`, `CSI Variance` -> `電波変動量（動作強度）`.
- Dashboard Lit Component Fixes: Ensure clean rendering of `nv-app`, `nv-help`, `nv-palette`, `nv-onboarding`, `nv-settings-drawer` without blank screen errors.
- Complete Localization: Onboarding ("Welcome to nvsim"), Help Center (all 5 tabs), Settings drawer, Command palette, Observatory 3D select boxes & dialogs fully translated into natural Japanese.
- Windows Shortcuts & Labels: `Ctrl+K`, `Ctrl+R`, `Ctrl+,` supported alongside `⌘K`, `⌘R`, `⌘,`; labels displayed as `Ctrl+K / ⌘K`.
- App Store Localization (66 Edge Apps):
  - `APPS` array in `dashboard/src/store/apps.ts`: extend all 66 apps with `name_ja` and natural, intuitive `summary_ja`.
  - Categories localized (医療, 防犯・警備, スマートビル, 店舗・商業, 産業, 信号処理, オンライン学習, 空間・グラフ, 時相ロジック, AIセーフティ, 量子信号, 自律走行・メッシュ, 研究・特殊, シミュレータ).
  - `dashboard/src/components/nv-app-store.ts`: preferential rendering of `name_ja` / `summary_ja` when `locale === 'ja'`, search query matching on both `name`/`summary` and `name_ja`/`summary_ja`, category filter chips mapped to Japanese titles properly.
- Build Acceptance: `npx vite build` in `dashboard/` must compile cleanly with 0 errors.
