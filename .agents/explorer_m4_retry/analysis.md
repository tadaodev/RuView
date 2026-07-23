# Milestone 4 Remediation Analysis & Step-by-Step Guide
# （マイルストーン4 修正・復元設計および作業手順書）

**対象リポジトリ**: `c:\Project\RuView`  
**担当エージェント**: Explorer (`explorer_m4_retry`)  
**目的**: 監査で判定された「INTEGRITY VIOLATION（切り詰め・ファサードスタブ化）」を解消し、Developer (Worker) が全ドキュメントにおいて原文（英語）と完全1:1対応する高品質な日本語ローカライズ（100%完全復元）を達成するための詳細手順の策定。

---

## 1. 概要と修正基本方針

前回の監査（Forensic Audit）において、以下の3ファイルについて深刻な情報削減（65%〜79%の削減）およびファサードスタブ（要約による省略）が指摘されました。

1. **`CLAUDE.ja.md`**: 原文 421 行に対し 131 行（約79.7%のバイト数削減）。全22個の主要セクション・サブセクションが脱落。
2. **`README.ja.md`**: 原文 662 行に対し 254 行（約78.9%の文字数削減）。105モジュールのエッジモジュールカタログ全テーブル、ADR-024（Self-Learning WiFi AI）セクション、4つの詳細ユースケーステーブル、4つの機能行列行、Hardware拡張情報等が省略。
3. **`docs/RELEASE-streaming-engine-v0.3.0.ja.md`**: 原文 122 行に対し 102 行。`Validated` (受入検証テスト) セクションおよび `Status (honest)` (誠実なステータス宣言) セクションが脱落。

### 復元における絶対要求事項 (Mandatory Requirements)
- **サマリー・要要約による置き換えの厳禁**: 原文の箇条書き、テーブル行、コードブロック、注意書き、注釈を1つたりとも要約・省略してはならない。
- **1:1構造完全対比**: 見出し階層（H1〜H4）、テーブルの列数・行数、Bash/Rust/Pythonコードブロック、リンクURLをすべて原文と一致させる。
- **バイリンガルナビゲーションヘッダーの維持**: ドキュメント冒頭の `[English | 日本語]` 相互リンクヘッダーを維持・確認する。

---

## 2. ファイル別 詳細差異マッピング & 復元手順

### 2.1 `CLAUDE.ja.md` の復元設計

`CLAUDE.md` (421行) と `CLAUDE.ja.md` (131行) の差分分析に基づき、以下の全セクションを1:1で復元・翻訳します。

