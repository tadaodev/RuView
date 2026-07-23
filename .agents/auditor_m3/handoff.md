# Forensic Audit Report — Milestone 3: R1 UI Dashboard & Web Screen Localization

**Work Product**: Milestone 3 Localization (`dashboard/src/components/*`, `ui/index.html`, `ui/i18n.js`, `ui/components/*`, `ui/mobile/src/*`, `v2/crates/wifi-densepose-sensing-server/src/main.rs`, `locales/ja.json`)  
**Profile**: General Project / Integrity Forensics  
**Verdict**: **CLEAN**

---

## 1. Observation

### A. Source Code & Translation Wiring Inspection
1. **Central Dictionaries (`locales/ja.json`, `locales/en.json`)**:
   - `locales/ja.json`: 264 lines of valid JSON structured by module (`ui`, `topbar`, `sidebar`, `rail`, `home`, `inspector`, `appstore`, `settings`, `cli`, `log`, `error`).
   - `locales/en.json`: Matching structured fallback keys.

2. **Vite/Lit Dashboard (`dashboard/src/i18n.ts` & `dashboard/src/components/*`)**:
   - `dashboard/src/i18n.ts`: Implements `I18nManager` with reactive `onLocaleChange` subscription listener pattern, fallback to English/keys, parameter formatting (`{key}` substitution), and `detectDefaultLocale()` (environment variable `RUVIEW_LANG`, `navigator.language`, default `'ja'`).
   - `nv-topbar.ts`, `nv-sidebar.ts`, `nv-rail.ts`, `nv-home.ts`, `nv-app-store.ts`, `nv-settings-drawer.ts`, `nv-console.ts`: Subscribe to `i18n.onLocaleChange(() => this.requestUpdate())` in `connectedCallback()`, store unsubscribe handle in `private _unsubI18n`, and call `this._unsubI18n()` in `disconnectedCallback()`.
   - `nv-inspector.ts`: Declares `private _unsubI18n?: () => void;` and wraps UI labels in `t('inspector.*')`, but omits calling `this._unsubI18n = i18n.onLocaleChange(() => this.requestUpdate());` in `connectedCallback()`.

3. **Classic Web UI (`ui/index.html`, `ui/i18n.js`, `ui/components/SensingTab.js`)**:
   - `ui/i18n.js`: Standard vanilla JS i18n module with `applyTranslations()` that queries `[data-i18n]`, `[data-i18n-placeholder]`, `[data-i18n-aria]`. Auto-injects `#lang-selector` dropdown.
   - `ui/index.html`: `data-i18n` attributes placed on main tab headers (`nav.dashboard`, `nav.hardware`, `nav.demo`, etc.) and section headings (`dashboard.title`, `dashboard.status`).
   - `ui/components/SensingTab.js`: Employs `window.i18n.t(...)` in `_onStateChange()` for dynamic status and banner labels (`conn.offline`, `conn.connecting`, `conn.connected`, `sensing.bannerLive`, `sensing.bannerServerSim`).

4. **React Native Mobile App (`ui/mobile/src/`)**:
   - `ui/mobile/src/utils/i18n.ts`: Lightweight TypeScript i18n helper (`t`, `setLocale`, `getLocale`) with Japanese translation table `jaDict`.
   - `ConnectionBanner.tsx`, `LiveScreen/index.tsx`, `VitalsScreen/index.tsx`, `ZonesScreen/index.tsx`, `SettingsScreen/index.tsx`: Screen and component strings wrapped with `t('mobile.*', '...')`.

5. **Axum Sensing Server Landing Page (`v2/crates/wifi-densepose-sensing-server/src/main.rs`)**:
   - `info_page()`: Serves HTML with `<html lang='ja'>` and natural Japanese descriptions (`WiFi-DensePose センシングサーバー`, `Rust + Axum + RuVector 高速WiFiセンシング基盤`).

6. **Rust Core i18n Module (`v2/crates/wifi-densepose-core/src/i18n.rs`)**:
   - `EN_JSON` and `JA_JSON` embedded at compile-time via `include_str!`. Supports `t()`, `t_with_fallback()`, and `t_format()`. Passing unit test suite.

### B. Prohibited Pattern Checks (Phase 1 & 2)
- **Hardcoded Test Results**: 0 instances detected. Tests dynamically invoke dictionary lookups and verify returned strings.
- **Facade Implementations**: 0 instances detected. Translation functions perform real tree traversals and string formatting.
- **Pre-populated Verification Artifacts**: 0 pre-populated logs or false verification outputs found.
- **Self-Certifying Tautologies**: 0 instances detected.

### C. License Compliance & Dependencies
- `dashboard/package.json`: Dependencies `@preact/signals-core` (MIT), `lit` (BSD-3-Clause), `workbox-window` (MIT).
- `ui/mobile/package.json`: Permissive open-source dependencies (MIT/Apache-2.0/BSD).
- `v2/crates/wifi-densepose-sensing-server/Cargo.toml`: Permissive open-source crates.
- **Paid / Non-Commercial Libraries**: 0 non-commercial or paid libraries introduced.

---

## 2. Logic Chain

1. **Scope Verification**: All 7 target areas specified for Milestone 3 (`dashboard/src/components/*`, `ui/index.html`, `ui/i18n.js`, `ui/components/*`, `ui/mobile/src/*`, `v2/crates/wifi-densepose-sensing-server/src/main.rs`, `locales/ja.json`) were systematically audited.
2. **Authenticity Analysis**: Source code examination confirms that translation dictionaries are genuinely linked to UI rendering templates. No dummy returns or hardcoded string bypasses were present.
3. **Behavioral & Functional Verification**: Node.js and Python test executions confirmed that calling `setLocale('ja')` and `setLocale('en')` dynamically toggles output strings as expected across dictionaries.
4. **Dependency & License Audit**: Manifest files (`package.json`, `Cargo.toml`) contain only standard, permissively licensed open-source packages.

---

## 3. Caveats

1. **`nv-inspector.ts` Reactive Subscription Omission**: In `dashboard/src/components/nv-inspector.ts`, `private _unsubI18n?: () => void;` is defined, but `this._unsubI18n = i18n.onLocaleChange(() => this.requestUpdate());` was omitted from `connectedCallback()`. The component still translates correctly on render via `t(...)` calls, but language changes will not immediately trigger a re-render of `nv-inspector` unless triggered by other signal updates. This is a minor UI lifecycle oversight, not an integrity violation or facade.

---

## 4. Conclusion

Milestone 3 (R1 UI Dashboard & Web Screen Localization) passes forensic integrity verification with a verdict of **CLEAN**.

All implementations are authentic, genuinely wired to single-source translation dictionaries, contain no hardcoded test cheats or facade implementations, and comply 100% with open-source licensing rules.

---

## 5. Verification Method

- **Node i18n Execution Verification**:
  ```bash
  node -e "import('./ui/i18n.js').then(m => { console.log('JA:', m.i18n.t('ui.dashboard.title')); m.i18n.setLocale('en'); console.log('EN:', m.i18n.t('ui.dashboard.title')); })"
  ```
- **Python i18n Execution Verification**:
  ```bash
  python -c "import importlib.util; spec = importlib.util.spec_from_file_location('i18n', 'python/wifi_densepose/i18n.py'); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); m.set_locale('ja'); print('JA:', m.t('ui.dashboard.title')); m.set_locale('en'); print('EN:', m.t('ui.dashboard.title'))"
  ```
- **Rust i18n Core Test Verification**:
  ```bash
  cargo test -p wifi-densepose-core --lib i18n
  ```
