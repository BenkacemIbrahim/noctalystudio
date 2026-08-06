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
  },
  {
    index: "N°02",
    title: "Rasengan Chidori",
    subtitle:
      "Plateforme de quiz anime multijoueur en temps réel.",
    category: "DESIGN SYSTEM",
    year: "2024",
  },
  {
    index: "N°03",
    title: "Atlas Voyages",
    subtitle:
      "Moteur de réservation sur-mesure pour agence de tours.",
    category: "E-COMMERCE",
    year: "2024",
  },
  {
    index: "N°04",
    title: "Lumen Portfolio",
    subtitle:
      "Site portfolio avec scroll 3D pour photographe.",
    category: "WEB DESIGN",
    year: "2025",
  },
];

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
        "paper-texture relative w-full overflow-hidden text-dark",
        "py-28 md:py-40"
      )}
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="text-[0.72rem] font-semibold uppercase tracking-widest2 text-accent-deep">
                — la collection
              </span>
            </div>
            <h2 className="font-display text-[clamp(3rem,11vw,10rem)] font-black leading-[0.92] tracking-[-0.03em]">
              Pièces choisies
            </h2>
          </div>

          <a
            href="#projets"
            className="group inline-flex items-center gap-2 self-start text-[0.8rem] font-semibold uppercase tracking-widest2 text-dark transition-colors hover:text-accent-deep md:self-end"
          >
            <span>Visiter la galerie</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
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

        <div className="hairline mb-0" />

        <ul className="divide-y divide-dark/12">
          {PROJECTS.map((p, i) => (
            <li
              key={p.index}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
            >
              <a
                href="#"
                className="group grid grid-cols-12 items-end gap-4 py-10 transition-colors hover:bg-dark/[0.025] md:gap-8 md:py-14 lg:py-16"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="font-mono text-[0.78rem] font-medium uppercase tracking-widest text-dark/55">
                    {p.index}
                  </span>
                </div>

                <div className="col-span-9 flex flex-col gap-3 md:col-span-6">
                  <h3 className="font-display text-[clamp(2rem,5vw,5.2rem)] font-black leading-[0.95] tracking-[-0.025em] transition-colors group-hover:text-accent-deep">
                    {p.title}
                  </h3>
                  <p className="max-w-xl text-[1rem] leading-relaxed text-dark/65 md:text-[1.05rem]">
                    {p.subtitle}
                  </p>
                </div>

                <div className="col-span-6 mt-4 flex items-center justify-start md:col-span-2 md:mt-0 md:justify-center">
                  <span className="inline-flex items-center rounded-full border border-dark/20 px-4 py-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-widest2 text-dark/75">
                    {p.category}
                  </span>
                </div>

                <div className="col-span-6 mt-4 flex items-center justify-end md:col-span-2 md:mt-0">
                  <span className="font-display text-[1.4rem] font-semibold tracking-tight text-dark/75 md:text-[1.8rem]">
                    {p.year}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="hairline mt-0" />
      </div>
    </section>
  );
}
