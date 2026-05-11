export async function ensureAuth(provider: any) {
  console.log(`Checking auth for ${provider.name}...`);
  const ok = await provider.checkAuth();
  if (!ok) {
    console.log(
      `No credentials found for ${provider.name}. Please follow the provider instructions to authenticate.`,
    );
    // Minimal guidance: look for env var
    console.log(
      `Hint: set the environment variable indicated by the provider or place credentials where the provider expects them.`,
    );
  } else {
    console.log(`${provider.name} authenticated.`);
  }
}
