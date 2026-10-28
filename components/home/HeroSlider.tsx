'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

// ─── Slide data ──────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    tag: 'World-Class Medical Care',
    titleKey: 'slide1Title',
    descKey: 'slide1Desc',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=85',
    primaryHref: '/book-appointment',
    primaryLabel: 'bookCta',
    secondaryHref: '/about/visionary',
    secondaryLabel: 'Our Visionary',
    accent: '#0e7490',
  },
  {
    id: 1,
    tag: 'Orthopaedic Excellence',
    titleKey: 'slide2Title',
    descKey: 'slide2Desc',
    image: 'https://images.unsplash.com/photo-1559757175-7cb036c8b9e7?w=1600&q=85',
    primaryHref: '/treatments/orthopaedic',
    primaryLabel: 'Explore Treatment',
    secondaryHref: '/book-appointment',
    secondaryLabel: 'Get a Quote',
    accent: '#0e7490',
  },
  {
    id: 2,
    tag: 'Oncology Network',
    titleKey: 'slide3Title',
    descKey: 'slide3Desc',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85',
    primaryHref: '/treatments/oncology',
    primaryLabel: 'learnMore',
    secondaryHref: '/book-appointment',
    secondaryLabel: 'Book Now',
    accent: '#0e7490',
  },
  {
    id: 3,
    tag: 'Global Network',
    titleKey: 'slide4Title',
    descKey: 'slide4Desc',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=85',
    primaryHref: '/hospitals',
    primaryLabel: 'viewHospitals',
    secondaryHref: '/contact',
    secondaryLabel: 'Contact Us',
    accent: '#c9a96e',
  },
] as const;

const AUTOPLAY_INTERVAL = 5500;

// ─── Text reveal variants ────────────────────────────────────────────
const textVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.4, 0, 0.2, 1] },
  }),
  exit:    { opacity: 0, y: -16, transition: { duration: 0.4, ease: [0.4, 0, 1, 1] } },
};

const tagVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, x: -10, transition: { duration: 0.3 } },
};

export default function HeroSlider() {
  const [current, setCurrent]   = useState(0);
  const [direction, setDir]     = useState(1);
  const [paused, setPaused]     = useState(false);
  const timerRef                = useRef<NodeJS.Timeout | null>(null);
  const t                       = useTranslations('hero');

  const goTo = useCallback((idx: number, dir = 1) => {
    setDir(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length,  1), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  const slide = SLIDES[current];

  // Progress bar width per slide
  const progress = ((current + 1) / SLIDES.length) * 100;

  return (
    <section
      className="relative h-[calc(100vh-72px)] min-h-[560px] overflow-hidden bg-[#0a1628]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slider"
    >
      {/* ── Background images (crossfade) ── */}
      {SLIDES.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0"
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{
              transform: i === current ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 8s ease-out',
            }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,22,40,0.88)] via-[rgba(10,22,40,0.5)] to-[rgba(10,22,40,0.15)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,40,0.6)] via-transparent to-transparent" />
        </motion.div>
      ))}

      {/* ── Slide content ── */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div key={slide.id} className="max-w-[640px]">

              {/* Tag */}
              <motion.div
                variants={tagVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border text-[11px] font-medium tracking-[1px] uppercase"
                style={{
                  background: `rgba(14,116,144,0.2)`,
                  borderColor: `rgba(14,116,144,0.4)`,
                  color: '#7dd3fc',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                {slide.tag}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={textVariants}
                custom={0.35}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="font-serif text-white font-light mb-5 leading-[1.05]"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)' }}
                dangerouslySetInnerHTML={{
                  __html: t(slide.titleKey).replace(
                    /(\w[\w\s]*)$/,
                    '<em style="color:#c9a96e;font-style:italic">$1</em>'
                  ),
                }}
              />

              {/* Description */}
              <motion.p
                variants={textVariants}
                custom={0.55}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-white/60 text-lg leading-[1.7] mb-8 max-w-[500px]"
              >
                {t(slide.descKey)}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={textVariants}
                custom={0.7}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex items-center flex-wrap gap-3"
              >
                <Link
                  href={slide.primaryHref}
                  className="px-7 py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-[0_6px_24px_rgba(14,116,144,0.4)] hover:shadow-[0_10px_32px_rgba(14,116,144,0.55)] hover:-translate-y-0.5 flex items-center gap-2"
                >
                  {t.has(slide.primaryLabel as Parameters<typeof t>[0]) ? t(slide.primaryLabel as Parameters<typeof t>[0]) : slide.primaryLabel}
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href={slide.secondaryHref}
                  className="px-7 py-3.5 bg-transparent border border-white/25 hover:bg-white/8 hover:border-white/50 text-white text-sm font-normal rounded-xl transition-all duration-200"
                >
                  {slide.secondaryLabel}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/8">
        <motion.div
          className="h-full bg-teal-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* ── Slide counter / dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative flex items-center"
          >
            <motion.div
              animate={{
                width:      i === current ? '28px' : '7px',
                background: i === current ? '#0e7490' : 'rgba(255,255,255,0.3)',
              }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="h-[7px] rounded-full"
            />
          </button>
        ))}
      </div>

      {/* ── Arrow navigation ── */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/12 hover:border-white/30 text-white transition-all duration-200 backdrop-blur-sm text-sm"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-teal-600/50 hover:border-teal-500/40 text-white transition-all duration-200 backdrop-blur-sm text-sm"
        >
          →
        </button>
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-7 left-6 flex items-center gap-3 text-white/30">
        <div className="w-8 h-px bg-white/20" />
        <span className="text-[10px] tracking-[2px] uppercase">Scroll</span>
      </div>
    </section>
  );
}
