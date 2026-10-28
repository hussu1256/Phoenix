import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import TeamCard from '@/components/shared/TeamCard';
import BookingCTA from '@/components/home/BookingCTA';
import { teamMembers } from '@/data/team';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: 'en', namespace: 'team' });
  return {
    title: t('title'),
    description:
      'Meet the Phoenix Global Wellness team — medical specialists, patient coordinators, and international liaisons dedicated to your care.',
  };
}

export default async function TeamPage() {
  const t = await getTranslations({ locale: 'en', namespace: 'team' });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[{ label: 'Network' }, { label: t('title') }]}
        height="sm"
      />

      {/* ── Team grid ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection className="text-center mb-14">
            <SectionLabel centered>Our People</SectionLabel>
            <h2
              className="font-serif font-light text-[#0a1628] mt-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Meet the Full Team
            </h2>
            <p className="text-gray-500 mt-3 text-[15px] max-w-xl mx-auto leading-relaxed">
              Our multidisciplinary team combines medical expertise, cultural fluency, and operational excellence to give every patient a seamless experience.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-16"
            staggerDelay={0.1}
          >
            {teamMembers.map((member) => (
              <StaggerChild key={member.id}>
                <TeamCard member={member} showBio />
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Languages we speak ── */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel centered>Multilingual Support</SectionLabel>
            <h2
              className="font-serif font-light text-[#0a1628] mt-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
            >
              We Speak Your Language
            </h2>
            <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
              Our team provides full support in 7 languages, ensuring every patient feels heard and understood throughout their journey.
            </p>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.08}>
            {[
              { flag: '🇬🇧', lang: 'English',          native: 'English'           },
              { flag: '🇸🇦', lang: 'Arabic',           native: 'العربية'            },
              { flag: '🇫🇷', lang: 'French',           native: 'Français'           },
              { flag: '🇮🇩', lang: 'Indonesian',       native: 'Bahasa Indonesia'   },
              { flag: '🇲🇾', lang: 'Malay',            native: 'Bahasa Melayu'      },
              { flag: '🇧🇷', lang: 'Portuguese',       native: 'Português'          },
              { flag: '🇹🇿', lang: 'Swahili',          native: 'Kiswahili'          },
            ].map((item) => (
              <StaggerChild key={item.lang}>
                <div className="flex items-center gap-3 px-5 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <span className="text-2xl">{item.flag}</span>
                  <div>
                    <p className="text-sm font-medium text-[#0a1628]">{item.lang}</p>
                    <p className="text-[11px] text-gray-400">{item.native}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Join the team ── */}
      <section className="py-20 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <AnimatedSection>
            <div className="text-5xl mb-5">🤝</div>
            <h2 className="font-serif text-2xl font-light text-[#0a1628] mb-3">
              Join the Phoenix Team
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-7">
              We are always looking for passionate medical coordinators, interpreters, and healthcare professionals to join our growing global team.
            </p>
            <a
              href="mailto:careers@phoenixglobalwellness.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-xl transition-all shadow-[0_4px_16px_rgba(14,116,144,0.3)]"
            >
              View Opportunities →
            </a>
          </AnimatedSection>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
