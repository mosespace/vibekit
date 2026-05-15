import { Section } from "./section";
import { ArrowUpRight, Globe, Smartphone, Rocket } from "lucide-react";

const platforms = [
  {
    id: "web",
    name: "Web",
    icon: Globe,
    description: "Next.js 16, React 19, Vercel",
    features: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS + shadcn/ui",
      "Neon Postgres",
      "Vercel Deploy",
    ],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    description: "Expo, React Native, iOS + Android",
    features: [
      "Expo SDK 55+",
      "React Native 0.83",
      "NativeWind v4",
      "Expo API Routes",
      "EAS Build & Submit",
    ],
    accent: "from-purple-500 to-pink-500",
  },
  {
    id: "both",
    name: "Full-Stack",
    icon: Rocket,
    description: "Turbo Monorepo with Web + Mobile",
    features: [
      "Web + Mobile in one repo",
      "Shared database & auth",
      "Shared Prisma schema",
      "Unified Better Auth",
      "Simultaneous deploy",
    ],
    accent: "from-orange-500 to-red-500",
    featured: true,
  },
];

export function Platforms() {
  return (
    <Section
      id="platforms"
      eyebrow="Choose your platform"
      title="Web, Mobile, or Both. Pick at startup."
      description="When you run create-vibekit-app, choose your platform. VibeKit scaffolds the right structure and AI prompts for every choice."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className={`group relative overflow-hidden rounded-[var(--radius-lg)] border transition-all duration-300 ${
              platform.featured
                ? "border-[color:var(--accent)]/60 bg-[color:var(--accent)]/5 ring-1 ring-[color:var(--accent)]/20 md:col-span-1 md:row-span-2 md:flex md:flex-col"
                : "border-[color:var(--border)] bg-[color:var(--bg-elevated)] hover:border-[color:var(--accent)]/40"
            } p-6`}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 -z-10 bg-gradient-to-br ${platform.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
            />

            {/* Badge */}
            {platform.featured && (
              <div className="inline-flex items-center gap-1 rounded-full bg-[color:var(--accent)]/10 px-2.5 py-1 mb-4 self-start">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--accent)]">
                  Recommended
                </span>
              </div>
            )}

            {/* Title with icon */}
            <div className="flex items-start gap-3">
              {platform.icon && (
                <platform.icon className="h-8 w-8 text-[color:var(--accent)] flex-shrink-0" />
              )}
              <div>
                <h3 className="text-[18px] font-semibold text-[color:var(--text-primary)]">
                  {platform.name}
                </h3>
                <p className="text-[13px] text-[color:var(--text-tertiary)] mt-0.5">
                  {platform.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-2.5 flex-1">
              {platform.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[14px] text-[color:var(--text-secondary)]"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)]/10 flex-shrink-0 mt-0.5">
                    <span className="text-[11px] text-[color:var(--accent)]">
                      ✓
                    </span>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="group/btn mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--accent)]/10 hover:bg-[color:var(--accent)]/15 px-4 py-2.5 text-[14px] font-medium text-[color:var(--accent)] transition-colors">
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="reveal mt-10 rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg-subtle)] p-6">
        <div className="text-[13px] text-[color:var(--text-secondary)]">
          <p>
            <strong className="text-[color:var(--text-primary)]">
              Shared foundation:
            </strong>{" "}
            All platforms use the same backend stack — Neon Postgres, Prisma v7,
            Better Auth, Zod validation. When building{" "}
            <strong>Full-Stack</strong>, your web and mobile apps share the same
            database and API routes.
          </p>
        </div>
      </div>
    </Section>
  );
}
