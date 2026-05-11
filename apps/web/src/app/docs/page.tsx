import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Documentation — VibeKit & create-vibekit-app",
  description:
    "Documentation for create-vibekit-app: install, run, pick your AI provider, plan your project, and ship — all from the terminal.",
  alternates: { canonical: "/docs" },
  openGraph: { url: `${SITE.url}/docs`, images: ["/og.png"] },
};

const guides = [
  {
    slug: "quickstart",
    badge: "Start here",
    badgeColor: "text-[color:var(--accent)] border-[color:var(--accent)]/40 bg-[color:var(--accent)]/8",
    title: "CLI Quickstart",
    blurb:
      "Run `npx create-vibekit-app my-app`, describe your idea, pick your AI provider, and watch it plan and build your Next.js app — step by step.",
  },
  {
    slug: "what-is-vibekit",
    badge: "Concepts",
    badgeColor: "text-[color:var(--text-tertiary)] border-[color:var(--border)] bg-transparent",
    title: "What is VibeKit?",
    blurb:
      "The problem the framework solves, how the CLI + agent handoff pattern works, and why phase-based building beats open-ended prompting.",
  },
];

const cliReference = [
  {
    title: "create-vibekit-app",
    cmd: "npx create-vibekit-app <name>",
    blurb: "Scaffold, idea collection, provider detection, auth check, Session 1 planning, Session 2 build — one command.",
  },
  {
    title: "Supported providers",
    cmd: "claude · codex · gemini · opencode",
    blurb: "Auto-detected from PATH. Each gets its own context file (CLAUDE.md, AGENTS.md, GEMINI.md, OPENCODE.md).",
  },
  {
    title: ".vibekit/ directory",
    cmd: "ls my-app/.vibekit/",
    blurb: "Framework files copied on scaffold: master_prompt.md, jb-components.md, design-system-guide.md, and more.",
  },
  {
    title: "Session 1 — Planning",
    cmd: "Generates 4 project files",
    blurb: "project-description.md, project-phases.md, design-style-guide.md, prompt.md — the blueprint for your build.",
  },
  {
    title: "Session 2 — Build",
    cmd: "Phase by phase build",
    blurb: "Agent reads prompt.md + master_prompt.md, builds Phase 1, pauses for your sign-off, then continues.",
  },
  {
    title: "Pre-deploy review",
    cmd: "Runs before Vercel push",
    blurb: "Critical / High / Medium security and quality audit. Address every Critical before deploying.",
  },
];

const refGuides = [
  {
    name: "Master prompt",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/master_prompt.md`,
    blurb: "The coding constitution your agent follows on every build.",
  },
  {
    name: "Database guide",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/database-guide.md`,
    blurb: "Neon + Prisma v7: schema, migrations, query patterns.",
  },
  {
    name: "Deployment",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/deployment.md`,
    blurb: "Vercel + Cloudflare DNS + SSL + email domain verification.",
  },
  {
    name: "Environment variables",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/environment-variables.md`,
    blurb: "Step-by-step setup for every secret per integration.",
  },
  {
    name: "Monetization",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/monetization-guide.md`,
    blurb: "Stripe, webhooks, feature gating, billing pages.",
  },
  {
    name: "Pre-deploy review",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/pre-deploy-review.md`,
    blurb: "Senior-level audit prompt to run before going live.",
  },
  {
    name: "Prompt engineering",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/prompt-engineering.md`,
    blurb: "5-part formula, token economy, rescue system.",
  },
  {
    name: "Troubleshooting",
    href: `${SITE.github}/blob/main/packages/create-vibekit-app/templates/troubleshooting.md`,
    blurb: "Symptoms → fixes when the agent gets stuck.",
  },
];

export default function DocsHub() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          {/* Header */}
          <div className="border-b border-[color:var(--border)] pb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
              <Terminal className="h-3 w-3 text-[color:var(--accent)]" />
              Documentation
            </div>
            <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-[color:var(--text-primary)]">
              Everything you need to ship.
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-[color:var(--text-secondary)]">
              Start with the CLI quickstart — one command scaffolds your project, collects your idea, detects your AI provider, and launches the planning session. The reference guides live on GitHub.
            </p>

            {/* Install command */}
            <div className="mt-8 flex items-center gap-3 rounded-md border border-[color:var(--accent)]/30 bg-[#0E0C09] px-5 py-3.5 font-mono text-[14px] w-fit">
              <span className="text-[#D97757]">$</span>
              <code className="text-[#F5EFE6]">npx create-vibekit-app my-app</code>
            </div>
          </div>

          {/* Guide cards */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/docs/${g.slug}`}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${g.badgeColor}`}>
                    {g.badge}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--text-tertiary)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]" />
                </div>
                <h2 className="mt-4 font-mono text-[18px] uppercase tracking-tight text-[color:var(--text-primary)]">
                  {g.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">
                  {g.blurb}
                </p>
              </Link>
            ))}
          </div>

          {/* CLI Reference */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                CLI Reference
              </span>
              <div className="flex-1 h-px bg-[color:var(--border)]" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {cliReference.map((r) => (
                <div
                  key={r.title}
                  className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-4"
                >
                  <div className="font-mono text-[12px] font-semibold uppercase tracking-tight text-[color:var(--text-primary)]">
                    {r.title}
                  </div>
                  <div className="mt-1.5 rounded border border-[#2A221A] bg-[#0E0C09] px-2.5 py-1.5 font-mono text-[11px] text-[#D97757]">
                    {r.cmd}
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[color:var(--text-secondary)]">
                    {r.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* External reference guides */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                Reference guides (on GitHub)
              </span>
              <div className="flex-1 h-px bg-[color:var(--border)]" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {refGuides.map((g) => (
                <a
                  key={g.name}
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-4 transition-colors hover:border-[color:var(--border-strong)]"
                >
                  <div className="flex-1">
                    <div className="font-mono text-[13px] uppercase text-[color:var(--text-primary)]">
                      {g.name}
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-[color:var(--text-secondary)]">
                      {g.blurb}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[color:var(--text-tertiary)] transition-colors group-hover:text-[color:var(--accent)]" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
