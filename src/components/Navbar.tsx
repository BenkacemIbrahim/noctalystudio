"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setScrolled(v > 0.02);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTheme(
              (e.target as HTMLElement).dataset.navTheme === "light"
                ? "light"
                : "dark"
            );
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const light = theme === "light";

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-[900] transition-colors duration-500",
        scrolled
          ? light
            ? "backdrop-blur-xl bg-cream/80 border-b border-dark/10"
            : "backdrop-blur-xl bg-dark-800/70 border-b border-cream/10"
          : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 lg:px-10",
          light ? "text-dark" : "text-cream"
        )}
      >
        <Link href="#top" className="group flex items-center gap-2.5">
          <LogoMark light={light} />
          <span className="font-display text-[1.05rem] font-semibold tracking-tight">
            NoctalyStudio
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className={cn(
                  "relative py-2 text-[0.82rem] font-medium uppercase tracking-[0.18em] transition-colors",
                  "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:origin-left after:bg-current after:transition-all after:duration-500",
                  "hover:after:w-full"
                )}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className={cn(
            "group relative hidden items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-all duration-500 md:inline-flex",
            light
              ? "bg-dark text-cream hover:bg-accent hover:text-dark"
              : "bg-cream text-dark hover:bg-accent hover:text-dark"
          )}
        >
          <span className="relative z-10">Réserver un appel</span>
          <svg
            className="relative z-10 h-3 w-3 transition-transform duration-500 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </nav>
    </motion.header>
  );
}

function LogoMark({ light }: { light: boolean }) {
  const stroke = light ? "#0A0F1C" : "#F2EDE1";
  const accent = light ? "#3A8AB5" : "#5BB5E8";
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <path
        d="M 22 7 A 13 13 0 1 0 22 33 A 10 10 0 1 1 22 7 Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 10 32 L 19 13 L 24 26 L 32 10"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 32 10 l -1 4 l 4 0.5 l -3.5 2 l 1 4 l -3 -2.2 l -3 2.2 l 1 -4 l -3.5 -2 l 4 -0.5 Z"
        fill={accent}
      />
    </svg>
  );
}
