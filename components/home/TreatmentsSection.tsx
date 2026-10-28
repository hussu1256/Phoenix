'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { treatments } from '@/data/treatments';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';

export default function TreatmentsSection() {
  const t = useTranslations('sections');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // Drag-scroll for desktop
  const isDragging = useRef(false);
  const startX    = useRef(0);
  const scrollLeft= useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    startX.current    = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current= scrollRef.current?.scrollLeft ?? 0;
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x    = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }
  function onMouseUp()   { isDragging.current = false; }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <AnimatedSection>
              <SectionLabel>{t('treatments')}</SectionLabel>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2
                className="font-serif font-light text-[#0a1628] mt-2 leading-[1.15]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {t('treatmentsTitle')}
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} direction="left">
            <p className="text-gray-400 text-sm max-w-sm">
              Drag to scroll → Click any treatment to learn more
            </p>
          </AnimatedSection>
        </div>

        {/* Scrollable chips row */}
        <AnimatedSection delay={0.15}>
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {treatments.map((tr) => (
              <Link
                key={tr.slug}
                href={`/treatments/${tr.slug}`}
                onClick={() => setActiveSlug(tr.slug)}
                draggable={false}
              >
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(14,116,144,0.15)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl border text-[13px]
                    font-normal transition-all duration-200 whitespace-nowrap
                    ${activeSlug === tr.slug
                      ? 'bg-teal-700 text-white border-teal-700 shadow-[0_6px_16px_rgba(14,116,144,0.35)]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300 hover:text-teal-700'
                    }
                  `}
                >
                  <span className="text-base">{tr.icon}</span>
                  <span>{tr.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* Treatment grid preview — 3 random featured */}
        <AnimatedSection delay={0.2} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {treatments.slice(0, 3).map((tr) => (
              <Link key={tr.slug} href={`/treatments/${tr.slug}`}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(10,22,40,0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-teal-100 transition-all group"
                >
                  <div className="text-3xl mb-4">{tr.icon}</div>
                  <h3 className="font-serif text-[1.1rem] font-light text-[#0a1628] group-hover:text-teal-700 transition-colors mb-2">
                    {tr.name}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                    {tr.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[12px] text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
