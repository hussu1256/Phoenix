import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/shared/PageHero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionLabel from '@/components/shared/SectionLabel';
import BookingForm from '@/components/shared/BookingForm';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: 'en', namespace: 'contact' });
  return {
    title: t('title'),
    description:
      'Contact Phoenix Global Wellness. Phone, WhatsApp, email, or use our contact form. Based in Mumbai, India.',
  };
}

const CONTACT_ITEMS = [
  {
    icon: '📞',
    label: 'Phone / WhatsApp',
    value: '+91 786 786 8687',
    href: 'tel:+917867868687',
    subValue: 'Available 9am – 7pm IST',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@phoenixglobalwellness.com',
    href: 'mailto:info@phoenixglobalwellness.com',
    subValue: 'We reply within 24 hours',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
    href: 'https://maps.google.com',
    subValue: 'Serving patients globally',
  },
  {
    icon: '🕐',
    label: 'Office Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
    subValue: 'Emergency line available 24/7',
  },
];

const FAQ_ITEMS = [
  {
    q: 'How quickly will I receive a response?',
    a: 'Our team responds to all enquiries within 24 hours, Monday to Saturday. For urgent cases, please call or WhatsApp us directly.',
  },
  {
    q: 'Do you provide visa assistance?',
    a: 'Yes. We provide official invitation letters from our partner hospitals to support your medical visa application, along with guidance on the process.',
  },
  {
    q: 'Are there any fees for your consultation service?',
    a: 'Our initial consultation and coordination service is completely free. We are compensated by our hospital partners, meaning no cost to you.',
  },
  {
    q: 'Can you arrange airport pickup and accommodation?',
    a: 'Absolutely. We arrange airport transfers, hotel or serviced apartment accommodation, and a local escort for your hospital visits.',
  },
  {
    q: 'What if I need to bring a family member?',
    a: 'We provide full support for accompanying family members, including accommodation, local transport, and recommendations for sightseeing.',
  },
];

export default async function ContactPage() {
  const t = await getTranslations({ locale: 'en', namespace: 'contact' });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={[{ label: 'Home' }, { label: t('title') }]}
        height="sm"
      />

      {/* ── Main contact grid ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-14 lg:gap-20 items-start">

            {/* Left — info + map */}
            <div>
              <AnimatedSection>
                <SectionLabel>Get in Touch</SectionLabel>
                <h2
                  className="font-serif font-light text-[#0a1628] mt-3"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                >
                  Let's Plan Your Treatment
                </h2>
                <p className="text-gray-500 mt-4 text-[15px] leading-relaxed max-w-md">
                  Reach out through any channel — our multilingual team will respond promptly.
                </p>
              </AnimatedSection>

              {/* Contact cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTACT_ITEMS.map((item, i) => (
                  <AnimatedSection key={item.label} delay={i * 0.08}>
                    <div className="p-5 bg-[#f8fafc] border border-gray-100 rounded-2xl hover:shadow-sm transition-all group">
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-lg flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-gray-400 uppercase tracking-[1px] mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-[#0a1628] font-medium hover:text-teal-700 transition-colors break-all"
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-[#0a1628] font-medium">{item.value}</p>
                          )}
                          <p className="text-[11px] text-gray-400 mt-0.5">{item.subValue}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Map placeholder */}
              <AnimatedSection delay={0.3}>
                <div className="mt-7 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  {/* Google Maps embed — replace with your embed code */}
                  <div className="w-full h-[280px] bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col items-center justify-center gap-3 text-gray-400">
                    <div className="text-5xl">🗺️</div>
                    <p className="text-sm font-medium text-gray-500">Phoenix Global Wellness</p>
                    <p className="text-[12px] text-gray-400">Mumbai, Maharashtra, India</p>
                    <a
                      href="https://www.google.com/maps/search/Mumbai+Maharashtra+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-[12px] text-teal-600 hover:text-teal-700 underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Social links */}
              <AnimatedSection delay={0.35}>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://wa.me/917867868687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl text-[13px] text-[#128C7E] font-medium hover:bg-[#25D366]/20 transition-all"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="https://facebook.com/phoenixglobalwellness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-100 rounded-xl text-[13px] text-blue-700 font-medium hover:bg-blue-100 transition-all"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/phoenixglobalwellness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-pink-50 border border-pink-100 rounded-xl text-[13px] text-pink-700 font-medium hover:bg-pink-100 transition-all"
                  >
                    Instagram
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — contact form */}
            <AnimatedSection delay={0.15} direction="left">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm sticky top-24">
                <h3 className="font-serif text-xl font-light text-[#0a1628] mb-1.5">
                  {t('sendMessage')}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Tell us about your needs and we'll come back to you within 24 hours.
                </p>
                <BookingForm showHospital={false} compact />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel centered>FAQ</SectionLabel>
            <h2
              className="font-serif font-light text-[#0a1628] mt-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
            >
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group bg-white border border-gray-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors">
                    <span className="text-[15px] font-medium text-[#0a1628] pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm flex items-center justify-center group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-[14px] leading-[1.8]">{faq.a}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
