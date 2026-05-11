import path from "path";
import fs from "fs";
import readline from "readline";
import { projectSetup } from "./steps/01-project-setup";
import { detectProviders } from "./steps/02-provider-detect";
import { selectProvider } from "./steps/03-provider-select";
import { ensureAuth } from "./steps/04-provider-auth";
import { handoffToAgent } from "./steps/05-agent-handoff";
import { postPlanning } from "./steps/06-post-planning";

export async function run() {
  const argv = process.argv.slice(2);
  const projectName = argv[0] || await prompt("Project name (folder): ");
  const dest = path.resolve(process.cwd(), projectName.trim() || "vibekit-app");

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  console.log(`Scaffolding project into ${dest}`);
  await projectSetup(dest);

  const providers = await detectProviders();
  const chosen = await selectProvider(providers);
  await ensureAuth(chosen);
  await handoffToAgent(chosen, dest);
  await postPlanning(dest);

  console.log("All done — check the generated project and follow any next steps printed above.");
}

function prompt(query: string) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise<string>((resolve) => rl.question(query, (ans) => { rl.close(); resolve(ans); }));
}
