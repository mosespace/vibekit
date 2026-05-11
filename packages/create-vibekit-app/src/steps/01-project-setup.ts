import path from "path";
import fs from "fs";
import { copyTemplates } from "../generator";

export async function projectSetup(dest: string) {
  const templatesRoot = path.resolve(__dirname, "..", "..", "templates");
  console.log(`Copying bundled templates from ${templatesRoot} to ${dest}`);
  await copyTemplates(templatesRoot, dest);
  console.log("Project scaffolded (templates copied).");
}
