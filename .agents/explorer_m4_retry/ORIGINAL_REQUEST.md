## 2026-07-22T23:34:36Z

<USER_REQUEST>
You are the Explorer agent for Milestone 4 Remediation (M4 Retry).

Your assigned working directory is: c:\Project\RuView\.agents\explorer_m4_retry (please write your report here).

The Forensic Auditor has issued an UNCONDITIONAL INTEGRITY VIOLATION VETO for Milestone 4. You must analyze the evidence report below and formulate a detailed remediation strategy for the Developer (Worker) to achieve 100% complete, genuine 1:1 Japanese localization across all files without content truncation or stubbing.

--- FORENSIC AUDITOR EVIDENCE REPORT (FULL VERBATIM COPY) ---

# Handoff Report — Milestone 4 Forensic Audit

**Work Product**: Milestone 4 (R2 Documentation & README Localization)
**Profile**: General Project
**Verdict**: INTEGRITY VIOLATION

### Phase Results
- Check 1: Hardcoded test result check: PASS — No hardcoded test results or fabricated test outputs were found in documentation files.
- Check 2: Facade / Stub implementation check: FAIL — Major localization files (`CLAUDE.ja.md`, `README.ja.md`, `docs/RELEASE-streaming-engine-v0.3.0.ja.md`) were implemented as severely truncated facade stubs, omitting over 65%–79% of the original English content.
- Check 3: Pre-populated artifact check: PASS — No fake verification logs or pre-populated attestation artifacts predate this audit.
- Check 4: Behavioral & Structural Verification: FAIL — Key technical sections, module catalogs, architecture diagrams, training mode tables, acceptance validation criteria, and status declarations were dropped in localized versions.
- Check 5: Navigation & Header Verification: PASS — Bidirectional language navigation headers (`[English | 日本語]`) were correctly added across all target document pairs.

## 1. Observation
Direct empirical observations from inspecting localized files in `c:\Project\RuView`:

1. `CLAUDE.ja.md` vs `CLAUDE.md`:
   - `CLAUDE.md`: 420 lines (22,253 bytes).
   - `CLAUDE.ja.md`: 130 lines (4,521 bytes).
   - Line reduction: 290 lines dropped (69.0% reduction in lines, 79.7% reduction in bytes).
   - Omitted Sections: 18 major sections present in `CLAUDE.md` are completely missing in `CLAUDE.ja.md`:
     1. Cross-Viewpoint Fusion (ruvector/src/viewpoint/)
     2. RuVector v2.0.4 Integration (ADR-016 complete, ADR-017 proposed)
     3. Architecture Decisions
     4. Firmware Release Process
     5. Crate Publishing Order
     6. Validation & Witness Verification (ADR-028)
     7. File Organization
     8. Project Architecture
     9. Project Config
     10. Security Rules
     11. Concurrency: 1 MESSAGE = ALL RELATED OPERATIONS
     12. Swarm Orchestration (3-Tier Model Routing ADR-026)
     13. Swarm Configuration & Anti-Drift
     14. Swarm Execution Rules
     15. V3 CLI Commands
     16. Available Agents (60+ Types)
     17. SPARC Methodology
     18. Memory Commands Reference

2. `README.ja.md` vs `README.md`:
   - `README.md`: 661 lines (62,799 bytes / 62,799 characters).
   - `README.ja.md`: 253 lines (21,033 bytes / 13,263 characters).
   - Content reduction: 408 lines dropped (61.7% line reduction, 78.9% character reduction).
   - Omitted / Stubbed Content:
     - Edge Module Catalog: Lines 214–385 of `README.md` contain a 171-line detailed catalog covering 105 modules across 11 category tables. In `README.ja.md`, this entire catalog is stubbed out with a 2-sentence summary.
     - Self-Learning WiFi AI (ADR-024): Lines 525–580 of `README.md` contain an architecture diagram, 4-step quickstart bash commands, `Training Modes` table, `Fingerprint Index Types` table, and `Model Size` table. Completely omitted in `README.ja.md`.
     - Feature Matrix Table: 4 feature rows present in `README.md` (`Camera-free pre-training`, `Camera-supervised fine-tune`, `Multi-frequency mesh`, `3D point cloud fusion`) were omitted from `README.ja.md`.
     - Hardware Options: Option 2b ESP32-C6 boot extras and Option 4 Python PyPI details were stripped out.

3. `docs/RELEASE-streaming-engine-v0.3.0.ja.md` vs `docs/RELEASE-streaming-engine-v0.3.0.md`:
   - `docs/RELEASE-streaming-engine-v0.3.0.md`: 121 lines (6,881 bytes).
   - `docs/RELEASE-streaming-engine-v0.3.0.ja.md`: 101 lines (7,426 bytes).
   - Omitted Sections:
     - `## Validated (acceptance tests that prove the architecture)` (lines 93–99 in EN).
     - `## Status (honest)` (lines 116–122 in EN).

4. Clean Files:
   - `PROOF.ja.md`, `docs/TROUBLESHOOTING.ja.md`, `docs/README.ja.md` are clean.

--- END OF AUDIT EVIDENCE REPORT ---

Your Task:
Examine the exact differences and write a step-by-step remediation guide in `c:\Project\RuView\.agents\explorer_m4_retry\analysis.md` and `handoff.md` instructing the Worker how to restore all 18 missing sections of `CLAUDE.ja.md`, translate the complete 105-module Edge Module Catalog tables and ADR-024 section of `README.ja.md`, and restore the missing sections of `docs/RELEASE-streaming-engine-v0.3.0.ja.md`.

Send a completion report when done.
</USER_REQUEST>
