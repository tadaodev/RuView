# RuView 日本語ドキュメントインデックス (Documentation Index)

<p align="center">
  <a href="https://cognitum.one/marketplace/musica">
    <img src="../assets/musica-promo.png" alt="Cognitum Musica" width="100%">
  </a>
</p>

π RuView（WiFi-DensePose）プロジェクトの全ドキュメント、主要ガイド、ドメインモデル、および 182件のアーキテクチャ決定記録（ADR）への日本語総合インデックスです。

---

## 📖 主要ガイド一覧 (Major Guides)

| ガイド名 | 説明 | リンク |
|---------|------|-------|
| **ユーザーガイド** | システムのインストール、基本操作、API参照、ハードウェア準備、モデル学習手順 | [`docs/user-guide.md`](user-guide.md) |
| **ビルドガイド** | Rust ワークスペースおよび Python パッケージのソースビルド手順 | [`docs/build-guide.md`](build-guide.md) |
| **トラブルシューティング** | 接続不可、カウント異常、ジッター、OTAエラー等の既知の現象と対策 | [`docs/TROUBLESHOOTING.ja.md`](TROUBLESHOOTING.ja.md) (英語版: [`TROUBLESHOOTING.md`](TROUBLESHOOTING.md)) |
| **災害検知 (WiFi-Mat)** | 瓦礫・障害物越し生存者検知システム (WiFi-Mat) の運用ガイド | [`docs/wifi-mat-user-guide.md`](wifi-mat-user-guide.md) |
| **Apple Home & HomePod 統合** | Native HAP-1.1 ブリッジによる Apple Home / HomePod 連携手順 | [`docs/user-guide-apple-homepod.md`](user-guide-apple-homepod.md) |
| **機能・性能証明** | チャネル状態情報（CSI）ベースの非接触センシング能力の実証 | [`docs/proof-of-capabilities.md`](proof-of-capabilities.md) |
| **詳細リファレンス** | 信号処理アルゴリズム、学習パイプライン、CLI、デプロイメントの拡張解説 | [`docs/readme-details.md`](readme-details.md) |
| **ストリーミングエンジン v0.3.0** | 監査可能環境インテリジェンス（WorldGraph、信頼データ構造） | [`docs/RELEASE-streaming-engine-v0.3.0.ja.md`](RELEASE-streaming-engine-v0.3.0.ja.md) (英語版: [`RELEASE-streaming-engine-v0.3.0.md`](RELEASE-streaming-engine-v0.3.0.md)) |
| **ベンダーRFプロバイダー** | Qualcomm, Origin, Plume, Mist, NETGEAR等RFプロバイダー連携 | [`docs/vendor-rf-providers.md`](vendor-rf-providers.md) |
| **セキュリティ監査** | WASM・エッジノード・ベンダー境界におけるセキュリティ評価結果 | [`docs/security-audit-wasm-edge-vendor.md`](security-audit-wasm-edge-vendor.md) |
| **ウィトネス検証ログ 028** | ADR-028 に基づく 33項目の検証アテスト行列 | [`docs/WITNESS-LOG-028.md`](WITNESS-LOG-028.md) |
| **ウィトネス検証ログ 110** | ADR-110 に基づく ESP32-C6 Wi-Fi 6 / TWT 検証記録 | [`docs/WITNESS-LOG-110.md`](WITNESS-LOG-110.md) |

---

## 🔗 エコシステム & 外部統合 (Integrations)

- **[Home Assistant & Matter 統合ガイド](integrations/home-assistant.md)**: MQTT Auto-Discovery (HA-DISCO) および Matter ブリッジ経由での 21エンティティ連携、3つのスターターブループリント、Lovelace ダッシュボード。
- **[セマンティックプリミティブ指標](integrations/semantic-primitives-metrics.md)**: 就寝中、救急、部屋アクティブ、離床等の F1 スコア精度評価。

---

## 📐 ドメインモデル (Domain-Driven Design)

RuView は ドメイン駆動設計（DDD）を採用し、境界づけられたコンテキスト（Bounded Context）ごとに整理されています。詳細：[`docs/ddd/README.md`](ddd/README.md)

