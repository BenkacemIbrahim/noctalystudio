"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    id: 1,
    label: "Analyse",
    tag: "ANALYSE",
    title: "Comprendre avant de coder",
    text: "Avant la première ligne de code, je pose les bonnes questions : objectifs, audience, parcours, messages. Récupérez les heures que ça vous prenait.",
  },
  {
    id: 2,
    label: "Webdesign",
    tag: "WEBDESIGN",
    title: "Une interface qui donne envie de rester",
    text: "Chaque écran passe par Figma avant le code — typographie, espacements, hiérarchie, tout est décidé à l'atelier avant d'être décidé au clavier.",
  },
  {
    id: 3,
    label: "Développement",
    tag: "DÉVELOPPEMENT",
    title: "Code propre, optimisé, maintenable",
    text: "Next.js, React, TypeScript, tests et conventions. Chaque composant est pensé pour durer, être repris, et grossir sans dette.",
  },
  {
    id: 4,
    label: "Intégration",
    tag: "INTÉGRATION & DONNÉES",
    title: "Connecter les pièces à l'atelier",
    text: "Bases de données, Make, Python, Git, connecteurs API. Tout ce qui rend le site autonome — formulaires, CMS, tableaux de bord, temps réel.",
  },
  {
    id: 5,
    label: "Lancement",
    tag: "LANCEMENT",
    title: "Mise en ligne et suivi",
    text: "Hébergement premium, SEO technique, analytics, mises à jour. Le lancement n'est pas la ligne d'arrivée : c'est le début de la visite.",
  },
];

