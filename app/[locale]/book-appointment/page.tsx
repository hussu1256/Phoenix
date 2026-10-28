import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/shared/PageHero';
import BookingForm from '@/components/shared/BookingForm';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import { hospitals } from '@/data/hospitals';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: 'en', namespace: 'book' });
  return {
    title: t('title'),
    description:
      'Book a medical appointment through Phoenix Global Wellness. Get connected with top hospitals in India and Singapore within 24 hours.',
  };
}

// ─── Trust badges ────────────────────────────────────────────────────
const TRUST_BADGES = [
  { icon: '🏥', label: '10+ Partner Hospitals' },
  { icon: '🌍', label: 'Patients from 50+ Countries' },
  { icon: '⚡', label: '24h Response Guarantee' },
  { icon: '🔒', label: '100% Confidential' },
];

export default async function BookAppointmentPage() {
  const t = await getTranslations({ locale: 'en', namespace: 'book' });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[{ label: 'Home' }, { label: t('title') }]}
        height="sm"
      />

      {/* Trust badges */}
      <div className="bg-[#0a1628] border-b border-white/6">
        <div className="max-w-[1280px] mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <span className="text-xl">{badge.icon}</span>
                <span className="text-white/55 text-[12px]">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

            {/* Form */}
            <AnimatedSection>
              <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="mb-7">
                  <h2 className="font-serif text-2xl font-light text-[#0a1628]">
                    {t('patientDetails')}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1.5">
                    All fields marked <span className="text-red-400">*</span> are required.
                  </p>
                </div>
                <BookingForm showHospital />
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.15} direction="left" className="flex flex-col gap-5">

              {/* What happens next */}
              <div className="bg-[#0a1628] rounded-2xl p-6">
                <p className="text-[10px] text-teal-400 font-medium tracking-[1.5px] uppercase mb-4">
                  What Happens Next
                </p>
                <ol className="flex flex-col gap-4">
                  {[
                    { n: '1', text: 'A dedicated coordinator contacts you within 24 hours via email or WhatsApp.' },
                    { n: '2', text: 'We review your case and prepare a tailored treatment plan with cost estimates.' },
                    { n: '3', text: 'Once confirmed, we arrange visa letters, airport pickup and accommodation.' },
                    { n: '4', text: 'We stay with you throughout treatment and follow up after your return home.' },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-3.5 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600/20 border border-teal-500/30 text-teal-400 text-[11px] font-semibold flex items-center justify-center">
                        {step.n}
                      </span>
                      <p className="text-white/55 text-[13px] leading-[1.7]">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact direct */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-[10px] text-gray-400 font-medium tracking-[1.5px] uppercase mb-4">
                  Contact Directly
                </p>
                <div className="flex flex-col gap-3.5">
                  <a
                    href="tel:+917867868687"
                    className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-teal-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-sm flex-shrink-0">
                      📞
                    </span>
                    +91 786 786 8687
                  </a>
                  <a
                    href="https://wa.me/917867868687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-teal-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-sm flex-shrink-0">
                      💬
                    </span>
                    WhatsApp Chat
                  </a>
                  <a
                    href="mailto:info@phoenixglobalwellness.com"
                    className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-teal-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-sm flex-shrink-0">
                      ✉️
                    </span>
                    info@phoenixglobal<br />wellness.com
                  </a>
                </div>
              </div>

              {/* Partner hospitals preview */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-[10px] text-gray-400 font-medium tracking-[1.5px] uppercase mb-4">
                  Our Partner Hospitals
                </p>
                <div className="flex flex-col gap-2">
                  {hospitals.slice(0, 5).map((h) => (
                    <div key={h.slug} className="flex items-center gap-2.5 text-[12px] text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      {h.shortName}
                      <span className="text-gray-300 ml-auto text-[11px]">{h.city}</span>
                    </div>
                  ))}
                  <p className="text-[11px] text-teal-600 mt-1">+5 more hospitals →</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
