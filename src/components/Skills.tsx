"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MARQUEE_TEXT = "SKILLS";
const STAR_SEP = "✦";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    text: MARQUEE_TEXT,
    sep: STAR_SEP,
  }));

  return (
    <div
      className={cn(
        "flex w-max items-center gap-10 whitespace-nowrap animate-marquee",
        reverse && "[animation-direction:reverse]"
      )}
    >
      {items.concat(items).map((it, idx) => (
        <div key={`${it.id}-${idx}`} className="flex items-center gap-10">
          <span className="font-display text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-none tracking-[-0.03em] bg-gradient-to-r from-midnight via-midnight to-plum bg-clip-text text-transparent">
            {it.text}
          </span>
          <span className="font-display text-[clamp(3rem,10vw,9rem)] font-black leading-none text-gradient-coral">
            {it.sep}
          </span>
        </div>
      ))}
    </div>
  );
}

function IconAngular({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 6.5l1.64 14.05L12 23l8.36-2.45L22 6.5 12 2zm0 2.27l6.69 2.96-1.18 10.15L12 19.38 6.49 17.38 5.31 7.23 12 4.27zM9.59 9l-1.47 3.51H9.5l.28-.75h2.43l.27.75h1.38L12.41 9H9.59zm.52 1.7l.78-2.1.78 2.1H10.11z"/>
    </svg>
  );
}

function IconSpringBoot({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14c0-2.5 2-4 4-4s4 1.5 4 4" />
      <path d="M12 8v2" />
    </svg>
  );
}

function IconTypeScript({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="800" fill="#F5F0E6" fontFamily="Inter, sans-serif">
        TS
      </text>
    </svg>
  );
}

function IconNext({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="12" />
      <path d="M8.5 7.5V16.5" stroke="#F5F0E6" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 7.5L15.5 16.5" stroke="#F5F0E6" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15.5" cy="8.2" r="1" fill="#F5F0E6" />
    </svg>
  );
}

function IconReact({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />
    </svg>
  );
}

function IconJava({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M8 17c0 0 4 2 8-1" />
      <path d="M7 19c0 0 5 2.5 10-1" />
      <path d="M10 3c0 0-4 5 0 8c4 3 2 7 0 9" />
    </svg>
  );
}

function IconSQL({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5" />
      <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" />
    </svg>
  );
}

function IconDocker({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10" width="4" height="3" />
      <rect x="7" y="10" width="4" height="3" />
      <rect x="12" y="10" width="4" height="3" />
      <rect x="7" y="7" width="4" height="3" />
      <rect x="12" y="7" width="4" height="3" />
      <path d="M2 14c0 2.5 4 4 10 4s10-1.5 10-4" />
    </svg>
  );
}

function IconGit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M6 8.2V15.8" />
      <path d="M7.9 6.7L16 10.4" />
      <path d="M7.9 17.3L16 13.6" />
    </svg>
  );
}

