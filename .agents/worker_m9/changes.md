# Milestone 9 Changes Summary

**Agent:** Worker M9 (`worker_m9`)  
**Milestone:** Milestone 9 — R2 Major Documentation Polish  
**Date:** 2026-07-25  

---

## 1. Synchronized Terminology

Across all primary Japanese documentation files and edge module catalogs, exact friendly Japanese terms were systematically applied:

- **Empty Room** $\rightarrow$ **空部屋測定（ベースライン校正）**
- **Fall Detect / Fall Detection** $\rightarrow$ **転倒検知アラート**
- **Vital Signs** $\rightarrow$ **バイタル測定（心拍・呼吸）**
- **CSI Variance / Variance** $\rightarrow$ **電波変動量（動作強度）**

---

## 2. Modified Files Detail

### 2.1 `README.ja.md`
- **Path:** `c:\Project\RuView\README.ja.md` (649 lines)
- **Changes:**
  - Updated sensing feature list (lines 34-36) with `バイタル測定（心拍・呼吸）`, `転倒検知アラート`, and `空部屋測定（ベースライン校正）`.
  - Updated main feature table (lines 62-66) for `存在検知` (空部屋測定（ベースライン校正）), `動作 / アクティビティ` (電波変動量（動作強度）), and `転倒検知アラート`.
  - Updated hardware recommendation and option notes (lines 122, 129, 155) with exact friendly terms.
  - Updated edge module catalog health & industrial tables (lines 224-231, 289) to reflect exact terms (`転倒検知アラート`, `バイタル測定（心拍・呼吸）`, `電波変動量（動作強度）`).
  - Updated use cases details tables (lines 429-430, 468, 484-485) for healthcare, safety management, detention/tactical, and self-learning AI sections.
  - Preserved 100% 1:1 section parity with English `README.md` (all 105 edge module rows, ASCII architecture diagrams, code blocks, and details tags intact).

### 2.2 `docs/TROUBLESHOOTING.ja.md`
- **Path:** `c:\Project\RuView\docs\TROUBLESHOOTING.ja.md` (153 lines)
- **Changes:**
  - Section 2: Clarified field model 30s auto-calibration as `空部屋測定（ベースライン校正）`.
  - Section 3: Updated heading to `## 3. 心拍数 / 呼吸数（バイタル測定（心拍・呼吸））のブレ・ジッター` and updated body text to reference `バイタル測定（心拍・呼吸）`.
  - Section 4: Clarified RollingP95 adaptive normalization as dynamic scaling of `電波変動量（動作強度）`.

### 2.3 `docs/RELEASE-streaming-engine-v0.3.0.ja.md`
- **Path:** `c:\Project\RuView\docs\RELEASE-streaming-engine-v0.3.0.ja.md` (105 lines)
- **Changes:**
  - Updated release overview to highlight `転倒検知アラート（転倒リスク上昇）`.
  - Updated calibration row in v0.3.0 feature matrix to explicitly specify `空部屋測定（ベースライン校正） (BaselineCalibration::apply())`.
  - Updated environment change row (ADR-142) to specify `電波変動量（動作強度）` link change detection.

### 2.4 `docs/edge-modules/` Directory Files
- **Paths:**
  - `docs/edge-modules/README.md`
  - `docs/edge-modules/building.md`
  - `docs/edge-modules/medical.md`
  - `docs/edge-modules/security.md`
  - `docs/edge-modules/exotic.md`
  - `docs/edge-modules/core.md`
  - `docs/edge-modules/industrial.md`
  - `docs/edge-modules/retail.md`
  - `docs/edge-modules/signal-intelligence.md`
  - `docs/edge-modules/spatial-temporal.md`
  - `docs/edge-modules/adaptive-learning.md`
  - `docs/edge-modules/autonomous.md`
- **Changes:**
  - Synchronized exact friendly Japanese term annotations (`空部屋測定（ベースライン校正）`, `転倒検知アラート`, `バイタル測定（心拍・呼吸）`, `電波変動量（動作強度）`) across Host API tables, Event ID registries, module overview tables, and technical documentation descriptions.

---

## 3. Quality Assurance & Parity Verification

- **1:1 Section Parity**: Verified that all tables, code snippets, ASCII diagrams, markdown headers, and bidirectional navigation links (`[English | 日本語]`) remain fully preserved without truncation or omitted sections.
- **Tone & Prose Quality**: Improved natural Japanese phrasing, technical accuracy, setup flow, and troubleshooting guidance.
