'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import { MedicalPulseLottie } from '@/components/shared/LottiePlayer';

const WHY_ITEMS = [
  { key: 'expert',      icon: '🏥', color: 'bg-teal-50',   border: 'border-teal-100'   },
  { key: 'global',      icon: '🌍', color: 'bg-blue-50',   border: 'border-blue-100'   },
  { key: 'multilingual',icon: '💬', color: 'bg-violet-50', border: 'border-violet-100' },
  { key: 'endToEnd',    icon: '✈️', color: 'bg-amber-50',  border: 'border-amber-100'  },
  { key: 'accredited',  icon: '🏆', color: 'bg-emerald-50',border: 'border-emerald-100'},
  { key: 'transparent', icon: '💰', color: 'bg-rose-50',   border: 'border-rose-100'   },
] as const;

export default function WhyUsSection() {
  const t = useTranslations('whyUs');
  const s = useTranslations('sections');

  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <AnimatedSection>
            <SectionLabel>{s('whyPhoenix')}</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="font-serif font-light text-[#0a1628] mt-2 leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {s('whyPhoenixTitle')}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <MedicalPulseLottie className="mt-4" />
          </AnimatedSection>
        </div>

        {/* Cards grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {WHY_ITEMS.map((item) => (
            <StaggerChild key={item.key}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(10,22,40,0.10)' }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative bg-white rounded-2xl p-7 border border-gray-100 overflow-hidden group cursor-default"
              >
                {/* Top accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-500 to-[#c9a96e] origin-left"
                />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${item.color} border ${item.border} flex items-center justify-center text-2xl mb-5`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-[1.25rem] font-light text-[#0a1628] mb-2.5 group-hover:text-teal-700 transition-colors">
                  {t(`${item.key}Title`)}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 text-[14px] leading-[1.75]">
                  {t(`${item.key}Desc`)}
                </p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
