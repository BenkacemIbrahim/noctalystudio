"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Room = {
  id: string;
  index: string;
  salleLabel: string;
  title: string;
  shortLabel: string;
  description: string;
  bg: string;
  textClass: string;
  subTextClass: string;
  watermarkClass: string;
  medium: string[];
  livraison: string[];
};

const ROOMS: Room[] = [
  {
    id: "01",
    index: "01",
    salleLabel: "SALLE 01",
    title: "SITE VITRINE PREMIUM",
    shortLabel: "VITRINE",
    description:
      "Une porte d'entrÃ©e soignÃ©e, Ã  l'image de votre maison. Design cinÃ©matique, micro-interactions et typographie d'exception pour convertir vos visiteurs en ambassadeurs.",
    bg: "bg-[#E0EDF5]",
    textClass: "text-dark",
    subTextClass: "text-dark/65",
    watermarkClass: "text-dark/10",
    medium: [
      "Direction artistique & identitÃ©",
      "3 maquettes clÃ© en main",
      "Pages service / projet / blog",
      "Optimisation SEO Core Web Vitals",
    ],
    livraison: [
      "Livrable en 3 Ã  4 semaines",
      "3 rounds de retours inclus",
      "Formation de prise en main",
      "30 jours de support post-lancement",
    ],
  },
  {
    id: "02",
    index: "02",
    salleLabel: "SALLE 02",
    title: "APPLI WEB",
    shortLabel: "APPLI WEB",
    description:
      "Des plateformes sur-mesure, conÃ§ues comme des ateliers. Dashboards, CRM, outils internes ou SaaS : architecture propre, composants rÃ©utilisables et performance tenace.",
    bg: "paper-texture",
    textClass: "text-dark",
    subTextClass: "text-dark/65",
    watermarkClass: "text-dark/08",
    medium: [
      "Audit & atelier de cadrage",
      "Design system composable",
      "Next.js / React / Node",
      "Base de donnÃ©es & API REST/GraphQL",
    ],
    livraison: [
      "Sprints bi-hebdomadaires",
      "Environnements de staging",
      "Tests unitaires & end-to-end",
      "Documentation interne & CI/CD",
    ],
  },
  {
    id: "03",
    index: "03",
    salleLabel: "SALLE 03",
    title: "APPLICATION MOBILE",
    shortLabel: "MOBILE",
    description:
      "Une expÃ©rience qui tient dans la poche. iOS & Android avec une seule base de code, animations fluides et sensation native, jusqu'aux stores.",
    bg: "bg-[#EAE4D4]",
    textClass: "text-dark",
    subTextClass: "text-dark/65",
    watermarkClass: "text-dark/09",
    medium: [
      "Atelier UX & user flows",
      "Prototype interactif Figma",
      "React Native / Expo",
      "Push notifications & offline",
    ],
    livraison: [
      "Build iOS App Store",
      "Build Android Play Store",
      "Certificats & pipeline de release",
      "Hotfix et itÃ©rations post-lancement",
    ],
  },
  {
    id: "04",
    index: "04",
    salleLabel: "SALLE 04",
    title: "REFONTE EXISTANTE",
    shortLabel: "REFONTE",
    description:
      "Redonner un second souffle sans jeter l'histoire. Nous reprenons l'existant, modernisons la pile, amÃ©liorons la performance et retravaillons l'expÃ©rience sans perdre vos donnÃ©es.",
    bg: "bg-[#0F1A2E]",
    textClass: "text-cream",
    subTextClass: "text-cream/65",
    watermarkClass: "text-cream/08",
    medium: [
      "Audit complet de l'existant",
      "Migration technique progressive",
      "Reprise du design system",
      "Optimisation vitesse & SEO",
    ],
    livraison: [
      "Plan de migration sans downtime",
      "Synchronisation de donnÃ©es",
      "Tests de non-rÃ©gression",
      "Bascul en douceur par feature flags",
    ],
  },
  {
    id: "05",
    index: "05",
    salleLabel: "SALLE 05",
    title: "MISE EN LIGNE & OPTIMISATION",
    shortLabel: "LANCEMENT",
    description:
      "L'ultime coup de pinceau avant le vernissage. HÃ©bergement, nom de domaine, SEO fin, analytics et monitoring : votre oeuvre est prÃªte Ã  accueillir le monde.",
    bg: "bg-[#F2EDE1]",
    textClass: "text-dark",
    subTextClass: "text-dark/65",
    watermarkClass: "text-dark/09",
    medium: [
      "Configuration hÃ©bergement & domaine",
      "SSL, CDN et cache global",
      "On-page SEO & schema.org",
      "Analytics, heatmaps et monitoring",
    ],
    livraison: [
      "Mise en ligne supervisÃ©e",
      "Checklist de 120 points",
      "Rapport de performance",
      "Support 15 jours aprÃ¨s lancement",
    ],
  },
];

