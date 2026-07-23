"""
Command-line interface and logging for wifi-densepose python client with i18n support.
Wires wifi_densepose.i18n (t(...)) into CLI help strings, command options, log messages, and error messages.
"""

from __future__ import annotations

import argparse
import sys
import logging
from typing import List, Optional

from wifi_densepose.i18n import get_locale, set_locale, t

logger = logging.getLogger("wifi_densepose.cli")


def setup_cli_logging(level: int = logging.INFO) -> None:
    """Setup logger output for CLI operations."""
    handler = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter("[%(levelname)s] %(message)s")
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    logger.setLevel(level)


def build_parser() -> argparse.ArgumentParser:
    """Build localized ArgumentParser for wifi-densepose CLI."""
    parser = argparse.ArgumentParser(
        prog="wifi-densepose",
        description=t("cli.start_description", fallback="Start the RuView WiFi pose detection service"),
    )

    parser.add_argument(
        "--lang",
        choices=["en", "ja"],
        default=None,
        help=t("cli.option_lang", fallback="Language locale (en/ja)"),
    )
    parser.add_argument(
        "--verbose",
        "-v",
        action="store_true",
        help=t("cli.option_verbose", fallback="Enable verbose logging"),
    )
    parser.add_argument(
        "--config",
        "-c",
        type=str,
        default=None,
        help=t("cli.option_config", fallback="Path to configuration file"),
    )

    subparsers = parser.add_subparsers(dest="subcommand", help=t("cli.status_description", fallback="Show status"))

    # 'start' subcommand
    start_parser = subparsers.add_parser(
        "start",
        help=t("cli.start_description", fallback="Start the RuView WiFi pose detection service"),
    )
    start_parser.add_argument(
        "--host",
        default="0.0.0.0",
        help=t("cli.option_host", fallback="Host address to bind to"),
    )
    start_parser.add_argument(
        "--port",
        type=int,
        default=8000,
        help=t("cli.option_port", fallback="Port number to bind to"),
    )

    # 'stop' subcommand
    stop_parser = subparsers.add_parser(
        "stop",
        help=t("cli.stop_description", fallback="Stop the running RuView service"),
    )
    stop_parser.add_argument(
        "--force",
        "-f",
        action="store_true",
        help=t("cli.option_force", fallback="Force operation without graceful shutdown"),
    )

    # 'status' subcommand
    subparsers.add_parser(
        "status",
        help=t("cli.status_description", fallback="Show system and server status"),
    )

    # 'version' subcommand
    subparsers.add_parser(
        "version",
        help=t("cli.version_description", fallback="Display version information"),
    )

    return parser


def run_cli(args: Optional[List[str]] = None) -> int:
    """Execute the CLI with given argument list (default: sys.argv[1:])."""
    # Pre-parse for --lang if provided before full parsing
    if args is None:
        args = sys.argv[1:]

    temp_parser = argparse.ArgumentParser(add_help=False)
    temp_parser.add_argument("--lang", choices=["en", "ja"], default=None)
    temp_known, _ = temp_parser.parse_known_args(args)
    if temp_known.lang:
        set_locale(temp_known.lang)

    parser = build_parser()
    parsed = parser.parse_args(args)

    if parsed.lang:
        set_locale(parsed.lang)

    if parsed.verbose:
        setup_cli_logging(logging.DEBUG)
    else:
        setup_cli_logging(logging.INFO)

    logger.info(t("log.info_initialized"))

    if parsed.config:
        logger.info(t("cli.config_loaded", path=parsed.config))

    if parsed.subcommand == "start":
        logger.info(t("cli.starting"))
        logger.info(t("cli.server_running", host=parsed.host, port=parsed.port))
        return 0

    elif parsed.subcommand == "stop":
        logger.info(t("cli.stopped"))
        return 0

    elif parsed.subcommand == "status":
        sys.stdout.write(f"{t('ui.dashboard.status')}: {t('ui.status.connected')}\n")
        return 0

    elif parsed.subcommand == "version":
        from wifi_densepose import __version__
        sys.stdout.write(f"wifi-densepose v{__version__} ({get_locale()})\n")
        return 0

    else:
        parser.print_help()
        return 0


if __name__ == "__main__":
    sys.exit(run_cli())
