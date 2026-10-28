import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { teamMembers } from '@/data/team';
import TeamCard from '@/components/shared/TeamCard';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';

export default function TeamPreview() {
  const t = useTranslations('sections');

  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <AnimatedSection>
              <SectionLabel>{t('ourTeam')}</SectionLabel>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2
                className="font-serif font-light text-[#0a1628] mt-2 leading-[1.15]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {t('ourTeamTitle')}
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} direction="left">
            <Link
              href="/network/team"
              className="inline-flex items-center gap-2 text-teal-700 text-sm font-medium group"
            >
              <span className="group-hover:underline">View full team</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        {/* Team grid — first 4 members */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          staggerDelay={0.12}
        >
          {teamMembers.slice(0, 4).map((member) => (
            <StaggerChild key={member.id}>
              <TeamCard member={member} />
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
