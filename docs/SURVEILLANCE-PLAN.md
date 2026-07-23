# RuView 防犯・侵入監視特化システム 建築・実装計画 (Surveillance Plan)

## 1. 概要 (Overview)
RuViewプロジェクトをベースに、カメラ不要のWiFi電波（WiFi CSI）による防犯・侵入監視・動体トラッキングに特化したシステム構成計画。

## 2. 設計方針 (Architecture Strategy)
- **パターンAの採用 (Pattern A)**: 本家リポジトリ (`ruvnet/RuView`) からのバグ改修・機能改善を `git fetch upstream` でスムーズに取り込めるよう、フォーク構造（`tadaodev/RuView`）および基本コードベースを維持。
- **機能の集約とUI特化**: 防犯・監視に必要なモジュールのみを前面に出し、不要な実験・デモモジュール（量子シミュレータ等）はメニューから非表示・分離。

## 3. 保持・主要運用する構成要素 (Core Modules)

### ① マイコン・ハードウェア接続層 (ESP32 Setup & Firmware)
- `firmware/esp32-csi-node/`: ESP32-S3用WiFi CSIデータ取得ファームウェア
- `provision.py`: マイコンへのフラッシュ書き込み・Wi-Fi接続設定ツール
- `v2/crates/wifi-densepose-hardware`: TDM通信・CSIパケットデコーダー

### ② AI学習・キャリブレーション・メンテナンス層 (AI Training & Calibration)
- `v2/crates/wifi-densepose-train`: 空部屋ベースライン測定、個人登録（Enrollment）、環境変化再学習
- `v2/crates/wifi-densepose-nn`: ONNX/PyTorch/Candleによる姿勢推論・動体判定エンジン
- `archive/v1/data/proof/verify.py`: AIシグナルプロセッサ検証スクリプト

### ③ 防犯監視モニタリング・アラートUI層 (Surveillance UI & Alert)
- リアルタイムポーズ追跡・侵入検知・転倒/異常アラート表示画面 (`ui/`)
- 監視専用エントリーポイント／モード切り替え機能

## 4. 整理・非表示対象 (Excluded Features)
- `dashboard/` (nvsim 量子磁気シミュレータ)
- `ruview-swarm/` (ドローン群制御)
- `aether-arena/` (学術モデル比較デモ)

## 5. 今後の実装ステップ (Next Implementation Steps)
1. 実機マイコン（ESP32-S3等）の接続・書き込み検証
2. 防犯監視専用の起動スクリプト / 設定画面の配備
3. 本家 (`upstream/main`) からの最新バグ改修マージと同期
