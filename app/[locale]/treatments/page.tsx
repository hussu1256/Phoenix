import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import { treatments } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'All Treatments | Phoenix Global Wellness',
  description:
    'Browse all 20 medical specialties facilitated by Phoenix Global Wellness — from Orthopaedics to Ayurveda.',
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Treatments We Facilitate"
        subtitle="20+ specialties across India and Singapore's finest hospitals"
        breadcrumbs={[{ label: 'Home' }, { label: 'Treatments' }]}
        height="sm"
      />

      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection className="mb-10">
            <SectionLabel>Specialties</SectionLabel>
            <h2
              className="font-serif font-light text-[#0a1628] mt-2"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              All Treatments
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            staggerDelay={0.05}
          >
            {treatments.map((tr) => (
              <StaggerChild key={tr.slug}>
                <Link href={`/treatments/${tr.slug}`}>
                  <div className="group flex flex-col gap-3.5 p-5 bg-white border border-gray-100 rounded-2xl hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all">
                    <span className="text-3xl">{tr.icon}</span>
                    <div>
                      <h3 className="font-serif text-base font-light text-[#0a1628] group-hover:text-teal-700 transition-colors">
                        {tr.name}
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">{tr.subtitle}</p>
                    </div>
                    <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">
                      {tr.description}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
