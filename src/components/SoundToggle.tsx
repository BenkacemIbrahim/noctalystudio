"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SoundToggle() {
  const [on, setOn] = useState(false);
  return (
    <motion.button
      type="button"
      aria-label={on ? "Désactiver le son" : "Activer le son"}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      onClick={() => setOn((s) => !s)}
      className="fixed bottom-6 right-6 z-[800] flex h-12 items-center gap-2 rounded-full border border-cream/15 bg-dark-800/70 px-3 backdrop-blur-xl transition-all duration-500 hover:border-accent/50 hover:bg-dark-700/90"
    >
      <span className="flex h-5 items-end gap-[2px]">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            animate={on ? { height: [4, 16 + i * 2, 6 + i] } : { height: 4 }}
            transition={{
              duration: 0.6,
              repeat: on ? Infinity : 0,
              repeatType: "reverse",
              delay: i * 0.08,
            }}
            className={cn(
              "block w-[3px] rounded-full",
              on ? "bg-accent" : "bg-cream/60"
            )}
            style={{ height: 4 }}
          />
        ))}
      </span>
      <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/80">
        Son
      </span>
    </motion.button>
  );
}
