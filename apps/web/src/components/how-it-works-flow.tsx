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
    body: "Run `npx create-vibekit-app my-app`. The CLI creates your project directory, copies the full VibeKit framework into `.vibekit/`, and drops a `.env.example` — zero config needed.",
    lines: [
      { type: "cmd",  text: "npx create-vibekit-app my-app" },
      { type: "ok",   text: "Project scaffolded → my-app/" },
      { type: "info", text: "◆ Describe your app idea:" },
      { type: "dim",  text: "│ A SaaS for school management..." },
    ],
    caption: "< 30 seconds to scaffold",
  },
  {
    n: "02",
    eyebrow: "PLAN",
    Icon: BrainCircuit,
    title: "Describe it. AI plans it.",
    body: "The CLI detects installed AI providers, checks auth, and launches Session 1 — the planning interview. Your chosen agent generates 4 project files from a structured interview.",
    lines: [
      { type: "ok",   text: "Claude Code → authenticated ✓" },
      { type: "info", text: "Session 1 — Planning" },
      { type: "ok",   text: "project-description.md written" },
      { type: "ok",   text: "project-phases.md written" },
      { type: "ok",   text: "design-style-guide.md written" },
      { type: "ok",   text: "prompt.md written" },
    ],
    caption: "4 files · agent-agnostic",
  },
  {
    n: "03",
    eyebrow: "BUILD",
    Icon: Rocket,
    title: "Agent builds. You ship.",
    body: "The CLI offers Session 2 — Build. Your agent reads the 4 files plus the VibeKit framework, builds Phase 1, and pauses between phases for your sign-off. Pre-deploy audit runs last.",
    lines: [
      { type: "info",   text: "Session 2 — Build" },
      { type: "ok",   text: "Phase 1: Foundation — done" },
      { type: "ok",   text: "Phase 2: CRUD — done" },
      { type: "ok",   text: "Pre-deploy audit passed" },
      { type: "accent", text: "▶ Deploying to Vercel..." },
    ],
    caption: "Phase by phase · production-ready",
  },
];

type LineType = { type: string; text: string };

function TerminalLines({ lines }: { lines: LineType[] }) {
  const color: Record<string, string> = {
    cmd:    "#F5EFE6",
    ok:     "#A89880",
    info:   "#F5EFE6",
    dim:    "#3D3228",
    accent: "#D97757",
  };
  const prefix: Record<string, string> = {
    cmd: "$", ok: "✔", info: "◆", dim: "│", accent: "▶",
  };
  const prefixColor: Record<string, string> = {
    cmd: "#D97757", ok: "#27C93F", info: "#D97757", dim: "#3D3228", accent: "#D97757",
  };

  return (
    <div className="rounded-md border border-[#2A221A] bg-[#0E0C09] px-4 py-3.5 font-mono text-[11.5px] leading-[2] space-y-0">
      {lines.map((l, i) => (
        <div key={i} className="flex items-center gap-2">
          <span style={{ color: prefixColor[l.type] ?? "#705D4A", minWidth: "1ch" }}>
            {prefix[l.type] ?? "·"}
          </span>
          <span style={{ color: color[l.type] ?? "#A89880" }}>{l.text}</span>
        </div>
      ))}
    </div>
  );
}

export function HowItWorksFlow() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      })
        .from(".flow-eyebrow", { y: 14, opacity: 0, duration: 0.5 })
        .from(".flow-headline", { y: 18, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".flow-sub",      { y: 12, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".flow-step",     { y: 20, duration: 0.6, stagger: 0.14 }, "-=0.2")
        .from(".flow-arrow",    { opacity: 0, x: -6, stagger: 0.14, duration: 0.35 }, "-=0.7");
    },
    { scope: root }
  );

  return (
    <section ref={root} id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 30%, color-mix(in srgb, #D97757 7%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
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
        <div
          className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--accent) 6%, transparent), transparent 70%)",
          }}
        />

        <div className="relative flex items-baseline justify-between gap-3">
          <span className="font-mono text-[44px] sm:text-[52px] font-light leading-none text-[color:var(--accent)] tabular-nums">
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

        <div className="relative mt-5">
          <TerminalLines lines={step.lines} />
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
