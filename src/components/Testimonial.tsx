"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Testimonial() {
  return (
    <section
      className={cn(
        "paper-texture relative w-full overflow-hidden text-dark",
        "py-28 md:py-40"
      )}
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 flex items-center gap-3 md:mb-24">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="text-[0.72rem] font-semibold uppercase tracking-widest2 text-dark/70">
            Témoignage client
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <motion.blockquote
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <svg
                className="absolute -left-6 -top-10 h-20 w-20 text-accent/25 md:-left-10 md:-top-14 md:h-28 md:w-28"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M 0 60 Q 0 25 30 18 L 30 30 Q 15 32 14 48 L 28 48 Q 34 48 34 58 L 34 86 Q 34 92 28 92 L 6 92 Q 0 92 0 86 Z M 48 60 Q 48 25 78 18 L 78 30 Q 63 32 62 48 L 76 48 Q 82 48 82 58 L 82 86 Q 82 92 76 92 L 54 92 Q 48 92 48 86 Z" />
              </svg>

              <p className="font-display text-[clamp(1.8rem,4.4vw,4.6rem)] font-light italic leading-[1.18] tracking-[-0.015em] text-balance">
                <span className="not-italic">&laquo;&nbsp;</span>
                Badr fait preuve d&apos;une{" "}
                <span className="not-italic font-semibold text-accent-deep">
                  bonne direction artistique
                </span>{" "}
                [...] il a démontré sa capacité à apporter une{" "}
                <span className="not-italic font-semibold text-accent-deep">
                  vision artistique pertinente et innovante
                </span>
                .<span className="not-italic">&nbsp;»</span>
              </p>
            </motion.blockquote>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-[1.75rem] border border-dark/10 bg-cream-50",
                "shadow-[0_30px_80px_-30px_rgba(10,15,28,0.25)]",
                "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-dark/[0.04]"
              )}
            >
              <div className="absolute right-6 top-6 z-10">
                <div className="h-10 w-10 rounded-full border border-dark/10 bg-accent/15 flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent-deep" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative flex flex-col gap-8 px-8 pt-12 pb-8 md:px-10 md:pt-14 md:pb-10">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-3 w-3 text-accent-deep"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                  <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest2 text-dark/70">
                    Lettre de recommandation
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-dark/10 bg-gradient-to-br from-accent-soft via-accent/40 to-accent-deep/60">
                      <div className="absolute inset-0 flex items-center justify-center font-display text-[1.6rem] font-black text-dark/80">
                        JR
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <p className="font-display text-[1.45rem] font-semibold leading-none tracking-tight">
                        Jérémie Renault
                      </p>
                      <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-widest2 text-dark/60">
                        Chief Marketing Officer · Notify
                      </p>
                    </div>
                  </div>

                  <div className="hairline opacity-60" />

                  <a
                    href="#"
                    className="group/link inline-flex items-center gap-2.5 pt-1 text-[0.82rem] font-semibold uppercase tracking-widest2 text-dark transition-colors hover:text-accent-deep"
                  >
                    <span>Lire la lettre complète</span>
                    <svg
                      className="h-3.5 w-3.5 transition-all duration-500 group-hover/link:translate-x-1.5 group-hover/link:rotate-[-45deg]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
