"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MARQUEE_TEXT = "COMPÉTENCES";
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

function IconFigma({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" />
      <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" />
      <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" />
      <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" />
      <circle cx="20" cy="12" r="4" />
    </svg>
  );
}

function IconMake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4V20H8L14 12L20 20V4H16L10 12L4 4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconAdobeXD({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="800" fill="#F5F0E6" fontFamily="Inter, sans-serif">
        XD
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

function IconThree({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" />
      <polyline points="12,3 21,8 12,13 3,8" />
      <polyline points="3,16 12,21 21,16" />
      <line x1="12" y1="13" x2="12" y2="21" />
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

function IconPython({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9 2 8.5 3.2 8.5 3.2V5.5H12.2V6.4H5.9S2 6.2 2 11.1C2 16 4.9 15.9 4.9 15.9H7.1V13.7S6.9 10 11 10H15.9S20 10.1 20 6.2C20 2.3 16.9 2 16.9 2H14.5S14.4 0.9 12 0.9C9.6 0.9 9.5 2 9.5 2L12 2ZM9.4 3.5C9.9 3.5 10.3 3.9 10.3 4.4C10.3 4.9 9.9 5.3 9.4 5.3C8.9 5.3 8.5 4.9 8.5 4.4C8.5 3.9 8.9 3.5 9.4 3.5Z" />
      <path d="M12 22C15 22 15.5 20.8 15.5 20.8V18.5H11.8V17.6H18.1S22 17.8 22 12.9C22 8 19.1 8.1 19.1 8.1H16.9V10.3S17.1 14 13 14H8.1S4 13.9 4 17.8C4 21.7 7.1 22 7.1 22H9.5S9.6 23.1 12 23.1C14.4 23.1 14.5 22 14.5 22L12 22ZM14.6 20.5C14.1 20.5 13.7 20.1 13.7 19.6C13.7 19.1 14.1 18.7 14.6 18.7C15.1 18.7 15.5 19.1 15.5 19.6C15.5 20.1 15.1 20.5 14.6 20.5Z" />
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

function IconAPI({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 9L5 12L9 15" />
      <path d="M15 9L19 12L15 15" />
      <path d="M13 7L11 17" />
    </svg>
  );
}

const PLANCHES = [
  {
    n: "01",
    title: "Design & Prototypage",
    tilt: "-2deg",
    color: "from-coral/30",
    shadow: "shadow-[0_28px_70px_-30px_rgba(255,107,107,0.5)]",
    content: (
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-coral/15 hover:text-coral-500">
          <IconFigma className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-amber/15 hover:text-amber-deep">
          <IconMake className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-teal/15 hover:text-teal-deep">
          <IconAdobeXD className="h-8 w-8" />
        </div>
        <div className="ml-1 flex flex-col">
          <p className="font-display text-[1.05rem] font-semibold">Figma</p>
          <p className="font-display text-[1.05rem] font-semibold">Make</p>
          <p className="font-display text-[1.05rem] font-semibold">Adobe XD</p>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    title: "Frontend & 3D",
    tilt: "1.5deg",
    color: "from-teal/25",
    shadow: "shadow-[0_28px_70px_-30px_rgba(78,205,196,0.5)]",
    content: (
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-midnight to-midnight-700 text-ivory transition-all duration-500 hover:scale-110 hover:from-midnight-700 hover:to-plum">
          <IconNext className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-coral/15 text-coral-500 transition-all duration-500 hover:scale-110 hover:bg-amber/15 hover:text-amber-deep">
          <IconReact className="h-8 w-8" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-plum/15 hover:text-plum">
          <IconThree className="h-8 w-8" />
        </div>
        <div className="ml-1 flex flex-col">
          <p className="font-display text-[1.05rem] font-semibold">Next.js</p>
          <p className="font-display text-[1.05rem] font-semibold">React</p>
          <p className="font-display text-[1.05rem] font-semibold">Three.js</p>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    title: "CMS & E-Commerce",
    tilt: "-1deg",
    color: "from-amber/25",
    shadow: "shadow-[0_28px_70px_-30px_rgba(255,181,71,0.5)]",
    content: (
      <div className="flex w-full flex-wrap items-center justify-between gap-4">
        {["Catalogue", "Fiche", "Panier"].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-midnight/20 bg-gradient-to-br from-coral/10 via-amber/8 to-teal/10 text-midnight transition-all duration-500 hover:scale-105 hover:border-coral/50">
                <span className="font-mono text-[0.95rem] font-black text-gradient-coral">
                  0{i + 1}
                </span>
              </div>
              <p className="font-mono text-[0.74rem] font-semibold uppercase tracking-widest2 text-midnight/70">
                {step}
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
    title: "Back-end & Données",
    tilt: "2deg",
    color: "from-plum/20",
    shadow: "shadow-[0_28px_70px_-30px_rgba(123,75,148,0.55)]",
    content: (
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-teal/15 hover:text-teal-deep">
          <IconSQL className="h-7 w-7" />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-amber/15 hover:text-amber-deep">
          <IconPython className="h-7 w-7" />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-coral/15 hover:text-coral-500">
          <IconGit className="h-7 w-7" />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-all duration-500 hover:scale-110 hover:bg-plum/15 hover:text-plum">
          <IconAPI className="h-7 w-7" />
        </div>
        <div className="ml-2 flex flex-wrap gap-2">
          {["SQL", "Python", "Git", "REST API"].map((t) => (
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
            — cinq familles
          </span>
          <h2 className="font-display text-[clamp(3rem,11vw,10rem)] font-black uppercase leading-[0.9] tracking-[-0.035em]">
            La boîte
            <br className="hidden md:block" />
            <span className="text-gradient-ocean italic font-light">à outils</span>
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
                  Planche {p.n}
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
