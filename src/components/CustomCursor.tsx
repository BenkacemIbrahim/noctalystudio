"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.6 });

  const dotX = useSpring(mouseX, { stiffness: 900, damping: 32, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 32, mass: 0.3 });

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const isFinePointer = mq.matches;
    setIsTouch(!isFinePointer);

    if (isFinePointer) {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
      setIsVisible(true);
    }

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const enter = () => setIsVisible(true);
    const leave = () => setIsVisible(false);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [data-cursor='hover'], .link, .btn, input, textarea, select, [role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted || isTouch) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY }}
        suppressHydrationWarning
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color,background-color,opacity] duration-200 ease-out",
          isVisible ? "opacity-100" : "opacity-60",
          isHovering
            ? "h-12 w-12 border-coral/70 bg-coral/10"
            : "h-7 w-7 border-ivory/60"
        )}
      />
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        suppressHydrationWarning
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity",
          isVisible ? "opacity-100" : "opacity-80"
        )}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={cn(
            "-translate-x-1/2 -translate-y-1/2 transition-colors",
            isHovering ? "text-coral" : "text-gradient-coral"
          )}
        >
          <defs>
            <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FFB547" />
            </linearGradient>
          </defs>
          <path
            d="M12 2 L13.7 8.3 L20 10 L13.7 11.7 L12 18 L10.3 11.7 L4 10 L10.3 8.3 Z"
            fill={isHovering ? "#FF6B6B" : "url(#cursorGrad)"}
          />
        </svg>
      </motion.div>
    </>
  );
}