| セクション番号 | 原文 (`CLAUDE.md`) のセクション名 | 該当行範囲 | 復元・翻訳における具体的な指示 |
|:---:|---|:---:|---|
| **0** | Key Rust Crates テーブル | lines 11–32 | `wifi-densepose-train`, `vendor/rvcsi`, `vendor/rufield`, `wifi-densepose-rufield`, `wifi-densepose-cli` 等の省略された詳細説明（ADR参照、サブモジュール仕様、プライバシーマッピング等）を完全翻訳して復元する。 |
| **1** | Cross-Viewpoint Fusion (`ruvector/src/viewpoint/`) | lines 52–59 | 4つのモジュール（`attention.rs`, `geometry.rs`, `coherence.rs`, `fusion.rs`）の目的をテーブル形式で完全復元。 |
| **2** | RuVector v2.0.4 Integration | lines 60–67 | 5つの統合クレート（`ruvector-mincut`, `ruvector-attn-mincut`, `ruvector-temporal-tensor`, `ruvector-solver`, `ruvector-attention`）と各機能のマッピングを完全復元。 |
| **3** | Architecture Decisions (Key ADRs) | lines 68–88 | ADR-014〜ADR-265の全18件の主要ADRリスト（ステータス：Accepted/Proposed/In Progress を含む）を完全復元。 |
| **4** | Supported Hardware (補足注記) | lines 100–101 | 小型基板（SuperMini, ESP32-S3-Zero等）の発熱・電流ドローに関する詳細な警告文章を完全翻訳して追加。 |
| **5** | Firmware Release Process | lines 148–156 | 8MB/4MBビルド、6バイナリ保存、Git tag、GH release、実機検証、リアルCSI必須要件を含む7ステップを完全復元。 |
| **6** | Crate Publishing Order | lines 157–171 | 依存関係順序に従う全12クレートのパブリッシュ順序リストを完全復元。 |
| **7** | Validation & Witness Verification (ADR-028) | lines 172–210 | 4手順の検証コマンド、Python proofハッシュ更新コマンド、ウィトネスバンドル構成要素リスト（7項目）、主要証明アーティファクト（5項目）を完全復元。 |
| **8** | Branch | lines 207–210 | デフォルトブランチ `main` およびアクティブ機能ブランチ `ruvsense-full-implementation` (PR #77) の記述を追加。 |
| **9** | Behavioral Rules (Always Enforced) | lines 213–223 | 全8項目の行動規律ルールを完全翻訳して復元。 |
| **10** | File Organization | lines 224–238 | ディレクトリ構成ルール（10個の主要パスとその説明）を完全復元。 |
| **11** | Project Architecture & Project Config | lines 239–255 | DDD、500行制限、TDD London School、イベントソーシング、入力検証、およびプロジェクト設定（Topology, Max Agents, Memory, HNSW, Neural）を完全復元。 |
| **12** | Pre-Merge Checklist | lines 256–272 | 原文の全12項目（テスト、証明、README, CLAUDE, CHANGELOG, ユーザーガイド, ADRインデックス, ウィトネスバンドル, Docker, Crate pub, .gitignore, セキュリティ監査）を完全復元（※現在8項目に削減されているものを12項目へ拡充）。 |
| **13** | Build & Test | lines 273–288 | npm build / npm test / npm lint コマンドブロックおよびテスト実行原則を復元。 |
| **14** | Security Rules | lines 289–296 | APIキー・認証情報のコミット禁止、入力検証、`npx @claude-flow/cli@latest security scan` を含む5規則を完全復元。 |
| **15** | Concurrency: 1 MESSAGE = ALL RELATED OPERATIONS | lines 297–305 | バッチ処理・並列実行に関する全6規則を完全復元。 |
| **16** | Swarm Orchestration & 3-Tier Model Routing (ADR-026) | lines 306–323 | スワーム初期化規則、Taskツール並行起動規則、および 3-Tier Model Routing テーブル（Tier 1/2/3 の Handler, Latency, Cost, Use Cases）を完全復元。 |
| **17** | Swarm Configuration & Anti-Drift & Swarm Execution Rules | lines 324–344 | 階層トポロジ、Raft合意、チェックポイント、`run_in_background: true`、ポーリング禁止規則、コマンド例を完全復元。 |
| **18** | V3 CLI Commands | lines 345–369 | Core Commands テーブル（8コマンド）および Quick CLI Examples（5コマンド）を完全復元。 |
| **19** | Available Agents (60+ Types) | lines 370–386 | 5カテゴリ（Core Development, Specialized, Swarm Coordination, GitHub, SPARC Methodology）のエージェント種別一覧を完全復元。 |
| **20** | Memory Commands Reference | lines 387–402 | Store, Search, List, Retrieve の4つのメモリーコマンド例を完全復元。 |
| **21** | Quick Setup & Claude Code vs CLI Tools & Support | lines 403–420 | セットアップ手順、役割分担規定、サポートリンクを完全復元。 |

---

### 2.2 `README.ja.md` の復元設計

`README.md` (662行) と `README.ja.md` (254行) の差分分析に基づき、省略された膨大なコンテンツを1:1で復元します。

| 対象セクション | 原文 (`README.md`) の該当箇所 | 復元・翻訳における具体的な指示 |
|---|---|---|
| **ヘッダー機能比較表** | lines 59–76 | 原文の全14行のテーブルのうち脱落している4行（🎯 Camera-free pre-training, 📷 Camera-supervised fine-tune, 📡 Multi-frequency mesh, 🌐 3D point cloud fusion）を翻訳して追加し、全14行の完全な表にする。 |
| **Option 2b & Option 4 ＆ ハードウェア選択肢** | lines 95–144 | Option 2b の ESP32-C6 詳細（HE-LTF、802.15.4、TWT、LP-core、v0.6.7新機能）、Option 4 の Python PyPI 詳細 (`ruview[client]`)、および Hardware options テーブル内の `Qualcomm CSI beta` (ADR-268) と `Vendor provider beta` (ADR-270) の行を完全復元。 |
| **Hugging Face モデルセクション** | lines 169–212 | - "What works today vs. what's pending wiring" テーブル（3行）  <br>- JSONL RVF ローダーに関する "Known gap" 段落  <br>- "Quantization choices" (q2/q4/q8/full) の説明  <br>- "Results & proof" テーブル（8行）および `python archive/v1/data/proof/verify.py` の実行コードブロックを完全復元。 |
| **エッジモジュールカタログ (Edge Module Catalog)** | lines 214–385 | 現在の2文の要約スタブを破棄し、11カテゴリ・全105モジュールの詳細テーブルを日本語化して完全復元する：<br>1. 🫀 Health (14モジュール)<br>2. 🔒 Security (14モジュール)<br>3. 🏢 Building (11モジュール)<br>4. 🛍️ Retail (7モジュール)<br>5. 🏭 Industrial (7モジュール)<br>6. 🔬 Research (12モジュール)<br>7. 🤖 Ai (15モジュール)<br>8. 🐝 Swarm (11モジュール)<br>9. 📡 Signal (6モジュール)<br>10. 🌐 Network (1モジュール)<br>11. 🛠️ Developer (7モジュール)<br>各行の ID, 説明（What it does: 日本語訳）, Size, Difficulty を正確に記載する。 |
| **ユースケースと応用分野 (Use Cases & Applications)** | lines 416–499 | 現在箇条書きに要約されている4つの折りたたみセクション (`<details><summary>...</summary>`) 内の全テーブルを復元：<br>- 🏥 Everyday (8行)<br>- 🏟️ Specialized (9行)<br>- 🤖 Robotics & Industrial (8行)<br>- 🔥 Extreme (8行)<br>各テーブルの Use Case, What It Does, Hardware, Key Metric, Edge Module の全フィールドを日本語訳して復元する。 |
| **Self-Learning WiFi AI (ADR-024)** | lines 502–580 | 現在完全に落とされているこの大型セクションをフル復元：<br>- 概要説明文章<br>- Key Capabilities テーブル（7行）<br>- Architecture アスキーアート構成図<br>- Quick Start Bash コマンド（4ステップ）<br>- Training Modes テーブル（3行）<br>- Fingerprint Index Types テーブル（4行）<br>- Model Size テーブル（4行） |
| **Claude Code & Codex Plugin** | lines 584–612 | Codex prompt mirror の設定手順、`npx @ruvnet/ruview` ポータブルハーネスの説明段落を完全復元。 |
| **ドキュメント一覧テーブル (Documentation)** | lines 616–632 | 原文の全14行テーブルの日本語説明を完全復元（BFLD, SENSE-BRIDGE, Semantic Primitives, Portable harness, rvCSI, Desktop App, ruview-swarm 等の詳細説明を含む）。 |
| **アフィリエイトプログラム** | lines 650–654 | 🤝 Creator Affiliate Program セクションを完全復元。 |

---

### 2.3 `docs/RELEASE-streaming-engine-v0.3.0.ja.md` の復元設計

`docs/RELEASE-streaming-engine-v0.3.0.md` (122行) と `docs/RELEASE-streaming-engine-v0.3.0.ja.md` (102行) の差分分析に基づき、以下の脱落した2セクションを復元します。

| 復元対象セクション | 原文 (`docs/RELEASE-streaming-engine-v0.3.0.md`) の内容 | 復元・翻訳における指示 |
|---|---|---|
| **`## Validated (acceptance tests that prove the architecture)`** | lines 93–99 | 4つのアーキテクチャ検証テストシナリオ（ADR-137, ADR-139, ADR-140, ADR-142）のインライン記述および説明を完全翻訳して `## 受入検証済み項目（アーキテクチャを証明するテスト）` として復元。 |
| **`## Status (honest)`** | lines 116–122 | 統合済み項目（ADR-135〜143）と将来対応項目（20Hzセンシングサーバー統合、UWBハードウェア、RFエンコーダー学習）、およびGitHub Issue (#840–#850) 参照を完全翻訳して `## ステータス（誠実な開示）` として復元。 |

---

## 3. Worker (Developer) への具体的指示手順 (Step-by-Step Execution Plan)

Worker は以下のステップで修正作業を実施してください。

### ステップ 1: `CLAUDE.ja.md` の全セクション完全復元
1. `c:\Project\RuView\CLAUDE.md` と `c:\Project\RuView\CLAUDE.ja.md` を参照する。
2. 上記 2.1 節の復元マッピングに従い、脱落している18以上のセクション・テーブル・注釈・コマンド・ルールをすべて日本語に翻訳して組み込む。
3. 行数が約400行規模になり、原文の全コンテンツが漏れなく日本語化されていることを確認する。

### ステップ 2: `README.ja.md` の全要素完全復元
1. `c:\Project\RuView\README.md` と `c:\Project\RuView\README.ja.md` を参照する。
2. 上記 2.2 節の復元マッピングに従い、以下を順次復元・翻訳する：
   - ヘッダー機能表の脱落4行を追加
   - Option 2b / 4 および Hardware options テーブルの脱落行・詳細記述を追加
   - Hugging Face セクションのテーブル・Known gap・Quantization・Results & proof・Bashコードブロックを追加
   - 105モジュールの全11カテゴリテーブルを完全に復元（要要約スタブの除去）
   - ユースケースの4つの詳細テーブルをすべて折りたたみセクション内に復元
   - ADR-024 (Self-Learning WiFi AI) セクション（アスキーアート、4表、4ステップコード等）を完全復元
   - Codex mirror, `npx @ruvnet/ruview`, Creator Affiliate セクションを復元
   - ドキュメントテーブルを全14行の詳細記述に拡充

### ステップ 3: `docs/RELEASE-streaming-engine-v0.3.0.ja.md` の復元
1. `c:\Project\RuView\docs\RELEASE-streaming-engine-v0.3.0.md` と `docs/RELEASE-streaming-engine-v0.3.0.ja.md` を参照する。
2. `## Validated` セクション（4項目）および `## Status (honest)` セクションを日本語化して復元する。

### ステップ 4: 自主検証の実行
1. `git diff` または行数/バイト数カウントにて、削減率が 0% に近く、原文との対比構造が保たれていることを確認する。
2. バイリンガルナビゲーションヘッダー `[English | 日本語]` / `<a href="...">` が相互に正しくリンクしていることを確認する。

---
