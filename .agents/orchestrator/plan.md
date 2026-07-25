# Implementation Plan - RuView App Store 66 Edge Apps Japanese Localization & Build Acceptance

## Objectives
1. R1. App Store Edge Apps 66-type Japanese Data Definition (`name_ja`, `summary_ja`, category Japanese mapping in `dashboard/src/store/apps.ts`).
2. R2. UI Rendering & Filtering Japanese Support (`locale === 'ja'` preferential rendering of `name_ja`/`summary_ja`/`label_ja`, search filter & category chips adjustment in `dashboard/src/components/nv-app-store.ts`).
3. R3. Build Acceptance Verification (`npx tsc --noEmit` and `npx vite build` clean pass with zero errors in `dashboard/`).
4. R4. 3-Role Verification & Forensic Integrity Audit (Developer -> Auditor/Tester -> Forensic Auditor CLEAN gate).

## Milestones & Execution Steps
- **M17: Phase 4 Baseline Exploration & App Store Inspection** (Completed)
  - Detailed audit of all 66 edge app manifests in `dashboard/src/store/apps.ts`.
  - Schema extension proposal (`name_ja`, `summary_ja`, `label_ja`) and full Japanese translation catalog generated in `explorer_m17/analysis.md`.
- **M18: R1 & R2 App Store 66 Edge Apps Japanese Data & UI Integration** (Completed)
  - Worker updated `dashboard/src/store/apps.ts` with all 66 Japanese titles (`name_ja`), summaries (`summary_ja`), and 14 category Japanese labels (`label_ja`).
  - Worker updated `dashboard/src/components/nv-app-store.ts` for locale-aware title/summary/category display, status labels, and full English/Japanese search filtering (`filtered()`, `fuzzyMatch()`).
  - Worker executed `npm run typecheck` (`tsc --noEmit`) and `npx vite build` with 0 errors.
- **M19: R3 System Quality Review & Vite Build Verification** (Completed - APPROVED / PASS)
  - Reviewer M19 APPROVED: 100% translation coverage across 66 apps, Lit component layout integrity, 0 non-commercial license violations.
  - Challenger M19 PASS: `npx tsc --noEmit` (0 errors), `npx vite build` (exit code 0), `vitest run tests/i18n.test.ts` (8/8 passed).
- **M20: R4 Final Forensic Integrity Audit** (Completed - CLEAN)
  - Forensic Auditor M20 CLEAN: Empirical static and execution audit confirmed 0 hardcoded stubs, 0 facade implementations, 100% genuine Japanese data & reactive UI implementation.
