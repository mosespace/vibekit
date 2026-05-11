import readline from "readline";

export async function selectProvider(detected: Array<{ provider: any, binary: string | null }>) {
  console.log("\nChoose a provider to handoff to (enter the number):");
  detected.forEach((d, i) => {
    console.log(` ${i + 1}) ${d.provider.name} - ${d.binary ? "available" : "unavailable"}`);
  });

  const choice = await prompt(`Select 1-${detected.length} (default 1): `);
  const idx = Math.max(0, Math.min(detected.length - 1, Number(choice) - 1 || 0));
  const selection = detected[idx];
  console.log(`Selected: ${selection.provider.name}`);
  return selection.provider;
}

function prompt(query: string) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise<string>((resolve) => rl.question(query, (ans) => { rl.close(); resolve(ans); }));
}
