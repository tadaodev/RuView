import subprocess
import sys
import os
import json

def run_cmd(cmd, cwd=None):
    print(f"=== Running: {cmd} (cwd: {cwd}) ===")
    try:
        res = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True, timeout=300)
        print(f"Exit Code: {res.returncode}")
        print("--- STDOUT ---")
        print(res.stdout)
        print("--- STDERR ---")
        print(res.stderr)
        return {
            "cmd": cmd,
            "cwd": cwd,
            "returncode": res.returncode,
            "stdout": res.stdout,
            "stderr": res.stderr
        }
    except Exception as e:
        print(f"Exception executing {cmd}: {e}")
        return {
            "cmd": cmd,
            "cwd": cwd,
            "returncode": -1,
            "stdout": "",
            "stderr": str(e)
        }

if __name__ == "__main__":
    base_dir = r"c:\Project\RuView"
    results = []

    # 1. Cargo test v2
    cmd1 = "cargo test --workspace --no-default-features"
    cwd1 = os.path.join(base_dir, "v2")
    results.append(run_cmd(cmd1, cwd1))

    # 2. Python proof verify
    cmd2 = f"{sys.executable} archive/v1/data/proof/verify.py"
    cwd2 = base_dir
    results.append(run_cmd(cmd2, cwd2))

    # 3. Pytest i18n
    cmd3 = f"{sys.executable} -m pytest python/tests/test_i18n.py"
    cwd3 = base_dir
    results.append(run_cmd(cmd3, cwd3))

    # 4. NPM test dashboard
    cmd4 = "npm test"
    cwd4 = os.path.join(base_dir, "dashboard")
    results.append(run_cmd(cmd4, cwd4))

    out_file = r"c:\Project\RuView\.agents\challenger_m6\raw_test_results.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"Saved results to {out_file}")
