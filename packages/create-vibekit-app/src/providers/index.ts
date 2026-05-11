import { findBinary } from "../utils/detect-binary";

function makeProvider(opts: { id: string; name: string; binaries: string[]; authEnv?: string; promptFile: string; launchCommand?: string; }) {
  return {
    id: opts.id,
    name: opts.name,
    binaries: opts.binaries,
    promptFile: opts.promptFile,
    launchCommand: opts.launchCommand,
    async findBinary() {
      for (const b of opts.binaries) {
        const path = await findBinary(b);
        if (path) return path;
      }
      return null;
    },
    async checkAuth() {
      if (!opts.authEnv) return false;
      return Boolean(process.env[opts.authEnv]);
    }
  };
}

export const providers = [
  makeProvider({ id: "claude", name: "Claude Code", binaries: ["claude-code", "claude"], authEnv: "CLAUDE_API_KEY", promptFile: "planning-prompts/claude-code.md" }),
  makeProvider({ id: "codex", name: "Codex (OpenAI)", binaries: ["openai", "codex"], authEnv: "OPENAI_API_KEY", promptFile: "planning-prompts/codex.md" }),
  makeProvider({ id: "gemini", name: "Gemini", binaries: ["gpt", "gemini"], authEnv: "GOOGLE_API_KEY", promptFile: "planning-prompts/gemini.md" }),
  makeProvider({ id: "opencode", name: "OpenCode", binaries: ["opencode"], authEnv: "OPENCODE_API_KEY", promptFile: "planning-prompts/opencode.md" })
];
