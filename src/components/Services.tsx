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
  bgClass: string;
  textClass: string;
  subTextClass: string;
  watermarkClass: string;
  accent: string;
  medium: string[];
  livraison: string[];
};

const ROOMS: Room[] = [
  {
    id: "01",
    index: "01",
    salleLabel: "DOMAIN 01",
    title: "FULL-STACK WEB APPS",
    shortLabel: "WEB APPS",
    description:
      "End-to-end web applications built with Angular, Next.js, Spring Boot and PostgreSQL. Clean architecture, composable design systems, and production-grade APIs — from MVP to enterprise scale.",
    bgClass: "bg-gradient-to-br from-[#FFF5EC] via-[#FFE8D6] to-[#FED4B0]",
    textClass: "text-midnight",
    subTextClass: "text-midnight/65",
    watermarkClass: "text-midnight/10",
    accent: "text-coral",
    medium: [
      "Angular SPA & Next.js applications",
      "Spring Boot REST & WebSocket APIs",
      "PostgreSQL & Redis data layers",
      "JWT auth & RBAC security",
    ],
    livraison: [
      "CI/CD pipelines with Docker",
      "Nginx reverse proxy setup",
      "Automated test suites",
      "Swagger/OpenAPI documentation",
    ],
  },
  {
    id: "02",
    index: "02",
    salleLabel: "DOMAIN 02",
    title: "ENTERPRISE PLATFORMS",
    shortLabel: "ENTERPRISE",
    description:
      "Complex business platforms with authentication, analytics, role-based access, dashboards and Kanban systems. Designed like Linear. Reliable like a bank.",
    bgClass: "paper-texture",
    textClass: "text-midnight",
    subTextClass: "text-midnight/65",
    watermarkClass: "text-midnight/08",
    accent: "text-amber-deep",
    medium: [
      "Multi-role authentication systems",
      "Analytics & reporting dashboards",
      "Kanban & workflow management",
      "Real-time features with WebSockets",
    ],
    livraison: [
      "Domain-driven design (DDD)",
      "Clean architecture layers",
      "Containerized deployment",
      "Performance optimization & caching",
    ],
  },
  {
    id: "03",
    index: "03",
    salleLabel: "DOMAIN 03",
    title: "API & BACKEND SYSTEMS",
    shortLabel: "BACKEND",
    description:
      "Production-ready Java/Spring Boot backends with Flyway migrations, OpenAPI documentation, and thorough automated test coverage. APIs built to last.",
    bgClass: "bg-gradient-to-br from-[#E8FAF8] via-[#D1F4F0] to-[#A3E6E1]",
    textClass: "text-midnight",
    subTextClass: "text-midnight/65",
    watermarkClass: "text-midnight/09",
    accent: "text-teal-deep",
    medium: [
      "Spring Boot microservices",
      "PostgreSQL & Flyway migrations",
      "Stripe payment integration",
      "MinIO object storage",
    ],
    livraison: [
      "Unit & integration tests",
      "Swagger UI documentation",
      "Docker & Docker Compose",
      "Security audit & hardening",
    ],
  },
  {
    id: "04",
    index: "04",
    salleLabel: "DOMAIN 04",
    title: "AI-POWERED APPLICATIONS",
    shortLabel: "AI APPS",
    description:
      "Modern AI-integrated products leveraging Gemini, Next.js and TypeScript. From intelligent research assistants to interactive frontends powered by cutting-edge models.",
    bgClass: "bg-gradient-to-br from-[#1A1430] via-[#0D0B1F] to-[#080612]",
    textClass: "text-ivory",
    subTextClass: "text-ivory/65",
    watermarkClass: "text-ivory/08",
    accent: "text-plum-soft",
    medium: [
      "Gemini API integration",
      "Next.js & React frontends",
      "Accessible, responsive UI",
      "SEO & Core Web Vitals optimization",
    ],
    livraison: [
      "Vercel / Netlify deployment",
      "shadcn/ui component systems",
      "Tailwind CSS design tokens",
      "Full TypeScript type safety",
    ],
  },
  {
    id: "05",
    index: "05",
    salleLabel: "DOMAIN 05",
    title: "SECURITY & DEVOPS",
    shortLabel: "DEVOPS",
    description:
      "Infrastructure, security and continuous delivery. JWT + refresh token rotation, RBAC policies, Docker containerization, Nginx config, and robust CI/CD pipelines.",
    bgClass: "bg-gradient-to-br from-[#FDE8E8] via-[#FFE0D0] to-[#FFD4B0]",
    textClass: "text-midnight",
    subTextClass: "text-midnight/65",
    watermarkClass: "text-midnight/09",
    accent: "text-coral-500",
    medium: [
      "JWT + refresh token rotation",
      "Role-based access control (RBAC)",
      "Docker & Nginx configuration",
      "Redis caching & session management",
    ],
    livraison: [
      "GitHub Actions CI/CD",
      "Automated security scans",
      "Performance monitoring",
      "Zero-downtime deployments",
    ],
  },
];

