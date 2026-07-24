# Handoff Report — Explorer M12 (RuView Japanese Localization & Dashboard Fix)

## 1. Observation (直接的な観察結果)

### A. TypeScript 型チェックおよびビルド結果
- コマンド `npx vite build` (CWD: `c:\Project\RuView\dashboard`) の実行結果:
  - 成功: `vite v5.4.21 building for production... ✓ 47 modules transformed.`
  - 理由: Vite (esbuild) は型チェックを行わずにTypeScriptを直接バンドルするためビルド自体は通過する。
- コマンド `npx tsc --noEmit` (CWD: `c:\Project\RuView\dashboard`) の実行結果:
  - エラー出力（全14件のコンパイルエラー）:
    ```
    src/components/nv-app-store.ts(234,10): error TS2339: Property '_unsubI18n' does not exist on type 'NvAppStore'.
    src/components/nv-app-store.ts(244,14): error TS2339: Property '_unsubI18n' does not exist on type 'NvAppStore'.
    src/components/nv-app-store.ts(244,31): error TS2339: Property '_unsubI18n' does not exist on type 'NvAppStore'.
    src/components/nv-app-store.ts(260,7): error TS2304: Cannot find name 'toast'.
    src/components/nv-app-store.ts(274,12): error TS18048: 'a.tags' is possibly 'undefined'.
    src/components/nv-help.ts(454,9): error TS2304: Cannot find name 'FAQ'.
    src/components/nv-help.ts(454,18): error TS7006: Parameter 'item' implicitly has an 'any' type.
    src/components/nv-help.ts(468,11): error TS2552: Cannot find name 'SHORTCUTS'. Did you mean 'SHORTCUTS_EN'?
    src/components/nv-help.ts(468,26): error TS7006: Parameter 's' implicitly has an 'any' type.
    src/components/nv-palette.ts(70,18): error TS2304: Cannot find name 'getLocale'.
    src/i18n.ts(525,14): error TS2591: Cannot find name 'process'. Do you need to install type definitions for node?
    src/i18n.ts(525,41): error TS2591: Cannot find name 'process'.
    src/i18n.ts(525,56): error TS2591: Cannot find name 'process'.
    src/i18n.ts(526,21): error TS2591: Cannot find name 'process'.
    ```

### B. ランタイム画面白飛び (Blank Screen) の直接原因箇所
- `c:\Project\RuView\dashboard\src\components\nv-help.ts`:
  - 454行目: `${FAQ.map((item) => ...)}` （定義済みの定数は `FAQ_EN` / `FAQ_JA` であり `FAQ` は未定義）
  - 468行目: `${SHORTCUTS.map((s) => ...)}` （定義済みの定数は `SHORTCUTS_EN` / `SHORTCUTS_JA` であり `SHORTCUTS` は未定義）
- `c:\Project\RuView\dashboard\src\components\nv-palette.ts`:
  - 70行目: `const isJa = getLocale() === 'ja';` （`getLocale` が8行目のインポートに含まれておらず未定義）
- `c:\Project\RuView\dashboard\src\components\nv-app-store.ts`:
  - 260行目: `toast(...)` （`nv-toast` からのインポート漏れ）

### C. ローカライズおよび用語対応が必要なファイル・行数
- `c:\Project\RuView\dashboard\src\components\nv-help.ts`:
  - 431-447行目 (`renderGlossary`): タイトル `Glossary`、リード文、検索プレースホルダー `Search 14 terms…`
  - 452-453行目 (`renderFaq`): タイトル `FAQ`、リード文
  - 465-466行目 (`renderShortcuts`): タイトル `Keyboard shortcuts`、リード文
  - 476-492行目 (`renderAbout`): タイトル `About this dashboard` および本文全5段落
  - 498, 507-511, 522行目 (`render`): タブボタン名 `🚀 Quickstart`～`ℹ About`、モーダルタイトル `Help`、フッター説明文
- `c:\Project\RuView\dashboard\src\components\nv-settings-drawer.ts`:
  - 153, 165, 177, 191, 204, 217, 230, 238-272行目: 設定説明文および Help / About グループ全項目
- `c:\Project\RuView\dashboard\src\components\nv-onboarding.ts`:
  - 205, 252, 260, 262行目 (`STEPS_JA`): ショートカット表記が `⌘R`, `⌘K`, `⌘,` のみ
- `c:\Project\RuView\ui\observatory.html` & `c:\Project\RuView\ui\i18n.js`:
  - セレクトボックスおよびダイアログ内の親しみやすい日本語用語（`空部屋測定（ベースライン校正）`, `転倒検知アラート`, `バイタル測定（心拍・呼吸）`, `電波変動量（動作強度）`）

