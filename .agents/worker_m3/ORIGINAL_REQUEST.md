## 2026-07-23T08:20:45+09:00

You are the Developer (Worker) agent for Milestone 3: R1 UI Dashboard & Web Screen Localization.

Your assigned working directory is: c:\Project\RuView\.agents\worker_m3 (please create your state/report files in this directory).

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Objectives & Implementation Steps:
1. Update `locales/ja.json` and `locales/en.json` to ensure comprehensive, natural Japanese translation keys for all UI components, buttons, navigation items, dialogs, badges, tooltips, and status indicators.
2. Vite/Lit Dashboard (`dashboard/src/components/`):
   - Localize all Lit components: `nv-topbar.ts`, `nv-sidebar.ts`, `nv-rail.ts`, `nv-home.ts`, `nv-scene.ts`, `nv-inspector.ts`, `nv-console.ts`, `nv-app-store.ts`, `nv-settings-drawer.ts`, `nv-onboarding.ts`, `nv-help.ts`, `nv-palette.ts`, `nv-toast.ts`, `nv-modal.ts`.
   - Connect components to `dashboard/src/i18n.ts` so menus, labels, buttons, headers, and messages render in natural Japanese.
3. Classic Web UI (`ui/`):
   - Localize `ui/index.html` and components: `TabManager.js`, `DashboardTab.js`, `HardwareTab.js`, `LiveDemoTab.js`, `ModelPanel.js`, `SettingsPanel.js`, `SensingTab.js`, `TrainingPanel.js`.
   - Add `data-i18n`, `data-i18n-placeholder` attributes or `window.i18n.t(key, fallback)` calls so text renders in natural Japanese.
4. React Native Mobile App (`ui/mobile/src/screens/`):
   - Localize UI strings in `LiveScreen.tsx`, `MATScreen.tsx`, `VitalsScreen.tsx`, `ZonesScreen.tsx`, `SettingsScreen.tsx`, `ConnectionBanner.tsx`, `ModeBadge.tsx`.
5. Axum Sensing Server (`v2/crates/wifi-densepose-sensing-server/src/main.rs`):
   - Localize embedded HTML landing page text.
6. Layout Integrity:
   - Ensure natural Japanese phrasing without awkward machine translations.
   - Verify layout integrity (no broken flex layouts, text overflow, or clipped UI buttons).
7. Verification:
   - Build frontends / run tests (`cd dashboard && npm test` if available, `cd v2 && cargo test --workspace --no-default-features`).

Document all localized components, changes, and verification in `c:\Project\RuView\.agents\worker_m3\handoff.md`. Send a completion message when done.
