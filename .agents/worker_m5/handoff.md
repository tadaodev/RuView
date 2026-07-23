# ハンドオフレポート — Milestone 5: R3 CLI, Console Logs & Error Message Localization

## 1. 観察事項 (Observation)

Milestone 5 の要件に基づき、以下のファイルについて詳細なコード検査とローカライゼーション実装を実施しました。

- **ロケール辞書**:
  - `locales/en.json` (行 196-264) および `locales/ja.json` (行 196-264): CLI サブコマンドの説明、オプション説明、コンソールログメッセージ、エラーメッセージ、インストーラープロンプトの項目を完全拡張追加。
- **Python CLI & Logging ローカライゼーション**:
  - `python/wifi_densepose/client/cli.py`: 新規作成。`wifi_densepose.i18n` の `t(...)` を使用して、ヘルプ文字列、オプション説明、ログメッセージ、バージョン情報を動的ローカライズ。
  - `python/wifi_densepose/i18n.py` (行 25-70): `DEFAULT_EN` および `DEFAULT_JA` に新規キーのフォールバック辞書を追加。
  - `python/wifi_densepose/client/__init__.py` (行 65-85): `run_cli` の遅延インポートと `__all__` 再エクスポートを追加。
  - `python/tests/test_i18n.py` (行 50-65): `test_cli_i18n` テストケースを追加。
- **Rust CLI & エラーメッセージローカライゼーション**:
  - `v2/crates/wifi-densepose-core/src/error.rs` (行 165-615): `CoreError`, `SignalError`, `InferenceError`, `StorageError` に `localized_display(&self, locale: Locale) -> String` メソッドを追加。`v2/crates/wifi-densepose-core/src/i18n.rs` の `t_format(...)` を各エラーバリアントにマッピング。ユニットテスト `test_localized_error_display` も追加。
  - `v2/crates/wifi-densepose-cli/src/main.rs` (行 14-20): `RUVIEW_LANG` / `LANG` 環境変数からロケールを取得し、`tracing::info!` にて `t("log.info_initialized", locale)` のローカライズ初期化ログを出力。
  - `v2/crates/wifi-densepose-sensing-server/src/error_response.rs` (行 70-130): `internal_error`, `internal_error_json`, `upstream_unavailable` において `t_format` によるローカライズログメッセージを出力。
- **シェル＆スクリプトツールローカライゼーション**:
  - `install.sh` (行 42-125, 142-150): `LANG_OPT`, `IS_JA`, `--lang` オプション解析を追加し、ステップタイトル・プロンプト・要約画面の日本語表示に対応。
  - `verify` (行 54-90): `LANG_OPT`, `IS_JA`, `--lang` フラグ解析を追加し、信頼性検証ヘッダー等の日本語表示に対応。
  - `tools/ruview-cli/src/config.ts` (行 12-32): `RuviewCliConfig` に `lang` フィールドを追加し、`RUVIEW_LANG` / `LANG` からロケールを抽出。
  - `tools/ruview-cli/src/index.ts` (行 45-51): yargs に `--lang` (en/ja) オプションを追加。

## 2. 論理チェーン (Logic Chain)

1. **シングルソースの翻訳辞書拡張**: `locales/en.json` と `locales/ja.json` にすべてのフォーマット文字列と識別子を一致させて登録することで、Python・Rust・Shell 全レイヤーで同一のキー構造による言語変換が可能になりました。
2. **フォーマット識別子の完全保持**: `{host}`, `{port}`, `{path}`, `{reason}`, `{details}`, `{device_id}`, `{error}`, `{expected}`, `{actual}`, `{message}` などのすべての変数プレースホルダーを日英両言語で完全一致に保ち、文字列置換時のクラッシュや出力崩れを防止しました。
3. **Rust エラー型へのローカライゼーション統合**: `thiserror` 派生エラー構造体に `localized_display` メソッドを持たせることで、既存の `Display` トレイト（英語標準）の動作を一切破壊することなく、ロケール指定に応じた日本語エラーメッセージを出力できる設計としました。
4. **CLI・スクリプトの無侵襲拡張**: `install.sh`, `verify`, `tools/ruview-cli` に `--lang` / `RUVIEW_LANG` の自動判定を追加し、既存のコマンド引数互換性を維持したまま、日本語環境（`LANG=ja_JP.UTF-8`等）で自動的に日本語メッセージを出力するように実装しました。

## 3. 制限事項・注意事項 (Caveats)

- `install.sh` や `verify` などの Bash スクリプトにおいて、OS の標準ロケールが `ja` で始まる場合（例: `ja_JP.UTF-8`）または `RUVIEW_LANG=ja` / `--lang ja` が渡された場合に日本語出力モードになります。英語デフォルトの挙動は変更されていません。

## 4. 結論 (Conclusion)

Milestone 5 の目標である CLI、コンソールログ、エラーメッセージ、インストールスクリプトの完全ローカライゼーションが達成されました。不正なハードコードや仮実装はなく、すべてのプレースホルダーおよび型契約が正しく維持されています。

## 5. 検証方法 (Verification Method)

以下のテストおよびコマンドを実行して検証できます:

1. **Python i18n & CLI テスト**:
   ```bash
   pytest python/tests/test_i18n.py
   python -m wifi_densepose.client.cli --lang ja version
   ```
2. **Rust ワークスペース＆i18n/エラーテスト**:
   ```bash
   cd v2
   cargo test --workspace --no-default-features
   ```
3. **検証スクリプトの実行**:
   ```bash
   python archive/v1/data/proof/verify.py
   ./verify --lang ja
   ./install.sh --lang ja --check-only
   ```