- **RuvSense コンテキスト**: [`docs/ddd/ruvsense-domain-model.md`](ddd/ruvsense-domain-model.md) — マルチスタティックフュージョン、コヒーレンスゲート、TDMスロット
- **rvCSI エッジセンシング**: [`docs/ddd/rvcsi-domain-model.md`](ddd/rvcsi-domain-model.md) — CSIフレームバリデーション、DSP、Typed Events

---

## 🧩 エッジモジュールカタログ (Edge Modules)

ESP32 / Cognitum Seed 上で動作する 105個のCogモジュールの分類一覧：

- **医療・ヘルスケア**: [`docs/edge-modules/medical.md`](edge-modules/medical.md) — 呼吸同期、心拍異常、無呼吸、歩行分析、転倒検知
- **セキュリティ**: [`docs/edge-modules/security.md`](edge-modules/security.md) — 侵入検知、滞留検知、銃声・ガラス割れ検知、パニック動作
- **ビル管理**: [`docs/edge-modules/building.md`](edge-modules/building.md) — 人数カウント、HVAC連携、照明ゾーン、漏水・火災検知
- **リテール**: [`docs/edge-modules/retail.md`](edge-modules/retail.md) — 来店動線、滞在ヒートマップ、行列長推計、棚操作検知
- **産業・工場**: [`docs/edge-modules/industrial.md`](edge-modules/industrial.md) — 密閉空間監視、フォークリフト接近、安全装備遵守
- **エキゾチック・研究**: [`docs/edge-modules/exotic.md`](edge-modules/exotic.md) — 感情推定、降雨検知、植物成長、手話ジェスチャー

---

## 🏗️ アーキテクチャ決定記録 (ADR Overviews in `docs/adr/`)

RuView リポジトリには **182件の ADR** が収録されており、すべての技術的決定の背景・選択肢・結論が記録されています。詳細な一覧は [`docs/adr/README.md`](adr/README.md) を参照してください。

### 1. ハードウェア & ファームウェア (Hardware & Firmware)
- **[ADR-012](adr/ADR-012-esp32-csi-sensor-mesh.md)**: 分散センシング向け ESP32 CSI センサーメッシュ
- **[ADR-018](adr/ADR-018-esp32-dev-implementation.md)**: ESP32 開発・実装パス
- **[ADR-028](adr/ADR-028-esp32-capability-audit.md)**: ESP32 機能監査およびウィトネス証明
- **[ADR-029](adr/ADR-029-ruvsense-multistatic-sensing-mode.md)**: RuvSense マルチスタティックセンシング（TDM、チャネルホッピング）
- **[ADR-039](adr/ADR-039-esp32-edge-intelligence.md)**: ESP32-S3 オンデバイス・エッジインテリジェンス
- **[ADR-041](adr/ADR-041-wasm-module-collection.md)**: WASM モジュールコレクション (エッジモジュール群)
- **[ADR-110](adr/ADR-110-esp32-c6-firmware-extension.md)**: ESP32-C6 ファームウェア拡張（Wi-Fi 6 / TWT / 802.15.4 / LPコア）

### 2. 信号処理 & センシング (Signal Processing & Sensing)
- **[ADR-013](adr/ADR-013-feature-level-sensing-commodity-gear.md)**: 市販機器における特徴量レベルセンシング
- **[ADR-014](adr/ADR-014-sota-signal-processing.md)**: 最先端 (SOTA) 信号処理アルゴリズム
- **[ADR-021](adr/ADR-021-vital-sign-detection-rvdna-pipeline.md)**: バイタルサイン検出パイプライン（呼吸数・心拍数）
- **[ADR-030](adr/ADR-030-ruvsense-persistent-field-model.md)**: 永続的フィールドモデルとドリフト検出
- **[ADR-042](adr/ADR-042-coherent-human-channel-imaging.md)**: コヒーレント人体チャネルイメージング (CHCI)
- **[ADR-134](adr/ADR-134-csi-to-cir-time-domain-multipath.md)**: チャネルインパルス応答 (CIR) 時間領域マルチパス解析
- **[ADR-135](adr/ADR-135-empty-room-baseline-calibration.md)**: 空室ベースライン・キャリブレーション

