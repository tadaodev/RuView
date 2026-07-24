# RuView 日本語ローカライズおよびダッシュボード修正の包括的解析レポート (Explorer M12)

## 1. 概要
本レポートは、RuViewプロジェクトにおける `dashboard/`（Litコンポーネント群）および `ui/`（UIユーティリティ群）の技術調査結果をまとめたものです。
画面白飛び（Blank Screen）やランタイムクラッシュの根本原因、未翻訳・非推奨用語の箇所特定、Windowsショートカット (`Ctrl+K`, `Ctrl+R`, `Ctrl+,`) の対応状況について詳細に分析しています。

---

## 2. Litコンポーネントの画面白飛び・描画エラーの根本原因分析

`dashboard/` において `npx tsc --noEmit` およびコード静的解析を実行した結果、Litコンポーネントのレンダリングライフサイクル中に未定義変数の参照による `ReferenceError` や `TypeError` が発生し、コンポーネントが例外を出してクラッシュ（画面白飛び）する致命的なバグが特定されました。

### 原因1: `nv-help.ts` における未定義変数 `FAQ` および `SHORTCUTS` の参照 (最深刻)
- **該当ファイル**: `c:\Project\RuView\dashboard\src\components\nv-help.ts`
- **該当行**:
  - 行 454: `${FAQ.map((item) => ...)}`
  - 行 468: `${SHORTCUTS.map((s) => ...)}`
- **問題詳細**: `nv-help.ts` 内で定義されている定数名は `FAQ_EN` / `FAQ_JA` および `SHORTCUTS_EN` / `SHORTCUTS_JA` です。しかし、`renderFaq()` および `renderShortcuts()` メソッド内で存在しない変数 `FAQ` および `SHORTCUTS` を直接 `.map()` しています。
- **影響**: ユーザーがヘルプセンターの「FAQ」タブまたは「Shortcuts」タブをクリックした瞬間、`Uncaught ReferenceError: FAQ is not defined` / `SHORTCUTS is not defined` が発生し、Litコンポーネントの描画プロセスが中断して画面が真っ白（Blank Screen）になります。
- **修正推奨 (Worker M13向け)**:
  - `renderFaq()`: `const faqList = getLocale() === 'ja' ? FAQ_JA : FAQ_EN;` を取得して `.map()` する。
  - `renderShortcuts()`: `const shortcutsList = getLocale() === 'ja' ? SHORTCUTS_JA : SHORTCUTS_EN;` を取得して `.map()` する。

### 原因2: `nv-palette.ts` における `getLocale` 未インポートによる参照エラー
- **該当ファイル**: `c:\Project\RuView\dashboard\src\components\nv-palette.ts`
- **該当行**:
  - 行 8: `import { t } from '../i18n';`
  - 行 70: `const isJa = getLocale() === 'ja';`
- **問題詳細**: 行 70 で `getLocale()` を呼び出していますが、行 8 のインポート文に `getLocale` が含まれていません。
- **影響**: コマンドパレット (`nv-palette`) を開いた際、または `cmds` プロパティが評価された際に `ReferenceError: getLocale is not defined` が発生し、コマンドパレットの描画および動作が停止します。
- **修正推奨 (Worker M13向け)**: 行 8 を `import { t, getLocale } from '../i18n';` に修正。

### 原因3: `nv-app-store.ts` における `toast` 関数未インポートおよび `_unsubI18n` クラスフィールド未定義
- **該当ファイル**: `c:\Project\RuView\dashboard\src\components\nv-app-store.ts`
- **該当行**:
  - 行 260: `toast(\`Activated ${app.name}${note}\`, '✦');`
  - 行 234: `this._unsubI18n = i18n.onLocaleChange(...);`
  - 行 244: `if (this._unsubI18n) this._unsubI18n();`
  - 行 274: `a.tags.some((t) => t.toLowerCase().includes(q))`
- **問題詳細**:
  1. 行 260 で `toast()` を使用していますが、`nv-toast` からインポートされていません。アプリトグル時に `ReferenceError: toast is not defined` が発生します。
  2. `_unsubI18n` が `NvAppStore` クラスのフィールドとして宣言されておらず、TS2339 エラーを発生させます。
  3. `a.tags` は `AppManifest` 型でオプショナル（`undefined`の可能性あり）なため、TS18048 エラーが発生します。
- **修正推奨 (Worker M13向け)**:
  1. `import { toast } from './nv-toast';` を追加。
  2. クラス内に `private _unsubI18n?: () => void;` を宣言。
  3. `a.tags?.some((t) => ...)` にヌルセーフ演算子を適用。

### 原因4: `i18n.ts` における `process` オブジェクトの未定義参照
- **該当ファイル**: `c:\Project\RuView\dashboard\src\i18n.ts`
- **該当行**: 行 525-526: `if (typeof process !== 'undefined' && process.env && process.env.RUVIEW_LANG)`
- **問題詳細**: ブラウザ環境では `process` がグローバルに存在しないため、TypeScriptチェック (`tsc --noEmit`) で Node.js 型定義エラー (TS2591) になります。
- **修正推奨 (Worker M13向け)**: `(globalThis as any).process` または `typeof process !== 'undefined'` の安全な参照処理に変更。

