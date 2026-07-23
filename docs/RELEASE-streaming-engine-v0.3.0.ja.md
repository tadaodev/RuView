# RuView Streaming Engine v0.3.0 — 監査可能な環境インテリジェンス

<p align="center">
  <strong><a href="RELEASE-streaming-engine-v0.3.0.md">English</a> | 日本語</strong>
</p>

## 本リリースの概要

多くのWiFiセンシングスタックは「数値を出力して終了」し、ユーザーにその数値をそのまま信用するよう求めます。**RuViewのストリーミングエンジンは、ブラックボックスな信用に頼る必要がないよう設計されています。** 「リビングに誰かがいる」「転倒リスクが上昇している」「部屋のレイアウトが変更された」といったエンジンが導き出したすべての結論は、完全なエビデンスチェーン（どのセンサーが検知したか、ノード間の合意度合い、どのキャリブレーションとモデルが適用されたか、どのプライバシーポリシーの下で出力されたか）を保持します。

コアとなるテーマは **「信頼 (Trust)」** です。「なぜ転倒の判定を信じるべきか？」という問いに対し、単なる確信度スコアではなく、電波信号エビデンス、センサー間合意度、キャリブレーションのトレーサビリティ、監査可能なプライバシー設定をもって応答します。

本リリースでは ADR-135〜146 シリーズが実装され、データコントラクト、信頼・プライバシー・監査機構、およびアルゴリズムが統合されたエンドツーエンドのパイプラインとして機能します。

## 監査可能性を支える2つのレイヤー

- **WorldGraph (`wifi-densepose-worldgraph`)** — *「どこで・なぜ」* を追跡するグラフ。部屋、センサー、RFリンク、人物追跡、オブジェクトアンカー、イベント、推測状態を、型定義されたエッジ（`observes`, `located_in`, `derived_from`, `contradicts`, `privacy_limited_by`）で接続します。プライバシーポリシーはグラフ構造そのものに反映されるため、何がなぜ抑制されたかを監査人が可視化・検証可能です。
- **信頼されたセマンティックレコード (Trusted Semantic Records)** — *「現在何を推論しているか」* の記録。セマンティック状態ごとにモデルバージョン、キャリブレーションバージョン、エビデンス参照、信頼度、有効期限、プライバシータグを保持します。高リスクなアクション（介護者への緊急通知等）の実行には、単一ノードのノイズではなく**複数信号の合意**が必須となります。

## v0.3.0 の新機能一覧

| 領域 | 機能・能力 |
|------|-----------|
| フレームコントラクト (ADR-136) | `ComplexSample` (リトルエンディアン標準), 各フレームへのトレーサビリティフィールド, `CanonicalFrame` BLAKE3 ウィトネス証明 |
| キャリブレーション (ADR-135) | `BaselineCalibration::apply()` により決定論的 `calibration_id` を各フレームに付与 |
| フュージョン品質 (ADR-137) | ノードごと重み・エビデンス参照・矛盾フラグを持つ `QualityScore`、キャリブレーション不一致の検出 |
| アレイ連携 (ADR-138) | クロック品質 + 幾何構造ゲート。低下ノードは「観測専用 (watch-only)」へ変更 |
| WorldGraph (ADR-139) | 型定義されたデジタルツイン + プライバシーロールアップ + 決定論的永続化 |
| セマンティックレコード (ADR-140) | 監査可能な状態記録 + 複数信号エージェントルーティング |
| プライバシー制御プレーン (ADR-141) | モード定義 + アクション + BLAKE3 ハッシュチェーンによる改ざん防止証明 |
| 環境変化 & VoxelMap (ADR-142) | リンク間「部屋の変化」検知 + ベイズ推定占有ボクセルマップ |
| RF-SLAM (ADR-143) | 永続的反射体発見 → 静的アンカーの学習 |
| UWBフュージョン (ADR-144) | 外れ値除外を伴う距離制約の精緻化（将来拡張向け） |
| アブレーションテスト (ADR-145) | メンバーシップ推論プライバシー漏洩を含む特徴量メトリクス評価 |
| RFエンコーダー (ADR-146) | 不確実性推定量を持つマルチタスクヘッド + 対照学習バッチャー（将来拡張向け） |
| **ストリーミングエンジン (`wifi-densepose-engine`)** | 全機能を統合したルート。1回の `process_cycle()` で全パイプラインを実行 |

