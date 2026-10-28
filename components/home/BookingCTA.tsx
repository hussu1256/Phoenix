import { useTranslations } from 'next-intl';
import BookingForm from '@/components/shared/BookingForm';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';

const FORM_POINTS = [
  'Free initial consultation with our specialist coordinator',
  'Detailed cost estimate before commitment',
  'Visa and travel assistance included',
  'Airport pickup and accommodation arrangement',
  'Post-treatment follow-up support',
];

export default function BookingCTA() {
  const t = useTranslations('sections');

  return (
    <section className="py-24 px-6 bg-[#0a1628] relative overflow-hidden" id="book-cta">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c9a96e]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — copy */}
          <div>
            <AnimatedSection>
              <SectionLabel gold>
                {t('bookToday')}
              </SectionLabel>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2
                className="font-serif font-light text-white mt-3 leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {t('bookTodayTitle')}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-white/55 mt-4 leading-relaxed text-[15px] max-w-sm">
                {t('bookTodayDesc')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <ul className="mt-8 flex flex-col gap-3.5">
                {FORM_POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/65 text-[14px]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 text-[10px] mt-0.5">
                      ✦
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* WhatsApp CTA */}
            <AnimatedSection delay={0.35}>
              <a
                href="https://wa.me/917867868687"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all text-white/70 hover:text-white text-[13px]"
              >
                <span className="text-xl">💬</span>
                Chat on WhatsApp
              </a>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="bg-white/4 backdrop-blur-sm border border-white/8 rounded-3xl p-7 lg:p-8">
              <BookingForm dark />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
