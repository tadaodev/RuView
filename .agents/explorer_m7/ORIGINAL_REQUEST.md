## 2026-07-24T15:45:00Z

You are the Explorer for Milestone 7 (Phase 2 Codebase Inspection) of RuView Japanese Localization.
Your working directory is c:\Project\RuView\.agents\explorer_m7.
Read c:\Project\RuView\.agents\orchestrator\PROJECT.md and c:\Project\RuView\.agents\orchestrator\ORIGINAL_REQUEST.md.

Investigate the following in detail:
1. Hardcoded English UI Strings & i18n Dictionaries:
   - Scan files under ui/ (Classic Web UI and Observatory 3D HTML/JS/CSS/Three.js components) and dashboard/ (Vite React/TS components, src/).
   - Identify all hardcoded English strings in UI menus, buttons, settings, alerts, graph axes, modes, error popups, tooltips, dropdowns.
   - Check existing i18n dictionary mechanisms (e.g. dashboard/src/i18n.ts, ui/i18n.js, etc.) and how they handle dictionary switching and fallback.
   - Verify where key required terms (Empty Room, Fall Detect, Vital Signs, CSI Variance, mode explanations) are used and how to translate/enrich them with friendly descriptions.
2. Documentation Status (README.ja.md, docs/):
   - Inspect README.ja.md and all files under docs/.
   - Identify sections needing polish, accuracy improvements, and intuitive Japanese explanations for major features.
3. Error Pausing Guard & Retry Control:
   - Search codebase for error handling, retry control, or agent loop management scripts/modules (e.g., Python agent scripts, automation runners, or error recovery handlers).
   - Propose exact implementation location and structure for Error Pausing Guard: trigger on repeated 'Agent execution terminated due to error.', detect JST 24:00 - 6:00 (late night window), safely pause execution for 3600s (1 hour) before auto-resuming.
4. Verification & Build Commands:
   - Check build commands for Vite Dashboard (npx vite build), Rust test commands (cargo test or similar), and Python test commands (pytest).

Write a comprehensive report to c:\Project\RuView\.agents\explorer_m7\analysis.md and c:\Project\RuView\.agents\explorer_m7\handoff.md, then notify the orchestrator with your findings.
