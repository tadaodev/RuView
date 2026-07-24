# Implementation Plan - RuView Japanese Localization & 3-Role Development

## Objectives
1. R1: UI Dashboard & Web screen localization to natural Japanese with layout integrity.
2. R2: README.md and key documentation under `docs/` localized to Japanese.
3. R3: CLI outputs, console logs, and error messages localized to Japanese.
4. R4: Extensible modular i18n architecture preserving existing code stability and backward compatibility.
5. R5: 3-role workflow (Developer, Auditor, Tester) with non-commercial license check & automated tests passing.

## Milestones & Execution Steps
- **M1: Baseline Exploration & License Audit**
  - Explore codebase structure (dashboard, CLI, python/rust modules, docs, tests).
  - Run initial license audit on dependencies (ensure zero non-commercial/paid libraries).
  - Execute existing test suite baseline.
- **M2: R4 Modular i18n Architecture Extension**
  - Create/extend modular i18n architecture for Python/CLI and Dashboard/Web UI.
  - Implement JSON/PO dictionary system with default fallbacks.
- **M3: R1 UI Dashboard Localization**
  - Translate UI elements, menus, buttons, labels, and messages to natural Japanese.
  - Verify Web UI component layout integrity.
- **M4: R2 Documentation & README Localization**
  - Localize `README.md` and key files in `docs/`.
  - Maintain clarity, technical terms, and proper formatting.
- **M5: R3 CLI, Console Logs & Error Messages**
  - Localize CLI help commands, console log messages, and error messages.
  - Ensure formatting specifiers (placeholders) are intact.
- **M11: R4 Final 3-Role Verification & Forensic Audit** (Completed)
- **M12: Phase 3 Baseline Exploration & Codebase Inspection**
  - Inspect Lit components in `dashboard/` (`nv-app`, `nv-help`, `nv-palette`, `nv-onboarding`, `nv-settings-drawer`, etc.) for import errors or undefined references causing blank screen issues.
  - Inspect Onboarding, Help Center (all 5 tabs), Settings drawer, Command palette, and Observatory 3D select boxes & dialogs for translation gaps.
  - Audit keyboard shortcut handlers (`Ctrl+K`, `Ctrl+R`, `Ctrl+,`) and UI display labels (`Ctrl+K / ⌘K`).
- **M13: R1 Component Render, Localization & Windows Shortcut Fixes (Developer)**
  - Developer fixes Lit components and imports to eliminate blank screen issues in `dashboard/`.
  - Complete natural Japanese localization for Onboarding ("Welcome to nvsim"), Help Center (5 tabs), Settings drawer, Command palette, and Observatory 3D select boxes & dialogs.
  - Add Windows shortcut listeners (`Ctrl+K`, `Ctrl+R`, `Ctrl+,`) and update UI labels to `Ctrl+K / ⌘K` format.
- **M14: R2 System Quality & Regression Audit (Auditor)**
  - Auditor verifies UI rendering integrity, full Japanese localization coverage, Windows keyboard shortcut support, code quality, and commercial license compliance.
- **M15: R3 Build & Operational Verification (Tester)**
  - Tester executes `npx vite build` in `dashboard/` (0 errors), runs test suites, and verifies operational functionality.
- **M16: R4 Final Forensic Integrity Audit**
  - Forensic Auditor conducts integrity audit to ensure genuine component fixes and shortcuts without fake implementations or hardcoded shortcuts.

