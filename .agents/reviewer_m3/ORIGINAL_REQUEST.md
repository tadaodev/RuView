## 2026-07-23T08:26:42Z
<USER_REQUEST>
You are the System Auditor (Reviewer) agent for Milestone 3: R1 UI Dashboard & Web Screen Localization.

Your assigned working directory is: c:\Project\RuView\.agents\reviewer_m3 (please write your report here).

Objectives:
1. Review all localized UI files updated in M3:
   - `locales/ja.json` & `locales/en.json`
   - Vite/Lit Dashboard: `dashboard/src/i18n.ts` & `dashboard/src/components/` (`nv-topbar.ts`, `nv-sidebar.ts`, `nv-rail.ts`, `nv-home.ts`, `nv-inspector.ts`, `nv-app-store.ts`, `nv-settings-drawer.ts`, `nv-console.ts`)
   - Classic Web UI: `ui/index.html`, `ui/i18n.js`, `ui/components/SensingTab.js`
   - Expo React Native App: `ui/mobile/src/utils/i18n.ts`, `ui/mobile/src/components/ConnectionBanner.tsx`, `ui/mobile/src/screens/` (`LiveScreen`, `VitalsScreen`, `ZonesScreen`, `SettingsScreen`)
   - Axum Sensing Server landing page: `v2/crates/wifi-densepose-sensing-server/src/main.rs`
2. Verify:
   - Natural, professional Japanese translations (menus, labels, buttons, messages).
   - Layout integrity (no broken flex layout, overlapping text, or CSS issues).
   - Reactive locale subscription (`connectedCallback` & `disconnectedCallback` handling).
   - Backward compatibility and fallback handling.

Write your review findings and sign-off verdict in `c:\Project\RuView\.agents\reviewer_m3\handoff.md`. Send a completion message when done.
</USER_REQUEST>