---

## 3. 日本語ローカライズ・親しみやすい用語の適用が必要な箇所

### 3.1 Onboarding ガイドツアー (`nv-onboarding.ts`)
- **該当ファイル**: `c:\Project\RuView\dashboard\src\components\nv-onboarding.ts`
- **修正箇所**:
  - 行 205 (Step 3): `リセット (⌘R) は...` ➔ `リセット (Ctrl+R / ⌘R) は...` （Windows環境への対応）
  - 行 236-239 (Step 7): `Ghost Murmur — 研究検証ビュー` の本文 `body` が英語原文（`STEPS_EN`）と比べて検出限界の物理的詳細やトランスポート比較が省略されているため、より正確でわかりやすい日本語表現に拡充。
  - 行 252 (Step 9): `<kbd>⌘K</kbd> でコマンドパレットが開きます。` ➔ `<kbd>Ctrl+K / ⌘K</kbd> でコマンドパレットが開きます。`
  - 行 260, 262 (Step 10): `<kbd>⌘K</kbd>`, `(<kbd>⌘,</kbd>)` ➔ `<kbd>Ctrl+K / ⌘K</kbd>`, `(<kbd>Ctrl+, / ⌘,</kbd>)`

### 3.2 ヘルプセンター 全5タブ (`nv-help.ts`)
- **該当ファイル**: `c:\Project\RuView\dashboard\src\components\nv-help.ts`
- **未翻訳箇所の明細**:
  1. **ナビゲーションタブ** (行 507-511):
     - `🚀 Quickstart` ➔ `🚀 クイックスタート`
     - `📖 Glossary` ➔ `📖 用語集`
     - `? FAQ` ➔ `? よくある質問`
     - `⌨ Shortcuts` ➔ `⌨ ショートカット`
     - `ℹ About` ➔ `ℹ 概要`
  2. **ヘッダー・フッター** (行 498, 522):
     - `<div class="ttl">Help</div>` ➔ `<div class="ttl">ヘルプセンター</div>`
     - `Press <kbd>?</kbd> any time to reopen` ➔ `<kbd>?</kbd> キーでいつでもヘルプを再表示`
  3. **用語集タブ (Glossary)** (行 431-447):
     - `<h2>Glossary</h2>` ➔ `<h2>用語集 (Glossary)</h2>`
     - `<p class="lead">Every piece of jargon in the dashboard, defined in one paragraph each.</p>` ➔ `<p class="lead">ダッシュボードで使用される主要な技術用語と解説。</p>`
     - `placeholder="Search 14 terms…"` ➔ `placeholder="用語を検索 (全14項目)…"`
     - `No terms match.` ➔ `一致する用語が見つかりません。`
  4. **FAQタブ (FAQ)** (行 452-453):
     - `<h2>FAQ</h2>` ➔ `<h2>よくある質問 (FAQ)</h2>`
     - `<p class="lead">The questions I was asked twice in the first week of demos.</p>` ➔ `<h2>デモや導入時によく寄せられる質問と回答。</h2>`
  5. **ショートカットタブ (Shortcuts)** (行 465-466):
     - `<h2>Keyboard shortcuts</h2>` ➔ `<h2>キーボードショートカット</h2>`
     - `<p class="lead">Everything is reachable without a mouse.</p>` ➔ `<p class="lead">マウスを使わずキーボードのみで全機能にアクセス可能です。</p>`
  6. **概要タブ (About)** (行 476-492):
     - `<h2>About this dashboard</h2>` ➔ `<h2>このダッシュボードについて</h2>`
     - `<p class="lead">What you're looking at, in one screen.</p>` ➔ `<p class="lead">nvsim ダッシュボードの設計思想と技術概要。</p>`
     - 本文全体（5つの段落）が英文のまま放置されているため、決定性順方向シミュレータとしての仕様やADR参照を含む自然な日本語に翻訳。

### 3.3 設定ドロワー (`nv-settings-drawer.ts`)
- **該当ファイル**: `c:\Project\RuView\dashboard\src\components\nv-settings-drawer.ts`
- **未翻訳箇所の明細**:
  - 行 153: `Select UI language (日本語 / English)` ➔ `UI表示言語の選択 (日本語 / English)`
  - 行 165: `Dark is the default; light has higher contrast for daylight work.` ➔ `標準はダークモードです。ライトモードは明るい環境での作業に適しています。`
  - 行 177: `Affects panel padding and font scale (15 / 14 / 13 px). Choose what your eyes prefer.` ➔ `パネルの余白とフォントサイズ（15 / 14 / 13 px）を調整します。`
  - 行 191: `Stops the rotating diamond, animated field lines...` ➔ `ダイヤモンドの回転や磁力線アニメーションを停止します。`
  - 行 204: `When you change a Tunables slider or load a new scene...` ➔ `パラメータ変更時に自動的にWorkerへ反映します。`
  - 行 217: `WASM runs nvsim in your browser (default, no server)...` ➔ `WASMはブラウザ内でローカル実行（サーバー不要）。WSはnvsim-serverへ接続します。`
  - 行 230: `Where your nvsim-server is listening...` ➔ `nvsim-serverの接続先URL（デフォルト 127.0.0.1:7878）。`
  - 行 238-272: グループ名 `Help`, `About` および各アクションボタンの説明文・ラベル（「開く」「再再生」「リセット」「詳細情報 →」）の日本語化。

