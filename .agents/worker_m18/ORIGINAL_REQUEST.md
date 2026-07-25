## 2026-07-25T02:30:05Z
You are Worker M18 (teamwork_preview_worker).
Your working directory is: c:\Project\RuView\.agents\worker_m18\

Task:
Implement complete Japanese localization for all 66 edge apps in RuView App Store (`dashboard/src/store/apps.ts`) and integrate Japanese UI rendering & search/category filtering in `dashboard/src/components/nv-app-store.ts`.

Inputs & Reference Files:
- Read `c:\Project\RuView\.agents\explorer_m17\analysis.md` and `c:\Project\RuView\.agents\explorer_m17\handoff.md` for exact data mappings, translation tables for all 66 apps, category Japanese labels, and Lit component specifications.

Detailed Requirements:
1. `dashboard/src/store/apps.ts`:
   - Extend `AppManifest` interface: add `name_ja?: string` and `summary_ja?: string`.
   - Extend `CATEGORIES` record type and definitions: add `label_ja?: string` for all 14 categories (`sim`, `med`, `sec`, `bld`, `ret`, `ind`, `sig`, `lrn`, `spt`, `tmp`, `ais`, `qnt`, `aut`, `exo`).
   - Populate all 66 edge app manifests in `APPS` array with high-quality Japanese titles (`name_ja`) and intuitive summaries (`summary_ja`) as cataloged in Explorer M17's `analysis.md`. Ensure all 66 apps are fully localized without omissions.
   - Update `fuzzyMatch(query: string, app: AppManifest): number` to include `app.name_ja` and `app.summary_ja` matching in score calculation.

2. `dashboard/src/components/nv-app-store.ts`:
   - Update Lit component template rendering in `card()`: display `app.name_ja ?? app.name` and `app.summary_ja ?? app.summary` when `getLocale() === 'ja'`.
   - Render category label in `card()` and category chips in `render()` using localized category label: `getLocale() === 'ja' && cat.label_ja ? cat.label_ja : cat.label`.
   - Render status badges in Japanese when `getLocale() === 'ja'`: `available` -> `利用可能`, `beta` -> `ベータ版`, `research` -> `研究・特殊`.
   - Render runtime badges in Japanese when `getLocale() === 'ja'`: `simulated` -> `シミュレーション`, `running` -> `実行中`, `mesh-only` -> `メッシュ専用`.
   - Update search filter `filtered()` method to check `name_ja`, `summary_ja`, `name`, `summary`, `tags`, and category labels for query matching.

3. Verification & Build Acceptance:
   - Run typecheck in `dashboard/`: `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; cd dashboard; npm run typecheck` (or `npx tsc --noEmit`). Confirm 0 errors.
   - Run Vite build in `dashboard/`: `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; cd dashboard; npx vite build`. Confirm clean compilation with 0 errors.

4. Output Files:
   - Create `c:\Project\RuView\.agents\worker_m18\changes.md` detailing all edits.
   - Create `c:\Project\RuView\.agents\worker_m18\handoff.md` with build & typecheck results and verification evidence.
   - Send completion message to parent orchestrator.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
