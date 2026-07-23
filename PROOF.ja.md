# PROOF（証明） — すべての主張を再現するか、未再現の項目を明確化する

<p align="center">
  <strong><a href="PROOF.md">English</a> | 日本語</strong>
</p>

本プロジェクト（RuView / wifi-densepose）には、一部で「AIスロップ（無意味なAI生成物）」や「フェイク」との疑惑が向けられることがありました。本書はその疑問に対する明確な回答です：**懐疑的な検証者であってもリポジトリをクローンし、スクリプトを1つ実行するだけで、すべての主要な主張を自身の環境で検証できるか、あるいは「主張段階であり未再現（必要な条件を明記）」であることを確認できます。** 実行可能なコマンドを伴わない主張は一切含まれていません。

```bash
git clone https://github.com/ruvnet/RuView && cd RuView
bash scripts/prove.sh          # コアゲート + アンチスロップ主張テストの実行
bash scripts/prove.sh --full   # 機能フラグ付きサブセットの検証も試行
```

`prove.sh` は、**フラグ非依存**のすべての主張が成功した場合のみ終了コード 0 を返します。前提条件が必要な主張については実行を失敗させず、必要なリソース（GPU、データセット、実機ハードウェア、学習済みチェックポイント）を表示して自ら再現できるように案内します。

---

## 評価基準 (Grading)

- **MEASURED（実測済み）** — 当方のハードウェアで再現され、正確なコマンドが記録され、修正前のコードで失敗するテストによって固定された項目。`prove.sh` はこれらを再実行します。
- **CLAIMED（主張段階）** — 文献や元のソースにより主張・測定されているが、本リポジトリの自動テストハーネスではまだ再現されていない項目。
- **DATA-GATED / HARDWARE-GATED（データ/ハードウェア制約あり）** — コードパス自体は本物でありテスト済みだが、精度やスループットの検証に未同梱のデータやハードウェアが必要な項目。数値を捏造することはせず、型定義されたエラーや `weights_trained` / フラグを返します。

---

## ハードゲート（Rust + Python環境で実行可能）

| 主張内容 | 区分 | 再現コマンド |
|---|---|---|
| Rust ワークスペース: 3,128 テスト成功、0 件失敗 | **MEASURED** | `cd v2 && cargo test --workspace --no-default-features` |
| 確定性CSIパイプライン証明 (ビット完全 SHA-256) | **MEASURED** | `python archive/v1/data/proof/verify.py` → `VERDICT: PASS` |

---

## アンチスロップ検証テスト（修正前コードでは失敗するテスト）

| 主張内容 | 区分 | テストコマンド (`cargo test -p <crate> <name>`) |
|---|---|---|
| フュージョン時の悪意ある入力によるDoSパニック解消 (ADR-156 §2.2) | **MEASURED** | `wifi-densepose-ruvector :: triangulation_out_of_range_index_returns_none_no_panic` |
| **「Soul Signature」個体識別に関する誠実な境界:** WiFiのみの心拍・呼吸チャネルでは2人の識別は不可 (差分 ≈ 0.0005) | **MEASURED** | `wifi-densepose-bfld :: cardiac_alone_cannot_separate_identity_matches_audit` |
| OccWorld `predict()` はランダムノイズではなく実体のある決定論的処理 | **MEASURED** | `wifi-densepose-occworld-candle :: predict_is_deterministic_for_same_input` |
| 姿勢推定ランタイムがデフォルト設定で実フレームを出力 (ADR-159 A1) | **MEASURED** | `cog-pose-estimation :: default_config_emits_frames_with_real_model` |
| 人数カウントが未学習クラスを正しく検知しカウント水増しを防止 (ADR-159 A2) | **MEASURED** | `cog-person-count :: untrained_class_argmax_is_flagged_low_confidence` |
| 医療向けエッジスキルに「医療機器ではない」免責事項を保持 (ADR-160 A1) | **MEASURED** | `wifi-densepose-wasm-edge :: a1_med_modules_have_clinical_disclaimer` (`--features std`) |
| 生存者重複排除 3→1、カウントインフレ防止 (ADR-158 §2) | **MEASURED** | `wifi-densepose-mat :: test_identical_vitals_no_location_dedup_to_one` (`--features mat`) |

---

## 測定済みパフォーマンス（ベンチマーク再現）

| 主張内容 | 区分 | 再現コマンド |
|---|---|---|
| PSD FFTプランナーキャッシュ 2.0–3.1倍、DTW帯域 2.4–4.1倍 (ADR-154) | **MEASURED** | `cd v2 && cargo bench -p wifi-densepose-signal` |
| fuse() の二重クローン削除によりマーシャリング約2.17倍高速化 (ADR-156) | **MEASURED** | `cd v2 && cargo bench -p wifi-densepose-ruvector --bench fusion_bench` |
| ゼロコピー ORT 入力により約1.48倍高速化 (ADR-155) | **MEASURED** | `cd v2 && cargo bench -p wifi-densepose-nn --features onnx --bench onnx_bench` |
| ポイントクラウドスプラット処理 9→2 パス化で約1.24倍高速化 (ADR-160) | **MEASURED** | `cd v2 && cargo bench -p wifi-densepose-pointcloud --bench splats_bench` |
| Windows Native wlanapi マルチBSSIDスキャン 9.74 Hz (netshは約2 Hz) | **MEASURED (Windows)** | `cd v2 && cargo test -p wifi-densepose-wifiscan -- --ignored measure_native_scan_rate` |

---

## 当プロジェクトが主張「しない」事項（誠実なネガティブ証明）

| 機能・能力 | 状態 |
|---|---|
| **WiFiのみによる名前付き個体識別** | **未達成であり、その理由を測定済み。** チャネルマッチャー自体は本物ですが、WiFiのみのチャネルでは識別が確定しません (ギャップ 0.0005)。AETHERチャネルを含む実際の登録データに依存するため、誇大主張は行いません。 |
| WiFlow-STD 約96% PCK@20 | **CLAIMED-reproduced** (当方 RTX 5080 上で測定)。ユーザー環境での検証にはNVIDIA GPUおよびMM-Fiデータセットが必要です。アップストリーム公開チェックポイントの不具合はリサーチ上で明記済みです。 |
| OccWorld 軌跡予測精度 | 学習済みチェックポイントに依存。`predict()` はチェックポイント読込まで `weights_trained=false` を保持し、捏造された値を返し早まりません。 |
| エッジスキルの個別検知精度 | 未検証項目については実験的/研究用として免責事項を設定し、DSP処理は本物であっても精度の過剰主張は行いません。 |
| 802.11bf-2025 規格適合性 | 現時点で適合シリコンが市販されていないため、シミュレーション検証されたプロトコルモデルとして実装されています。 |

---

## 出典・トレーサビリティ (Provenance)

すべての主張はコミットされたADR (`docs/adr/ADR-154`…`ADR-163`)、テスト、ベンチマークログ、または評価結果ファイルに基づいています。不都合な結果であっても撤回や限界をオープンに記述・コミットすることで、透明性と科学的誠実性を保証しています。
