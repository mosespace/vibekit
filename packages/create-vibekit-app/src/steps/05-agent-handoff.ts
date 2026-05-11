import path from "path";
import fs from "fs";

export async function handoffToAgent(provider: any, dest: string) {
  console.log(`Preparing handoff to ${provider.name}...`);
  const promptFile = provider.promptFile;
  const templatesRoot = path.resolve(__dirname, "..", "..", "templates");
  const source = path.join(templatesRoot, promptFile);
  if (fs.existsSync(source)) {
    const target = path.join(dest, promptFile);
    fs.copyFileSync(source, target);
    console.log(`Injected provider prompt into ${target}`);
  } else {
    console.warn(`Provider prompt ${source} not found; skipping inject.`);
  }

  console.log(`Launching ${provider.name} handoff helper...`);
  if (provider.launchCommand) {
    console.log(`Run the provider with: ${provider.launchCommand}`);
  } else {
    console.log(
      `Open the prompt file and paste into ${provider.name} UI as instructed.`,
    );
  }
}
