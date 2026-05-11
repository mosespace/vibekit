"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Github } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { SITE } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTA() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cta-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section id="get-started" ref={root} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="cta-card relative overflow-hidden rounded-[var(--radius-2xl)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-10 sm:p-16 text-center">
          {/* Claude coral glow */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in srgb, #D97757 20%, transparent), transparent 70%)",
            }}
          />

          {/* Warm grid */}
          <div
            className="pointer-events-none absolute inset-0 grid-pattern opacity-30"
            aria-hidden
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              MIT licensed · Open source
            </div>

            <h2 className="font-display mt-8 text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-[color:var(--text-primary)]">
              Stop fighting AI.
              <br />
              <em className="not-italic gradient-text">Start shipping.</em>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[color:var(--text-secondary)]">
              Run one command, describe your idea, and let your AI provider plan
              and build it phase by phase with a locked stack, pre-deploy audit,
              and production patterns baked in.
            </p>

            {/* Terminal command */}
            <div className="mx-auto mt-10 max-w-sm">
              <div className="flex items-center gap-3 rounded-md border border-[color:var(--accent)]/30 bg-[#0E0C09] px-5 py-3.5 font-mono text-[14px]">
                <span className="text-[#D97757]">$</span>
                <code className="flex-1 text-left text-[#F5EFE6]">
                  npx create-vibekit-app my-app
                </code>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={SITE.github} variant="accent" size="lg">
                Get VibeKit on GitHub
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/docs/quickstart" variant="outline" size="lg">
                <Github className="h-4 w-4" />
                Read the docs
              </Button>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
              Fork by{" "}
              <a
                href={SITE.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                Moses Kisakye
              </a>{" "}
              · Original by{" "}
              <a
                href={SITE.originalAuthorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--text-secondary)] transition-colors"
              >
                JB · Desishub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
