# Milestone 7 Handoff Report: Baseline Exploration & Codebase Inspection (Phase 2)

**Agent:** Explorer (`explorer_m7`)  
**Milestone:** M7 (Baseline Exploration & Codebase Inspection)  
**Status:** Complete  

---

## 1. Observation

1. **Classic Web UI & Observatory 3D HTML/JS/CSS Component Structure**:
   - `ui/i18n.js` (lines 4-177): Defines `translations` object for `en` and `ja`. `I18n.detectLocale()` (lines 192-201) checks `RUVIEW_LANG` or `navigator.language`, defaulting to `ja`.
   - `ui/observatory.html` (lines 30-43, 52-105): Dropdown scenario options contain hardcoded English strings (`Empty Room`, `Vital Signs`, `Multi-Person`, `Fall Detect`). Left/Right HUD panels contain hardcoded labels (`Vital Signs`, `Heart Rate`, `Respiration`, `Confidence`, `WiFi Signal`, `RSSI`, `Variance`, `Motion`, `Persons`, `Presence`, `ABSENT`, `FALL DETECTED`). `ui/observatory.html` currently lacks `ui/i18n.js` script import and `data-i18n` attributes.
   - `ui/observatory/js/hud-controller.js` (lines 70-85): `SCENARIO_DESC` object contains hardcoded English scenario descriptions.

2. **Vite React/TS Dashboard (`dashboard/src/`)**:
   - `dashboard/src/i18n.ts` (lines 7-354): Exports `enDict` and `jaDict`. Function `lookupKey()` (lines 356-370) looks up keys via dot notation. Class `I18nManager` (lines 386-451) emits `locale-changed` CustomEvents.
   - Hardcoded UI text in `dashboard/src/components/`: `nv-ghost-murmur.ts`, `nv-onboarding.ts`, `nv-palette.ts`, and `nv-scene.ts` need complete `t(...)` key bindings.

3. **Master Translation Schemas**:
   - `locales/ja.json` (340 lines) and `locales/en.json` (338 lines) contain comprehensive keys for CLI commands, installer prompts, system errors, and core UI titles.

4. **Documentation Files (`README.ja.md` & `docs/`)**:
   - `README.ja.md` (649 lines): Fully written in Japanese, but requires terminology enrichment (`Empty Room` -> `空部屋測定（ベースライン校正）`, `Fall Detect` -> `転倒検知アラート`, `Vital Signs` -> `バイタル測定（心拍・呼吸）`, `CSI Variance` -> `電波変動量（動作強度）`), and polish for ESP32-S3/C6 setup CLI examples.
   - `docs/`: `docs/TROUBLESHOOTING.ja.md`, `docs/RELEASE-streaming-engine-v0.3.0.ja.md`, and `docs/edge-modules/` need term synchronization.

5. **Error Pausing Guard Architecture**:
   - Target error trigger: `"Agent execution terminated due to error."`
   - Target location: `python/ruview_error_guard.py`, `scripts/run_with_error_guard.py`, and `python/tests/test_error_guard.py`.
   - Safe pause logic: JST 24:00 - 6:00 (UTC+9 hour 0 to 5) triggers 3600-second (`time.sleep(3600)`) pause on 3 consecutive failures.

6. **Build & Test Verification Commands**:
   - Dashboard: `npx vite build` in `c:\Project\RuView\dashboard`.
   - Rust Workspace: `cargo test --workspace --no-default-features` in `c:\Project\RuView\v2`.
   - Python Suite: `pytest` (or `python -m pytest python/tests`) in `c:\Project\RuView`.
   - System Verification: `python verify` in `c:\Project\RuView`.

---

## 2. Logic Chain

1. **UI Inspection & Translation Strategy**:
   - Observations show `ui/i18n.js` and `dashboard/src/i18n.ts` already implement fallback logic (`ja` -> `en` -> fallback string -> key name).
   - Therefore, localization for M8 does not require reinventing the i18n framework. Instead, M8 should extend `ui/i18n.js` and `dashboard/src/i18n.ts` dictionaries with missing keys, attach `ui/i18n.js` to `ui/observatory.html`, add `data-i18n` attributes, and replace hardcoded strings with `i18n.t(...)` calls.
   - Including friendly Japanese descriptions (`空部屋測定（ベースライン校正）`, `転倒検知アラート`, `バイタル測定（心拍・呼吸）`, `電波変動量（動作強度）`) satisfies user requirements for clarity.

2. **Documentation Synchronization Strategy**:
   - `README.ja.md` is complete in structure but contains technical terms that lack friendly descriptions.
   - Updating `README.ja.md` and key `docs/` files with enriched terminology ensures parity across repository documentation.

3. **Error Pausing Guard Logic**:
   - Standard retry mechanisms exist in `scripts/seed_csi_bridge.py` and `scripts/collect-ground-truth.py`, but lack JST late-night window detection and 1-hour safe pause logic.
   - Creating `python/ruview_error_guard.py` with explicit `timezone(timedelta(hours=9))` time checking provides a clean, testable guard component for M10.

4. **Verification Command Pipeline**:
   - Reviewing `Makefile`, `v2/Cargo.toml`, and `dashboard/package.json` confirms exact execution parameters for Vite, Rust, and Python verification in M11.

---

## 3. Caveats

- **No Code Changes Introduced in M7**: As an Explorer, all findings are read-only investigation results. Implementation work is scoped for Milestones M8, M9, M10, and M11.
- **Browser Execution**: `ui/observatory.html` requires Three.js dependencies loaded via static assets or local server (`python -m http.server 3000 --directory ui`).

---

## 4. Conclusion

Milestone 7 investigation is complete. The codebase inspection has successfully identified all hardcoded UI strings, dictionary extension points, documentation polish items, Error Pausing Guard design parameters, and verification build commands. The project is ready to proceed with Milestones M8, M9, M10, and M11.

---

## 5. Verification Method

To verify the findings of this report:
1. Inspect `ui/observatory.html` lines 30-127 and `ui/observatory/js/hud-controller.js` lines 70-85 to confirm hardcoded English strings.
2. Inspect `dashboard/src/i18n.ts` and `locales/ja.json` to verify dictionary lookup and key structure.
3. Review `README.ja.md` to confirm sections requiring friendly term enrichment.
4. Verify build commands:
   - Dashboard: `cd c:\Project\RuView\dashboard && npx vite build`
   - Rust: `cd c:\Project\RuView\v2 && cargo test --workspace --no-default-features`
   - Python: `cd c:\Project\RuView && pytest`
