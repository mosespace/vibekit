import { providers } from "../providers";

export async function detectProviders() {
  console.log("Detecting available providers...");
  const results = await Promise.all(
    providers.map(async (p) => {
      const bin = await p.findBinary();
      return { provider: p, binary: bin };
    }),
  );

  for (const r of results) {
    console.log(
      ` - ${r.provider.name}: ${r.binary ? `found (${r.binary})` : "not found"}`,
    );
  }

  return results.map((r) => ({ ...r }));
}
