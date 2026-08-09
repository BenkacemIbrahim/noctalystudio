"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    mass: 0.4,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9998] h-[3px] w-full origin-left bg-gradient-to-r from-coral via-amber to-teal shadow-[0_0_14px_rgba(255,107,107,0.7)]"
    />
  );
}
