"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

type SmoothScrollContextType = {
  lenis: Lenis | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollTo: (target: string | number | HTMLElement, opts?: any) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => { },
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, []);

  const scrollTo = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (target: any, opts = {}) => {
      lenisRef.current?.scrollTo(target, { offset: 0, ...opts });
    },
    []
  );

  return (
    <SmoothScrollContext.Provider
      value={{ lenis: lenisRef.current, scrollTo }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
}
