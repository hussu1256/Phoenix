import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import { HospitalCardCompact } from '@/components/shared/HospitalCard';
import BookingForm from '@/components/shared/BookingForm';
import {
  getTreatmentBySlug,
  getAllTreatmentSlugs,
  treatments,
} from '@/data/treatments';
import { getHospitalsForTreatment } from '@/data/hospitals';

// ─── Static params ────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs   = getAllTreatmentSlugs();
  return slugs.map((slug) => ({ locale: 'en', slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return { title: 'Treatment Not Found' };

  return {
    title:       treatment.metaTitle,
    description: treatment.metaDescription,
    openGraph: {
      title:       treatment.metaTitle,
      description: treatment.metaDescription,
      images: [{ url: treatment.heroImage, width: 1400, alt: treatment.name }],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────
export default async function TreatmentPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const t             = await getTranslations({ locale: 'en', namespace: 'treatments' });
  const relatedHospitals = getHospitalsForTreatment(treatment.relatedHospitalSlugs);

  // Other treatments for "Explore more" section
  const otherTreatments = treatments
    .filter((tr) => tr.slug !== slug)
    .slice(0, 6);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[480px] flex items-end overflow-hidden bg-[#0a1628]">
        {/* Background */}
        <Image
          src={treatment.heroImage}
          alt={treatment.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[rgba(10,22,40,0.7)] to-[rgba(10,22,40,0.3)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,116,144,0.2),transparent_60%)]" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pb-16 pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 text-[11px] tracking-[1.5px] uppercase text-white/35">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/35">Treatments</span>
            <span>/</span>
            <span className="text-gold">{treatment.name}</span>
          </div>

          <div className="max-w-2xl">
            <div className="text-4xl mb-4">{treatment.icon}</div>
            <h1
              className="font-serif font-light text-white leading-[1.08] mb-3"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              {treatment.name}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              {treatment.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* Left — treatment detail */}
            <div>
              {/* About */}
              <AnimatedSection>
                <SectionLabel>{t('about')}</SectionLabel>
                <p className="text-gray-500 mt-4 text-[15px] leading-[1.85] max-w-prose">
                  {treatment.description}
                </p>
                <div className="mt-5 text-gray-500 text-[15px] leading-[1.85] max-w-prose whitespace-pre-line prose-medical">
                  {treatment.longDescription}
                </div>
              </AnimatedSection>

              {/* Benefits grid */}
              <AnimatedSection delay={0.1} className="mt-12">
                <SectionLabel>{t('benefits')}</SectionLabel>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 p-4 bg-teal-50 border border-teal-100 rounded-xl"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-600/20 border border-teal-500/30 text-teal-600 text-[10px] flex items-center justify-center mt-0.5">
                        ✦
                      </span>
                      <span className="text-[13px] text-teal-800 leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Conditions treated */}
              <AnimatedSection delay={0.15} className="mt-12">
                <SectionLabel>Conditions Treated</SectionLabel>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {treatment.conditions.map((condition) => (
                    <span
                      key={condition}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-[13px] text-gray-600 hover:border-teal-300 hover:text-teal-700 transition-colors cursor-default"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Why India */}
              <AnimatedSection delay={0.2} className="mt-12">
                <div className="p-7 bg-[#0a1628] rounded-2xl">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">🇮🇳</span>
                    <div>
                      <h3 className="font-serif text-lg font-light text-white mb-2">
                        Why Choose India?
                      </h3>
                      <p className="text-white/55 text-[14px] leading-[1.8]">
                        {treatment.whyIndia}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related hospitals */}
              {relatedHospitals.length > 0 && (
                <AnimatedSection delay={0.25} className="mt-12">
                  <SectionLabel>Recommended Hospitals</SectionLabel>
                  <StaggerContainer
                    className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
                    staggerDelay={0.08}
                  >
                    {relatedHospitals.map((hospital) => (
                      <StaggerChild key={hospital.slug}>
                        <HospitalCardCompact hospital={hospital} />
                      </StaggerChild>
                    ))}
                  </StaggerContainer>
                </AnimatedSection>
              )}
            </div>

            {/* Right — sticky sidebar */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-5">
              {/* Quick enquiry form */}
              <AnimatedSection delay={0.1} direction="left">
                <div className="bg-[#0a1628] rounded-2xl p-6">
                  <p className="text-[10px] text-teal-400 uppercase tracking-[1.5px] font-medium mb-1.5">
                    {t('quickEnquiry')}
                  </p>
                  <p className="text-white/50 text-[13px] mb-5 leading-relaxed">
                    {t('quickEnquiryDesc')}
                  </p>
                  <BookingForm
                    dark
                    showHospital={false}
                    compact
                    preselectedTreatment={treatment.name}
                  />
                </div>
              </AnimatedSection>

              {/* Direct contact */}
              <AnimatedSection delay={0.2} direction="left">
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[1.5px] mb-4">Speak to Us Now</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+917867868687"
                      className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-teal-700 transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-sm">📞</span>
                      +91 786 786 8687
                    </a>
                    <a
                      href="https://wa.me/917867868687"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-teal-700 transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-sm">💬</span>
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Treatment info card */}
              <AnimatedSection delay={0.25} direction="left">
                <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[1.5px] mb-3.5">Treatment Overview</p>
                  <div className="flex flex-col gap-2.5 text-[13px]">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Specialty</span>
                      <span className="text-gray-700 font-medium">{treatment.icon} {treatment.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hospitals</span>
                      <span className="text-gray-700 font-medium">{relatedHospitals.length} available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response time</span>
                      <span className="text-teal-600 font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cost estimate</span>
                      <span className="text-gray-700 font-medium">Free</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore more treatments ── */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <SectionLabel>Explore More</SectionLabel>
            <h2 className="font-serif text-2xl font-light text-[#0a1628] mt-2 mb-8">
              Other Treatments We Facilitate
            </h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
            {otherTreatments.map((tr) => (
              <StaggerChild key={tr.slug}>
                <Link
                  href={`/treatments/${tr.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] text-gray-600 hover:border-teal-300 hover:text-teal-700 hover:-translate-y-0.5 transition-all"
                >
                  <span>{tr.icon}</span>
                  {tr.name}
                </Link>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
