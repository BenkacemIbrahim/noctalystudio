"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import LogoIntro from "@/components/LogoIntro";
import SoundToggle from "@/components/SoundToggle";
import Hero from "@/components/Hero";
import Signature from "@/components/Signature";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Skills from "@/components/Skills";
import Method from "@/components/Method";
import ContactFooter from "@/components/ContactFooter";

type Phase = "logo" | "ready";

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>("logo");

  const handleLogoComplete = useCallback(() => {
    setPhase("ready");
  }, []);

  useEffect(() => {
    if (phase === "logo") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <main className="relative min-h-screen bg-midnight text-ivory">
      {phase === "logo" && (
        <LogoIntro onComplete={handleLogoComplete} />
      )}

      <div
        style={{
          opacity: phase === "ready" ? 1 : 0,
          transition: "opacity 0.8s ease",
          pointerEvents: phase === "ready" ? "auto" : "none",
        }}
      >
        <Navbar />
        <Hero />
        <Signature />
        <Services />
        <Projects />
        <Testimonial />
        <Skills />
        <Method />
        <ContactFooter />
        <SoundToggle />
      </div>
    </main>
  );
}
