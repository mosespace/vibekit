import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CopyBlock } from "@/components/copy-block";
import { readPrompt } from "@/lib/read-prompt";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CLI Quickstart — create-vibekit-app in 5 steps",
  description:
    "Run npx create-vibekit-app, describe your idea, pick your AI provider, and ship a production Next.js app — the complete CLI walkthrough.",
  alternates: { canonical: "/docs/quickstart" },
  openGraph: {
    url: `${SITE.url}/docs/quickstart`,
    images: ["/og.png"],
    type: "article",
  },
};

type Step = {
  n: number;
  eyebrow: string;
  title: string;
  body: string;
  terminal?: { prefix: string; prefixColor: string; text: string; textColor: string }[];
  note?: string;
};

const steps: Step[] = [
  {
    n: 1,
    eyebrow: "INSTALL",
    title: "Run the CLI",
    body: "Open your terminal and run the command below. The CLI will create a `my-app/` directory, scaffold the VibeKit framework files into `.vibekit/`, and write a `.env.example`. No manual setup required.",
    terminal: [
      { prefix: "$", prefixColor: "#D97757", text: "npx create-vibekit-app my-app", textColor: "#F5EFE6" },
      { prefix: "✔", prefixColor: "#27C93F", text: "Project scaffolded → my-app/", textColor: "#A89880" },
      { prefix: "│", prefixColor: "#3D3228", text: ".vibekit/  .env.example  .gitignore", textColor: "#3D3228" },
    ],
    note: "Requires Node ≥ 18. The command works with npm, pnpm, yarn, and bun.",
  },
  {
    n: 2,
    eyebrow: "DESCRIBE",
    title: "Describe your idea",
    body: "The CLI immediately asks for your app idea — 1 to 3 sentences. Be specific: who is it for, what does it do, how does it make money? Vague answers produce vague output. The description is injected into the planning prompt before your AI provider sees it.",
    terminal: [
      { prefix: "◆", prefixColor: "#D97757", text: "Describe your app idea:", textColor: "#F5EFE6" },
      { prefix: "│", prefixColor: "#705D4A", text: "A school management SaaS for Uganda — teachers, students,", textColor: "#A89880" },
      { prefix: "│", prefixColor: "#705D4A", text: "parents, fees, and grades. Parents pay monthly.",         textColor: "#A89880" },
    ],
  },
  {
    n: 3,
    eyebrow: "PROVIDER",
    title: "Pick your AI provider",
    body: "The CLI scans your PATH for Claude Code, Codex (OpenAI), Gemini CLI, and OpenCode — then checks authentication for each. You pick from the installed ones. The CLI writes your idea into the provider's context file (e.g. CLAUDE.md, AGENTS.md) and launches it.",
    terminal: [
      { prefix: "●", prefixColor: "#D97757", text: "Claude Code   → installed · authenticated", textColor: "#D97757" },
      { prefix: "○", prefixColor: "#3D3228", text: "Gemini CLI    → not found",                 textColor: "#3D3228" },
      { prefix: "◆", prefixColor: "#D97757", text: "Which provider should build your project?", textColor: "#F5EFE6" },
      { prefix: "│", prefixColor: "#27C93F", text: "● Claude Code  (installed)",               textColor: "#27C93F" },
    ],
  },
  {
    n: 4,
    eyebrow: "PLAN",
    title: "Session 1 — Planning",
    body: "Your chosen provider launches in your terminal (Session 1). It reads the planning prompt from the context file, interviews you about features and roles, then generates 4 project files. When done, press Ctrl+C or type /exit to return to the CLI.",
    terminal: [
      { prefix: "▶", prefixColor: "#D97757", text: "Launching Claude Code...",    textColor: "#D97757" },
      { prefix: "✔", prefixColor: "#27C93F", text: "project-description.md",    textColor: "#A89880" },
      { prefix: "✔", prefixColor: "#27C93F", text: "project-phases.md",          textColor: "#A89880" },
      { prefix: "✔", prefixColor: "#27C93F", text: "design-style-guide.md",      textColor: "#A89880" },
      { prefix: "✔", prefixColor: "#27C93F", text: "prompt.md",                  textColor: "#A89880" },
    ],
    note: "The 4 files are saved in my-app/ alongside the .vibekit/ framework files.",
  },
  {
    n: 5,
    eyebrow: "BUILD",
    title: "Session 2 — Build & ship",
    body: "After planning, the CLI detects the 4 files and offers Session 2 — Build. Your agent reads prompt.md, master_prompt.md, and the framework files, then starts Phase 1. It pauses between phases for your sign-off. Before pushing to Vercel, paste the pre-deploy review prompt to run a Critical / High / Medium security audit.",
    terminal: [
      { prefix: "◆", prefixColor: "#D97757", text: "Start Claude Code to build Phase 1?",  textColor: "#F5EFE6" },
      { prefix: "✔", prefixColor: "#27C93F", text: "Phase 1: Foundation — done",            textColor: "#A89880" },
      { prefix: "✔", prefixColor: "#27C93F", text: "Pre-deploy audit passed",               textColor: "#A89880" },
      { prefix: "▶", prefixColor: "#D97757", text: "Done! Your project is ready.",           textColor: "#27C93F" },
    ],
    note: "Deploy to Vercel with `vercel --prod` from my-app/. Cloudflare DNS + SSL instructions are in .vibekit/deployment.md.",
  },
];