const STEP_LABELS = [
  "VITRINE",
  "APPLI WEB",
  "MOBILE",
  "REFONTE",
  "LANCEMENT",
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const scrollToPanel = useCallback((index: number) => {
    if (!trackRef.current) return;
    const clamped = Math.max(0, Math.min(ROOMS.length - 1, index));
    const st = ScrollTrigger.getById("services-track");
    if (st) {
      const progress = clamped / (ROOMS.length - 1);
      st.scroll(st.start + (st.end - st.start) * progress);
    }
  }, []);

  const next = useCallback(() => {
    scrollToPanel(activeIndexRef.current + 1);
  }, [scrollToPanel]);

  const prev = useCallback(() => {
    scrollToPanel(activeIndexRef.current - 1);
  }, [scrollToPanel]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!track || panels.length === 0) return;

      const totalPanels = panels.length;

      const tl = gsap.to(track, {
        xPercent: -(totalPanels - 1) * 100,
        ease: "none",
        scrollTrigger: {
          id: "services-track",
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (totalPanels - 1),
            duration: { min: 0.3, max: 0.8 },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ease: [0.22, 1, 0.36, 1] as any,
          },
          start: "top top",
          end: () => "+=" + (track.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (totalPanels - 1));
            if (idx !== activeIndexRef.current) {
              activeIndexRef.current = idx;
              setActiveIndex(idx);
            }
          },
        },
      });

      return () => {
        tl.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      data-nav-theme="light"
      className={cn(
        "relative w-full overflow-hidden",
        "bg-cream text-dark"
      )}
    >
      <div className="relative h-[100svh] w-full overflow-hidden md:h-screen">
        <div
          ref={trackRef}
          className="flex h-full w-[500%] flex-nowrap will-change-transform"
        >
          {ROOMS.map((room, i) => (
            <div
              key={room.id}
              ref={(el) => {
                panelsRef.current[i] = el;
              }}
              className={cn(
                "relative h-full w-full flex-shrink-0 overflow-hidden",
                room.bg
              )}
            >
              <span
                className={cn(
                  "pointer-events-none absolute right-[-4vw] top-[-8vw] font-display font-black leading-none select-none",
                  room.watermarkClass
                )}
                style={{ fontSize: "clamp(22rem, 52vw, 60rem)" }}
              >
                {room.index}
              </span>

              <div
                className={cn(
                  "relative z-10 flex h-full flex-col justify-between px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-28"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-mono text-[0.72rem] font-semibold uppercase tracking-widest2 md:text-[0.8rem]",
                      room.subTextClass
                    )}
                  >
                    {room.salleLabel}
                  </span>
                  <span
                    className={cn(
                      "hidden font-mono text-[0.72rem] uppercase tracking-widest2 md:inline-flex",
                      room.subTextClass
                    )}
                  >
                    {String(i + 1).padStart(2, "0")} / {String(ROOMS.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex w-full flex-col gap-10 lg:gap-14">
                  <h2
                    className={cn(
                      "font-display font-black leading-[0.92] tracking-[-0.03em]",
                      room.textClass
                    )}
                    style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
                  >
                    {room.title}
                  </h2>

                  <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    <p
                      className={cn(
                        "max-w-2xl text-[1rem] leading-relaxed md:text-[1.1rem] lg:col-span-5 lg:text-[1.15rem]",
                        room.subTextClass
                      )}
                    >
                      {room.description}
                    </p>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7 lg:gap-12">
                      <div className="flex flex-col gap-4">
                        <span
                          className={cn(
                            "text-[0.7rem] font-bold uppercase tracking-widest2",
                            room.subTextClass
                          )}
                        >
                          MÃ©dium
                        </span>
                        <ul className="flex flex-col gap-3">
                          {room.medium.map((item, k) => (
                            <li
                              key={k}
                              className={cn(
                                "flex items-start gap-3 text-[0.95rem] md:text-[1rem]",
                                room.textClass
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-2 h-px w-6 flex-shrink-0",
                                  room.id === "04"
                                    ? "bg-accent/80"
                                    : "bg-accent-deep/80"
                                )}
                              />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-4">
                        <span
                          className={cn(
                            "text-[0.7rem] font-bold uppercase tracking-widest2",
                            room.subTextClass
                          )}
                        >
                          Livraison
                        </span>
                        <ul className="flex flex-col gap-3">
                          {room.livraison.map((item, k) => (
                            <li
                              key={k}
                              className={cn(
                                "flex items-start gap-3 text-[0.95rem] md:text-[1rem]",
                                room.textClass
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-2 h-px w-6 flex-shrink-0",
                                  room.id === "04"
                                    ? "bg-accent/80"
                                    : "bg-accent-deep/80"
                                )}
                              />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <span
                    className={cn(
                      "font-display italic font-light tracking-tight",
                      room.subTextClass
                    )}
                    style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)" }}
                  >
                    NoctalyStudio Â· PiÃ¨ce {room.index}
                  </span>
                  <div className="hidden items-center gap-2 md:flex">
                    <button
                      onClick={prev}
                      aria-label="Salle prÃ©cÃ©dente"
                      disabled={activeIndex === 0}
                      className={cn(
                        "group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 disabled:opacity-30",
                        room.id === "04"
                          ? "border-cream/30 text-cream hover:bg-cream hover:text-dark"
                          : "border-dark/20 text-dark hover:bg-dark hover:text-cream"
                      )}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M19 12H5M5 12L12 5M5 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      aria-label="Salle suivante"
                      disabled={activeIndex === ROOMS.length - 1}
                      className={cn(
                        "group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 disabled:opacity-30",
                        room.id === "04"
                          ? "border-cream/30 text-cream hover:bg-cream hover:text-dark"
                          : "border-dark/20 text-dark hover:bg-dark hover:text-cream"
                      )}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "pointer-events-none absolute inset-0 grain",
                  room.id === "04" ? "opacity-[0.05]" : "opacity-[0.06]"
                )}
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 px-6 pb-6 md:px-12 md:pb-10">
          <div className="pointer-events-auto mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4">
            <button
              onClick={prev}
              aria-label="Salle prÃ©cÃ©dente"
              disabled={activeIndex === 0}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-dark/20 bg-cream/80 backdrop-blur text-dark transition-all duration-500 hover:bg-dark hover:text-cream disabled:opacity-30 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M19 12H5M5 12L12 5M5 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-1 items-center justify-center gap-3 overflow-x-auto md:gap-5">
              {STEP_LABELS.map((label, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={label + i}
                    onClick={() => scrollToPanel(i)}
                    className={cn(
                      "group flex flex-shrink-0 items-center gap-2.5 transition-all duration-500",
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[0.7rem] font-bold transition-colors",
                        isActive ? "text-accent-deep" : "text-dark/50"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "relative flex h-2.5 w-2.5 items-center justify-center rounded-full border transition-all duration-500",
                        isActive
                          ? "border-accent-deep bg-accent-deep scale-110"
                          : "border-dark/35 bg-transparent group-hover:border-dark/60"
                      )}
                    >
                      {isActive && (
                        <span className="absolute inset-0 -m-1.5 animate-ping rounded-full bg-accent-deep/30" />
                      )}
                    </span>
                    <span
                      className={cn(
                        "hidden text-[0.72rem] font-semibold uppercase tracking-widest2 transition-colors sm:inline-block",
                        isActive ? "text-dark" : "text-dark/50"
                      )}
                    >
                      {label}
                    </span>
                    {i < STEP_LABELS.length - 1 && (
                      <span className="ml-0.5 hidden h-px w-8 bg-dark/15 md:inline-block" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={next}
              aria-label="Salle suivante"
              disabled={activeIndex === ROOMS.length - 1}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-dark/20 bg-cream/80 backdrop-blur text-dark transition-all duration-500 hover:bg-dark hover:text-cream disabled:opacity-30 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
