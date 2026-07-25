# Original User Request

## 2026-07-24T23:13:27Z

RuView App Store（dashboard/src/store/apps.ts および dashboard/src/components/nv-app-store.ts）に登録されている全66種類のエッジアプリについて、タイトル（name）および説明文（summary / body）、カテゴリ名、ステータスラベルの完全日本語ローカライズを実装し、ビルド受入検証を行う。

Working directory: c:\Project\RuView

## Requirements

### R1. App Store エッジアプリ全66種の日本語データ定義
- `dashboard/src/store/apps.ts` 内の `APPS` 配列に対し、全66個のアプリの日本語タイトル (`name_ja`) および直感的に理解しやすい日本語説明文 (`summary_ja`) を追加・拡張する。
- カテゴリ（医療、防犯・警備、スマートビル、店舗・商業、産業、信号処理、オンライン学習、空間・グラフ、時相ロジック、AIセーフティ、量子信号、自律走行・メッシュ、研究・特殊、シミュレータ）の日本語マッピングを完成させる。

### R2. UI描画・フィルタリングの日本語対応
- `dashboard/src/components/nv-app-store.ts` において、`locale === 'ja'` の際に `name_ja` / `summary_ja` を優先描画し、検索フィルタおよびカテゴリチップが日本語で正しく動作するように調整する。

### R3. ビルド受入検証
- `dashboard/` 内で `npx vite build` を実行し、型エラーなしで正常完了することを確認する。
