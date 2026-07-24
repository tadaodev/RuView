# Milestone 8 Code Changes Summary

## Overview
Milestone 8 achieves full Japanese localization & friendly terms across Classic Web UI (`ui/`), Observatory 3D (`ui/observatory.html`), and Vite Dashboard (`dashboard/src/`).

## Modified Files Summary

### 1. `ui/i18n.js`
- Extended dictionary with all missing keys for Classic UI & Observatory 3D (`observatory.title`, `observatory.scenario.*`, `observatory.desc.*`, `observatory.vitals.*`, `observatory.signal.*`, `observatory.presence.*`, `observatory.cap.*`, `observatory.hint.*`, `observatory.settings.*`).
- Mapped exact friendly Japanese terms:
  - `Empty Room` -> `空部屋測定（ベースライン校正）`
  - `Fall Detect` -> `転倒検知アラート`
  - `Vital Signs` -> `バイタル測定（心拍・呼吸）`
  - `CSI Variance` -> `電波変動量（動作強度）`
- Added enriched technical explanations to dictionary definitions for all sensing scenarios (`observatory.desc.*`).
- Added static `I18n.t(key, fallback, params)` method and global `window.I18n` and `window.i18n` bindings.

### 2. `ui/observatory.html`
- Included `<script type="module" src="i18n.js"></script>`.
- Added `data-i18n` attributes to brand tagline, quick-select scenario options, HUD panels (vitals, signal, presence), capabilities bar, keyboard hints, settings overlay tabs, range label spans, options dropdown, and action buttons.

### 3. `ui/observatory/js/hud-controller.js`
- Imported `I18n` and `i18n` from `../../i18n.js`.
- Updated `_updateScenarioDescription(scenarioKey)` to dynamically look up localized descriptions using `I18n.t(descKey, fallback)`.
- Updated `updateSourceBadge(...)` and `updateHUD(...)` to dynamically translate presence indicators (`ACTIVE`, `PRESENT`, `ABSENT`), fall alert (`FALL DETECTED`), and data source badges (`LIVE`, `DEMO`) using `I18n.t(...)`.
- Added locale change listener (`i18n.onLocaleChange(...)`) to trigger `i18n.applyTranslations()` and scenario description update on locale switch.

### 4. `ui/index.html`
- Added `data-i18n` attributes to navigation links (`nav.poseFusion`, `nav.observatory`), hero description (`dashboard.description`), status panel component titles (`status.apiServer`, `status.hardware`, `status.inference`, `status.streaming`, `status.dataSource`), live statistics labels (`dashboard.activePersons`, `dashboard.avgConfidence`, `dashboard.totalDetections`, `dashboard.zoneOccupancy`), key benefit cards (`benefit.throughWalls`, `benefit.privacy`, `benefit.realtime`, `benefit.lowCost` and descriptions), and system stat labels (`stat.bodyRegions`, `stat.samplingRate`, `stat.accuracy`, `stat.hardwareCost`).

### 5. `dashboard/src/i18n.ts`
- Extended `enDict` and `jaDict` dictionaries with `terms` (`emptyRoom`, `fallDetect`, `vitalSigns`, `csiVariance`), `ghostMurmur`, `onboarding`, `palette`, and `scene` keys.

### 6. `dashboard/src/components/nv-ghost-murmur.ts`
- Imported `t` from `../i18n`.
- Replaced hardcoded English section headings, control labels, and trial sandbox labels with `t(...)` calls.

### 7. `dashboard/src/components/nv-onboarding.ts`
- Imported `t` from `../i18n`.
- Replaced hardcoded tour footer button strings (`← Back`, `Skip`, `Done`, `Next →`) with `t(...)` calls.

### 8. `dashboard/src/components/nv-palette.ts`
- Imported `t` from `../i18n`.
- Converted `cmds` array to dynamic getter returning `t(...)` localized labels for all command items.
- Replaced search input placeholder with `t('palette.placeholder', 'Type a command…')`.

### 9. `dashboard/src/components/nv-scene.ts`
- Imported `t` from `../i18n`.
- Replaced toolbar and sim control button `title` attributes with `t(...)` calls.

### 10. `dashboard/tests/i18n.test.ts`
- Added test case asserting exact Japanese translations for friendly terms (`Empty Room` -> `空部屋測定（ベースライン校正）`, `Fall Detect` -> `転倒検知アラート`, `Vital Signs` -> `バイタル測定（心拍・呼吸）`, `CSI Variance` -> `電波変動量（動作強度）`).
