import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HeroSlider from '@/components/home/HeroSlider';
import HospitalsSection from '@/components/home/HospitalsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import TreatmentsSection from '@/components/home/TreatmentsSection';
import BookingCTA from '@/components/home/BookingCTA';
import TeamPreview from '@/components/home/TeamPreview';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: 'en', namespace: 'hero' });
  return {
    title: 'Phoenix Global Wellness — World-Class Medical Travel',
    description: t('slide1Desc'),
    alternates: {
      canonical: '/',
      languages: { en: '/' },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HospitalsSection />
      <WhyUsSection />
      <TreatmentsSection />
      <BookingCTA />
      <TeamPreview />
    </>
  );
}
