import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/shared/PageHero';
import BookingCTA from '@/components/home/BookingCTA';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: 'en', namespace: 'about' });

  return {
    title: t('title'),
    description:
      'Phoenix Global Wellness — trusted healthcare journeys with world-class medical partners.',
  };
}

export default async function AboutPage() {
  const t = await getTranslations({ locale: 'en', namespace: 'about' });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[{ label: 'About' }, { label: t('title') }]}
        height="sm"
      />

      {/* ── Quote + JPS Section ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto text-center">
          {/* Heading */}
          <h2
            className="font-serif font-light text-[#0a1628] leading-[1.2]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            When I fall sick it is he who cures me
          </h2>

          {/* Subheading */}
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto leading-[1.8] text-[15px]">
            Thanks to the blessing of His Holiness <br />
            <span className="font-medium text-[#0a1628]">
              Dr. Syedna Mufaddal Saifuddin (TUS),
            </span>
            <br />
            we have embarked on this journey
          </p>

          {/* 3 Images in one line */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src="/images/jps1.jpg"
                  alt="JPS Member 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-[#0a1628]">
                Dr. Syedna Taher Saifuddin RA
              </p>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src="/images/jps2.jpg"
                  alt="JPS Member 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-[#0a1628]">
                Dr. Syedna Mohammed Burhanuddin RA
              </p>
            </div>

            {/* Image 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src="/images/jps3.jpg"
                  alt="JPS Member 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-[#0a1628]">
                Dr. Syedna Mufaddal Saifuddin TUS
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section (Keep as it is) */}
      <BookingCTA />
    </>
  );
}