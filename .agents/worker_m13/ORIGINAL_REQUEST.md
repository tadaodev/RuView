## 2026-07-25T00:02:18Z

You are Developer (Worker M13) for the RuView Japanese Localization and Dashboard Fix Project.

Your working directory is: c:\Project\RuView\.agents\worker_m13
Please create your state files (progress.md, BRIEFING.md, handoff.md) in your working directory.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Input Artifacts to Read First:
- c:\Project\RuView\.agents\explorer_m12\analysis.md
- c:\Project\RuView\.agents\explorer_m12\handoff.md

Your Assigned Tasks:

1. **Fix Lit Component Render Crashes / Blank Screen Issues**:
   - `dashboard/src/components/nv-help.ts`: In `renderFaq()` and `renderShortcuts()`, replace undefined `FAQ` / `SHORTCUTS` with locale-aware selections (`getLocale() === 'ja' ? FAQ_JA : FAQ_EN` and `SHORTCUTS_JA : SHORTCUTS_EN`).
   - `dashboard/src/components/nv-palette.ts`: Import `getLocale` alongside `t` from `'../i18n'`.
   - `dashboard/src/components/nv-app-store.ts`: Import `toast` from `'./nv-toast'`, declare `private _unsubI18n?: () => void;`, and use optional chaining `a.tags?.some(...)`.
   - `dashboard/src/i18n.ts`: Fix Node.js `process` check for browser compatibility (`(globalThis as any).process` or safe guard).

2. **Complete Japanese Localization & Friendly Terms**:
   - `nv-help.ts`: Translate all 5 tabs (Quickstart, Glossary, FAQ, Shortcuts, About) including headers, lead text, search placeholders, and About paragraphs into natural, intuitive Japanese.
   - `nv-settings-drawer.ts`: Translate all setting item descriptions, Help & About groups, and action buttons into natural Japanese.
   - `nv-onboarding.ts`: Polish Step 7 body text in Japanese and update shortcut labels.
   - `nv-palette.ts`: Translate toast notification messages into natural Japanese.
   - `ui/observatory.html` & `ui/i18n.js`: Ensure friendly Japanese terms are used (`empty_room` -> `空部屋測定（ベースライン校正）`, `single_breathing` -> `バイタル測定（心拍・呼吸）`, `fall_event` -> `転倒検知アラート`, `crowd_occupancy` -> `混雑度測定 (4名)`, `csiVariance` -> `電波変動量（動作強度）`).
   - `ui/utils/command-palette.js`: Localize search placeholder to `コマンドの検索・実行... (Ctrl+K / ⌘K)`.

3. **Windows Keyboard Shortcuts & Display Labels**:
   - Add global keydown event listeners in `dashboard/src/components/nv-app.ts` (or `main.ts`) for Windows `Ctrl+R` / Mac `⌘R` (pipeline reset with `e.preventDefault()`) and `Ctrl+,` / `⌘,` (settings drawer toggle with `e.preventDefault()`).
   - Ensure display labels across Onboarding, Help Center, Settings drawer, and Command Palette render Windows/Mac keyboard shortcuts cleanly as `Ctrl+K / ⌘K`, `Ctrl+R / ⌘R`, `Ctrl+, / ⌘,`.

4. **Build & Test Verification**:
   - Pre-pend `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8;` for all terminal commands.
   - Run `npx tsc --noEmit` in `dashboard/` and confirm 0 TypeScript errors.
   - Run `npx vite build` in `dashboard/` and confirm 0 compilation errors.
   - Run `npx vitest run tests/i18n.test.ts` in `dashboard/` and confirm all tests pass.

Document all changes and test outputs in `c:\Project\RuView\.agents\worker_m13\handoff.md` and send a message back to parent orchestrator upon completion.