### 3. 機械学習 & AIモデル (Machine Learning & Training)
- **[ADR-005](adr/ADR-005-sona-self-learning-pose-estimation.md)**: 姿勢推定のための SONA 自己学習機構
- **[ADR-015](adr/ADR-015-public-dataset-training-strategy.md)**: 公開データセット活用戦略 (MM-Fi, Wi-Pose)
- **[ADR-016](adr/ADR-016-ruvector-integration.md)**: RuVector 学習パイプライン統合
- **[ADR-024](adr/ADR-024-contrastive-csi-embedding-model.md)**: AETHER: 対照学習 CSI エンベディングモデル
- **[ADR-027](adr/ADR-027-cross-environment-domain-generalization.md)**: MERIDIAN: クロス環境ドメイン汎化
- **[ADR-101](adr/ADR-101-pose-estimation-cog.md)**: 17キーポイント姿勢推定 Cog モジュール仕様
- **[ADR-149](adr/ADR-149-public-community-leaderboard-huggingface.md)**: AetherArena: Hugging Face 空間知能ベンチマーク
- **[ADR-150](adr/ADR-150-rf-foundation-encoder.md)**: RF ファウンデーションエンコーダー
- **[ADR-151](adr/ADR-151-room-calibration-specialist-training.md)**: 部屋別キャリブレーション & 専門化モデル学習
- **[ADR-152](adr/ADR-152-wifi-pose-sota-2026-intake.md)**: WiFi-Pose SOTA 2026 インテーク

### 4. プラットフォーム & エコシステム (Platform & Integrations)
- **[ADR-019](adr/ADR-019-sensing-only-ui-mode.md)**: ガウシアンスプラットによるセンシング専用 UI
- **[ADR-034](adr/ADR-034-expo-mobile-app.md)**: Expo React Native モバイルアプリ
- **[ADR-043](adr/ADR-043-sensing-server-ui-api-completion.md)**: センシングサーバー API & UI 完成仕様
- **[ADR-115](adr/ADR-115-home-assistant-integration.md)**: Home Assistant MQTT auto-discovery + Matter ブリッジ
- **[ADR-124](adr/ADR-124-rvagent-mcp-ruvector-npm-integration.md)**: SENSE-BRIDGE: rvagent MCP サーバー統合
- **[ADR-169](adr/ADR-169-adam-mode-light-theme.md)**: three.js デモ用 ライトテーマ (adam-mode)
- **[ADR-170](adr/ADR-170-yoga-mode-pose-system.md)**: ヨガ姿勢検知・採点システム (yoga-mode)

### 5. アーキテクチャ & インフラ (Architecture & Infrastructure)
- **[ADR-001](adr/ADR-001-wifi-mat-disaster-detection.md)**: 災害救助 WiFi-Mat アーキテクチャ
- **[ADR-010](adr/ADR-010-witness-chains-audit-trail-integrity.md)**: 監査トレイルの完全性を保証するウィトネスチェーン
- **[ADR-095](adr/ADR-095-rvcsi-edge-rf-sensing-platform.md)**: rvCSI エッジ RF センシング・ランタイムプラットフォーム
- **[ADR-139](adr/ADR-139-worldgraph-environmental-digital-twin.md)**: WorldGraph 環境デジタルツイン
- **[ADR-141](adr/ADR-141-bfld-privacy-control-plane-modes-attestation.md)**: プライバシー制御プレーン & アテスト証明
- **[ADR-148](adr/ADR-148-drone-swarm-control-system.md)**: ドローン自律制御スワームシステム (`ruview-swarm`)
- **[ADR-168](adr/ADR-168-benchmark-proof.md)**: ベンチマーク結果の再現性・検証手法
- **[ADR-182](adr/ADR-182-npx-ruview-harness-via-metaharness.md)**: `npx @ruvnet/ruview` ポータブルハーネス
