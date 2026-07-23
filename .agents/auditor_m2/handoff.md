# Forensic Audit Report — Milestone 2: R4 i18n Architecture & Scapy License Isolation

**Work Product**: Milestone 2 i18n Architecture & Scapy License Isolation  
**Profile**: General Project  
**Verdict**: **CLEAN**

---

## 1. Observation

Direct file inspection was conducted on all M2 target files:

1. `locales/en.json` (132 lines) & `locales/ja.json` (132 lines):
   - Key structures are 1:1 aligned across both files.
   - Contains structured domains (`ui`, `cli`, `log`, `error`) and direct shortcut keys (`nav.*`, `dashboard.*`, `status.*`, `metrics.*`, `action.*`, `conn.*`, `misc.*`).
   - Format placeholders (`{host}`, `{port}`, `{path}`, `{reason}`, `{frame_id}`, `{details}`, `{device_id}`, `{error}`) match across English and Japanese files.

2. `dashboard/src/i18n.ts` & `dashboard/tests/i18n.test.ts`:
   - `i18n.ts` defines `SupportedLocale`, `TranslationDictionary`, embedded default dictionaries (`enDict`, `jaDict`), `detectDefaultLocale()`, and `I18nManager` class extending `EventTarget`.
   - Key lookup logic (`lookupKey`) supports both flat keys and nested dot-separated path resolution (`parts = key.split('.')`).
   - `t()` method handles parameter substitution (`{param}`) via RegExp replacement.
   - `dashboard/tests/i18n.test.ts` contains Vitest tests covering locale detection, nested key translation, fallback strings, missing key behavior, parameter interpolation, and event listener notification/unsubscription.

3. `ui/i18n.js` & `ui/utils/i18n.js`:
   - `ui/i18n.js` implements a browser-compatible vanilla JS `I18n` class with single-source translation tables for `en` and `ja`.
   - `applyTranslations()` handles DOM element translation via `[data-i18n]`, `[data-i18n-placeholder]`, and `[data-i18n-aria]`.
   - `ui/utils/i18n.js` re-exports `i18n` and `I18n` for backward compatibility with `ui/app.js`.

4. `python/wifi_densepose/i18n.py` & `python/tests/test_i18n.py`:
   - `python/wifi_densepose/i18n.py` implements Python `I18n` manager with `DEFAULT_EN` and `DEFAULT_JA` fallback dicts.
   - Includes automatic directory discovery (`_find_locales_dir()`), dot-notation key lookup (`_lookup()`), fallback chain (`active locale -> en -> fallback -> key name`), and keyword argument formatting.
   - `python/tests/test_i18n.py` tests default locale, Japanese switching, placeholder formatting, fallback mechanics, and dynamic file loading via `tmp_path`.

5. `v2/crates/wifi-densepose-core/src/i18n.rs` & `v2/crates/wifi-densepose-core/src/lib.rs`:
   - `i18n.rs` embeds `locales/en.json` and `locales/ja.json` at compile-time via `include_str!`.
   - `std` environment uses `OnceLock<Option<serde_json::Value>>` for lazy JSON parsing.
   - `t_with_fallback`, `t`, and `t_format` perform key lookup and placeholder substitution.
   - Unit tests (`test_locale_parsing`, `test_translation_lookup`, `test_translation_fallback`, `test_translation_formatting`) verify core Rust i18n logic.
   - `v2/crates/wifi-densepose-core/src/lib.rs` re-exports `pub mod i18n;` and public symbols (`t`, `t_format`, `t_with_fallback`, `Locale`).

6. `pyproject.toml` (Scapy License Isolation):
   - `dependencies` array (lines 44–117) contains core MIT-compatible dependencies (`fastapi`, `torch`, `numpy`, `scipy`, etc.) with **zero references to GPL-licensed `scapy`**.
   - `scapy` is explicitly isolated under `[project.optional-dependencies]` (line 120):
     ```toml
     [project.optional-dependencies]
     scapy = [
         "scapy>=2.5.0",
     ]
     ```
   - No core module in `python/wifi_densepose/` performs mandatory imports of `scapy`.

---

## 2. Logic Chain

1. **Facade & Hardcode Analysis**:
   - Every i18n implementation (TS, JS, Python, Rust) features full key lookup logic (iterating dot-separated keys, checking dictionary bounds) and parameter string formatting.
   - None of the translation functions return hardcoded mock constants.
   - Test suites independently invoke the functions and test dynamic behavior (such as custom directory loading in `test_i18n_locales_dir_loading`).

2. **Scapy License Isolation Analysis**:
   - Scapy is dual/GPL licensed. Including it in main `dependencies` would create license contamination concerns for MIT distributors.
   - Moving `scapy` to `[project.optional-dependencies]` ensures the core package remains pure MIT without mandatory GPL dependencies.
   - Core package initialization (`wifi_densepose/__init__.py`) imports PyO3 native bindings and core types without importing `scapy`.

3. **Overall Integrity Assessment**:
   - No hardcoded test results, facade implementations, pre-populated fake test logs, or self-certifying tests were detected.
   - All M2 implementation requirements are met authentically.

---

## 3. Caveats

- Command execution was limited by environment restrictions (`run_command` user confirmation requirement timed out). Static code inspection and logic verification were conducted across all files.

---

## 4. Conclusion

**Verdict: CLEAN**

Milestone 2 changes represent genuine, high-integrity implementations of the unified i18n architecture across TypeScript, JavaScript, Python, and Rust, as well as complete license isolation for Scapy.

---

## 5. Verification Method

To re-verify this verdict independently:

1. **Python i18n & Scapy Check**:
   ```bash
   pytest python/tests/test_i18n.py
   pip show wifi-densepose | grep scapy # Should show scapy is not required by default
   ```
2. **Dashboard i18n Check**:
   ```bash
   cd dashboard && npm test tests/i18n.test.ts
   ```
3. **Rust i18n Check**:
   ```bash
   cargo test --manifest-path v2/crates/wifi-densepose-core/Cargo.toml i18n
   ```