### D. ショートカットハンドラー・イベントリスナーの監査結果
- **`Ctrl+K / ⌘K`**: `nv-palette.ts` (193行目) および `ui/utils/command-palette.js` (149行目) で捕獲確認。
- **`Ctrl+R / ⌘R`**: グローバルイベントリスナー不在。Windowsで押すとブラウザ標準のリロードが発動する。
- **`Ctrl+, / ⌘,`**: グローバルイベントリスナー不在。設定ドロワーが開かない。

---

## 2. Logic Chain (論理チェーン)

1. **[観察 A] より**: `vite build` は成功するが `tsc --noEmit` で `FAQ`, `SHORTCUTS`, `getLocale`, `toast` が `Cannot find name` エラーを出している。
2. **[観察 B] より**: `LitElement` の `render()` ライフサイクル内で未定義変数を参照しているため、ユーザーが「FAQ」「Shortcuts」タブを開いたりコマンドパレットを起動すると、JavaScriptランタイムで `ReferenceError` がスローされる。
3. **[論理的帰結 1]**: これによりLitのシャドウルートレンダリングが即座にクラッシュし、DOMの生成が停止して画面が白飛び（Blank Screen）する。`tsc --noEmit` で検出された参照エラーを解消すれば画面白飛び問題は完全に解決する。
4. **[観察 C] より**: Onboarding、Help Center（全5タブ）、Settings drawer、Command palette、Observatory 3Dセレクトボックスにおいて、一部のUIテキストが英語のまま残されているか、技術専門用語の直訳になっている。
5. **[論理的帰結 2]**: ユーザーグローバルルールに従い、`i18n.ts` 経由または `*_JA` 定数を用いて親しみやすい日本語表現（例: `空部屋測定（ベースライン校正）`）に置換する必要がある。
6. **[観察 D] より**: `Ctrl+K / ⌘K` は `(e.ctrlKey || e.metaKey)` で判定されているが、`Ctrl+R / ⌘R` および `Ctrl+, / ⌘,` はグローバルリスナーがなく、Windows環境においてブラウザリロードに奪われるか機能しない。
7. **[論理적帰結 3]**: `nv-app.ts` または `main.ts` に `Ctrl+R / ⌘R` および `Ctrl+, / ⌘,` の `keydown` リスナーを設置し、`e.preventDefault()` とともに該当アクションを発行する修正が必要である。

---

## 3. Caveats (留意点・考慮した代替案)

- **ビルドツールと型チェックの相違**: `npx vite build` は標準で `tsc --noEmit` を実行しない設定になっているため、CI/CDや手動検証では `npm run build` (`tsc --noEmit && vite build`) または `npx tsc --noEmit` を明示的に実行して検証する必要がある。
- **ショートカットのOS衝突**: `Ctrl+R` はブラウザの標準リロードショートカットであるため、アプリ側で `preventDefault()` を呼び出さない限りブラウザリロードが優先される。

---

## 4. Conclusion (結論)

- **画面白飛びの根本原因**: `nv-help.ts` (行 454, 468) における未定義変数 `FAQ` / `SHORTCUTS` の参照、および `nv-palette.ts` (行 70) / `nv-app-store.ts` (行 260) におけるインポート漏れ。
- **日本語ローカライズ対象**: `nv-help.ts` (全5タブ)、`nv-settings-drawer.ts` (説明文・全項目)、`nv-onboarding.ts` (キーラベル併記・Step 7拡充)、`ui/observatory.html` & `ui/i18n.js` (親しみやすい日本語表現)。
- **ショートカット修正対象**: `Ctrl+R / ⌘R` (パイプラインリセット) および `Ctrl+, / ⌘,` (設定ドロワー) のグローバルキーダウンハンドラー追加、およびUI表示の `Ctrl+K / ⌘K` 形式への統一。

---

## 5. Verification Method (検証方法)

Worker M13 による修正実装後、以下の手順で独立検証を実施できます：

1. **型チェック検証**:
   - コマンド: `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; npx tsc --noEmit` (CWD: `c:\Project\RuView\dashboard`)
   - 期待結果: エラー 0 件で正常終了すること。
2. **ビルド検証**:
   - コマンド: `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; npx vite build` (CWD: `c:\Project\RuView\dashboard`)
   - 期待結果: 成功メッセージが出力され `dist/` に成果物が生成されること。
3. **i18n 単体テスト検証**:
   - コマンド: `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; npx vitest run tests/i18n.test.ts` (CWD: `c:\Project\RuView\dashboard`)
   - 期待結果: 8 件のテストがすべて合格すること。