export default function Method() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STEPS.length - 1, Math.floor(v * STEPS.length));
    setActive(idx);
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".method-label", {
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.22, 1, 0.36, 1] as any,
      });
      gsap.from(".method-title", {
        scrollTrigger: { trigger: ref.current, start: "top 72%" },
        y: 60,
        opacity: 0,
        duration: 1,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.22, 1, 0.36, 1] as any,
      });
      gsap.from(".method-sub", {
        scrollTrigger: { trigger: ref.current, start: "top 72%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.22, 1, 0.36, 1] as any,
      });
      gsap.from(".method-orbit", {
        scrollTrigger: { trigger: ref.current, start: "top 65%" },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.22, 1, 0.36, 1] as any,
      });
      gsap.from(".method-card", {
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.22, 1, 0.36, 1] as any,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="methode"
      ref={ref}
      data-nav-theme="dark"
      className="grain relative isolate min-h-screen overflow-hidden bg-midnight px-6 py-32 lg:px-12"
    >
      <div aria-hidden className="absolute inset-0 mesh-gradient opacity-30 animate-aurora" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
      >
        <svg className="h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="radarFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="1" />
              <stop offset="50%" stopColor="#FFB547" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g stroke="url(#radarFade)" fill="none">
            {[80, 160, 240, 320, 400, 470].map((r) => (
              <circle key={r} cx="500" cy="500" r={r} strokeWidth="1" />
            ))}
            {Array.from({ length: 24 }).map((_, i) => {
              const a = (i / 24) * Math.PI * 2;
              return (
                <line
                  key={i}
                  x1="500"
                  y1="500"
                  x2={500 + Math.cos(a) * 470}
                  y2={500 + Math.sin(a) * 470}
                  strokeWidth={i % 6 === 0 ? 1.2 : 0.4}
                />
              );
            })}
            {[0, 90, 180, 270].map((d) => {
              const a = (d * Math.PI) / 180;
              return (
                <line
                  key={d}
                  x1="500"
                  y1="500"
                  x2={500 + Math.cos(a) * 490}
                  y2={500 + Math.sin(a) * 490}
                  strokeWidth="1.6"
                />
              );
            })}
          </g>
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{ background: "radial-gradient(closest-side, rgba(255,107,107,0.6), rgba(255,181,71,0.2), transparent)" }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="method-label mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-amber-soft">
          <span className="h-px w-10 bg-gradient-to-r from-coral/50 via-amber/50 to-transparent" />
          — ma méthode
        </div>

        <h2 className="method-title max-w-4xl font-display text-[clamp(2.4rem,6vw,5.4rem)] font-black leading-[0.95] text-ivory">
          Du brief <span className="text-gradient-coral italic font-light">au</span> lancement
        </h2>
        <p className="method-sub mt-5 max-w-2xl text-lg leading-relaxed text-ivory/70">
          De la première question au jour où le site tourne sans moi.
        </p>

        <div className="mt-20 grid grid-cols-12 items-start gap-8">
          <div className="col-span-12 lg:col-span-4">
            <ol className="space-y-4">
              {STEPS.map((s, i) => (
                <li key={s.id} className="method-card">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500",
                      active === i
                        ? "border-coral/50 bg-gradient-to-r from-coral/[0.10] via-amber/[0.06] to-transparent shadow-[0_20px_60px_-20px_rgba(255,107,107,0.45)]"
                        : "border-ivory/10 bg-ivory/[0.03] hover:border-ivory/25 hover:bg-ivory/[0.05]"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            "grid h-10 w-10 place-items-center rounded-full font-mono text-xs transition-all",
                            active === i
                              ? "bg-gradient-to-br from-coral to-amber text-midnight shadow-glow-coral"
                              : "bg-ivory/[0.06] text-ivory/70"
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gradient-coral">
                            {s.tag}
                          </div>
                          <div className="font-display text-xl font-semibold text-ivory">
                            {s.title}
                          </div>
                        </div>
                      </div>
                      <svg
                        className={cn(
                          "h-5 w-5 shrink-0 transition-all duration-500",
                          active === i ? "text-coral rotate-0 opacity-100" : "-rotate-90 text-ivory/30 opacity-50"
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="url(#chevronGrad)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="chevronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF6B6B" />
                            <stop offset="100%" stopColor="#FFB547" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <AnimatePresence initial={false}>
                      {active === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -8 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -8 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden pl-14"
                        >
                          <p className="pt-4 text-sm leading-relaxed text-ivory/70">
                            {s.text}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="method-orbit relative mx-auto aspect-square w-full max-w-[560px]">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 80px 10px rgba(255,107,107,0.30)",
                    "0 0 140px 24px rgba(255,181,71,0.50)",
                    "0 0 80px 10px rgba(78,205,196,0.30)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFD79C,#FF6B6B_45%,#7B4B94_100%)]"
              >
                <div className="absolute inset-0 rounded-full opacity-60 mix-blend-soft-light"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 65% 55%, rgba(255,255,255,0.55), transparent 35%), radial-gradient(circle at 20% 80%, rgba(78,205,196,0.45), transparent 30%)",
                  }}
                />
              </motion.div>

              {[110, 160, 210, 250].map((r, i) => (
                <div
                  key={r}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gradient-to-r border-coral/25 via-amber/20 to-teal/15"
                  style={{ width: r * 2, height: r * 2, animation: `spin-${i} ${22 + i * 4}s linear infinite` }}
                />
              ))}

              {STEPS.slice(0, 5).map((s, i) => {
                const radii = [110, 155, 200, 235, 260];
                const r = radii[i] ?? 260;
                const dur = 18 + i * 6;
                const size = [22, 26, 30, 24, 28][i];
                const colors = ["#FF6B6B", "#FFB547", "#4ECDC4", "#7B4B94", "#FFD79C"];
                const isActive = active === i;
                return (
                  <div
                    key={s.id}
                    className="absolute inset-0"
                    style={{
                      animation: `spin-${i} ${dur}s linear infinite`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="group absolute"
                      style={{
                        top: "50%",
                        left: "50%",
                        width: size,
                        height: size,
                        transform: `translate(-50%, -50%) translateX(${r}px)`,
                      }}
                    >
                      <motion.span
                        animate={isActive ? { scale: [1, 1.4, 1] } : {}}
                        transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
                        className={cn(
                          "grid h-full w-full place-items-center rounded-full transition-all duration-500",
                          "shadow-[0_0_20px_rgba(255,107,107,0.50)]",
                          isActive ? "ring-2 ring-coral/80" : ""
                        )}
                        style={{ backgroundColor: colors[i] }}
                      >
                        <span className="font-mono text-[10px] font-bold text-midnight">
                          {i + 1}
                        </span>
                      </motion.span>
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-coral/50 to-amber/50"
                          initial={{ scale: 1, opacity: 0.6 }}
                          animate={{ scale: 3, opacity: 0 }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </button>
                  </div>
                );
              })}

              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={`ss-${i}`}
                  className="pointer-events-none absolute h-px w-32 origin-left"
                  style={{
                    top: `${18 + i * 14}%`,
                    left: `${10 + i * 10}%`,
                    background:
                      "linear-gradient(to right, transparent, rgba(255,107,107,0.7) 40%, rgba(255,181,71,0.95))",
                    rotate: 22 + i * 8,
                  }}
                  initial={{ x: -120, opacity: 0 }}
                  animate={{ x: ["0%", "220%"], opacity: [0, 0.9, 0] }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 1.4,
                    ease: "linear",
                  }}
                >
                  <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-ivory shadow-[0_0_14px_rgba(255,181,71,0.9)]" />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-coral to-amber shadow-glow-coral" />
              </span>
              Cliquez une sphère
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:flex lg:flex-col lg:items-end">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gradient-coral">
              {String(active + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
            </div>
            <ul className="mt-6 space-y-3 lg:w-auto lg:min-w-[180px]">
              {STEPS.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center gap-4"
                  >
                    <div className="relative flex h-5 items-center">
                      <span
                        className={cn(
                          "h-[2px] w-10 transition-all",
                          active >= i ? "bg-gradient-to-r from-coral to-amber" : "bg-ivory/15"
                        )}
                      />
                      <span
                        className={cn(
                          "absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border transition-all duration-500",
                          active === i
                            ? "scale-125 border-transparent bg-gradient-to-r from-coral to-amber shadow-glow-coral"
                            : active > i
                              ? "border-amber/60 bg-coral/40"
                              : "border-ivory/30 bg-transparent"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.22em] transition-colors",
                        active === i ? "text-ivory" : "text-ivory/45"
                      )}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-0 { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes spin-1 { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes spin-2 { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes spin-3 { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes spin-4 { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
      `}</style>
    </section>
  );
}
