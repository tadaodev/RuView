## 2026-07-23T08:35:27Z
You are the Developer (Worker) agent for Milestone 4 Remediation (M4 Retry): R2 Documentation & README Complete 1:1 Localization.

Your assigned working directory is: c:\Project\RuView\.agents\worker_m4_retry (please write your handoff report here).

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or summarize content. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

The previous Milestone 4 attempt was VETOED due to content truncation and stubbing. You must perform complete, 1:1, non-truncated Japanese localization for all target documents:

1. `CLAUDE.ja.md`:
   - Expand `CLAUDE.ja.md` from 130 lines to complete ~400+ lines matching `CLAUDE.md`.
   - Restore and fully translate ALL 21 missing sections: Cross-Viewpoint Fusion, RuVector v2.0.4 Integration, Architecture Decisions (ADRs list), compact board thermal warnings, Firmware Release Process (7 steps), Crate Publishing Order (12 crates), Validation & Witness Verification (ADR-028), Branch details, Behavioral Rules (8 rules), File Organization (10 dirs), Project Architecture & Config, Pre-Merge Checklist (full 12 items), Build & Test npm block, Security Rules (5 rules), Concurrency rules (6 rules), Swarm Orchestration & 3-Tier Routing (ADR-026), Swarm Execution Rules, V3 CLI Commands (table & examples), Available Agents (60+ Types), Memory Commands Reference, and Quick Setup / Support.

2. `README.ja.md`:
   - Expand `README.ja.md` from 254 lines to complete ~650+ lines matching `README.md`.
   - Edge Module Catalog: Translate the complete 171-line catalog covering 105 modules across ALL 11 category tables (Health, Security, Building, Retail, Industrial, Research, AI, Swarm, Signal, Network, Developer). DO NOT summarize into 2 lines!
   - Self-Learning WiFi AI (ADR-024): Restore the complete 79-line section (ASCII architecture diagram, 4-step quickstart bash block, Training Modes table, Fingerprint Index Types table, Model Size table).
   - Feature Matrix: Restore missing feature rows (`Camera-free pre-training`, `Camera-supervised fine-tune`, `Multi-frequency mesh`, `3D point cloud fusion`).
   - Hugging Face section: Restore "What works today vs pending", "Known gap", "Quantization choices", Results & proof table (8 rows), and verify.py bash block.
   - Hardware Options: Restore Option 2b ESP32-C6 boot extras, Option 4 Python PyPI details, and Qualcomm/Vendor beta details.
   - Use Cases & Applications: Restore all 4 detailed tables inside `<details>` tags.
   - Creator Affiliate Program: Restore section.

3. `docs/RELEASE-streaming-engine-v0.3.0.ja.md`:
   - Restore `## 受入検証済み項目 (Validated)` section (4 acceptance test scenarios for ADR-137, ADR-139, ADR-140, ADR-142).
   - Restore `## ステータス（誠実な開示）(Status honest)` section (built vs integration glue components and GitHub issues #840–#850).

4. Ensure bidirectional language navigation headers (`[English | 日本語]`) remain intact at the top of all document pairs (`README.md`/`README.ja.md`, `CLAUDE.md`/`CLAUDE.ja.md`, `PROOF.md`/`PROOF.ja.md`, `docs/TROUBLESHOOTING.md`/`docs/TROUBLESHOOTING.ja.md`, `docs/RELEASE-streaming-engine-v0.3.0.md`/`docs/RELEASE-streaming-engine-v0.3.0.ja.md`).

Document all restored sections, line counts, and verification in `c:\Project\RuView\.agents\worker_m4_retry\handoff.md`. Send a completion message when done.
