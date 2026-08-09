"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    index: "N°01",
    title: "RelanceWork",
    subtitle:
      "Un gestionnaire de candidatures qui relance vos prospects tout seul.",
    category: "FULL-STACK",
    year: "2025",
    accent: "coral",
  },
  {
    index: "N°02",
    title: "Rasengan Chidori",
    subtitle:
      "Plateforme de quiz anime multijoueur en temps réel.",
    category: "DESIGN SYSTEM",
    year: "2024",
    accent: "amber",
  },
  {
    index: "N°03",
    title: "Atlas Voyages",
    subtitle:
      "Moteur de réservation sur-mesure pour agence de tours.",
    category: "E-COMMERCE",
    year: "2024",
    accent: "teal",
  },
  {
    index: "N°04",
    title: "Lumen Portfolio",
    subtitle:
      "Site portfolio avec scroll 3D pour photographe.",
    category: "WEB DESIGN",
    year: "2025",
    accent: "plum",
  },
];

function getAccentHover(accent: string) {
  switch (accent) {
    case "coral": return "group-hover:text-coral-500";
    case "amber": return "group-hover:text-amber-deep";
    case "teal": return "group-hover:text-teal-deep";
    case "plum": return "group-hover:text-plum";
    default: return "group-hover:text-coral-500";
  }
}

function getAccentBg(accent: string) {
  switch (accent) {
    case "coral": return "from-coral/15 via-coral/10 to-transparent";
    case "amber": return "from-amber/15 via-amber/10 to-transparent";
    case "teal": return "from-teal/15 via-teal/10 to-transparent";
    case "plum": return "from-plum/15 via-plum/10 to-transparent";
    default: return "from-coral/15 via-coral/10 to-transparent";
  }
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { clipPath: "inset(100% 0 0 0)", opacity: 0 },
          {
            clipPath: "inset(0% 0 0 0)",
            opacity: 1,
            duration: 1.1,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ease: [0.22, 1, 0.36, 1] as any,
            delay: i * 0.08,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projets"
      data-nav-theme="light"
      className={cn(
        "paper-texture relative w-full overflow-hidden text-midnight",
        "py-28 md:py-40"
      )}
    >
      <div aria-hidden className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-coral/10 blur-[100px]" />
      <div aria-hidden className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-teal/10 blur-[100px]" />

      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-coral to-amber shadow-glow-coral" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-widest2 text-gradient-coral">
                — la collection
              </span>
            </div>
            <h2 className="font-display text-[clamp(3rem,11vw,10rem)] font-black leading-[0.92] tracking-[-0.03em]">
              Pièces <span className="text-gradient-sunset italic font-light">choisies</span>
            </h2>
          </div>

          <a
            href="#projets"
            className="group inline-flex items-center gap-2 self-start text-[0.8rem] font-semibold uppercase tracking-widest2 text-midnight transition-colors md:self-end"
          >
            <span className="relative">
              Visiter la galerie
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-coral to-amber transition-all duration-500 group-hover:w-full" />
            </span>
            <svg
              className="h-3.5 w-3.5 transition-all duration-500 group-hover:translate-x-1 group-hover:-rotate-45"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="hairline mb-0 bg-gradient-to-r from-coral/40 via-amber/30 to-teal/40" />

        <ul className="divide-y divide-midnight/12">
          {PROJECTS.map((p, i) => (
            <li
              key={p.index}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
            >
              <a
                href="#"
                className={cn(
                  "group relative grid grid-cols-12 items-end gap-4 py-10 transition-all duration-500 md:gap-8 md:py-14 lg:py-16 overflow-hidden"
                )}
              >
                <div aria-hidden className={cn(
                  "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-700 group-hover:opacity-100",
                  getAccentBg(p.accent)
                )} />

                <div className="col-span-3 md:col-span-2 relative z-10">
                  <span className="font-mono text-[0.78rem] font-medium uppercase tracking-widest text-midnight/55">
                    {p.index}
                  </span>
                </div>

                <div className="col-span-9 flex flex-col gap-3 md:col-span-6 relative z-10">
                  <h3 className={cn(
                    "font-display text-[clamp(2rem,5vw,5.2rem)] font-black leading-[0.95] tracking-[-0.025em] transition-all duration-500",
                    getAccentHover(p.accent)
                  )}>
                    {p.title}
                  </h3>
                  <p className="max-w-xl text-[1rem] leading-relaxed text-midnight/65 md:text-[1.05rem]">
                    {p.subtitle}
                  </p>
                </div>

                <div className="col-span-6 mt-4 flex items-center justify-start md:col-span-2 md:mt-0 md:justify-center relative z-10">
                  <span className="inline-flex items-center rounded-full border border-midnight/20 bg-ivory/60 backdrop-blur px-4 py-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-widest2 text-midnight/75 transition-all duration-500 group-hover:border-coral/40 group-hover:bg-coral/10">
                    {p.category}
                  </span>
                </div>

                <div className="col-span-6 mt-4 flex items-center justify-end md:col-span-2 md:mt-0 relative z-10">
                  <span className="font-display text-[1.4rem] font-semibold tracking-tight text-midnight/75 transition-colors duration-500 group-hover:text-midnight md:text-[1.8rem]">
                    {p.year}
                  </span>
                  <svg
                    className="ml-3 h-5 w-5 -rotate-45 text-midnight/30 transition-all duration-500 group-hover:rotate-0 group-hover:scale-125"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="hairline mt-0 bg-gradient-to-r from-teal/40 via-amber/30 to-coral/40" />
      </div>
    </section>
  );
}
