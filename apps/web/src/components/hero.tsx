"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Github } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { HeroEffects } from "./hero-effects";
import { SITE } from "@/lib/utils";

const providers = [
  { id: "claude", label: "Claude Code", color: "#D97757" },
  { id: "codex", label: "Codex", color: "#74AA9C" },
  { id: "gemini", label: "Gemini CLI", color: "#4285F4" },
  { id: "opencode", label: "OpenCode", color: "#A78BFA" },
];

/** Static terminal mockup showing create-vibekit-app output */
function CliTerminal() {
  return (
    <div className="terminal shadow-[0_32px_80px_rgba(217,119,87,0.18)]">
      {/* Window chrome */}
      <div className="terminal-bar">
        <span className="terminal-dot" style={{ background: "#FF5F56" }} />
        <span className="terminal-dot" style={{ background: "#FFBD2E" }} />
        <span className="terminal-dot" style={{ background: "#27C93F" }} />
        <span className="ml-3 text-[11px] font-mono text-[#705D4A] tracking-wider">
          Terminal — my-app
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-1 text-[12.5px] leading-[1.9]">
        {/* Command */}
        <div className="flex items-center gap-2">
          <span className="text-[#D97757]">$</span>
          <span className="text-[#F5EFE6]">npx create-vibekit-app my-app</span>
        </div>
        <div className="h-1" />

        {/* Branded intro */}
        <div className="text-[#D97757] font-bold tracking-wide">
          ▐ create-vibekit-app ▌
        </div>
        <div className="h-0.5" />

        {/* Steps */}
        <div className="flex items-center gap-2">
          <span className="text-[#27C93F]">✔</span>
          <span className="text-[#A89880]">Project scaffolded</span>
          <span className="text-[#3D3228] text-[11px]">my-app/</span>
        </div>
        <div className="h-0.5" />

        <div className="flex items-start gap-2">
          <span className="text-[#D97757] mt-0.5">◆</span>
          <div>
            <div className="text-[#F5EFE6]">Describe your app idea:</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[#705D4A]">│</span>
              <span className="text-[#A89880]">A SaaS for school management — teachers, students, fees</span>
            </div>
          </div>
        </div>
        <div className="h-0.5" />

        <div className="flex items-center gap-2">
          <span className="text-[#27C93F]">✔</span>
          <span className="text-[#A89880]">Detecting installed AI providers...</span>
        </div>
        <div className="flex items-center gap-2 pl-5">
          <span className="text-[#27C93F]">●</span>
          <span className="text-[#D97757] font-medium">Claude Code</span>
          <span className="text-[#3D3228] text-[11px]">→ /usr/local/bin/claude</span>
        </div>
        <div className="flex items-center gap-2 pl-5">
          <span className="text-[#705D4A]">○</span>
          <span className="text-[#3D3228]">Gemini CLI → not found</span>
        </div>
        <div className="h-0.5" />

        <div className="flex items-center gap-2">
          <span className="text-[#27C93F]">✔</span>
          <span className="text-[#A89880]">Claude Code</span>
          <span className="text-[#27C93F] text-[11px]">authenticated ✓</span>
        </div>
        <div className="h-0.5" />

        <div className="flex items-start gap-2">
          <span className="text-[#D97757] mt-0.5">◆</span>
          <div>
            <div className="text-[#F5EFE6]">Session 1 — Planning</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[#705D4A]">│</span>
              <span className="text-[#A89880]">Claude Code will interview you and generate 4 project files</span>
            </div>
          </div>
        </div>
        <div className="h-0.5" />

        <div className="flex items-center gap-2">
          <span className="text-[#D97757]">▶</span>
          <span className="text-[#D97757] font-medium">Launching Claude Code...</span>
          <span className="inline-block w-2 h-3.5 bg-[#D97757] animate-blink align-middle" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 12, opacity: 0, duration: 0.5 })
        .from(".hero-headline span", { y: 28, opacity: 0, duration: 0.7, stagger: 0.05 }, "-=0.3")
        .from(".hero-sub", { y: 14, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".hero-cta > *", { y: 10, opacity: 0, duration: 0.4, stagger: 0.08 }, "-=0.3")
        .from(".hero-terminal", { y: 32, opacity: 0, duration: 0.9, ease: "expo.out" }, "-=0.5")
        .from(".hero-provider", { y: 6, opacity: 0, duration: 0.3, stagger: 0.06 }, "-=0.3");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative isolate overflow-hidden pt-32 sm:pt-40 pb-16">
      {/* Warm grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-100" aria-hidden />

      {/* Claude coral radial bloom */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in srgb, #D97757 18%, transparent), transparent 65%)",
        }}
      />

      <HeroEffects />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/70 backdrop-blur px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              </span>
              create-vibekit-app · CLI · v0.1.1
            </div>

            {/* Headline */}
            <h1 className="hero-headline mt-8 font-display text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.02] tracking-tight text-[color:var(--text-primary)]">
              <span className="block">One command.</span>
              <span className="block gradient-text">Your full-stack</span>
              <span className="block">app starts here.</span>
            </h1>

            <p className="hero-sub mt-6 max-w-lg text-[16px] sm:text-[17px] leading-relaxed text-[color:var(--text-secondary)]">
              <code className="font-mono text-[color:var(--accent)] text-[15px]">create-vibekit-app</code> scaffolds your project, collects your idea, auto-detects your AI provider, and hands off to Claude Code, Codex, Gemini, or OpenCode — all from one terminal command.
            </p>

            <div className="hero-cta mt-9 flex flex-wrap items-center gap-3">
              <Button href="#get-started" variant="accent" size="lg">
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href={SITE.github} variant="outline" size="lg">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>

            {/* Provider chips */}
            <div className="mt-10">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)] mb-3">
                Works with any provider
              </div>
              <div className="flex flex-wrap gap-2">
                {providers.map((p) => (
                  <span
                    key={p.id}
                    className="hero-provider inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: CLI terminal ── */}
          <div className="hero-terminal">
            <CliTerminal />

            {/* Source links */}
            <div className="mt-4 flex items-center justify-end gap-3 font-mono text-[10px] text-[color:var(--text-tertiary)]">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                mosespace/vibekit_pro
              </a>
              <span className="opacity-40">·</span>
              <a
                href={SITE.upstreamGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--text-secondary)] transition-colors"
              >
                upstream: MUKE-coder/vibekit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
