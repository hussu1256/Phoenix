import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { treatments } from '@/data/treatments';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Phoenixglobalmedicaltourism',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/phoenixglobalmedical/',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { key: 'bookAppointment', href: '/book-appointment' },
  { key: 'about',           href: '/about/visionary', label: 'About Us' },
  { key: 'team',            href: '/network/team' },
  { key: 'partners',        href: '/network/team', label: 'Partners' },
  { key: 'contact',         href: '/contact' },
  { key: 'careers',         href: '/contact', label: 'Careers' },
  { key: 'getQuote',        href: '/book-appointment', label: 'Get a Quote' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');

  // Split treatments into two columns
  const half = Math.ceil(treatments.length / 2);
  const treatCol1 = treatments.slice(0, half);
  const treatCol2 = treatments.slice(half);

  return (
    <footer className="bg-[#060f1e] text-white/60">
      {/* Main grid */}
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1fr] gap-10 lg:gap-14 pb-12 border-b border-white/6">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-teal-600 to-gold flex items-center justify-center text-white font-serif text-lg font-semibold">
                Φ
              </div>
              <div>
                <div className="text-white font-serif text-[19px] font-light leading-none">Phoenix</div>
                <div className="text-white/35 font-sans text-[9px] tracking-[2px] uppercase mt-0.5">Global Wellness</div>
              </div>
            </Link>

            <p className="text-[13px] leading-[1.85] text-white/50 max-w-[300px]">
              {t('about')}
            </p>

            {/* Phone */}
            <div className="mt-5 flex items-center gap-2 text-sm">
              <span className="text-teal-500">📞</span>
              <a
                href="tel:+917867868687"
                className="text-white/60 hover:text-white transition-colors text-[13px]"
              >
                +91 786 786 8687
              </a>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-white/50 hover:text-teal-400 hover:border-teal-500/40 hover:bg-teal-500/8 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[11px] font-medium tracking-[1.5px] uppercase mb-5">
              {t('quickLinks')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-500 text-[10px]">▸</span>
                    {link.label || (navT as (key: string) => string)(link.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/network/team"
                  className="text-[13px] text-white/50 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-500 text-[10px]">▸</span>
                  {t('forDoctors')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[13px] text-white/50 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-500 text-[10px]">▸</span>
                  {t('associateWithUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments — two mini-columns */}
          <div>
            <h4 className="text-white text-[11px] font-medium tracking-[1.5px] uppercase mb-5">
              {t('treatments')}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[...treatCol1, ...treatCol2].map((tr) => (
                <Link
                  key={tr.slug}
                  href={`/treatments/${tr.slug}`}
                  className="text-[12px] text-white/50 hover:text-white transition-colors duration-150 truncate flex items-center gap-1 group"
                >
                  <span className="flex-shrink-0 text-[11px]">{tr.icon}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-150 truncate">
                    {tr.name.replace(' Surgery','').replace(' Care','').replace(' Treatment','')}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[11px] font-medium tracking-[1.5px] uppercase mb-5">
              {t('contact')}
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[13px] text-white/50 leading-relaxed">
                📍 Mumbai,<br />Maharashtra, India
              </li>
              <li>
                <a
                  href="tel:+917867868687"
                  className="text-[13px] text-white/50 hover:text-white transition-colors"
                >
                  📞 +91 786 786 8687
                </a>
              </li>
            </ul>

            {/* For Doctors */}
            <div className="mt-6 p-3.5 rounded-xl border border-teal-500/20 bg-teal-500/5">
              <p className="text-[11px] text-teal-400 font-medium mb-1.5 uppercase tracking-widest">For Doctors</p>
              <Link
                href="/contact"
                className="text-[12px] text-white/50 hover:text-teal-300 transition-colors"
              >
                {t('associateWithUs')} →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25 text-center sm:text-left">
            {t('rights')}
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/25">
            <Link href="/contact" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white/50 transition-colors">Terms</Link>
            <span>·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
