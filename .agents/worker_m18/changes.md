# RuView App Store Japanese Localization Changes Report

**Worker**: Worker M18 (`teamwork_preview_worker`)  
**Date**: 2026-07-25  
**Target Files**:
- `dashboard/src/store/apps.ts`
- `dashboard/src/components/nv-app-store.ts`

---

## 1. Summary of Changes

### 1.1 `dashboard/src/store/apps.ts`
1. **`AppManifest` Interface Extension**:
   - Added optional `name_ja?: string` for Japanese titles.
   - Added optional `summary_ja?: string` for Japanese summaries.
2. **`CATEGORIES` Registry Extension**:
   - Added optional `label_ja?: string` property to category definitions.
   - Populated `label_ja` for all 14 categories:
     - `sim`: 'シミュレータ'
     - `med`: '医療'
     - `sec`: '防犯・警備'
     - `bld`: 'スマートビル'
     - `ret`: '店舗・商業'
     - `ind`: '産業'
     - `sig`: '信号処理'
     - `lrn`: 'オンライン学習'
     - `spt`: '空間・グラフ'
     - `tmp`: '時相ロジック'
     - `ais`: 'AIセーフティ'
     - `qnt`: '量子信号'
     - `aut`: '自律走行・メッシュ'
     - `exo`: '研究・特殊'
3. **Full 66 Edge App Localization (`APPS`)**:
   - Complete Japanese title (`name_ja`) and Japanese description (`summary_ja`) added for all 66 apps in the `APPS` registry without omission.
4. **`fuzzyMatch` Function Update**:
   - Extended `fuzzyMatch` calculation to check `app.name_ja` (+3 score) and `app.summary_ja` (+1 score) when performing query matching.

### 1.2 `dashboard/src/components/nv-app-store.ts`
1. **Locale Import & State Subscription**:
   - Imported `getLocale` from `../i18n`.
   - Connected `i18n.onLocaleChange` to trigger Lit component re-render when switching between `'en'` and `'ja'`.
2. **Lit Component Rendering in `card()`**:
   - Title rendering: `app.name_ja ?? app.name` when `getLocale() === 'ja'`.
   - Summary rendering: `app.summary_ja ?? app.summary` when `getLocale() === 'ja'`.
   - Category badge: localized `cat.label_ja` when `getLocale() === 'ja'`.
   - Status badges:
     - `available` -> `利用可能`
     - `beta` -> `ベータ版`
     - `research` -> `研究・特殊`
   - Runtime badges:
     - `running` -> `実行中`
     - `simulated` -> `シミュレーション`
     - `mesh-only` -> `メッシュ専用`
3. **Category Chips Rendering in `render()`**:
   - Updated chip labels to use `getLocale() === 'ja' && cat.label_ja ? cat.label_ja : cat.label`.
   - Updated status filter chips to render in Japanese (`すべて`, `利用可能`, `ベータ版`, `研究・特殊`).
4. **Search Filter Logic (`filtered()`)**:
   - Extended `filtered()` matching to include `name_ja`, `summary_ja`, and category `label_ja` alongside English fields and tags.

---

## 2. File Verification & Detailed Edits

### `dashboard/src/store/apps.ts`
- `AppManifest` fields added.
- All 66 entries in `APPS` populated with exact Japanese terms from `explorer_m17` analysis.
- `CATEGORIES` updated with 14 Japanese category labels.
- `fuzzyMatch` updated with `name_ja` and `summary_ja` checks.

### `dashboard/src/components/nv-app-store.ts`
- `getLocale()` incorporated.
- Localized badge dictionaries (`statusLabel`, `runtimeLabel`) applied.
- Search query matching supports multi-lingual filtering across both English and Japanese fields.
