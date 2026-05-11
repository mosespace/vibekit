import { spawnSync } from "child_process";
import os from "os";

export function findBinarySync(name: string): string | null {
  try {
    const cmd = os.platform() === "win32" ? "where" : "which";
    const res = spawnSync(cmd, [name], { encoding: "utf8" });
    if (res.status === 0 && res.stdout) {
      const first = res.stdout.split(/\r?\n/)[0].trim();
      return first || null;
    }
  } catch (e) {
    // ignore
  }
  return null;
}

export async function findBinary(name: string): Promise<string | null> {
  return findBinarySync(name);
}
