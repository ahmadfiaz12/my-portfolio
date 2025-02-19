import { useEffect, useRef, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';

// Define the type for the returned hook
interface UseLenisHook {
  scrollTo: (selector: string) => void;
}

export const useLenis = (): UseLenisHook => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Use Lenis to scroll to a specific element smoothly
  const scrollTo = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element as HTMLElement);
    }
  }, []);

  return { scrollTo };
};
