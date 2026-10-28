'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { hospitals } from '@/data/hospitals';
import HospitalCard from '@/components/shared/HospitalCard';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import { animateCardGrid } from '@/lib/gsap/animations';

// Show the first 6 featured hospitals
const FEATURED = hospitals;

export default function HospitalsSection() {
  const t = useTranslations('sections');
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateCardGrid('#hospitals-grid', '.hospital-card-item');
  }, []);

  return (
    <section id="hospitals" className="py-24 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <AnimatedSection>
              <SectionLabel>Our Network</SectionLabel>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2
                className="font-serif font-light text-[#0a1628] mt-2 leading-[1.15]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {t('featuredHospitals')}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-gray-500 mt-3 max-w-md leading-relaxed text-[15px]">
                {t('featuredHospitalsDesc')}
              </p>
            </AnimatedSection>
          </div>

        </div>

        {/* Grid */}
        <StaggerContainer
          
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {FEATURED.map((hospital, i) => (
            <StaggerChild key={hospital.slug} className="hospital-card-item">
              <HospitalCard
                hospital={hospital}
                priority={i < 3}
              />
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* Stats row */}
        <AnimatedSection delay={0.2} className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {[
              { num: '10+',   label: 'Partner Hospitals' },
              { num: '20+',   label: 'Specialties' },
              { num: '5,000+',label: 'Patients Served' },
              { num: '7',     label: 'Languages Supported' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white py-6 px-6 text-center hover:bg-gray-50 transition-colors"
              >
                <div
                  className="font-serif font-light text-[#0a1628]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
                >
                  {stat.num}
                </div>
                <div className="text-[11px] text-gray-400 mt-1 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