const STEP_LABELS = [
  "WEB APPS",
  "ENTERPRISE",
  "BACKEND",
  "AI APPS",
  "DEVOPS",
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
        "bg-ivory text-midnight"
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
                room.bgClass
              )}
            >
              <div aria-hidden className={cn(
                "pointer-events-none absolute inset-0 opacity-40",
                room.id === "04"
                  ? "mesh-gradient"
                  : ""
              )} />

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
                    <span className={room.id === "04" ? "text-gradient-coral" : ""}>
                      {room.title}
                    </span>
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
                          Stack
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
                                  "mt-2 h-px w-6 flex-shrink-0 bg-gradient-to-r from-coral to-amber"
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
                          Deliverables
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
                                  "mt-2 h-px w-6 flex-shrink-0 bg-gradient-to-r from-teal to-plum-soft"
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
                    Ibrahim Benkacem · Domain {room.index}
                  </span>
                  <div className="hidden items-center gap-2 md:flex">
                    <button
                      onClick={prev}
                      aria-label="Previous domain"
                      disabled={activeIndex === 0}
                      className={cn(
                        "group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 disabled:opacity-30",
                        room.id === "04"
                          ? "border-ivory/30 text-ivory hover:bg-gradient-to-r hover:from-coral hover:to-amber hover:text-midnight"
                          : "border-midnight/20 text-midnight hover:bg-gradient-to-r hover:from-coral hover:to-amber hover:text-midnight hover:border-transparent"
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
                      aria-label="Next domain"
                      disabled={activeIndex === ROOMS.length - 1}
                      className={cn(
                        "group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 disabled:opacity-30",
                        room.id === "04"
                          ? "border-ivory/30 text-ivory hover:bg-gradient-to-r hover:from-coral hover:to-amber hover:text-midnight"
                          : "border-midnight/20 text-midnight hover:bg-gradient-to-r hover:from-coral hover:to-amber hover:text-midnight hover:border-transparent"
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
              aria-label="Previous domain"
              disabled={activeIndex === 0}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-midnight/20 bg-ivory/80 backdrop-blur text-midnight transition-all duration-500 hover:bg-gradient-to-r hover:from-coral hover:to-amber hover:text-midnight hover:border-transparent disabled:opacity-30 md:hidden"
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

            <div className="flex flex-1 items-center justify-center gap-3 overflow-x-auto scrollbar-hide md:gap-5">
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
                        isActive ? "text-coral-500" : "text-midnight/50"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "relative flex h-2.5 w-2.5 items-center justify-center rounded-full border transition-all duration-500",
                        isActive
                          ? "border-transparent bg-gradient-to-r from-coral to-amber scale-110 shadow-glow-coral"
                          : "border-midnight/35 bg-transparent group-hover:border-midnight/60"
                      )}
                    >
                      {isActive && (
                        <span className="absolute inset-0 -m-1.5 animate-ping rounded-full bg-coral/30" />
                      )}
                    </span>
                    <span
                      className={cn(
                        "hidden text-[0.72rem] font-semibold uppercase tracking-widest2 transition-colors sm:inline-block",
                        isActive ? "text-midnight" : "text-midnight/50"
                      )}
                    >
                      {label}
                    </span>
                    {i < STEP_LABELS.length - 1 && (
                      <span className="ml-0.5 hidden h-px w-8 bg-midnight/15 md:inline-block" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={next}
              aria-label="Next domain"
              disabled={activeIndex === ROOMS.length - 1}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-midnight/20 bg-ivory/80 backdrop-blur text-midnight transition-all duration-500 hover:bg-gradient-to-r hover:from-coral hover:to-amber hover:text-midnight hover:border-transparent disabled:opacity-30 md:hidden"
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
