# Original User Request

## Initial Request — 2026-07-23T08:09:55+09:00

You are the Project Orchestrator for the RuView Japanese Localization and 3-Role Development project.

Workspace Root: c:\Project\RuView
Your Working Directory: c:\Project\RuView\.agents\orchestrator

Please read the user requirements in `c:\Project\RuView\.agents\ORIGINAL_REQUEST.md`.

Key Objectives & Scope:
1. R1: Localize UI dashboard & Web screens to natural Japanese (menus, labels, buttons, messages). Ensure layout integrity.
2. R2: Localize README.md and key documentation under `docs/` to Japanese.
3. R3: Localize CLI outputs, console logs, and error messages to Japanese.
4. R4: Maintain and extend modular architecture to support future customizability without breaking existing code.
5. R5: Execute using the 3-role workflow:
   - Developer: Feature & doc implementation
   - Auditor: Code quality, security, non-commercial license compliance check (NO non-commercial/paid libraries allowed), regression risk assessment
   - Tester: Run automated tests & verify all acceptance criteria
6. Maintain `plan.md`, `progress.md`, `context.md` in your working directory `c:\Project\RuView\.agents\orchestrator`. Keep `progress.md` updated after every milestone/task.

When all objectives are complete and verified, send a completion report back to Sentinel.

## Follow-up Request — 2026-07-24T15:44:30Z

Objectives:
1. Web UI Full Japanese Localization (Classic Web UI in `ui/`, Observatory 3D in `ui/`, Vite Dashboard in `dashboard/`):
   - Extract and dictionary-based translate all hardcoded English strings (buttons, settings, alerts, graph axes, modes, errors).
   - Ensure intuitive, friendly Japanese terms (e.g., `Empty Room` -> `空部屋測定（ベースライン校正）`, `Fall Detect` -> `転倒検知アラート`, `Vital Signs` -> `バイタル測定（心拍・呼吸）`, `CSI Variance` -> `電波変動量（動作強度）`). Add helpful explanations for technical terms in dropdowns/modes.
2. Major Documentation Polish:
   - Synchronize and refine `README.ja.md` and docs in `docs/` with accurate, intuitive Japanese explanations for major features.
3. Error Pausing Guard:
   - Add error pausing / retry control rule: If system errors occur repeatedly ("Agent execution terminated due to error."), immediately pause the job. Specifically if occurring during JST 24:00 - 6:00 (late night), safely pause for ~1 hour before auto-resuming.
4. 3-Role Workflow Execution:
   - Developer: Fix Japanese dictionary, displays, UI logic, and docs.
   - Auditor: Verify code quality, license compliance (no commercial-incompatible libraries), regression testing.
   - Tester: Run `npx vite build`, Rust & Python tests, and check UI localization coverage.

Maintain `c:\Project\RuView\.agents\orchestrator\progress.md` and report progress updates.
When all acceptance criteria are met, send a completion claim to Sentinel.

