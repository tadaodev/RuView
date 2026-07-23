import os
from pathlib import Path
from wifi_densepose.i18n import I18n, get_locale, set_locale, t


def test_i18n_default_en():
    set_locale("en")
    assert get_locale() == "en"
    assert t("ui.dashboard.title") == "Revolutionary WiFi-Based Human Pose Detection"
    assert t("ui.status.connected") == "Connected"


def test_i18n_japanese_locale():
    set_locale("ja")
    assert get_locale() == "ja"
    assert t("ui.dashboard.title") == "画期的なWiFiベースの人体姿勢検出"
    assert t("ui.status.connected") == "接続済み"
    set_locale("en")


def test_i18n_placeholder_formatting():
    set_locale("en")
    res = t("cli.server_running", host="localhost", port=9000)
    assert res == "Server running at localhost:9000"

    set_locale("ja")
    res_ja = t("cli.server_running", host="localhost", port=9000)
    assert res_ja == "サーバーが localhost:9000 で稼働中"
    set_locale("en")


def test_i18n_fallback_values():
    set_locale("ja")
    # Missing key in both ja and en with fallback
    assert t("nonexistent.key", fallback="Custom Fallback") == "Custom Fallback"
    # Missing key in both ja and en without fallback
    assert t("missing.key.name") == "missing.key.name"
    set_locale("en")


def test_i18n_locales_dir_loading(tmp_path: Path):
    loc_dir = tmp_path / "locales"
    loc_dir.mkdir()
    (loc_dir / "en.json").write_text('{"test": {"hello": "Hello World"}}', encoding="utf-8")
    (loc_dir / "ja.json").write_text('{"test": {"hello": "こんにちは"}}', encoding="utf-8")

    custom_i18n = I18n(locales_dir=loc_dir)
    assert custom_i18n.t("test.hello") == "Hello World"
    custom_i18n.set_locale("ja")
    assert custom_i18n.t("test.hello") == "こんにちは"


def test_cli_i18n(capsys):
    from wifi_densepose.client.cli import run_cli

    set_locale("en")
    run_cli(["--lang", "ja", "version"])
    captured = capsys.readouterr()
    assert "(ja)" in captured.out

    set_locale("en")
    run_cli(["version"])
    captured_en = capsys.readouterr()
    assert "(en)" in captured_en.out

