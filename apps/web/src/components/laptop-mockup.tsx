"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Line = {
  id: string;
  prefix?: string;
  prefixColor?: string;
  text: string;
  textColor?: string;
  bold?: boolean;
  indent?: boolean;
};

const SESSION_LINES: Line[] = [
  {
    id: "cmd",
    prefix: "$",
    prefixColor: "#D97757",
    text: "npx create-vibekit-app my-app",
    textColor: "#F5EFE6",
    bold: true,
  },
  { id: "blank1", prefix: "", prefixColor: "", text: "" },
  {
    id: "brand",
    prefix: "",
    prefixColor: "",
    text: "  ▐ create-vibekit-app ▌",
    textColor: "#D97757",
    bold: true,
  },
  { id: "blank2", prefix: "", prefixColor: "", text: "" },
  {
    id: "scaffold",
    prefix: "✔",
    prefixColor: "#27C93F",
    text: "Project scaffolded",
    textColor: "#A89880",
  },
  {
    id: "scaffold-path",
    prefix: "│",
    prefixColor: "#3D3228",
    text: ".vibekit/  .env.example  .gitignore",
    textColor: "#3D3228",
    indent: true,
  },
  { id: "blank3", prefix: "", prefixColor: "", text: "" },
  {
    id: "idea-prompt",
    prefix: "◆",
    prefixColor: "#D97757",
    text: "Describe your app idea (1–3 sentences):",
    textColor: "#F5EFE6",
  },
  {
    id: "idea-answer",
    prefix: "│",
    prefixColor: "#705D4A",
    text: "A school management system — teachers, students, fees, grades",
    textColor: "#A89880",
    indent: true,
  },
  { id: "blank4", prefix: "", prefixColor: "", text: "" },
  {
    id: "detect",
    prefix: "◆",
    prefixColor: "#D97757",
    text: "Detecting AI providers...",
    textColor: "#F5EFE6",
  },
  {
    id: "claude-found",
    prefix: "●",
    prefixColor: "#D97757",
    text: "Claude Code  /usr/local/bin/claude",
    textColor: "#D97757",
    indent: true,
  },
  {
    id: "gemini-not",
    prefix: "○",
    prefixColor: "#3D3228",
    text: "Gemini CLI   not found",
    textColor: "#3D3228",
    indent: true,
  },
  { id: "blank5", prefix: "", prefixColor: "", text: "" },
  {
    id: "auth",
    prefix: "✔",
    prefixColor: "#27C93F",
    text: "Claude Code",
    textColor: "#A89880",
  },
  {
    id: "auth-ok",
    prefix: "",
    prefixColor: "",
    text: " authenticated ✓",
    textColor: "#27C93F",
  },
  { id: "blank6", prefix: "", prefixColor: "", text: "" },
  {
    id: "s1-label",
    prefix: "◆",
    prefixColor: "#D97757",
    text: "Session 1 — Planning",
    textColor: "#F5EFE6",
    bold: true,
  },
  {
    id: "s1-hint",
    prefix: "│",
    prefixColor: "#705D4A",
    text: "Claude Code will interview you and generate 4 project files.",
    textColor: "#705D4A",
    indent: true,
  },
  { id: "blank7", prefix: "", prefixColor: "", text: "" },
  {
    id: "launch",
    prefix: "▶",
    prefixColor: "#D97757",
    text: "Launching Claude Code...",
    textColor: "#D97757",
    bold: true,
  },
  { id: "blank8", prefix: "", prefixColor: "", text: "" },
  {
    id: "f1",
    prefix: "✔",
    prefixColor: "#27C93F",
    text: "project-description.md",
    textColor: "#A89880",
  },
  {
    id: "f2",
    prefix: "✔",
    prefixColor: "#27C93F",
    text: "project-phases.md",
    textColor: "#A89880",
  },
  {
    id: "f3",
    prefix: "✔",
    prefixColor: "#27C93F",
    text: "design-style-guide.md",
    textColor: "#A89880",
  },
  {
    id: "f4",
    prefix: "✔",
    prefixColor: "#27C93F",
    text: "prompt.md",
    textColor: "#A89880",
  },
  { id: "blank9", prefix: "", prefixColor: "", text: "" },
  {
    id: "s2-prompt",
    prefix: "◆",
    prefixColor: "#D97757",
    text: "Session 2 — Build  Start Claude Code now to build Phase 1?",
    textColor: "#F5EFE6",
    bold: true,
  },
  {
    id: "s2-confirm",
    prefix: "│",
    prefixColor: "#705D4A",
    text: "● Yes  ○ No",
    textColor: "#27C93F",
    indent: true,
  },
  { id: "blank10", prefix: "", prefixColor: "", text: "" },
  {
    id: "done",
    prefix: "✔",
    prefixColor: "#27C93F",
    text: "Done! Your project is ready.",
    textColor: "#27C93F",
    bold: true,
  },
];

