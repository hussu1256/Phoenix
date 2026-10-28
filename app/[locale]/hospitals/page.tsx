import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import HospitalCard from '@/components/shared/HospitalCard';
import { hospitals } from '@/data/hospitals';

export const metadata: Metadata = {
  title: 'Partner Hospitals | Phoenix Global Wellness',
  description:
    'Explore our network of 10+ internationally accredited partner hospitals in India and Singapore.',
};

export default function HospitalsPage() {
  return (
    <>
      <PageHero
        title="Our Hospital Network"
        subtitle="10+ internationally accredited partner hospitals across India and Singapore"
        breadcrumbs={[{ label: 'Home' }, { label: 'Hospitals' }]}
        height="sm"
      />

      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection className="mb-10">
            <SectionLabel>Our Partners</SectionLabel>
            <h2
              className="font-serif font-light text-[#0a1628] mt-2"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Featured Hospitals
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.09}
          >
            {hospitals.map((hospital, i) => (
              <StaggerChild key={hospital.slug}>
                <HospitalCard hospital={hospital} priority={i < 3} />
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
