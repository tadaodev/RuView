# Milestone 7 Analysis Report: Phase 2 Codebase Inspection & Baseline Audit

**Executive Summary:**
Milestone 7 delivers a comprehensive codebase inspection covering 4 primary areas for RuView Japanese Localization:
1. UI hardcoded English strings and i18n dictionary mechanisms in Classic Web UI (`ui/`), Observatory 3D UI (`ui/observatory.html`), and Vite Dashboard (`dashboard/src/`).
2. Documentation status and polish scope in `README.ja.md` and `docs/`.
3. Error Pausing Guard specification and exact file structure for JST 24:00-6:00 safe pause.
4. Official build and test commands for Vite Dashboard, Rust workspace, Python suite, and system verification.

---

## Section 1: Hardcoded English UI Strings & i18n Dictionaries

### 1.1 Existing i18n Architecture Overview
The RuView UI layer relies on two distinct i18n implementations:

1. **Classic Web UI & Observatory (`ui/i18n.js`)**:
   - Class: `I18n` in `ui/i18n.js` (lines 179-335).
   - Locale detection: `detectLocale()` checks `RUVIEW_LANG` environment variable or `navigator.language`. Defaults to `ja`.
   - Fallback hierarchy: Selected locale (`ja`) -> English (`en`) -> `fallback` parameter -> translation key.
   - Dynamic binding: Updates DOM elements with `data-i18n`, `data-i18n-placeholder`, and `data-i18n-aria`.

2. **Vite React/TS Dashboard (`dashboard/src/i18n.ts`)**:
   - Class: `I18nManager` / function `t(key, fallback, params)` (lines 386-456).
   - Lookup mechanism: `lookupKey()` handles dot-notation nested dictionary objects (`enDict`, `jaDict`).
   - Event emitter: Dispatches `locale-changed` CustomEvents on language change.
   - External Master Sync: Aligned with master JSON dictionaries in `locales/en.json` and `locales/ja.json`.

### 1.2 Hardcoded English Strings Inventory

#### A. Classic Web UI (`ui/index.html` & `ui/components/*.js`)
- `ui/index.html`:
  - Line 442: `<span class="feature-tag">Fall Detection</span>`
  - Line 462: `Monitor patients in hospitals and care facilities...`
  - Hardcoded strings in tab titles, metric card labels, modal popups, and setting dropdowns.
- `ui/components/SensingTab.js`:
  - Line 73: `<label>Variance</label>`
- `ui/components/LiveDemoTab.js`:
  - Line 1426: `(motion power, breathing rate, variance).`

#### B. Observatory 3D UI (`ui/observatory.html` & `ui/observatory/js/*.js`)
- `ui/observatory.html`:
  - Dropdown Scenario Options (lines 30-43, 270-278):
    - `Empty Room` -> Needs friendly Japanese: `空部屋測定（ベースライン校正）`
    - `Vital Signs` -> Needs friendly Japanese: `バイタル測定（心拍・呼吸）`
    - `Multi-Person` -> `複数人トラッキング`
    - `Fall Detect` -> Needs friendly Japanese: `転倒検知アラート`
  - Left & Right HUD Panels (lines 52-105):
    - Line 52: `<div class="panel-header">Vital Signs</div>`
    - Line 56: `<div class="vital-label">Heart Rate</div>`
    - Line 64: `<div class="vital-label">Respiration</div>`
    - Line 72: `<div class="vital-label">Confidence</div>`
    - Line 81: `<div class="panel-header">WiFi Signal</div>`
    - Line 87: `<span class="signal-label">Variance</span>`
    - Line 103: `<span id="presence-label">ABSENT</span>`
    - Line 105: `<div id="fall-alert">FALL DETECTED</div>`
  - Bottom Bar Capabilities & Shortcuts (lines 112-127):
    - `Human Pose Estimation`, `Vital Sign Monitoring`, `Presence Detection`
    - `[A] Orbit`, `[D] Scenario`, `[F] FPS`, `[S] Settings`, `[Space] Pause`
- `ui/observatory/js/hud-controller.js`:
  - Scenario description map (lines 70-85):
    - `empty_room`: `'Measuring baseline RF environment with no human presence.'`
    - `single_breathing`: `'Detecting vital signs through WiFi signal micro-variations.'`
    - `fall_event`: `'Monitoring sudden elevation changes and post-fall stillness.'`
    - `crowd_occupancy`: `'Estimating room occupancy count from aggregate CSI variance.'`
  - Alert messages and notification strings in JS code.

#### C. Vite React/TS Dashboard (`dashboard/src/components/*.ts`)
- Components needing full `t(...)` wrapper calls:
  - `nv-ghost-murmur.ts`: CIA NV-diamond program research spec text.
  - `nv-onboarding.ts`: 10-step interactive tour tooltips.
  - `nv-scene.ts` & `nv-palette.ts`: Preset titles and drag-and-drop tooltips.