const PLANCHES = [
  {
    n: "01",
    title: "Frontend",
    tilt: "-2deg",
    color: "from-coral/30",
    shadow: "shadow-[0_28px_70px_-30px_rgba(255,107,107,0.5)]",
    content: (
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-midnight to-midnight-700 text-ivory transition-all duration-500 hover:scale-110 hover:from-midnight-700 hover:to-plum">
          <IconAngular className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-coral/15 hover:text-coral-500">
          <IconReact className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-teal/15 hover:text-teal-deep">
          <IconNext className="h-8 w-8" />
        </div>
        <div className="ml-1 flex flex-col">
          <p className="font-display text-[1.05rem] font-semibold">Angular</p>
          <p className="font-display text-[1.05rem] font-semibold">React</p>
          <p className="font-display text-[1.05rem] font-semibold">Next.js</p>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    title: "Backend & APIs",
    tilt: "1.5deg",
    color: "from-teal/25",
    shadow: "shadow-[0_28px_70px_-30px_rgba(78,205,196,0.5)]",
    content: (
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-coral/15 text-coral-500 transition-all duration-500 hover:scale-110 hover:bg-amber/15 hover:text-amber-deep">
          <IconJava className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-teal/15 hover:text-teal-deep">
          <IconSpringBoot className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-plum/15 hover:text-plum">
          <IconSQL className="h-8 w-8" />
        </div>
        <div className="ml-1 flex flex-col">
          <p className="font-display text-[1.05rem] font-semibold">Java</p>
          <p className="font-display text-[1.05rem] font-semibold">Spring Boot</p>
          <p className="font-display text-[1.05rem] font-semibold">PostgreSQL</p>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    title: "Languages & Tools",
    tilt: "-1deg",
    color: "from-amber/25",
    shadow: "shadow-[0_28px_70px_-30px_rgba(255,181,71,0.5)]",
    content: (
      <div className="flex w-full flex-wrap items-center justify-between gap-4">
        {["TypeScript", "JavaScript", "Python", "Java"].map((lang, i, arr) => (
          <div key={lang} className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-midnight/20 bg-gradient-to-br from-coral/10 via-amber/8 to-teal/10 text-midnight transition-all duration-500 hover:scale-105 hover:border-coral/50">
                <span className="font-mono text-[0.95rem] font-black text-gradient-coral">
                  0{i + 1}
                </span>
              </div>
              <p className="font-mono text-[0.74rem] font-semibold uppercase tracking-widest2 text-midnight/70">
                {lang}
              </p>
            </div>
            {i < arr.length - 1 && (
              <div className="mb-5 flex items-center gap-1 text-gradient-coral">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="url(#arrowGrad)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF6B6B" />
                      <stop offset="100%" stopColor="#FFB547" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    n: "04",
    title: "DevOps & Architecture",
    tilt: "2deg",
    color: "from-plum/20",
    shadow: "shadow-[0_28px_70px_-30px_rgba(123,75,148,0.55)]",
    content: (
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-teal/15 hover:text-teal-deep">
          <IconDocker className="h-7 w-7" />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-amber/15 hover:text-amber-deep">
          <IconTypeScript className="h-7 w-7" />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-coral/15 hover:text-coral-500">
          <IconGit className="h-7 w-7" />
        </div>
        <div className="ml-2 flex flex-wrap gap-2">
          {["Docker", "Redis", "JWT & RBAC", "Clean Architecture", "REST API", "Nginx"].map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-midnight/15 bg-gradient-to-r from-ivory to-ivory-100 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-widest2 text-midnight/80 transition-all duration-500 hover:border-coral/30 hover:from-coral/10 hover:to-amber/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Skills() {
  return (
    <section
      id="competences"
      data-nav-theme="light"
      className={cn(
        "paper-texture relative w-full overflow-hidden text-midnight",
        "pt-20 pb-28 md:pt-24 md:pb-40"
      )}
    >
      <div aria-hidden className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-coral/12 blur-[120px]" />
      <div aria-hidden className="absolute bottom-20 -right-40 h-96 w-96 rounded-full bg-teal/12 blur-[120px]" />

      <div className="relative mx-auto -mb-4 overflow-hidden border-y border-midnight/10 py-6 md:-mb-6 md:py-8">
        <MarqueeRow />
      </div>
      <div className="mx-auto overflow-hidden border-b border-midnight/10 py-4 opacity-60 md:py-6">
        <MarqueeRow reverse />
      </div>

      <div className="mx-auto mt-20 w-full max-w-[1500px] px-6 lg:px-10 md:mt-28">
        <div className="mb-16 flex flex-col gap-5 md:mb-24">
          <span className="text-[0.72rem] font-semibold uppercase tracking-widest2 text-gradient-coral">
            — four domains
          </span>
          <h2 className="font-display text-[clamp(3rem,11vw,10rem)] font-black uppercase leading-[0.9] tracking-[-0.035em]">
            The
            <br className="hidden md:block" />
            <span className="text-gradient-ocean italic font-light"> Toolkit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-8 lg:grid-cols-2">
          {PLANCHES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: parseFloat(p.tilt) }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transform: `rotate(${p.tilt})` }}
              className={cn(
                "group relative overflow-hidden rounded-[1.85rem] border border-midnight/10 bg-gradient-to-br from-ivory-50 via-ivory to-paper-warm p-8 md:p-10",
                "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:to-transparent before:opacity-60",
                p.shadow,
                i % 2 === 1 ? "lg:mt-24" : ""
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl",
                  p.color
                )}
              />

              <div className="relative mb-8 flex items-center justify-between">
                <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-widest2 text-midnight/60">
                  Domain {p.n}
                </span>
                <svg
                  className="h-5 w-5 text-gradient-coral transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="url(#outboundGrad)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="outboundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B6B" />
                      <stop offset="100%" stopColor="#FFB547" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h3 className="relative mb-8 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-black uppercase leading-[0.95] tracking-[-0.02em]">
                {p.title}
              </h3>

              <div className="relative">{p.content}</div>

              <div className="relative mt-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-3.5 w-3.5 text-coral-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                  <svg
                    className="h-3 w-3 text-amber-deep"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                  <svg
                    className="h-2.5 w-2.5 text-teal-deep"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                </div>
                <span className="font-mono text-[0.68rem] uppercase tracking-widest2 text-midnight/45">
                  N°0{i + 1} / 04
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
