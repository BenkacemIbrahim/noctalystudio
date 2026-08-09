"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onComplete: () => void;
};

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [_phase, setPhase] = useState<"loading" | "out">("loading");
  void _phase;
  const rafRef = useRef<number | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    let p = 0;
    let start: number | null = null;
    const DURATION = 2200;

    const tick = (t: number) => {
      if (!start) start = t;
      const e = t - start;
      const ease = 1 - Math.pow(1 - Math.min(e / DURATION, 1), 3);
      p = Math.round(ease * 100);
      setProgress(p);
      if (e < DURATION) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(() => {
          setPhase("out");
          setTimeout(() => onComplete(), 900);
        }, 320);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  const CIRC = 2 * Math.PI * 150;
  const dashoffset = CIRC - (progress / 100) * CIRC * 0.82;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.05,
          filter: "blur(10px)",
          transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-midnight-950"
      >
        <div aria-hidden className="absolute inset-0 mesh-gradient opacity-40 animate-aurora" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-coral/40" />
          <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/30" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/25" />
        </div>

        <div className="relative">
          <svg
            width="340"
            height="340"
            viewBox="0 0 340 340"
            className="drop-shadow-[0_0_60px_rgba(255,107,107,0.35)]"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="35%" stopColor="#FFB547" />
                <stop offset="70%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#7B4B94" />
              </linearGradient>
            </defs>
            <circle
              cx="170"
              cy="170"
              r="150"
              fill="none"
              stroke="rgba(245,240,230,0.06)"
              strokeWidth="10"
            />
            {Array.from({ length: 24 }).map((_, i) => {
              const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
              const r1 = 130;
              const r2 = i % 6 === 0 ? 112 : 118;
              const x1 = 170 + Math.cos(a) * r1;
              const y1 = 170 + Math.sin(a) * r1;
              const x2 = 170 + Math.cos(a) * r2;
              const y2 = 170 + Math.sin(a) * r2;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(245,240,230,0.20)"
                  strokeWidth={i % 6 === 0 ? 2 : 1}
                  strokeLinecap="round"
                />
              );
            })}
            <circle
              cx="170"
              cy="170"
              r="150"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRC * 0.82}
              strokeDashoffset={dashoffset}
              transform="rotate(-90 170 170)"
              style={{ transition: "stroke-dashoffset 80ms linear" }}
            />
            <g
              style={{
                transformOrigin: "170px 170px",
                transform: `rotate(${progress * 3.6}deg)`,
                transition: "transform 80ms linear",
              }}
            >
              <line
                x1="170"
                y1="170"
                x2="170"
                y2="58"
                stroke="url(#ringGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="170" cy="58" r="5" fill="#FF6B6B" className="drop-shadow-[0_0_10px_rgba(255,107,107,0.8)]" />
            </g>
            <circle cx="170" cy="170" r="8" fill="#FF6B6B" />
          </svg>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-mono text-6xl font-light tracking-wider text-ivory">
                <span>
                  {String(Math.floor(progress / 100)).padStart(1, "0")}
                </span>
                <span>
                  {String(Math.floor((progress % 100) / 10)).padStart(1, "0")}
                </span>
                <span>{String(progress % 10).padStart(1, "0")}</span>
              </div>
              <div className="mt-2 text-[10px] tracking-[0.4em] text-gradient-sunset">
                CHARGEMENT · NOCTALY
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
