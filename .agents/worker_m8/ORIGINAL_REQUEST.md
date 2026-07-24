## 2026-07-24T15:49:29Z
You are the Worker for Milestone 8 (R1 Web UI Full Japanese Localization & Friendly Terms).
Your working directory is c:\Project\RuView\.agents\worker_m8.
Read c:\Project\RuView\.agents\explorer_m7\analysis.md and c:\Project\RuView\.agents\explorer_m7\handoff.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks:
1. Update `ui/i18n.js`:
   - Extend dictionary with all missing keys for Classic UI & Observatory 3D.
   - Map exact friendly Japanese terms:
     - `Empty Room` -> `空部屋測定（ベースライン校正）`
     - `Fall Detect` -> `転倒検知アラート`
     - `Vital Signs` -> `バイタル測定（心拍・呼吸）`
     - `CSI Variance` -> `電波変動量（動作強度）`
   - Add helpful explanations to technical terms/modes in dictionary definitions.
2. Update `ui/observatory.html` & `ui/observatory/js/hud-controller.js`:
   - Include script `ui/i18n.js` in `ui/observatory.html`.
   - Add `data-i18n` attributes to scenario dropdown options, HUD panels, mode buttons, and status displays.
   - Update `hud-controller.js` to use `I18n.t(...)` for scenario descriptions and dynamically updated HUD text.
3. Update `ui/index.html` & `ui/app.js`:
   - Verify all hardcoded UI strings are localized with `data-i18n` / `I18n.t(...)`.
4. Update Vite Dashboard (`dashboard/src/`):
   - Extend `dashboard/src/i18n.ts` dictionary (`enDict` and `jaDict`) with full UI string keys and friendly terms.
   - Update `dashboard/src/components/nv-ghost-murmur.ts`, `nv-onboarding.ts`, `nv-palette.ts`, and `nv-scene.ts` to replace hardcoded English strings with `t(...)` calls.
5. Verification:
   - Run `cd dashboard && npx vite build` (with PowerShell UTF-8 encoding). Ensure build succeeds with zero errors.
6. Handoff:
   - Write details to `c:\Project\RuView\.agents\worker_m8\changes.md` and `c:\Project\RuView\.agents\worker_m8\handoff.md`.
   - Send completion message to orchestrator with build results.
