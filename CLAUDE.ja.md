# Claude Code 設定ガイドライン — WiFi-DensePose + Claude Flow V3

<p align="center">
  <strong><a href="CLAUDE.md">English</a> | 日本語</strong>
</p>

## プロジェクト: wifi-densepose

チャネル状態情報（CSI）を用いたWiFiベースの人物姿勢推定システム。
Python v1 (`v1/`) と Rust移植版 (`v2/`) のデュアルコードベース構成。
### 主要 Rust クレート一覧
| クレート | 説明 |
|-------|-------------|
| `wifi-densepose-core` | コア型定義、トレイト、エラー型、CSIフレームプリミティブ |
| `wifi-densepose-signal` | SOTA信号処理 + RuvSenseマルチスタティックセンシング（16モジュール） |
| `wifi-densepose-nn` | ニューラルネットワーク推論（ONNX, PyTorch, Candle バックエンド） |
| `wifi-densepose-train` | ruvector統合 + ruview_metrics による学習パイプライン。MAEプリトレイニングレシピ（`mae.rs`, ADR-152 §2.3） + WiFlow-STD ポート（`wiflow_std/`, tchフラグ付き） |
| `wifi-densepose-mat` | 大規模災害評価ツール (Mass Casualty Assessment Tool) — 災害サバイバー検出 |
| `wifi-densepose-hardware` | ESP32アグリゲーター、TDMプロトコル、チャネルホッピングファームウェア。`ieee80211bf/` 802.11bf 前方互換プロトコルモデル（ADR-153） |
| `wifi-densepose-ruvector` | RuVector v2.0.4 統合 + クロスアングル統合（5モジュール） |
| `wifi-densepose-wasm` | ブラウザデプロイ向け WebAssembly バインディング |
| `wifi-densepose-cli` | CLIツール (`wifi-densepose` バイナリ) — `calibrate`/`calibrate-serve`/`enroll`/`train-room`/`room-watch` + MAT（MATは `mat` 機能フラグ配下。aarch64/アプライアンス向けキャリブレーションバイナリ用には `--no-default-features` でビルド） |
| `wifi-densepose-calibration` | ADR-151 部屋ごとのキャリブレーション & スペシャリスト学習 — `baseline → enroll → extract → train` → 小型スペシャリストバンク（存在/姿勢/呼吸/心拍/体動/アノマリー） + マルチスタティックフュージョン。純粋Rust製、エッジデプロイ可能 |
| `wifi-densepose-sensing-server` | WiFiセンシングUI向け軽量Axumサーバー |
| `wifi-densepose-wifiscan` | マルチBSSID WiFiスキャン (ADR-022) |
| `wifi-densepose-vitals` | ESP32 CSIグレードのバイタルサイン抽出 (ADR-021) |
| `nvsim` | 確定性NVダイヤモンド磁気計パイプラインシミュレータ (ADR-089) — 独立リーフ、WASM対応 |
| `vendor/rvcsi` (サブモジュール) | **rvCSI** — エッジRFセンシングランタイム (ADR-095/096): 9クレート (`rvcsi-core`/`-dsp`/`-events`/`-adapter-file`/`-adapter-nexmon`/`-ruvector`/`-runtime`/`-node`/`-cli`)。独自リポジトリ ([github.com/ruvnet/rvcsi](https://github.com/ruvnet/rvcsi)) にて開発、`vendor/rvcsi` にサブモジュールとして配置。crates.ioにて `rvcsi-* 0.3.x`、npmにて `@ruv/rvcsi` として公開。`v2/` ワークスペースメンバーではなく、公開クレート（またはサブモジュールの `crates/rvcsi-*` パス）に依存。正規化済み `CsiFrame`/`CsiWindow`/`CsiEvent` スキーマ、FFI前検証、再利用可能DSP、型付け・確信度スコア付きイベント、napi-c Nexmonシム (Raspberry Pi 5 / 4 / 3B+ — BCM43455c0 からの実 `nexmon_csi` `.pcap`)、napi-rs SDK、`rvcsi` CLI、Claude Code プラグイン。 |
| `vendor/rufield` (サブモジュール) | **RuField MFS** — カメラフリーマルチモーダルフィールドセンシングのオープン仕様 (ADR-260)。WiFi CSI/CIR/BFLD、UWB、BLE Channel Sounding、ミリ波レーダー、超音波、低周波音、赤外線、量子センサーの「上」に位置する共通の `FieldEvent`/`FieldTensor`/`FusionGraph`/`PrivacyClass`/`ProvenanceReceipt` モデル。独自リポジトリ ([github.com/ruvnet/rufield](https://github.com/ruvnet/rufield)) にて開発、`vendor/rufield` に配置。`v2/` ワークスペースメンバー外。v0.1リファレンススタック = 7クレート (`rufield-core`/`-provenance`/`-privacy`/`-adapters`/`-fusion`/`-bench`/`-viewer`), 72テストパス/0失敗。`rufield-viewer` は Axum + vanilla-JS 読み取り専用ダッシュボード (`cargo run -p rufield-viewer`)。WiFi-CSI モダリティは `CsiReplayAdapter` 経由で実キャプチャ再生まわりをサポート（実 `.csi.jsonl` インジェスト）。 |
| `wifi-densepose-rufield` | ADR-262 P1 **アンチコラプションブリッジ** — RuView WiFi-CSI センシング出力 (`SensingSnapshot`) を署名済み RuField `FieldEvent` (`Modality::WifiCsi`, 実 `timestamp_ns`, sha256 + ed25519 プロベナンス, `synthetic=false`) へ変換。RuViewと独立RuField MFS仕様間の単一結合点（§5.4）。`vendor/rufield` のサブモジュールクレートをパス依存。必須プライバシーマッピング（`map_privacy`）実装。15テスト/0失敗。 |
| `ruview-swarm` | ドローン自律制御スワームシステム (ADR-148) — 階層メッシュトポロジー、Raftコンセンサス、MARL、CSIセンシングペイロード、MAVLink/PX4互換、Ruflo AIエージェント統合 |

### RuvSense モジュール (`signal/src/ruvsense/`)
| モジュール | 目的 |
|--------|---------|
| `multiband.rs` | マルチバンドCSIフレーム結合、クロスチャネルコヒーレンス |
| `phase_align.rs` | 反復的LO位相オフセット推定、円平均 |
| `multistatic.rs` | アテンション重み付けフュージョン、幾何学的多様性 |
| `coherence.rs` | Zスコアコヒーレンススコアリング、DriftProfile |
| `coherence_gate.rs` | Accept/PredictOnly/Reject/Recalibrate ゲート判定 |
| `pose_tracker.rs` | AETHER re-IDエンベディング伴う17キーポイントカルマン追跡 |
| `field_model.rs` | SVD室内固有構造、摂動抽出 |
| `tomography.rs` | RFトモグラフィ、ISTA L1ソルバー、ボクセルグリッド |
| `longitudinal.rs` | Welford統計、生体力学ドリフト検出 |
| `intention.rs` | 動作前予兆信号（200-500ms） |
| `cross_room.rs` | 環境フィンガープリンティング、遷移グラフ |
| `gesture.rs` | DTWテンプレートマッチングジェスチャー分類器 |
| `adversarial.rs` | 物理的インポッシブル信号検出、マルチリンク整合性 |
| `cir.rs` | ADR-134 CSI→CIR (ISTA L1スパース復元、NeumannSolverウォームスタート) |
| `calibration.rs` | ADR-135 空室ベースライン (Welford振幅 + von Mises位相、ドリフトトリガー) |

### クロスアングル統合 (Cross-Viewpoint Fusion) (`ruvector/src/viewpoint/`)
| モジュール | 目的 |
|--------|---------|
| `attention.rs` | CrossViewpointAttention, GeometricBias, G_bias伴うsoftmax |
| `geometry.rs` | GeometricDiversityIndex, クラメール・ラオ下限, フィッシャー情報量 |
| `coherence.rs` | 位相フェーザコヒーレンス、ヒステリシスゲート |
| `fusion.rs` | MultistaticArray 集約ルート、ドメインイベント |

### RuVector v2.0.4 統合 (ADR-016 完了、ADR-017 提案)
ワークスペースに統合済みの全5つのruvectorクレート:
- `ruvector-mincut` → `metrics.rs` (DynamicPersonMatcher) + `subcarrier_selection.rs`
- `ruvector-attn-mincut` → `model.rs` (apply_antenna_attention) + `spectrogram.rs`
- `ruvector-temporal-tensor` → `dataset.rs` (CompressedCsiBuffer) + `breathing.rs`
- `ruvector-solver` → `subcarrier.rs` (スパース補間 114→56) + `triangulation.rs`
- `ruvector-attention` → `model.rs` (apply_spatial_attention) + `bvp.rs`

### アーキテクチャ決定記録 (Architecture Decisions)
`docs/adr/` 内に182件のADRが存在（ADR-001からADR-265まで、一部番号飛びあり）。主要なもの：
- ADR-014: SOTA信号処理 (採択)
- ADR-015: MM-Fi + Wi-Pose 学習データセット (採択)
- ADR-016: RuVector学習パイプライン統合 (採択 — 完了)
- ADR-017: RuVector信号 + MAT統合 (提案 — 次のターゲット)
- ADR-024: 対照CSIエンベディング / AETHER (採択)
- ADR-027: クロス環境ドメイン汎化 / MERIDIAN (採択)
- ADR-028: ESP32能力監査 + ウィトネス検証 (採択)
- ADR-029: RuvSenseマルチスタティックセンシングモード (提案)
- ADR-030: RuvSense永続フィールドモデル (提案)
- ADR-031: RuViewセンシング優先RFモード (提案)
- ADR-032: マルチスタティックメッシュセキュリティ強化 (提案)
- ADR-148: ドローン自律制御スワームシステム / `ruview-swarm` (進行中)
- ADR-152: WiFi-Pose SOTA 2026取り込み — 幾何コンディショニング, WiFlow-STDベンチマーク (測定値 (a) 完了: PCK@20 ≈96%で測定同等と主張), MAEレシピ (提案; §2.1–2.3, 2.6実装済み)
- ADR-153: IEEE 802.11bf-2025 前方互換プロトコルモデル (採択 — ADR-152 §2.4を修正)
- ADR-182: MetaHarness経由で生成された `npx ruview` ハーネス (採択 — P1+P2出荷済み `@ruvnet/ruview`)
- ADR-263: `@ruvnet/ruview` npmハーネス詳細レビュー + 最適化戦略 (提案)
- ADR-264: `@ruvnet/rvagent` MCPサーバー + `@ruv/ruview-cli` 詳細レビュー + 最適化戦略 (提案)
- ADR-265: RuView npm配布戦略 — CIゲート、プロベナンス、バージョン単一ソース化 (提案)

### 対応ハードウェア

| デバイス | ポート | チップ | 役割 | コスト |
|--------|------|------|------|------|
| ESP32-S3 (8MB Flash) | COM9 (ruvzen, 以前はCOM7) | Xtensa デュアルコア | WiFi CSI センシングノード | 約 $9 |
| ESP32-S3 SuperMini (4MB) | — | Xtensa デュアルコア | WiFi CSI（小型版） | 約 $6 |
| ESP32-C6 + Seeed MR60BHA2 | COM12 (ruvzen, 以前はCOM4) | RISC-V + 60 GHz FMCW | mmWave HR/BR/存在 + WiFi CSI | 約 $15 |
| HLK-LD2410 | — | 24 GHz FMCW | 存在検知 + 距離計測 | 約 $3 |

**非対応:** ESP32（初代）、ESP32-C3 — シングルコアのためCSI DSPパイプラインを実行不可。

**⚠️ 小型基板についての注意（SuperMini, ESP32-S3-Zero, その他コインサイズ互換機）は発熱します:** ファームウェアはWiFi無線を継続的にONにし（`WIFI_PS_NONE`）、フルDSPパイプライン（`edge_tier=2`）を実行するため、持続的な高電流消費が発生します。フルサイズの開発基板はこれを問題なく処理できますが、最小限のPCB銅箔と低コストレギュレータを備えたコインサイズのクローン基板は著しく高温になり、高熱セッション後に電源が入らなくなったという現場報告も少なくとも1件存在します。十分なエアフローを確保し、最初の数分間は手で触れて温度を確認してください。詳細は `firmware/esp32-csi-node/README.md` を参照してください。

### ビルド & テスト コマンド（本リポジトリ）
```bash
# Rust — ワークスペース全テスト実行 (1,031+ テスト, 約2分)
cd v2
cargo test --workspace --no-default-features

# Rust — 単一クレートの型チェック (GPU不要)
cargo check -p wifi-densepose-train --no-default-features

# Python — 確定パイプライン検証 (SHA-256)
python archive/v1/data/proof/verify.py

# Python — テストスイートの実行
cd archive/v1 && python -m pytest tests/ -x -q
```

### ESP32 ファームウェアビルド (Windows — Pythonサブプロセスが必要)
```bash
# 8MB ファームウェアのビルド (リアルWiFi CSIモード, モックなし)
# 完全なPythonサブプロセスコマンドは CLAUDE.local.md を参照
# 重要: Git Bash上の ESP-IDF v5.4 では MSYSTEM 環境変数を削除する必要があります

# 4MB ファームウェアのビルド
cp sdkconfig.defaults.4mb sdkconfig.defaults
# その後同様のビルドプロセスを実行

# COM7 への書き込み
# [python, idf_py, '-p', 'COM7', 'flash']

# WiFi プロビジョニング
python firmware/esp32-csi-node/provision.py --port COM7 \
  --ssid "YourWiFi" --password "secret" --target-ip 192.168.1.20

# シリアルモニターの開始
python -m serial.tools.miniterm COM7 115200
```

### ファームウェアリリース手順 (Firmware Release Process)
1. `sdkconfig.defaults.template` から 8MB バイナリをビルド（モックなし）
2. `sdkconfig.defaults.4mb` から 4MB バイナリをビルド（モックなし）
3. 6つのバイナリを保存: `esp32-csi-node.bin`, `bootloader.bin`, `partition-table.bin`, `ota_data_initial.bin`, `esp32-csi-node-4mb.bin`, `partition-table-4mb.bin`
4. タグ付け: `git tag v0.X.Y-esp32 && git push origin v0.X.Y-esp32`
5. リリース作成: `gh release create v0.X.Y-esp32 <binaries> --title "..." --notes-file ...`
6. 公開前に実機（COM7等）で検証を実施
7. **重要:** 必ずモックモードではなく実機のWiFi CSIでテストすること — モックテストではKconfigの閾値バグを見逃しました

### クレート公開順序 (Crate Publishing Order)
クレートは依存関係順に公開する必要があります：
1. `wifi-densepose-core` (内部依存なし)
2. `wifi-densepose-vitals` (内部依存なし)
3. `wifi-densepose-wifiscan` (内部依存なし)
4. `wifi-densepose-hardware` (内部依存なし)
5. `wifi-densepose-signal` (`core` に依存)
6. `wifi-densepose-nn` (内部依存なし、ワークスペースのみ)
7. `wifi-densepose-ruvector` (内部依存なし、ワークスペースのみ)
8. `wifi-densepose-train` (`signal`, `nn` に依存)
9. `wifi-densepose-mat` (`core`, `signal`, `nn` に依存)
10. `wifi-densepose-wasm` (`mat` に依存)
11. `wifi-densepose-sensing-server` (`wifiscan` に依存)
12. `wifi-densepose-cli` (`mat` に依存)

### 検証 & ウィトネス証明 (Validation & Witness Verification) (ADR-028)

**重要なコード変更を行った後は、必ずフル検証を実行してください:**

```bash
# 1. Rust テスト — 1,031+ 件が成功し、0件失敗であること
cd v2
cargo test --workspace --no-default-features

# 2. Python 証明 — VERDICT: PASS と出力されること
cd ..
python archive/v1/data/proof/verify.py

# 3. ウィトネスバンドルの生成 (上記両方 + ファームウェアハッシュを含む)
bash scripts/generate-witness-bundle.sh

# 4. バンドルの自己検証 — 7/7 PASS であること
cd dist/witness-bundle-ADR028-*/
bash VERIFY.sh
```

**Python証明ハッシュが変更された場合** (例: numpy/scipyのバージョン更新など):
```bash
# 期待されるハッシュを再生成し、通過することを確認
python archive/v1/data/proof/verify.py --generate-hash
python archive/v1/data/proof/verify.py
```

**ウィトネスバンドルの内容** (`dist/witness-bundle-ADR028-<sha>.tar.gz`):
- `WITNESS-LOG-028.md` — 各能力ごとのエビデンスを含む33行の証明マトリクス
- `ADR-028-esp32-capability-audit.md` — 詳細な監査結果
- `proof/verify.py` + `expected_features.sha256` — 確定パイプライン証明
- `test-results/rust-workspace-tests.log` — cargo test の完全な出力ログ
- `firmware-manifest/source-hashes.txt` — 全7ファームウェアファイルの SHA-256
- `crate-manifest/versions.txt` — バージョン情報付き全15クレート一覧
- `VERIFY.sh` — 受領者向けのワンコマンド自己検証スクリプト

**主要な証明アーティファクト:**
- `archive/v1/data/proof/verify.py` — Trust Kill Switch: 参照信号を本番パイプラインに入力し出力をハッシュ化
- `archive/v1/data/proof/expected_features.sha256` — 公開されている期待ハッシュ値
- `archive/v1/data/proof/sample_csi_data.json` — 1,000件の合成CSIフレーム (seed=42)
- `docs/WITNESS-LOG-028.md` — 11ステップの再現可能な検証手順
- `docs/adr/ADR-028-esp32-capability-audit.md` — 完全な監査記録

### ブランチ構成 (Branch)
デフォルトブランチ: `main`
アクティブ開発ブランチ: `ruvsense-full-implementation` (PR #77)

---

## 行動規律 (Behavioral Rules) (常に強制)

- 依頼されたことのみを愚直に実行すること。それ以上もそれ以下もしないこと
- 目的達成のために絶対に必要な場合を除き、ファイルを新規作成しないこと
- 新規ファイルを作成するよりも、常に既存ファイルの編集を優先すること
- 明示的に要求されない限り、ドキュメントファイル (*.md) や README ファイルを主体的に作成しないこと
- 作業ファイル、テキスト/md、テスト等をルートフォルダに絶対保存しないこと
- スワームを生成した後にステータスを連続して確認しないこと — 結果を待つこと
- ファイルを編集する前に必ず `view_file` で読み込むこと
- 秘密情報、認証情報、.env ファイルを絶対コミットしないこと

## ファイル構成 (File Organization)

- ルートフォルダに絶対保存しないこと — 以下のディレクトリを使用すること
- `docs/adr/` — アーキテクチャ決定記録（Architecture Decision Records, 43 ADRs）
- `docs/ddd/` — ドメイン駆動設計モデル（Domain-Driven Design models）
- `v2/crates/` — Rust ワークスペースクレート（15クレート）
- `v2/crates/wifi-densepose-signal/src/ruvsense/` — RuvSense マルチスタティックモジュール（14ファイル）
- `v2/crates/wifi-densepose-ruvector/src/viewpoint/` — クロスアングル統合（5ファイル）
- `v2/crates/wifi-densepose-hardware/src/esp32/` — ESP32 TDM プロトコル
- `firmware/esp32-csi-node/main/` — ESP32 C ファームウェア（チャネルホッピング, NVS設定, TDM）
- `archive/v1/src/` — Python ソース（コア, ハードウェア, サービス, API）
- `archive/v1/data/proof/` — 確定性 CSI 証明バンドル
- `.claude-flow/` — Claude Flow 調整状態（チーム共有のためコミット）
- `.claude/` — Claude Code 設定、エージェント、メモリ（チーム共有のためコミット）

## プロジェクトアーキテクチャ (Project Architecture)

- 境界づけられたコンテキストを伴うドメイン駆動設計に従うこと
- ファイルサイズを500行未満に保つこと
- すべての公開APIに型付けされたインターフェースを使用すること
- 新しいコードには TDD ロンドン派（モック優先）を優先すること
- 状態変更にはイベントソーシングを使用すること
- システム境界での入力検証を確実に行うこと

### プロジェクト設定 (Project Config)

- **トポロジー (Topology)**: 階層メッシュ (hierarchical-mesh)
- **最大エージェント数 (Max Agents)**: 15
- **メモリ (Memory)**: ハイブリッド (hybrid)
- **HNSW**: 有効 (Enabled)
- **ニューラル (Neural)**: 有効 (Enabled)

## マージ前チェックリスト (Pre-Merge Checklist)

PRをマージする前に、以下の各項目が該当し対処されているか確認してください：

1. **Rustテスト成功** — `cargo test --workspace --no-default-features` (1,031+ PASS, 0 FAIL)
2. **Python証明成功** — `python archive/v1/data/proof/verify.py` (VERDICT: PASS)
3. **README.md** — スコープが変更された場合、プラットフォームテーブル、クレート説明、ハードウェアテーブル、機能概要を更新
4. **CLAUDE.md** — スコープが変更された場合、クレート表、ADRリスト、モジュール表、バージョンを更新
5. **CHANGELOG.md** — `[Unreleased]` セクションに追加/修正/変更内容のエントリを追記
6. **ユーザーガイド** (`docs/user-guide.md`) — 新しいデータソース、CLIフラグ、セットアップ手順が追加された場合に更新
7. **ADRインデックス** — 新しいADRが作成された場合、READMEドキュメント表のADR数を更新
8. **ウィトネスバンドル** — テストや証明ハッシュが変更された場合に再生成: `bash scripts/generate-witness-bundle.sh`
9. **Docker Hubイメージ** — Dockerfile、依存関係、または実行時挙動が変更された場合のみ再ビルド
10. **クレート公開** — クレートが crates.io に公開され、その公開APIが変更された場合のみ必要
11. **`.gitignore`** — 新しいビルド生成物やバイナリを追加
12. **セキュリティ監査** — ハードウェア/ネットワーク境界に触れる新規モジュールのセキュリティレビューを実行

## ビルド & テスト (Build & Test)

```bash
# ビルド
npm run build

# テスト
npm test

# リント
npm run lint
```

- コード変更を行った後は必ずテストを実行すること
- コミット前に必ずビルド成功を確認すること

## セキュリティルール (Security Rules)

- ソースファイル内にAPIキー、秘密情報、認証情報を絶対ハードコードしないこと
- .env ファイルや秘密情報を含むファイルを絶対コミットしないこと
- システム境界でユーザー入力を常に検証すること
- ディレクトリトラバーサルを防ぐため、ファイルパスを常にサニタイズすること
- セキュリティに関連する変更の後は `npx @claude-flow/cli@latest security scan` を実行すること

## コンカレンシー規律: 1メッセージ = 関連全操作 (Concurrency: 1 MESSAGE = ALL RELATED OPERATIONS)

- すべての操作は単一メッセージ内で並行/並列に実行しなければならない
- エージェント生成にはMCPだけでなく Claude Code の Task ツールを使用すること
- 常にすべての todo を1回の TodoWrite 呼び出しでまとめて更新すること（最低5〜10件以上）
- Task ツール経由で完全な指示を与え、1つのメッセージですべてのエージェントを生成すること
- 常にすべてのファイル読み込み/書き込み/編集を1つのメッセージにまとめること
- 常にすべての Bash コマンドを1つのメッセージにまとめること

## スワームオーケストレーション (Swarm Orchestration)

- 複雑なタスクを開始する際は、CLIツールを使用してスワームを初期化しなければならない
- Claude Code の Task ツールを使用して並行エージェントを生成しなければならない
- 実行のためにCLIツール単体を使用しないこと — Task ツールのエージェントが実際の作業を行う
- 複雑な作業では、1つのメッセージ内でCLIツールと Task ツールの両方を呼び出さなければならない

### 3層モデルルーティング (3-Tier Model Routing) (ADR-026)

| 階層 | ハンドラー | レイテンシ | コスト | ユースケース |
|------|---------|---------|------|-----------|
| **1** | Agent Booster (WASM) | <1ms | $0 | 単純な変換 (var→const, 型追加) — LLMをスキップ |
| **2** | Haiku | ~500ms | $0.0002 | 単純なタスク、低複雑度 (<30%) |
| **3** | Sonnet/Opus | 2-5s | $0.003-0.015 | 複雑な推論、アーキテクチャ、セキュリティ (>30%) |

- エージェントを生成する前に、常に `[AGENT_BOOSTER_AVAILABLE]` または `[TASK_MODEL_RECOMMENDATION]` を確認すること
- `[AGENT_BOOSTER_AVAILABLE]` の場合は Edit ツールを直接使用すること

## スワーム構成 & アンチドリフト (Swarm Configuration & Anti-Drift)

- コーディングスワームには常に階層トポロジーを使用すること
- 密な調整のために maxAgents を 6-8 に維持すること
- 明確な役割境界のために専門化戦略（specialized strategy）を使用すること
- 集団知性には `raft` コンセンサスを使用すること（リーダーが権威ある状態を維持）
- `post-task` フック経由で頻繁にチェックポイントを実行すること
- すべてのエージェント用に共有メモリ名前空間を維持すること

```bash
npx @claude-flow/cli@latest swarm init --topology hierarchical --max-agents 8 --strategy specialized
```

## スワーム実行ルール (Swarm Execution Rules)

- すべてのエージェント Task 呼び出しには常に `run_in_background: true` を使用すること
- 並列実行のために、すべてのエージェント Task 呼び出しを1つのメッセージにまとめること
- 生成後は停止すること — ツール呼び出しを追加したりステータスを確認したりしないこと
- TaskOutput をポーリングしたりスワームのステータスを確認したりしないこと — エージェントの復帰を信頼すること
- エージェントの結果が到着したら、次に進む前にすべての結果を確認すること

## V3 CLI コマンド (V3 CLI Commands)

### コアコマンド

| コマンド | サブコマンド数 | 説明 |
|---------|-------------|-------------|
| `init` | 4 | プロジェクト初期化 |
| `agent` | 8 | エージェントライフサイクル管理 |
| `swarm` | 6 | マルチエージェントスワーム調整 |
| `memory` | 11 | HNSW検索付きAgentDBメモリ |
| `task` | 6 | タスク作成およびライフサイクル |
| `session` | 7 | セッション状態管理 |
| `hooks` | 17 | 自己学習フック + 12ワーカー |
| `hive-mind` | 6 | ビザンチン障害耐性コンセンサス |

### クイック CLI 実行例

```bash
npx @claude-flow/cli@latest init --wizard
npx @claude-flow/cli@latest agent spawn -t coder --name my-coder
npx @claude-flow/cli@latest swarm init --v3-mode
npx @claude-flow/cli@latest memory search --query "authentication patterns"
npx @claude-flow/cli@latest doctor --fix
```

## 利用可能なエージェント (Available Agents) (60種類以上)

### コア開発 (Core Development)
`coder`, `reviewer`, `tester`, `planner`, `researcher`

### 専門分野 (Specialized)
`security-architect`, `security-auditor`, `memory-specialist`, `performance-engineer`

### スワーム調整 (Swarm Coordination)
`hierarchical-coordinator`, `mesh-coordinator`, `adaptive-coordinator`

### GitHub & リポジトリ (GitHub & Repository)
`pr-manager`, `code-review-swarm`, `issue-tracker`, `release-manager`

### SPARC メソドロジー (SPARC Methodology)
`sparc-coord`, `sparc-coder`, `specification`, `pseudocode`, `architecture`

## メモリコマンドリファレンス (Memory Commands Reference)

```bash
# 保存 (必須: --key, --value; オプション: --namespace, --ttl, --tags)
npx @claude-flow/cli@latest memory store --key "pattern-auth" --value "JWT with refresh" --namespace patterns

# 検索 (必須: --query; オプション: --namespace, --limit, --threshold)
npx @claude-flow/cli@latest memory search --query "authentication patterns"

# 一覧 (オプション: --namespace, --limit)
npx @claude-flow/cli@latest memory list --namespace patterns --limit 10

# 取得 (必須: --key; オプション: --namespace)
npx @claude-flow/cli@latest memory retrieve --key "pattern-auth" --namespace patterns
```

## クイックセットアップ (Quick Setup)

```bash
claude mcp add claude-flow -- npx -y @claude-flow/cli@latest
npx @claude-flow/cli@latest daemon start
npx @claude-flow/cli@latest doctor --fix
```

## Claude Code vs CLI ツール

- Claude Code の Task ツールがすべての実行を処理します: エージェント, ファイル操作, コード生成, git
- CLI ツールは Bash 経由の調整を処理します: swarm init, memory, hooks, routing
- CLI ツールを Task ツールエージェントの代用品として使用しないこと

## サポート (Support)

- ドキュメント: https://github.com/ruvnet/claude-flow
- Issues: https://github.com/ruvnet/claude-flow/issues
