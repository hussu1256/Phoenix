'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<InstanceType<typeof import('@studio-freight/lenis').default> | null>(null);

  useEffect(() => {
    let lenis: InstanceType<typeof import('@studio-freight/lenis').default> | null = null;
    let rafId: number;

    async function initLenis() {
      // Dynamic import to avoid SSR issues
      const Lenis = (await import('@studio-freight/lenis')).default;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      // Integrate with GSAP ScrollTrigger if available
      try {
        const { loadGSAP } = await import('@/lib/gsap/animations');
        const result = await loadGSAP();
        if (result) {
          const { ScrollTrigger } = result as { gsap: unknown; ScrollTrigger: { update: () => void } };
          lenis.on('scroll', () => ScrollTrigger.update());
        }
      } catch {
        // GSAP not critical
      }

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    initLenis();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  // Scroll to top on route change
  const pathname = usePathname();
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
}
