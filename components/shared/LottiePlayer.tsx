'use client';

import { useEffect, useRef } from 'react';
import { clsx } from 'clsx';

interface LottiePlayerProps {
  src: string;           // path to JSON file in /public/lottie/
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  width?: number | string;
  height?: number | string;
  speed?: number;
}

export default function LottiePlayer({
  src,
  className,
  loop = true,
  autoplay = true,
  width = 120,
  height = 120,
  speed = 1,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ destroy: () => void; setSpeed: (n: number) => void } | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function init() {
      const lottie = (await import('lottie-web')).default;
      if (!containerRef.current || !isMounted) return;

      // Fetch the JSON
      try {
        const res = await fetch(src);
        const animationData = await res.json();

        if (!containerRef.current || !isMounted) return;

        const anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          animationData,
        });

        anim.setSpeed(speed);
        animationRef.current = anim;
      } catch (err) {
        console.warn('[LottiePlayer] Could not load animation:', src, err);
      }
    }

    init();

    return () => {
      isMounted = false;
      animationRef.current?.destroy();
    };
  }, [src, loop, autoplay, speed]);

  return (
    <div
      ref={containerRef}
      className={clsx('flex-shrink-0', className)}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

// ─── Inline Lottie for medical pulse animation ─────────────────────
// Fallback SVG animation if Lottie JSON isn't available yet
export function MedicalPulseLottie({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <svg
        width="80"
        height="40"
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <style>{`
          @keyframes pulse-draw {
            0%   { stroke-dashoffset: 400; opacity: 0.3; }
            50%  { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0.3; }
          }
          .pulse-line {
            stroke-dasharray: 400;
            animation: pulse-draw 2.5s ease-in-out infinite;
          }
        `}</style>
        <polyline
          points="0,40 30,40 50,40 60,10 70,70 80,20 90,60 100,40 120,40 200,40"
          stroke="#0e7490"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="pulse-line"
        />
      </svg>
    </div>
  );
}
