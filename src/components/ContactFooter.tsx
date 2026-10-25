"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type NavKey = "top" | "signature" | "services" | "projets" | "competences" | "methode" | "contact";
interface Section { id: NavKey; label: string }
const NAV: Section[] = [
  { id: "top", label: "Home" },
  { id: "signature", label: "About" },
  { id: "services", label: "Expertise" },
  { id: "projets", label: "Projects" },
  { id: "competences", label: "Skills" },
  { id: "methode", label: "Process" },
  { id: "contact", label: "Contact" },
];

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/BenkacemIbrahim" },
  { label: "Twitter / X", href: "https://twitter.com/Benkacem_" },
  { label: "LinkedIn", href: "#" },
];

function CornerBracketSVG() {
  return (
    <svg
      viewBox="0 0 612 354"
      className="pointer-events-none absolute inset-0 h-full w-full text-ivory/80"
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="cb1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF6B6B" />
          <stop offset="1" stopColor="#FFB547" />
        </linearGradient>
        <linearGradient id="cb2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFB547" />
          <stop offset="1" stopColor="#4ECDC4" />
        </linearGradient>
        <linearGradient id="cb3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4ECDC4" />
          <stop offset="1" stopColor="#7B4B94" />
        </linearGradient>
        <linearGradient id="cb4" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#7B4B94" />
          <stop offset="1" stopColor="#FF6B6B" />
        </linearGradient>
      </defs>
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        whileInView={{ pathLength: 1, pathOffset: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        d="M28,4 L2,4 L2,26 L28,26"
        stroke="url(#cb1)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        whileInView={{ pathLength: 1, pathOffset: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        d="M584,4 L610,4 L610,26 L584,26"
        stroke="url(#cb2)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        whileInView={{ pathLength: 1, pathOffset: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        d="M28,352 L2,352 L2,330 L28,330"
        stroke="url(#cb3)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        whileInView={{ pathLength: 1, pathOffset: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        d="M584,352 L610,352 L610,330 L584,330"
        stroke="url(#cb4)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        cx="306"
        cy="22"
        r="6"
        fill="url(#cb1)"
      />
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        cx="306"
        cy="332"
        r="6"
        fill="url(#cb4)"
      />
    </svg>
  );
}

function NavFooter() {
  return (
    <div className="space-y-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gradient-coral">Navigation</p>
      <ul className="space-y-2">
        {NAV.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              className="group inline-flex items-center gap-2 text-sm text-ivory/65 transition-colors hover:text-ivory"
            >
              <span className="relative overflow-hidden">
                {n.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-coral to-amber transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <svg
                className="h-3 w-3 shrink-0 -translate-x-1 scale-75 text-ivory/40 transition-all duration-300 group-hover:translate-x-0 group-hover:scale-100 group-hover:text-coral"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-4 text-sm">
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.32em] text-gradient-coral">Contact</p>
        <a
          href="mailto:benkacemibrahim1@gmail.com"
          className="group relative inline-flex items-center gap-2 text-gradient-coral font-display text-lg tracking-tight"
        >
          benkacemibrahim1@gmail.com
          <svg
            className="h-4 w-4 translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path d="M3 6L12 12L21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.32em] text-gradient-coral">Social</p>
        <ul className="space-y-2">
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 text-ivory/65 hover:text-ivory"
              >
                <span className="relative overflow-hidden">
                  {s.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-coral to-amber transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.32em] text-gradient-coral">Location</p>
        <p className="text-ivory/65">
          Morocco &mdash; Open to Remote.<br />
          <span className="italic text-ivory/80">Available worldwide.</span>
        </p>
      </div>
    </div>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <rect x="4" y="4" width="52" height="52" rx="14" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M30 14L33.5 25.5L45.5 29L33.5 32.5L30 44L26.5 32.5L14.5 29L26.5 25.5L30 14Z"
        fill="url(#starGradFooter)"
      />
      <defs>
        <linearGradient id="starGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#FFB547" />
          <stop offset="100%" stopColor="#7B4B94" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = window.setInterval(() => setTime(new Date()), 1000 * 30);
    return () => window.clearInterval(id);
  }, []);
  const morocco = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Casablanca",
  }).format(time);
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-ivory/55">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-teal to-mint shadow-glow-teal" />
      </span>
      {morocco} &middot; Morocco
    </div>
  );
}