## クイックスタート

```rust
use wifi_densepose_engine::StreamingEngine;
use wifi_densepose_bfld::PrivacyMode;
use wifi_densepose_geo::types::GeoRegistration;
use wifi_densepose_signal::ruvsense::fusion_quality::CalibrationId;

// 1. プライバシーモードとモデルバージョンを指定してエンジンを生成
let mut engine = StreamingEngine::new(PrivacyMode::PrivateHome, 1, GeoRegistration::default());

// 2. 空間構成の定義 (部屋とセンサーを WorldGraph ノードとして登録)
let room = engine.add_room("living_room", "Living Room");
let sensor = engine.add_sensor("esp32-com9", room);
engine.register_node_geometry(0, 1.0, 0.0, 0.0);   // アレイ幾何構造の登録 (オプション)

// 3. 50 ms 周期ごとにノードのCSIフレームとキャリブレーションIDを入力
let out = engine.process_cycle(&node_frames, CalibrationId(0xABCD), room, now_ms)?;

// 4. 結果は追跡可能な信頼済み推論として出力される
println!("class={:?} demoted={} evidence={:?}",
         out.effective_class, out.demoted, out.provenance.evidence);
assert_eq!(out.quality.calibration_id, Some(CalibrationId(0xABCD)));

// 5. ワールドモデルの永続化
let snapshot = engine.snapshot_json()?;        // RVF ペイロード (生のRFフレームは除外)
```

ノード間キャリブレーションの不一致（自動的にプライバシーレベルが降格されます）:

```rust
let out = engine.process_cycle_calibrated(
    &node_frames,
    &[Some(CalibrationId(1)), Some(CalibrationId(2))], // ID不一致 → CalibrationIdMismatch
    room, now_ms)?;
assert!(out.demoted);                          // プライバシーが Restricted へ自動降格
assert_eq!(out.quality.calibration_id, None);  // 統一キャリブレーションなし
```

## 受入検証済み項目 (Validated)

アーキテクチャの妥当性を証明する受入テストシナリオ：

- **ADR-137** `2つのキャリブレーション済みフレーム → キャリブレーション不一致 → QualityScore 矛盾フラグ → Restricted → calibration_id None → ウィトネス安定`
- **ADR-139** `live_frame → フュージョン → worldgraph_update → プライバシーロールアップ → 永続化 → リロード → 同一コンテンツ` （生のRFフレームは永続化されない）
- **ADR-140** `生スナップショット → セマンティックプリミティブ → SemanticStateRecord → 合意ルール → 期限切れレコード棄却`
- **ADR-142** `3リンクが30フレームドリフト → ChangePoint → VoxelMap 蓄積 → 低確信度抑制 → VoxelGate Restricted ヒストグラム → ADR-137 矛盾`

## パフォーマンスと安全性

- **1フルサイクルあたり約 6.35 µs** (4ノード / 56サブキャリア) — 50 ms / 20 Hz の処理時間予算に対して約7,800倍の余裕（ベンチマーク: `cargo bench -p wifi-densepose-engine`）。
- 新規クレートは `#![forbid(unsafe_code)]` を指定。ハードコードされた秘密情報なし。入力はシステム境界で検証。
- `wifi-densepose-core` および `wifi-densepose-bfld` は ESP32-S3 オンデバイス動作のために `#![no_std]` ビルドに対応。

## ビルド & テスト

```bash
cd v2
cargo build --release --workspace --no-default-features    # 最適化ビルド
cargo test --workspace --no-default-features                # 全テスト実行
cargo test -p wifi-densepose-engine                         # 13件の統合テスト
cargo bench -p wifi-densepose-engine                        # 1サイクルあたりのレイテンシ測定
```

## ステータス（誠実な開示）(Status honest)

`wifi-densepose-engine` コンポジションルートを経由してエンドツーエンドで統合・検証済み: ADR-135/136/137/138/139/141/142/143。将来拡張 / 統合対応中: ライブ 20 Hz sensing-server ループの接続、UWBハードウェア (ADR-144)、および RFエンコーダーモデル学習 (ADR-146)。各 GitHub Issue (#840–#850) に「実装済み (Built)」と「統合接着コンポーネント (Integration glue)」が明記されています。