### 3.4 コマンドパレット (`nv-palette.ts`)
- **該当ファイル**: `c:\Project\RuView\dashboard\src\components\nv-palette.ts`
- **未翻訳箇所の明細**:
  - トースト通知メッセージ (`toast(...)`):
    - `Scene "${name}" loaded` ➔ `シーン "${name}" を読み込みました`
    - `Proof bundle saved (${blob.size} B)` ➔ `証明バンドルを保存しました (${blob.size} B)`
    - `Pipeline reset` ➔ `パイプラインをリセットしました`
    - `Witness verified` / `Witness mismatch!` ➔ `ウィトネス検証完了` / `ウィトネス不一致エラー`

### 3.5 Observatory 3D 選択ボックス & ダイアログ (`ui/observatory.html`, `ui/i18n.js`)
- **該当ファイル**: `c:\Project\RuView\ui\observatory.html`, `c:\Project\RuView\ui\i18n.js`
- **未翻訳 / 非推奨表現箇所の明細**:
  - `empty_room`: `Empty Room` ➔ 親しみやすい技術表現 `空部屋測定（ベースライン校正）`
  - `single_breathing`: `Vital Signs` ➔ `バイタル測定（心拍・呼吸）`
  - `fall_event`: `Fall Detect` ➔ `転倒検知アラート`
  - `crowd_occupancy`: `Crowd (4 ppl)` ➔ `混雑度測定 (4名)`
  - `csiVariance`: `CSI Variance` ➔ `電波変動量（動作強度）`
  - `ui/utils/command-palette.js` 行 121: プレースホルダーのデフォルト英文 `Type a command... (Ctrl+K / ⌘K)` ➔ `コマンドの検索・実行... (Ctrl+K / ⌘K)`

---

## 4. キーボードショートカット・イベントハンドラー監査結果

### 4.1 Windows `Ctrl` vs Mac `⌘` のイベント捕獲状況
- **`Ctrl+K / ⌘K` (コマンドパレット)**:
  - `nv-palette.ts` (行 193): `(e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'`
  - `ui/utils/command-palette.js` (行 149): `(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'`
  - 判定: ✅ 両プラットフォームで正しく動作。
- **`Ctrl+R / ⌘R` (パイプラインリセット)**:
  - 判定: ❌ **不具合あり**。グローバルな `keydown` ハンドラーで `Ctrl+R` または `⌘R` をキャッチして `preventDefault()` するロジックが存在しません。そのため、Windowsで `Ctrl+R` を押すとブラウザ全体がリロードされてしまいます。
  - 修正推奨: `nv-app.ts` または `main.ts` で `(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r'` をキャッチし、リセット確認ダイアログを開く処理を追加。
- **`Ctrl+, / ⌘,` (環境設定ドロワー)**:
  - 判定: ❌ **不具合あり**。`Ctrl+,` または `⌘,` をグローバルにキャッチして設定ドロワーを開くハンドラーが不足しています。
  - 修正推奨: `nv-app.ts` または `main.ts` で `(e.ctrlKey || e.metaKey) && e.key === ','` をキャッチし、`open-settings` イベントを発行するロジックを追加。

### 4.2 UIラベル・キーバインド表記のプラットフォーム対応
- `nv-onboarding.ts` (行 205, 252, 260, 262): `⌘R`, `⌘K`, `⌘,` の単独表記になっているため、`Ctrl+R / ⌘R`, `Ctrl+K / ⌘K`, `Ctrl+, / ⌘,` またはプラットフォーム判定による動的表示 (`Ctrl+K / ⌘K`) に統一する。

---

## 5. 開発担当者 (Worker M13) への外科手術的修正勧告

1. **`nv-help.ts` の参照エラー修正**: `FAQ` ➔ `FAQ_JA`/`FAQ_EN`、`SHORTCUTS` ➔ `SHORTCUTS_JA`/`SHORTCUTS_EN` の切り替えロジック実装。および5つのタブの完全日本語化。
2. **`nv-palette.ts` のインポート修正**: `getLocale` を `i18n` からインポート。
3. **`nv-app-store.ts` の参照・型エラー修正**: `toast` インポート、`_unsubI18n` 宣言、`a.tags?.some()` ヌルセーフ対応。
4. **ショートカットのグローバルハンドラー追加**: `Ctrl+R / ⌘R` (リセット) および `Ctrl+, / ⌘,` (設定) のキーダウンイベントキャッチとブラウザ標準動作防止 (`preventDefault()`) の追加。
5. **UIラベルのプラットフォーム併記**: Onboarding、Help、Settings、Command Palette の全キーラベルを `Ctrl+K / ⌘K` 形式に統一。
