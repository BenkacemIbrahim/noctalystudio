"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const leftHRef = useRef<HTMLDivElement>(null);
  const rightHRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftHRef.current) {
        gsap.to(leftHRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (rightHRef.current) {
        gsap.to(rightHRef.current, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (laptopRef.current) {
        gsap.to(laptopRef.current, {
          yPercent: -5,
          rotateX: 4,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      data-nav-theme="dark"
      className="grain relative isolate flex min-h-screen items-center overflow-hidden bg-[#0D0B1F] px-6 pt-28 pb-16 lg:px-12"
    >
      <div aria-hidden className="absolute inset-0 mesh-gradient animate-aurora" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          background:
            "linear-gradient(to top, rgba(255,107,107,0.08), transparent 85%), repeating-linear-gradient(90deg, rgba(255,181,71,0.10) 0 1px, transparent 1px 80px), repeating-linear-gradient(180deg, rgba(78,205,196,0.08) 0 1px, transparent 1px 80px)",
          maskImage:
            "radial-gradient(ellipse 110% 90% at 50% 100%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 110% 90% at 50% 100%, black 20%, transparent 75%)",
          perspective: "600px",
          transform: "perspective(900px) rotateX(62deg) translateY(30%)",
          transformOrigin: "50% 100%",
        }}
      />

      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-coral/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 -right-24 h-80 w-80 rounded-full bg-amber/18 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-teal/15 blur-[130px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-12 items-center gap-4">
        <motion.div
          ref={leftHRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative z-20 col-span-12 lg:col-span-4"
        >
          <h1 className="font-display leading-[0.92] tracking-tight">
            <span className="block text-[clamp(3rem,8vw,7.5rem)] font-black text-ivory">
              Des sites
            </span>
            <span
              className={cn(
                "mt-2 block font-serif-italic font-light text-[clamp(2.8rem,7.6vw,7.2rem)]",
                "text-gradient-sunset"
              )}
            >
              comme des œuvres
            </span>
          </h1>
        </motion.div>

        <motion.div
          ref={laptopRef}
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.28,
          }}
          className="col-span-12 lg:col-span-8 lg:-ml-8 xl:ml-0"
        >
          <div className="relative mx-auto w-full max-w-[980px] [perspective:1800px] animate-floatY">
            <div
              className="relative mx-auto"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative rounded-[2rem] border-[10px] border-[#2A244D] bg-[#0D0B1F] p-2 shadow-[0_50px_120px_-20px_rgba(255,107,107,0.25),0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="absolute left-1/2 top-2 z-10 h-2 w-16 -translate-x-1/2 rounded-full bg-[#0D0B1F]" />
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#13102A] via-[#1C1838] to-[#0D0B1F]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,107,0.20),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(78,205,196,0.18),transparent_50%)]" />
                  <div className="relative flex h-full w-full flex-col items-center justify-center px-8 text-center">
                    <div className="mb-6 flex w-full max-w-xl items-center gap-3 text-ivory/60">
                      <span className="h-px flex-1 bg-ivory/15" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-gradient-coral">
                        Exposition Permanente
                      </span>
                      <span className="h-px flex-1 bg-ivory/15" />
                    </div>
                    <h2 className="bg-gradient-to-b from-ivory via-[#FFD79C] to-[#FF9999] bg-clip-text font-display text-[clamp(2.2rem,7vw,5.5rem)] font-black tracking-tight text-transparent drop-shadow-[0_8px_30px_rgba(255,107,107,0.35)]">
                      NoctalyStudio
                    </h2>
                    <div className="mt-6 h-16 w-px bg-gradient-to-b from-coral/60 via-amber/50 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="relative mx-auto -mt-1 h-6 w-[110%] -translate-x-[5%] rounded-b-[2.5rem] bg-gradient-to-b from-[#453972] to-[#1C1838] shadow-[0_40px_80px_-20px_rgba(255,107,107,0.35)]">
                <div className="absolute left-1/2 top-0 h-1.5 w-48 -translate-x-1/2 rounded-b-full bg-[#2A244D]" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex items-center justify-center"
          >
            <a
              href="#signature"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-ivory to-ivory-100 px-8 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-midnight transition-all duration-500 hover:gap-5 hover:from-coral hover:to-amber hover:text-midnight shadow-[0_10px_40px_-8px_rgba(255,255,255,0.15)] hover:shadow-glow-coral"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
              />
              <span className="relative z-10">Entrer dans l&rsquo;exposition</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          ref={rightHRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="relative z-20 col-span-12 mt-10 text-right lg:col-span-5 lg:mt-0 lg:col-start-9"
        >
          <h1 className="font-display leading-[0.92] tracking-tight">
            <span className="block text-[clamp(3rem,8vw,7.5rem)] font-black text-ivory">
              exposés
            </span>
            <span className="mt-2 block font-serif-italic text-[clamp(2.8rem,7.6vw,7.2rem)] font-light text-gradient-ocean">
              avec soin
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 inline-flex flex-col items-end text-right"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ivory/50">
              Faites défiler
            </div>
            <div className="mt-2 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/70">
              <span>La visite commence</span>
              <span className="flex h-8 w-5 items-start justify-center rounded-full border border-ivory/25 pt-1">
                <motion.span
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="block h-2 w-1 rounded-full bg-gradient-to-b from-coral to-amber"
                />
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 mt-16 lg:col-span-5 lg:mt-20"
        >
          <div className="group relative max-w-md overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:border-coral/40 hover:bg-coral/[0.06] hover:shadow-[0_25px_70px_-20px_rgba(255,107,107,0.35)]">
            <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-coral/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-gradient-coral">
              Collection Permanente
            </div>
            <h3 className="font-display text-2xl font-semibold text-ivory">
              L&rsquo;atelier, la nuit
            </h3>
            <div className="mt-2 flex items-center gap-3 text-xs text-ivory/50">
              <span className="font-mono">Vidéo pilotée au scroll</span>
              <span className="h-1 w-1 rounded-full bg-ivory/20" />
              <span className="font-mono">2026</span>
            </div>
            <div className="mt-4 h-px bg-gradient-to-r from-coral/60 via-amber/40 to-transparent" />
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">
              Sites et applications conçus comme pièces d&rsquo;exposition :
              pensés, cadrés, éclairés.
            </p>
          </div>
        </motion.div>
      </div>

      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 45, 90] }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: 0.6 + i * 0.35,
            repeatDelay: 1 + i * 0.4,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute z-30"
          style={{ left: s.x, top: s.y }}
        >
          <svg
            width={s.size}
            height={s.size}
            viewBox="0 0 24 24"
            className={s.color === "coral" ? "text-coral drop-shadow-[0_0_12px_rgba(255,107,107,0.8)]" : s.color === "amber" ? "text-amber drop-shadow-[0_0_12px_rgba(255,181,71,0.8)]" : "text-teal drop-shadow-[0_0_12px_rgba(78,205,196,0.8)]"}
          >
            <path
              d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
              fill="currentColor"
            />
          </svg>
        </motion.span>
      ))}
    </section>
  );
}

const SPARKLES = [
  { x: "8%", y: "22%", size: 14, color: "coral" },
  { x: "82%", y: "16%", size: 18, color: "amber" },
  { x: "92%", y: "48%", size: 10, color: "teal" },
  { x: "14%", y: "68%", size: 12, color: "coral" },
  { x: "56%", y: "12%", size: 10, color: "teal" },
  { x: "44%", y: "84%", size: 16, color: "amber" },
];