export function LaptopMockup() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".term-header", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".term-window", { y: 28, opacity: 0, duration: 0.8, ease: "expo.out" }, "-=0.3")
        .from(
          ".term-line",
          {
            opacity: 0,
            y: 6,
            stagger: 0.055,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(".term-cursor", { opacity: 0, duration: 0.3 }, "-=0.2");

      gsap.to(".term-cursor", {
        opacity: 0,
        duration: 0.55,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="see-it" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, color-mix(in srgb, #D97757 10%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="term-header mx-auto max-w-2xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            </span>
            See it in action · Full CLI session
          </div>
          <h2 className="font-display mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-[color:var(--text-primary)]">
            Your terminal becomes{" "}
            <em className="not-italic gradient-text">the build tool.</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[color:var(--text-secondary)]">
            Every step from blank directory to agent handoff happens in one terminal session — scaffold, interview, provider detection, auth, planning, and build.
          </p>
        </div>

        {/* Terminal window */}
        <div
          className="term-window relative mx-auto max-w-3xl rounded-xl border border-[#2A221A] bg-[#0E0C09] shadow-[0_32px_80px_rgba(217,119,87,0.15),0_0_0_1px_rgba(217,119,87,0.08)]"
        >
          {/* Window bar */}
          <div className="flex items-center gap-2 rounded-t-xl border-b border-[#1C1916] bg-[#111009] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-4 font-mono text-[11px] text-[#705D4A] tracking-wide">
              Terminal — my-app
            </span>
            <div className="ml-auto font-mono text-[10px] text-[#3D3228]">
              node 22 · npx
            </div>
          </div>

          {/* Scrollable content */}
          <div className="max-h-[480px] overflow-y-auto p-5 font-mono text-[12.5px] leading-[1.9] custom-scrollbar">
            {SESSION_LINES.map((line) => {
              if (!line.prefix && !line.text) {
                return <div key={line.id} className="term-line h-2" />;
              }
              if (line.id === "auth") {
                return (
                  <div key={line.id} className="term-line flex items-center">
                    <span style={{ color: "#27C93F", minWidth: "1.5ch" }}>✔</span>
                    <span style={{ color: "#A89880" }}>Claude Code</span>
                    <span style={{ color: "#27C93F" }}>&nbsp;authenticated ✓</span>
                  </div>
                );
              }
              if (line.id === "auth-ok") return null;
              return (
                <div
                  key={line.id}
                  className={`term-line flex items-start gap-2${line.indent ? " pl-4" : ""}`}
                >
                  {line.prefix ? (
                    <span
                      style={{
                        color: line.prefixColor || "#705D4A",
                        minWidth: "1.5ch",
                        flexShrink: 0,
                      }}
                    >
                      {line.prefix}
                    </span>
                  ) : null}
                  <span
                    style={{
                      color: line.textColor || "#A89880",
                      fontWeight: line.bold ? 600 : undefined,
                    }}
                  >
                    {line.text}
                  </span>
                </div>
              );
            })}

            {/* Blinking cursor at end */}
            <div className="term-line flex items-center gap-2 mt-1">
              <span style={{ color: "#D97757" }}>$</span>
              <span
                className="term-cursor inline-block w-[9px] h-[14px] bg-[#D97757]"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
          Run{" "}
          <code className="rounded border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-1.5 py-0.5 text-[color:var(--accent)]">
            npx create-vibekit-app my-app
          </code>{" "}
          — this is your actual terminal output
        </p>
      </div>
    </section>
  );
}
