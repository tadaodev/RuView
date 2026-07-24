# Original User Request

## Initial Request — 2026-07-24T15:44:17Z

RuViewプロジェクトの主要Web UI画面（Classic Web UI、Observatory 3D画面、Viteダッシュボード）および主要ドキュメントの総合的な日本語ローカライズを追加実施し、日本語選択時に日本人が直感的に理解できる品質へ引き上げる。

Working directory: c:\Project\RuView
Integrity mode: development

## Requirements

### R1. Web UI 画面群の完全日本語ローカライズ (Classic Web UI, Observatory 3D, Vite Dashboard)
`ui/` (Classic UI & Observatory 3D) および `dashboard/` (Vite UI) 上でハードコードされている英語表現（ボタン名、設定項目、アラートメッセージ、グラフ軸ラベル、モード名、エラー表示等）を完全抽出・辞書化し、日本語選択時に日本人が直感的に意味を理解できる親切な日本語表記へ統一する。
- 例: `Empty Room` ➔ `空部屋測定（ベースライン校正）`
- 例: `Fall Detect` ➔ `転倒検知アラート`
- 例: `Vital Signs` ➔ `バイタル測定（心拍・呼吸）`
- 例: `CSI Variance` ➔ `電波変動量（動作強度）`

### R2. 主要ドキュメント・ガイドの日本語整備
`README.ja.md` および `docs/` 配下の主要ガイド・設定ドキュメントについて、主要機能を中心に日本語表現を精査し、直感的で分かりやすい内容へ同期更新する。

### R3. エラー時の自動一時停止・リトライ制御 (Error Pausing Guard)
実行中に「Agent execution terminated due to error.」などのシステムエラーが数回連続して発生した場合、ジョブを即座に一時停止する。特に日本時間（JST）の24:00〜6:00の間（深夜帯）に発生した場合は、1時間程度安全に一時停止したのちに自動再開する制御ルールを設ける。

### R4. 製造・監査・テストの3ロール運用
- **製造者（Developer）**: 各画面およびドキュメントの日本語辞書・表示・ロジックの修正
- **システム監査（Auditor）**: コード品質、ライセンス適合性（商用不可ライブラリ除外）、既存機能のリグレッション検証
- **テスター（Tester）**: `npx vite build` や既存自動テストの動作検証および日本語表示の網羅性チェック

## Acceptance Criteria

### 1. ローカライズ品質・直感性
- [ ] 「日本語 (JA)」を選択した際、主要画面（Classic Web UI、Observatory 3D、Vite Dashboard）上の全メニュー、ボタン、ダイアログ、説明文が直感的な日本語で表示されること。
- [ ] ドロップダウンやモード名の専門用語に初心者でも分かりやすい補足が記載されていること。

### 2. テスト・ビルド受入検証
- [ ] Vite Dashboard のビルド (`npx vite build`) および Rust / Python テストが成功（PASS）すること。
- [ ] 深夜帯エラー時の安全停止・再開ルールに準拠して実行完了すること。

## Follow-up — 2026-07-24T21:59:08Z

RuViewダッシュボード（http://127.0.0.1:5174/）およびObservatory 3D画面（http://127.0.0.1:3000/observatory.html）の完全日本語ローカライズ、画面描画（真っ白な画面の解消）、キーボードショートカット（Windows Ctrl+K / Ctrl+R / Ctrl+, 対応）、および動作検証を実施する。

Working directory: c:\Project\RuView

## タスク内容

1. **画面描画と完全日本語化の監査・検証**:
   - `dashboard/` の全Litコンポーネント（`nv-app`, `nv-help`, `nv-palette`, `nv-onboarding`, `nv-settings-drawer` 等）でインポートエラーや未定義参照による真っ白画面（Blank Screen）が発生しないことを検証。
   - ダッシュボードのオンボーディング（`Welcome to nvsim`）、ヘルプセンター（全5タブ）、設定ドロワー、コマンドパレット、Observatory 3Dの全セレクトボックス・設定ダイアログが、日本語選択時に日本人が一目で理解できる自然な日本語表記になっていることを全検証。

2. **Windows用キーボードショートカット対応の検証**:
   - Mac OS専用キー（⌘K, ⌘R, ⌘,）を Windows の `Ctrl+K`, `Ctrl+R`, `Ctrl+,` で完全に動作させ、表記も `Ctrl+K / ⌘K` 等で整っていること。

3. **ビルド受入検証**:
   - `npx vite build` を `dashboard/` 内で実行し、エラー 0 件で正常コンパイルされることを確認。

4. **チーム運用**:
   - **製造者 (Developer)**: コンポーネントおよび辞書の修正
   - **システム監査 (Auditor)**: コード・表示品質およびリグレッション検証
   - **テスター (Tester)**: ビルドおよび動作確認

