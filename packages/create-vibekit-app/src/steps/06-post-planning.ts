import fs from "fs";
import path from "path";

export async function postPlanning(dest: string) {
  console.log("Running post-planning checks...");
  // Simple heuristic: look for prisma schema
  const prismaPath = path.join(dest, "prisma", "schema.prisma");
  if (fs.existsSync(prismaPath)) {
    console.log(
      "Prisma schema detected — suggest running: pnpm install && pnpm prisma generate",
    );
  } else {
    console.log("No Prisma schema detected — no DB follow-up required.");
  }
}
