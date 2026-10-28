import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { StaggerContainer, StaggerChild } from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import BookingForm from '@/components/shared/BookingForm';
import { getHospitalBySlug, getAllHospitalSlugs, hospitals } from '@/data/hospitals';
import { treatments } from '@/data/treatments';

// ─── Static params ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs   = getAllHospitalSlugs();
  return slugs.map((slug) => ({ locale: 'en', slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const hospital = getHospitalBySlug(slug);
  if (!hospital) return { title: 'Hospital Not Found' };

  return {
    title:       hospital.metaTitle,
    description: hospital.metaDescription,
    openGraph: {
      title:       hospital.metaTitle,
      description: hospital.metaDescription,
      images: [{ url: hospital.heroImage, width: 1400, alt: hospital.name }],
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────
export default async function HospitalPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const hospital = getHospitalBySlug(slug);
  if (!hospital) notFound();

  const t = await getTranslations({ locale: 'en', namespace: 'hospital' });

  // Other hospitals for sidebar
  const otherHospitals = hospitals
    .filter((h) => h.slug !== slug)
    .slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[480px] md:h-[540px] overflow-hidden">
        <Image
          src={hospital.heroImage}
          alt={hospital.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[rgba(10,22,40,0.55)] to-[rgba(10,22,40,0.2)]" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1280px] mx-auto px-6 pb-14 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4 text-[11px] tracking-[1.5px] uppercase text-white/35">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/35">Hospitals</span>
              <span>/</span>
              <span className="text-gold">{hospital.shortName}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <h1
                  className="font-serif font-light text-white leading-[1.08] mb-2"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
                >
                  {hospital.name}
                </h1>
                <p className="text-white/55 text-base flex items-center gap-2">
                  <span>📍</span>
                  {hospital.city}, {hospital.country}
                </p>
              </div>

              {/* Accreditation badges */}
              <div className="flex flex-wrap gap-2">
                {hospital.accreditations.map((acc) => (
                  <span
                    key={acc}
                    className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-[11px] font-medium backdrop-blur-sm"
                  >
                    {acc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-[#0a1628] border-b border-white/6">
        <div className="max-w-[1280px] mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hospital.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-serif text-2xl font-light text-white">{stat.value}</div>
                <div className="text-[11px] text-white/35 tracking-wide uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

            {/* Left */}
            <div>
              {/* About */}
              <AnimatedSection>
                <SectionLabel>{t('about')}</SectionLabel>
                <h2
                  className="font-serif font-light text-[#0a1628] mt-3"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
                >
                  {t('facilities')}
                </h2>
                <p className="text-gray-500 mt-4 text-[15px] leading-[1.85]">
                  {hospital.description}
                </p>
                <p className="text-gray-500 mt-3 text-[15px] leading-[1.85] whitespace-pre-line">
                  {hospital.longDescription}
                </p>
              </AnimatedSection>

              {/* Specialties */}
              <AnimatedSection delay={0.12} className="mt-12">
                <SectionLabel>{t('specialties')}</SectionLabel>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hospital.specialties.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2.5 p-3.5 bg-[#f8fafc] border border-gray-100 rounded-xl text-[13px] text-gray-600 hover:border-teal-200 hover:bg-teal-50 transition-all"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Gallery */}
              {hospital.galleryImages.length > 0 && (
                <AnimatedSection delay={0.18} className="mt-12">
                  <SectionLabel>Gallery</SectionLabel>
                  <StaggerContainer className="mt-5 grid grid-cols-3 gap-3" staggerDelay={0.1}>
                    {hospital.galleryImages.map((img, i) => (
                      <StaggerChild key={i}>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                          <Image
                            src={img}
                            alt={`${hospital.name} — photo ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 33vw, 25vw"
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </StaggerChild>
                    ))}
                  </StaggerContainer>
                </AnimatedSection>
              )}

              {/* Location */}
              <AnimatedSection delay={0.22} className="mt-12">
                <SectionLabel>Location</SectionLabel>
                <div className="mt-5 flex items-start gap-4 p-5 bg-[#f8fafc] border border-gray-100 rounded-2xl">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-medium text-[#0a1628]">{hospital.name}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{hospital.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(hospital.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[12px] text-teal-600 hover:text-teal-700 underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — sidebar */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-5">

              {/* Book form */}
              <AnimatedSection delay={0.1} direction="left">
                <div className="bg-[#0a1628] rounded-2xl p-6">
                  <p className="text-[10px] text-teal-400 uppercase tracking-[1.5px] font-medium mb-1">
                    {t('bookAt')}
                  </p>
                  <p className="text-white/45 text-[12px] mb-5 leading-relaxed">
                    Get a free cost estimate within 24 hours.
                  </p>
                  <BookingForm
                    dark
                    showHospital={false}
                    compact
                    preselectedTreatment={
                      treatments.find((t) => t.slug === hospital.primarySpecialtySlug)?.name || ''
                    }
                  />
                </div>
              </AnimatedSection>

              {/* Contact */}
              <AnimatedSection delay={0.2} direction="left">
                <div className="bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[1.5px] mb-3.5">Contact Phoenix</p>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+917867868687"
                      className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-teal-700 transition-colors">
                      <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-sm">📞</span>
                      +91 786 786 8687
                    </a>
                    <a href="https://wa.me/917867868687" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-teal-700 transition-colors">
                      <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-sm">💬</span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Other hospitals */}
              <AnimatedSection delay={0.25} direction="left">
                <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[1.5px] mb-4">Other Hospitals</p>
                  <div className="flex flex-col gap-3">
                    {otherHospitals.map((h) => (
                      <Link
                        key={h.slug}
                        href={`/hospitals/${h.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <Image
                            src={h.heroImage}
                            alt={h.shortName}
                            fill sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-medium text-gray-700 group-hover:text-teal-700 transition-colors truncate">
                            {h.shortName}
                          </p>
                          <p className="text-[10px] text-gray-400">{h.city}</p>
                        </div>
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                          className="text-gray-300 group-hover:text-teal-500 transition-colors flex-shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
