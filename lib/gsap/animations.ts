'use client';

import type { gsap as GSAPType } from 'gsap';

// Type-safe GSAP import (loaded client-side only)
let gsapInstance: typeof GSAPType | null = null;
let ScrollTriggerInstance: unknown = null;

export async function loadGSAP() {
  if (typeof window === 'undefined') return null;
  if (gsapInstance) return { gsap: gsapInstance, ScrollTrigger: ScrollTriggerInstance };

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');

  gsap.registerPlugin(ScrollTrigger);
  gsapInstance = gsap;
  ScrollTriggerInstance = ScrollTrigger;

  return { gsap, ScrollTrigger };
}

// ─── Scroll-triggered fade-up for a set of elements ───────────────────
export async function animateFadeUp(
  targets: string | Element | Element[],
  options?: {
    stagger?: number;
    duration?: number;
    delay?: number;
    triggerElement?: string | Element;
    start?: string;
    y?: number;
  }
) {
  const result = await loadGSAP();
  if (!result) return;
  const { gsap, ScrollTrigger } = result as { gsap: typeof GSAPType; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger };

  gsap.fromTo(
    targets,
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.9,
      delay: options?.delay ?? 0,
      stagger: options?.stagger ?? 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: options?.triggerElement ?? (typeof targets === 'string' ? targets : undefined),
        start: options?.start ?? 'top 85%',
        once: true,
      },
    }
  );
}

// ─── Parallax on a hero section ─────────────────────────────────────
export async function animateParallax(
  bgElement: string | Element,
  containerElement: string | Element,
  strength = 0.3
) {
  const result = await loadGSAP();
  if (!result) return;
  const { gsap, ScrollTrigger } = result as { gsap: typeof GSAPType; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger };

  gsap.to(bgElement, {
    yPercent: strength * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: containerElement,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// ─── Horizontal scroll for treatment chips ─────────────────────────
export async function animateHorizontalScroll(
  container: string | Element,
  items: string | Element
) {
  const result = await loadGSAP();
  if (!result) return;
  const { gsap, ScrollTrigger } = result as { gsap: typeof GSAPType; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger };

  const itemsEl = gsap.utils.toArray<Element>(items);
  gsap.fromTo(
    itemsEl,
    { opacity: 0, x: 30 },
    {
      opacity: 1,
      x: 0,
      stagger: 0.06,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true,
      },
    }
  );
}

// ─── Counter animation for stats ───────────────────────────────────
export async function animateCounter(
  elements: NodeListOf<Element> | Element[],
) {
  const result = await loadGSAP();
  if (!result) return;
  const { gsap, ScrollTrigger } = result as { gsap: typeof GSAPType; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger };

  elements.forEach((el) => {
    const target = parseFloat(el.getAttribute('data-target') || '0');
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.val).toLocaleString();
      },
    });
  });
}

// ─── Stagger reveal on a grid of cards ─────────────────────────────
export async function animateCardGrid(
  containerSelector: string,
  cardSelector: string
) {
  const result = await loadGSAP();
  if (!result) return;
  const { gsap, ScrollTrigger } = result as { gsap: typeof GSAPType; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger };

  const cards = gsap.utils.toArray<Element>(
    document.querySelectorAll(`${containerSelector} ${cardSelector}`)
  );

  gsap.fromTo(
    cards,
    { opacity: 0, y: 50, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerSelector,
        start: 'top 80%',
        once: true,
      },
    }
  );
}

// ─── Page enter animation ───────────────────────────────────────────
export async function animatePageEnter(container: string | Element) {
  const result = await loadGSAP();
  if (!result) return;
  const { gsap } = result as { gsap: typeof GSAPType };

  gsap.fromTo(
    container,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  );
}

// ─── Hero text stagger ──────────────────────────────────────────────
export async function animateHeroText(elements: Element[]) {
  const result = await loadGSAP();
  if (!result) return;
  const { gsap } = result as { gsap: typeof GSAPType };

  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.2,
    }
  );
}

// ─── Refresh ScrollTrigger (call after layout changes) ─────────────
export async function refreshScrollTrigger() {
  const result = await loadGSAP();
  if (!result) return;
  const { ScrollTrigger } = result as { gsap: typeof GSAPType; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger };
  ScrollTrigger.refresh();
}

// ─── Kill all ScrollTriggers (call on page unmount) ─────────────────
export async function killAllScrollTriggers() {
  const result = await loadGSAP();
  if (!result) return;
  const { ScrollTrigger } = result as { gsap: typeof GSAPType; ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger };
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