### 1.3 Key Required Friendly Terminology & Enriched Descriptions

| English Term | Friendly Japanese Translation | Enriched User Description |
|--------------|-------------------------------|---------------------------|
| `Empty Room` | **空部屋測定（ベースライン校正）** | 人間が存在しない状態での電波環境の基準値（ベースライン）を自動計測・校正します。 |
| `Fall Detect` / `Fall Detection` | **転倒検知アラート** | 急激な高度変化および転倒後の静止状態を検知し、即座にアラートを発報します。 |
| `Vital Signs` | **バイタル測定（心拍・呼吸）** | WiFi信号の微少な位相・振幅変化から呼吸数および心拍数を非接触で推測します。 |
| `CSI Variance` / `Variance` | **電波変動量（動作強度）** | Channel State Information (CSI) の振幅分散から室内における身体運動の強さを数値化します。 |

---

## Section 2: Documentation Status (`README.ja.md`, `docs/`)

### 2.1 `README.ja.md` Audit
- Total Lines: 649 lines (62 KB).
- Phrasing & Technical Polish Needed for Milestone 9:
  1. Core Concepts: Integrate friendly Japanese terms (`空部屋測定（ベースライン校正）`, `転倒検知アラート`, `バイタル測定（心拍・呼吸）`, `電波変動量（動作強度）`) into feature descriptions.
  2. Setup & Flashing Instructions: Standardize CLI examples (`esptool`, `provision.py`, `idf.py`) with intuitive Japanese step-by-step guidance.
  3. Edge Module Table: Ensure all 105 edge module names and descriptions are clearly formatted in natural Japanese.

### 2.2 `docs/` Directory Audit
- Key documentation files to polish and harmonize in Milestone 9:
  - `docs/TROUBLESHOOTING.ja.md`: Align troubleshooting steps with updated system diagnostics.
  - `docs/RELEASE-streaming-engine-v0.3.0.ja.md`: Release notes in intuitive Japanese.
  - `docs/edge-modules/*.md`: Standardize terminology across `building.md`, `exotic.md`, `adaptive-learning.md`, `autonomous.md`.
  - `docs/integrations/home-assistant.md`: Home Assistant setup instructions.

---

## Section 3: Error Pausing Guard & Retry Control

### 3.1 Design Specification
Target requirement: If system errors occur repeatedly (`"Agent execution terminated due to error."`), pause the process. If occurring during JST 24:00 - 6:00 (late-night window), pause safely for 3600 seconds (1 hour) before auto-resuming.

### 3.2 Target Location & Module Structure
- Primary Module File: `python/ruview_error_guard.py`
- Runner Entrypoint Script: `scripts/run_with_error_guard.py`
- Test File: `python/tests/test_error_guard.py`

### 3.3 Core Algorithm & Logic Diagram
```python
import time
from datetime import datetime, timezone, timedelta

class ErrorPausingGuard:
    def __init__(self, failure_threshold=3, pause_duration_sec=3600):
        self.failure_threshold = failure_threshold
        self.pause_duration_sec = pause_duration_sec
        self.consecutive_failures = 0

    def is_late_night_jst(self) -> bool:
        jst = timezone(timedelta(hours=9))
        now_jst = datetime.now(jst)
        return 0 <= now_jst.hour < 6

    def record_error(self, error_message: str) -> bool:
        if "Agent execution terminated due to error." in error_message:
            self.consecutive_failures += 1
            if self.consecutive_failures >= self.failure_threshold:
                if self.is_late_night_jst():
                    print(f"[ErrorPausingGuard] Late night (JST 24:00-6:00) error burst ({self.consecutive_failures} failures). Pausing for {self.pause_duration_sec}s...")
                    time.sleep(self.pause_duration_sec)
                    self.consecutive_failures = 0
                    return True
                else:
                    print(f"[ErrorPausingGuard] Error burst detected. Retrying with short delay...")
                    time.sleep(60)
                    return False
        else:
            self.consecutive_failures = 0
        return False
```

---

## Section 4: Verification & Build Commands

| Target | Executable Command | Workspace Directory |
|--------|-------------------|---------------------|
| Vite Dashboard Build | `npx vite build` (or `npm run build`) | `c:\Project\RuView\dashboard` |
| Rust Workspace Tests | `cargo test --workspace --no-default-features` | `c:\Project\RuView\v2` |
| Python Test Suite | `pytest` (or `python -m pytest python/tests`) | `c:\Project\RuView` |
| System Verification Script | `python verify` | `c:\Project\RuView` |

---

## Next Steps for Orchestrator
1. Assign Milestone 8 (Web UI Full Japanese Localization & Friendly Terms) to Implementer.
2. Assign Milestone 9 (Major Documentation Polish) to Implementer.
3. Assign Milestone 10 (Error Pausing Guard & Retry Control) to Implementer.
4. Assign Milestone 11 (Final 3-Role Verification & Forensic Audit) to Tester/Auditor.
