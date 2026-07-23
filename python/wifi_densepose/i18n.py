"""
Internationalization (i18n) module for Python CLI and logs.
Loads single-source locales (locales/ja.json and locales/en.json) with fallback support.
"""

import json
import os
import re
from pathlib import Path
from typing import Any, Dict, Optional

# Embedded default dictionaries as fallback if locale files are unreadable
DEFAULT_EN: Dict[str, Any] = {
    "ui": {
        "dashboard": {
            "title": "Revolutionary WiFi-Based Human Pose Detection",
            "subtitle": "Human Tracking Through Walls Using WiFi Signals",
            "status": "System Status",
            "metrics": "System Metrics",
        },
        "status": {"connected": "Connected", "connecting": "Connecting...", "offline": "Offline"},
        "action": {"start": "Start Detection", "stop": "Stop Detection"},
        "metrics": {"cpu": "CPU Usage", "memory": "Memory Usage", "disk": "Disk Usage"},
    },
    "cli": {
        "server_running": "Server running at {host}:{port}",
        "starting": "Starting RuView service...",
        "stopped": "Service stopped.",
        "config_loaded": "Configuration loaded from {path}",
        "start_description": "Start the RuView WiFi pose detection service",
        "stop_description": "Stop the running RuView service",
        "status_description": "Show system and server status",
        "version_description": "Display version information",
        "config_description": "Manage system configuration",
    },
    "log": {
        "info_initialized": "System initialized successfully",
        "warn_low_signal": "Low CSI signal quality detected",
        "error_connection_failed": "Connection to server failed: {reason}",
        "processing_frame": "Processing CSI frame {frame_id}",
    },
    "error": {
        "invalid_input": "Invalid input provided: {details}",
        "device_not_found": "Device not found: {device_id}",
        "timeout": "Operation timed out",
        "parse_error": "Failed to parse data: {error}",
        "unauthorized": "Unauthorized access",
    },
}

DEFAULT_JA: Dict[str, Any] = {
    "ui": {
        "dashboard": {
            "title": "画期的なWiFiベースの人体姿勢検出",
            "subtitle": "WiFi信号を使用した壁越しの人間トラッキング",
            "status": "システムステータス",
            "metrics": "システムメトリクス",
        },
        "status": {"connected": "接続済み", "connecting": "接続中...", "offline": "オフライン"},
        "action": {"start": "検出開始", "stop": "検出停止"},
        "metrics": {"cpu": "CPU使用率", "memory": "メモリ使用率", "disk": "ディスク使用率"},
    },
    "cli": {
        "server_running": "サーバーが {host}:{port} で稼働中",
        "starting": "RuView サービスを開始中...",
        "stopped": "サービスが停止しました",
        "config_loaded": "設定が {path} から読み込まれました",
        "start_description": "RuView WiFi 姿勢検出サービスを開始します",
        "stop_description": "実行中の RuView サービスを停止します",
        "status_description": "システムおよびサーバーのステータスを表示します",
        "version_description": "バージョン情報を表示します",
        "config_description": "システム設定を管理します",
    },
    "log": {
        "info_initialized": "システムが正常に初期化されました",
        "warn_low_signal": "CSI信号品質の低下を検出しました",
        "error_connection_failed": "サーバーへの接続に失敗しました: {reason}",
        "processing_frame": "CSIフレーム {frame_id} を処理中",
    },
    "error": {
        "invalid_input": "無効な入力です: {details}",
        "device_not_found": "デバイスが見つかりません: {device_id}",
        "timeout": "処理がタイムアウトしました",
        "parse_error": "データの解析に失敗しました: {error}",
        "unauthorized": "未認証のアクセス",
    },
}


class I18n:
    """Translation manager supporting dot-notation keys, locale fallbacks, and string formatting."""

    def __init__(self, locales_dir: Optional[Path] = None) -> None:
        self.locales: Dict[str, Dict[str, Any]] = {"en": DEFAULT_EN, "ja": DEFAULT_JA}
        self.current_locale: str = self._detect_default_locale()

        loc_path = locales_dir or self._find_locales_dir()
        if loc_path:
            self.load_locales_from_dir(loc_path)

    def _detect_default_locale(self) -> str:
        lang = (
            os.getenv("RUVIEW_LANG")
            or os.getenv("LANG")
            or os.getenv("LC_ALL")
            or "en"
        ).lower()
        if lang.startswith("ja"):
            return "ja"
        return "en"

    def _find_locales_dir(self) -> Optional[Path]:
        env_dir = os.getenv("RUVIEW_LOCALES_DIR")
        if env_dir:
            p = Path(env_dir)
            if p.is_dir():
                return p

        # Search upwards from file location
        curr = Path(__file__).resolve().parent
        for p in [curr] + list(curr.parents):
            candidate = p / "locales"
            if candidate.is_dir() and ((candidate / "en.json").exists() or (candidate / "ja.json").exists()):
                return candidate
        return None

    def load_locales_from_dir(self, locales_dir: Path) -> None:
        for lang in ["en", "ja"]:
            json_file = locales_dir / f"{lang}.json"
            if json_file.exists():
                try:
                    with open(json_file, "r", encoding="utf-8") as f:
                        self.locales[lang] = json.load(f)
                except Exception:
                    pass

    def set_locale(self, lang: str) -> None:
        if lang in ("en", "ja"):
            self.current_locale = lang

    def get_locale(self) -> str:
        return self.current_locale

    def _lookup(self, dictionary: Dict[str, Any], key: str) -> Optional[str]:
        if key in dictionary and isinstance(dictionary[key], str):
            return dictionary[key]

        parts = key.split(".")
        curr: Any = dictionary
        for part in parts:
            if isinstance(curr, dict) and part in curr:
                curr = curr[part]
            else:
                return None

        if isinstance(curr, str):
            return curr
        return None

    def t(self, key: str, fallback: Optional[str] = None, **kwargs: Any) -> str:
        dict_curr = self.locales.get(self.current_locale, self.locales["en"])
        val = self._lookup(dict_curr, key)

        if val is None and self.current_locale != "en":
            val = self._lookup(self.locales["en"], key)

        if val is None:
            val = fallback if fallback is not None else key

        if kwargs:
            for k, v in kwargs.items():
                val = val.replace(f"{{{k}}}", str(v))

        return val


i18n = I18n()


def t(key: str, fallback: Optional[str] = None, **kwargs: Any) -> str:
    """Translate a key with optional fallback and formatting arguments."""
    return i18n.t(key, fallback=fallback, **kwargs)


def set_locale(lang: str) -> None:
    """Set global active locale ('ja' or 'en')."""
    i18n.set_locale(lang)


def get_locale() -> str:
    """Get current active locale."""
    return i18n.get_locale()