export default function ContactFooter() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <footer
      id="contact"
      data-nav-theme="dark"
      className="grain relative isolate overflow-hidden bg-midnight pb-8 pt-24 text-ivory"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh-gradient opacity-30 animate-aurora" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[130%] -translate-x-1/2 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(255,107,107,0.22), rgba(255,181,71,0.12), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div ref={titleRef} className="mb-20">
          <span className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-amber-soft">
            <span className="h-px w-10 bg-gradient-to-r from-coral/50 via-amber/50 to-transparent" />
            — let&apos;s build something together
          </span>
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="font-display text-[clamp(2.6rem,7vw,6.2rem)] font-black leading-[0.95] tracking-[-0.035em]">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={inView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Got a project
                </motion.span>
                <br />
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={inView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  <span className="text-gradient-coral italic font-light">in mind</span>? Let&apos;s talk
                </motion.span>
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={inView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-3 inline-block"
                >
                  .
                </motion.span>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-ivory/65 lg:col-span-4">
              Web apps, APIs, dashboards, or a full-stack product &mdash;<br />
              <span className="italic text-ivory/90">I reply within 24h</span> for a first discussion, no strings attached.
            </p>
          </div>

          <motion.a
            href="mailto:benkacemibrahim1@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group mt-16 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[612px]">
              <CornerBracketSVG />
              <div className="relative flex flex-col gap-6 px-8 py-10 md:px-10 md:py-14">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gradient-coral">
                      &mdash; drop me an email
                    </p>
                    <p className="mt-2 font-display text-2xl leading-tight md:text-3xl">
                      Send me a <em className="text-gradient-coral not-italic italic">message</em>
                    </p>
                    <p className="mt-1 text-sm text-ivory/60">
                      Open to freelance, full-time, or collaboration.
                    </p>
                  </div>
                  <div className="relative mt-4 md:mt-0 md:shrink-0">
                    <span className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-r from-coral/40 via-amber/30 to-teal/30 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-coral via-amber to-plum shadow-[0_20px_60px_-12px_rgba(255,107,107,0.7)] transition-transform duration-500 group-hover:scale-105">
                      <span className="sr-only">Send email</span>
                      <svg
                        viewBox="0 0 24 24"
                        className="h-9 w-9 text-midnight transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-coral/20" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/45">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-coral" />
                    <span>Morocco · Remote-friendly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-amber" />
                    <span>20+ Public Repos</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        <div className="relative grid grid-cols-12 gap-10 border-t border-ivory/10 pt-12 pb-10 md:gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10 text-gradient-coral" />
              <div>
                <p className="font-display text-xl font-black tracking-tight">Ibrahim Benkacem</p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-ivory/50">
                  <span className="text-gradient-sunset">Full-Stack Engineer</span> · Morocco
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
              Building clean, efficient web applications with{" "}
              <em className="not-italic italic text-gradient-coral">modern tech stacks</em>. Angular, Spring Boot, Next.js, TypeScript.
            </p>
            <div className="mt-6">
              <Clock />
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-3 lg:pl-10">
            <NavFooter />
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-5">
            <ContactInfo />
          </div>
        </div>

        <div className="relative flex flex-col items-start justify-between gap-5 border-t border-ivory/10 pt-8 text-xs text-ivory/45 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>&copy; {new Date().getFullYear()} Ibrahim Benkacem. All rights reserved.</p>
            <span className="hidden h-1 w-1 rounded-full bg-ivory/30 md:inline-block" />
            <p className="italic">
              Designed &amp; coded by{" "}
              <span className="text-gradient-coral not-italic italic">Ibrahim Benkacem</span> —
              thanks for visiting{" "}
              <span className="inline-flex items-center gap-1 align-middle text-gradient-coral">
                <svg viewBox="0 0 24 24" className="inline h-3.5 w-3.5 translate-y-0.5" fill="none">
                  <path
                    d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono uppercase tracking-[0.28em]">
            <a href="https://github.com/BenkacemIbrahim" target="_blank" rel="noreferrer" className="transition-colors hover:text-ivory/80">
              GitHub
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-ivory/30 md:inline-block" />
            <a href="https://twitter.com/Benkacem_" target="_blank" rel="noreferrer" className="transition-colors hover:text-ivory/80">
              Twitter
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-ivory/30 md:inline-block" />
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
