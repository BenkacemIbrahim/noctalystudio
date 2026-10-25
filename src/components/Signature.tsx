"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const Image = dynamic(() => import("next/image"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-midnight-800/50" />
  ),
});

gsap.registerPlugin(ScrollTrigger);

export default function Signature() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="signature"
      data-nav-theme="dark"
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
        "bg-midnight"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,107,107,0.28),transparent_55%),radial-gradient(ellipse_at_50%_-10%,rgba(26,18,56,0.8),transparent_50%),linear-gradient(180deg,#05030D_0%,#0D0B1F_40%,#080614_100%)]" />
      <div aria-hidden className="absolute inset-0 aurora-bg opacity-40" />

      <div className="absolute inset-0 grain pointer-events-none" />

      <div
        ref={imageRef}
        className="absolute left-1/2 top-[52%] h-[120%] w-[110%] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/20 to-midnight/90 z-10" />
          <Image
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20rear%20view%20of%20young%20north%20african%20developer%20Ibrahim%20Benkacem%20sitting%20at%20desk%20coding%20at%20night%2C%20warm%20amber%20and%20coral%20monitor%20light%20glow%20on%20face%20and%20room%2C%20dark%20moody%20plum%20atmosphere%2C%20multiple%20screens%2C%20minimal%20clean%20workspace%2C%20depth%20of%20field%2C%2035mm%20film%20photography%20style&image_size=landscape_16_9"
            alt="Ibrahim Benkacem — Full-Stack Engineer"
            fill
            className="object-cover opacity-55"
            sizes="100vw"
            priority={false}
          />
        </div>
      </div>

      <div className="absolute right-6 top-6 z-20 flex flex-col items-end gap-1 md:right-10 md:top-8">
        <span className="text-[0.68rem] font-semibold uppercase tracking-widest2 text-ivory/50 md:text-[0.75rem]">
          Chapter
        </span>
        <span className="text-[0.85rem] font-bold uppercase tracking-[0.3em] text-gradient-sunset md:text-[0.95rem]">
          About
        </span>
      </div>

      <div
        ref={headlineRef}
        className="relative z-10 flex w-full flex-col items-center justify-center px-6 will-change-transform"
      >
        <h1 className="font-display font-black leading-[0.85] tracking-[-0.04em] text-center select-none">
          <span className="block text-[clamp(4.5rem,14vw,16rem)] bg-gradient-to-b from-ivory to-ivory-200 bg-clip-text text-transparent">
            IBRAHIM
          </span>
          <span className="block text-[clamp(4.5rem,14vw,16rem)] text-gradient-coral">
            BENKACEM
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-[0.72rem] uppercase tracking-[0.25em] text-ivory/60">
          <span>Full-Stack Engineer</span>
          <span className="h-1 w-1 rounded-full bg-coral" />
          <span>Morocco</span>
          <span className="h-1 w-1 rounded-full bg-amber" />
          <span>20 Public Repos</span>
          <span className="h-1 w-1 rounded-full bg-teal" />
          <span>@Benkacem_</span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 md:bottom-12">
        <div className="flex flex-col items-center gap-3 text-ivory/40">
          <span className="text-[0.7rem] font-semibold uppercase tracking-widest2">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-ivory/20">
            <div className="absolute left-0 top-0 h-5 w-full animate-[scrollHint_2s_ease-in-out_infinite] bg-gradient-to-b from-coral to-amber" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollHint {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
