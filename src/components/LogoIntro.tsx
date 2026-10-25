"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  onComplete: () => void;
};

export default function LogoIntro({ onComplete }: Props) {
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const complete = () => {
      if (!doneRef.current) {
        doneRef.current = true;
        onCompleteRef.current();
      }
    };

    const t = setTimeout(complete, 2600);

    const bail = setTimeout(() => {
      complete();
    }, 4000);

    if (typeof document !== "undefined") {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
          complete();
        }
      };
      const onClick = () => complete();
      document.addEventListener("keydown", onKey);
      document.addEventListener("click", onClick);
      return () => {
        clearTimeout(t);
        clearTimeout(bail);
        document.removeEventListener("keydown", onKey);
        document.removeEventListener("click", onClick);
      };
    }

    return () => {
      clearTimeout(t);
      clearTimeout(bail);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="logointro"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.02,
          filter: "blur(12px)",
          transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden cursor-default"
        style={{
          background:
            "radial-gradient(ellipse at center, #E7DCC2 0%, #D8C9A6 40%, #A68B5B 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 3px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <motion.div
          initial={{ scale: 0.85, opacity: 0.6, rotate: -3 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            className="drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <path
                d="M 120 40 A 70 70 0 1 0 120 180 A 55 55 0 1 1 120 40 Z"
                stroke="#2A1F0F"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
            </motion.g>
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <path
                d="M 55 175 L 105 70 L 130 140 L 175 55"
                stroke="#2A1F0F"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </motion.g>
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <path
                d="M 130 140 L 175 55"
                stroke="rgba(42,31,15,0.35)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </motion.g>
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.25, 1], opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{ transformOrigin: "175px 55px" }}
            >
              <path
                d="M 175 32 L 179 48 L 195 52 L 180 57 L 176 73 L 171 57 L 156 53 L 172 49 Z"
                fill="#2A1F0F"
                stroke="#2A1F0F"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <motion.circle
                cx="175"
                cy="53"
                r="18"
                fill="none"
                stroke="#2A1F0F"
                strokeOpacity="0.22"
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.6], opacity: [0.8, 0] }}
                transition={{ duration: 1.1, delay: 0.9, repeat: Infinity, repeatDelay: 0.6 }}
              />
            </motion.g>
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-6 text-center text-[11px] tracking-[0.5em] text-[#2A1F0F]/70"
          >
            IBRAHIM BENKACEM
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-8 text-center text-[10px] tracking-[0.32em] text-[#2A1F0F]/45"
          >
            Click or press Enter to continue
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
