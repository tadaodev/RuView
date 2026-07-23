# Context & Decision Log - RuView Japanese Localization & 3-Role Development

## Key Decisions
1. Orchestrator operates as DISPATCH-ONLY. All analysis, implementation, auditing, and testing will be delegated to subagents (`teamwork_preview_explorer`, `teamwork_preview_worker`, `teamwork_preview_reviewer`, `teamwork_preview_critic`, `teamwork_preview_challenger`, `teamwork_preview_auditor`).
2. Strict non-commercial / paid license policy: only open-source commercial-friendly licenses allowed (MIT, Apache-2.0, BSD, etc.).
3. Structured 6-milestone approach covering R1 through R5.

## Working Directories Protocol
- Orchestrator: `c:\Project\RuView\.agents\orchestrator\`
- Subagent directories will be created under `c:\Project\RuView\.agents\<type>_<milestone>/`
