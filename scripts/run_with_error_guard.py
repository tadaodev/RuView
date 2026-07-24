#!/usr/bin/env python3
"""
CLI wrapper script supporting target job execution under RuView Error Pausing Guard protection.

Usage:
    python scripts/run_with_error_guard.py [options] -- command [args...]
    python scripts/run_with_error_guard.py [options] command [args...]

Example:
    python scripts/run_with_error_guard.py --threshold 3 -- python scripts/check_health.py
"""

import argparse
import os
import subprocess
import sys
from pathlib import Path

# Add python directory to sys.path
sys_dir = Path(__file__).resolve().parent.parent / "python"
if str(sys_dir) not in sys.path:
    sys.path.insert(0, str(sys_dir))

from ruview_error_guard import RuViewErrorGuard, GuardResult, LATE_NIGHT_NOTICE


def run_job_under_guard(
    command_list: list[str],
    threshold: int = 3,
    pause_sec: float = 3600.0,
    backoff_sec: float = 60.0,
    max_retries: int | None = None,
) -> int:
    """Run target command list in a retry loop protected by RuViewErrorGuard.
    
    Returns exit code (0 on success, non-zero on maximum retries or unrecoverable error).
    """
    guard = RuViewErrorGuard(
        failure_threshold=threshold,
        pause_duration_sec=pause_sec,
        backoff_duration_sec=backoff_sec,
    )
    
    retries = 0
    while True:
        print(f"[run_with_error_guard] Executing target command: {' '.join(command_list)}")
        try:
            res = subprocess.run(command_list, check=False)
            if res.returncode == 0:
                print("[run_with_error_guard] Command executed successfully.")
                guard.reset()
                return 0
            else:
                err_msg = f"Agent execution terminated due to error (exit code {res.returncode})."
                print(f"[run_with_error_guard] Command failed: {err_msg}", file=sys.stderr)
                guard_result = guard.check_and_guard(err_msg)
        except Exception as e:
            err_msg = f"Agent execution terminated due to error: {e}"
            print(f"[run_with_error_guard] Execution exception: {err_msg}", file=sys.stderr)
            guard_result = guard.check_and_guard(err_msg)
            
        retries += 1
        if max_retries is not None and retries >= max_retries:
            print(f"[run_with_error_guard] Max retries ({max_retries}) reached. Aborting.", file=sys.stderr)
            return 1


def main():
    parser = argparse.ArgumentParser(
        description="Run a target job under RuView Error Pausing Guard protection."
    )
    parser.add_argument(
        "--threshold",
        "-t",
        type=int,
        default=3,
        help="Consecutive failure threshold before guard triggers (default: 3)",
    )
    parser.add_argument(
        "--pause-sec",
        type=float,
        default=3600.0,
        help="Pause duration in seconds during JST late night 24:00-6:00 (default: 3600)",
    )
    parser.add_argument(
        "--backoff-sec",
        type=float,
        default=60.0,
        help="Standard retry backoff duration in seconds outside late night (default: 60)",
    )
    parser.add_argument(
        "--max-retries",
        type=int,
        default=None,
        help="Maximum retries before exiting (default: infinite until success)",
    )
    parser.add_argument(
        "command",
        nargs=argparse.REMAINDER,
        help="Target command and arguments to run",
    )

    args = parser.parse_args()

    cmd = args.command
    if cmd and cmd[0] == "--":
        cmd = cmd[1:]

    if not cmd:
        parser.print_help()
        sys.exit(1)

    exit_code = run_job_under_guard(
        command_list=cmd,
        threshold=args.threshold,
        pause_sec=args.pause_sec,
        backoff_sec=args.backoff_sec,
        max_retries=args.max_retries,
    )
    sys.exit(exit_code)


if __name__ == "__main__":
    main()
