"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BrainCircuit, Rocket, Terminal } from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    n: "01",
    eyebrow: "INSTALL",
    Icon: Terminal,
    title: "Run one command.",
    body: "Run `npx create-vibekit-app my-app`. The CLI creates your project directory, copies the full VibeKit framework into `.vibekit/`, and drops a `.env.example` — zero config.",
    terminal: [
      { prompt: true, text: "npx create-vibekit-app my-app" },
      { ok: true, text: "Project scaffolded → my-app/" },
      { info: true, text: "◆ Describe your app idea:" },
    ],
    caption: "< 30 seconds to scaffold",
  },
  {
    n: "02",
    eyebrow: "PLAN",
    Icon: BrainCircuit,
    title: "Describe it. AI plans it.",
    body: "Type your idea in 1–3 sentences. The CLI detects your installed AI providers (Claude Code, Codex, Gemini, OpenCode), checks auth, and launches Session 1 — the planning interview. Claude generates 4 project files.",
    terminal: [
      { ok: true, text: "Claude Code → authenticated ✓" },
      { info: true, text: "Session 1 — Planning" },
      { dim: true, text: "Generating 4 project files..." },
      { ok: true, text: "project-description.md written" },
      { ok: true, text: "project-phases.md written" },
      { ok: true, text: "design-style-guide.md written" },
      { ok: true, text: "prompt.md written" },
    ],
    caption: "4 files · agent-agnostic",
  },
  {
    n: "03",
    eyebrow: "BUILD",
    Icon: Rocket,
    title: "Agent builds. You ship.",
    body: "After planning, the CLI offers Session 2 — Build. Your agent reads the 4 files plus the VibeKit framework, executes Phase 1, and pauses for your sign-off between phases. Pre-deploy review runs before Vercel push.",
    terminal: [
      { info: true, text: "Session 2 — Build" },
      { dim: true, text: "Reading prompt.md..." },
      { ok: true, text: "Phase 1: Foundation — done" },
      { ok: true, text: "Phase 2: CRUD — done" },
      { ok: true, text: "Pre-deploy audit passed" },
      { accent: true, text: "▶ Deploying to Vercel..." },
    ],
    caption: "Phase by phase · production-ready",
  },
];

type Line = { prompt?: boolean; ok?: boolean; info?: boolean; dim?: boolean; accent?: boolean; text: string };

function TerminalLines({ lines }: { lines: Line[] }) {
  return (
    <div className="rounded-md border border-[#2A221A] bg-[#0E0C09] p-4 font-mono text-[11.5px] leading-[1.9] space-y-0.5">
      {lines.map((l, i) => (
        <div key={i} className="flex items-center gap-2">
          {l.prompt && <span className="text-[#D97757]">$</span>}
          {l.ok && <span className="text-[#27C93F]">✔</span>}
          {l.info && <span className="text-[#D97757]">◆</span>}
          {l.dim && <span className="text-[#3D3228]">·</span>}
          {l.accent && <span className="text-[#D97757]">▶</span>}
          <span
            className={
              l.prompt ? "text-[#F5EFE6]"
              : l.ok ? "text-[#A89880]"
              : l.info ? "text-[#F5EFE6]"
              : l.dim ? "text-[#3D3228]"
              : l.accent ? "text-[#D97757] font-medium"
              : "text-[#A89880]"
            }
          >
            {l.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HowItWorksFlow() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".flow-eyebrow", { y: 14, opacity: 0, duration: 0.5 })
        .from(".flow-headline", { y: 18, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".flow-sub", { y: 12, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".flow-step", { y: 28, opacity: 0, stagger: 0.18, duration: 0.7 }, "-=0.2")
        .from(".flow-arrow", { opacity: 0, x: -8, stagger: 0.18, duration: 0.4 }, "-=0.9");
    },
    { scope: root }
  );

  return (
    <section ref={root} id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Warm grid */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" aria-hidden />
      {/* Claude coral bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 30%, color-mix(in srgb, #D97757 7%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flow-eyebrow inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            How create-vibekit-app works
          </div>
          <h2 className="flow-headline font-display mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-tight text-[color:var(--text-primary)]">
            One command does <em className="not-italic gradient-text">everything</em>.
          </h2>
          <p className="flow-sub mt-5 text-[16px] leading-relaxed text-[color:var(--text-secondary)]">
            The CLI handles scaffold, idea collection, provider detection, auth check, and agent handoff — all in the same terminal session.
          </p>
        </div>

        {/* 3-step flow */}
        <div className="mt-16 sm:mt-20 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {steps.map((s, i) => (
            <FlowCard key={s.n} step={s} isLast={i === steps.length - 1} />
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
          Ctrl+C between sessions returns you to the CLI for the next step
        </p>
      </div>
    </section>
  );
}

function FlowCard({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) {
  return (
    <>
      <article className="flow-step group relative flex flex-col rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 sm:p-7 transition-all hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-md)]">
        {/* Subtle hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--accent) 5%, transparent), transparent 70%)",
          }}
        />

        {/* Step number + icon */}
        <div className="relative flex items-baseline justify-between gap-3">
          <span className="font-mono text-[40px] sm:text-[52px] font-light leading-none text-[color:var(--accent)] tabular-nums">
            {step.n}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
              {step.eyebrow}
            </span>
            <step.Icon className="h-4 w-4 text-[color:var(--text-tertiary)]" />
          </div>
        </div>

        <h3 className="relative font-display mt-5 text-[22px] sm:text-[24px] leading-tight tracking-tight text-[color:var(--text-primary)]">
          {step.title}
        </h3>

        <p className="relative mt-3 flex-1 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">
          {step.body}
        </p>

        {/* Terminal preview */}
        <div className="relative mt-5">
          <TerminalLines lines={step.terminal} />
        </div>

        <div className="relative mt-4 border-t border-[color:var(--border)] pt-3 font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
          {step.caption}
        </div>
      </article>

      {!isLast ? (
        <div className="flow-arrow flex items-center justify-center text-[color:var(--text-tertiary)] lg:px-1" aria-hidden>
          <ArrowRight className="hidden h-5 w-5 text-[color:var(--accent)] opacity-60 lg:inline" />
          <ArrowRight className="inline h-4 w-4 rotate-90 text-[color:var(--accent)] opacity-60 lg:hidden" />
        </div>
      ) : null}
    </>
  );
}