function TerminalBlock({ lines }: { lines: NonNullable<Step["terminal"]> }) {
  return (
    <div className="mt-5 rounded-[var(--radius-md)] border border-[#2A221A] bg-[#0E0C09] px-4 py-3.5 font-mono text-[12.5px] leading-[1.9]">
      {lines.map((l, i) => (
        <div key={i} className="flex items-start gap-2">
          <span style={{ color: l.prefixColor, minWidth: "1.5ch", flexShrink: 0 }}>{l.prefix}</span>
          <span style={{ color: l.textColor }}>{l.text}</span>
        </div>
      ))}
    </div>
  );
}

export default function Quickstart() {
  const preDeployReview = readPrompt("pre-deploy-review.md");

  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[color:var(--text-tertiary)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Documentation
          </Link>

          <header className="mt-8 border-b border-[color:var(--border)] pb-10">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[color:var(--accent)]">
              <Terminal className="h-3.5 w-3.5" />
              CLI · 5 steps · ~5 min
            </div>
            <h1 className="mt-3 font-mono text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-tight text-[color:var(--text-primary)]">
              CLI Quickstart
            </h1>
            <p className="mt-5 text-[18px] leading-relaxed text-[color:var(--text-secondary)]">
              One terminal command. Scaffold → describe → pick provider → plan → build → ship. Every step happens in your terminal — no browser tabs, no copy-pasting between windows.
            </p>

            {/* The command itself, prominent */}
            <div className="mt-8 flex items-center gap-3 rounded-[var(--radius-md)] border border-[color:var(--accent)]/30 bg-[#0E0C09] px-5 py-4 font-mono text-[15px]">
              <span className="text-[#D97757]">$</span>
              <code className="text-[#F5EFE6]">npx create-vibekit-app my-app</code>
            </div>
          </header>

          {/* Steps */}
          <ol className="mt-12 space-y-14">
            {steps.map((s) => (
              <li key={s.n} className="grid gap-5 sm:grid-cols-[auto_1fr]">
                <div className="font-mono text-[40px] font-light leading-none text-[color:var(--accent)] tabular-nums">
                  {String(s.n).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                    {s.eyebrow}
                  </div>
                  <h2 className="mt-2 font-mono text-[18px] uppercase tracking-tight text-[color:var(--text-primary)]">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-[1.75] text-[color:var(--text-secondary)]">
                    {s.body}
                  </p>

                  {s.terminal ? <TerminalBlock lines={s.terminal} /> : null}

                  {/* Pre-deploy review prompt inline on step 5 */}
                  {s.n === 5 ? (
                    <div className="mt-6">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)] mb-3">
                        Pre-deploy review prompt
                      </div>
                      <CopyBlock
                        filename="pre-deploy-review.md"
                        label="Paste into your coding agent before deploying"
                        code={preDeployReview}
                      />
                      <p className="mt-3 text-[13px] text-[color:var(--text-tertiary)]">
                        After the audit, your agent writes findings to{" "}
                        <code className="font-mono text-[12px] rounded border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-1.5 py-0.5">
                          pre-deploy-review-report.md
                        </code>
                        . Address every Critical issue before deploying.
                      </p>
                    </div>
                  ) : null}

                  {s.note ? (
                    <div className="mt-4 rounded-[var(--radius-md)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-3 font-mono text-[12px] text-[color:var(--text-tertiary)]">
                      {s.note}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          {/* Footer card */}
          <div className="mt-16 rounded-[var(--radius-xl)] border border-[color:var(--accent)]/30 bg-[color:var(--bg-elevated)] p-6">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[color:var(--accent)]">
              <Terminal className="h-3.5 w-3.5" />
              You're done
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--text-primary)]">
              Five steps from idea to production. The CLI handles everything after step 1 — just answer the prompts and let your AI provider do the work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={SITE.github} variant="accent" size="md">
                View on GitHub
              </Button>
              <Button href="/faq" variant="outline" size="md">
                Read the FAQ
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      <Script
        id="ld-howto-quickstart"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Set up VibeKit with create-vibekit-app",
            description: "Run the CLI, describe your idea, pick an AI provider, plan, build, and ship a production Next.js app.",
            totalTime: "PT10M",
            step: steps.map((s) => ({
              "@type": "HowToStep",
              position: s.n,
              name: s.title,
              text: s.body,
            })),
          }),
        }}
      />
    </>
  );
}
