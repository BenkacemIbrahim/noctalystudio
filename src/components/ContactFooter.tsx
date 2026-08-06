"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <section
      id="contact"
      data-nav-theme="dark"
      className="grain relative isolate overflow-hidden bg-dark-900 px-6 pt-32 pb-16 lg:px-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 10%, rgba(91,181,232,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Corner brackets */}
          <svg
            aria-hidden
            width="44"
            height="44"
            viewBox="0 0 44 44"
            className="absolute -left-2 -top-2 text-accent/70"
          >
            <motion.path
              d="M 14 2 L 2 2 L 2 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <circle cx="2" cy="2" r="3" className="fill-accent" />
          </svg>
          <svg
            aria-hidden
            width="44"
            height="44"
            viewBox="0 0 44 44"
            className="absolute -right-2 -bottom-2 text-accent/70"
          >
            <motion.path
              d="M 30 42 L 42 42 L 42 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
            />
            <circle cx="42" cy="42" r="3" className="fill-accent" />
          </svg>

          <h2 className="font-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-semibold leading-[1.25] text-cream">
            Un site, une interface ou une expérience à lancer ?
            <br className="hidden sm:block" />
            <span className="font-serif-italic font-light text-accent-soft">
              Envoyez-moi le brief,
            </span>{" "}
            je vous réponds vite.
          </h2>

          <motion.a
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="mailto:badraitoufel5@gmail.com?subject=Projet%20NoctalyStudio"
            className="group relative mx-auto mt-12 inline-flex items-center gap-4 overflow-hidden rounded-full bg-accent-pill px-14 py-6 text-xl font-semibold text-dark shadow-[0_20px_70px_-10px_rgba(91,181,232,0.55)] transition-all duration-500 hover:bg-cream hover:shadow-[0_20px_90px_-10px_rgba(242,237,225,0.4)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
            />
            <span className="relative z-10">Réserver un appel</span>
            <svg
              className="relative z-10 h-6 w-6 transition-transform duration-500 group-hover:translate-x-2"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6"
          >
            <a
              href="mailto:badraitoufel5@gmail.com"
              className="group inline-flex flex-col items-center text-cream/70"
            >
              <span className="text-sm">
                ou par email :{" "}
                <span className="relative font-medium text-cream underline decoration-accent/50 decoration-2 underline-offset-4 transition-colors group-hover:text-accent-soft">
                  badraitoufel5@gmail.com
                </span>
              </span>
            </a>
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(91,181,232,0.9)]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-cream/60">
                Réponse sous 24h, promis.
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-cream/10 pt-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
              className="md:col-span-5"
            >
              <Link href="#top" className="group inline-flex items-center gap-3">
                <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M 22 7 A 13 13 0 1 0 22 33 A 10 10 0 1 1 22 7 Z"
                    stroke="#F2EDE1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 10 32 L 19 13 L 24 26 L 32 10"
                    stroke="#F2EDE1"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path d="M32 10l-1 4 4 .5-3.5 2 1 4-3-2.2-3 2.2 1-4-3.5-2 4-.5z" fill="#5BB5E8" />
                </svg>
                <span className="font-display text-[1.75rem] font-black tracking-tight text-cream">
                  NoctalyStudio
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
                L&apos;atelier qui conçoit vos sites et applis comme des pièces
                d&apos;exposition. Direction artistique, design, développement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="md:col-span-4"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                Navigation
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
                {[
                  ["Services", "#services"],
                  ["Projets", "#projets"],
                  ["Compétences", "#competences"],
                  ["Méthode", "#methode"],
                  ["Contact", "#contact"],
                ].map(([l, h]) => (
                  <li key={h}>
                    <Link
                      href={h}
                      className="group inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-cream"
                    >
                      <span className="relative">
                        {l}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="md:col-span-3 md:text-right"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                Réseaux
              </div>
              <ul className="mt-5 space-y-3 text-sm md:space-y-4">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-accent-soft"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                    <span className="relative">
                      GitHub
                      <span className="absolute -bottom-0.5 left-0 h-px w-full bg-cream/20 transition-colors group-hover:bg-accent" />
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-accent-soft"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    <span className="relative">
                      LinkedIn
                      <span className="absolute -bottom-0.5 left-0 h-px w-full bg-cream/20 transition-colors group-hover:bg-accent" />
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center">
            <div className="font-mono tracking-wide">
              Code & design : Badr Khazzani · © {new Date().getFullYear()} ·{" "}
              <Link href="#top" className="text-cream/70 underline-offset-4 hover:text-cream hover:underline">
                Mentions légales
              </Link>
            </div>
            <div className="flex items-center gap-2 font-mono tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(91,181,232,0.9)]" />
              </span>
              Disponible · Août 2026
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
