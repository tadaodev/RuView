## 2026-07-25T07:00:13Z
You are Explorer M12 for the RuView Japanese Localization and Dashboard Fix Project.

Your working directory is: c:\Project\RuView\.agents\explorer_m12
Please create your state files (progress.md, BRIEFING.md, analysis.md, handoff.md) in your working directory.

Scope & Task Objectives:
1. Inspect Lit components in `dashboard/` (`nv-app`, `nv-help`, `nv-palette`, `nv-onboarding`, `nv-settings-drawer`, etc.) and all component imports/references for:
   - Missing/invalid imports, syntax errors, circular dependencies, or undefined variables that cause blank screen issues during rendering or compilation.
   - Any untranslated English strings or non-friendly terms in Onboarding ("Welcome to nvsim"), Help Center (all 5 tabs), Settings drawer, Command palette, and Observatory 3D select boxes & dialogs.
2. Audit shortcut handlers and keyboard event listeners in `dashboard/` and `ui/`:
   - Check if Windows shortcuts `Ctrl+K`, `Ctrl+R`, `Ctrl+,` are captured and handled identically to Mac `⌘K`, `⌘R`, `⌘,`.
   - Check UI display text/labels for keybindings across components to ensure they render as `Ctrl+K / ⌘K` or platform-aware equivalents.
3. Test build status by executing `npx vite build` in `dashboard/` (remember terminal UTF-8 rule: `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8;`) to identify any compilation errors or warnings.
4. Deliver a comprehensive analysis in `analysis.md` and `handoff.md` in `c:\Project\RuView\.agents\explorer_m12\` containing:
   - Detailed breakdown of Lit component rendering issues / blank screen root causes.
   - Exact list of files and lines for Onboarding, Help Center (5 tabs), Settings drawer, Command palette, Observatory 3D dialogs requiring localization/friendly translation.
   - Exact locations where keyboard event handling and UI labels need Windows `Ctrl+K / ⌘K` updates.
   - Clear recommendations for Developer (Worker M13) to implement surgical fixes.

Mandatory Terminal UTF-8 Rule:
Before executing any PowerShell commands, pre-pend `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8;`.

Send a completion message back to parent orchestrator when `handoff.md` is complete.
