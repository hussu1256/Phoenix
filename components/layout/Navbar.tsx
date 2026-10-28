'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { clsx } from 'clsx';
import { treatments } from '@/data/treatments';

// ─── Types ─────────────────────────────────────────────────────────
interface DropdownItem {
  label: string;
  href: string;
}

// ─── Dropdown animation variants ────────────────────────────────────
const dropdownVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0, y: -6, scale: 0.97,
    transition: { duration: 0.12, ease: [0.4, 0, 1, 1] },
  },
};

const mobileMenuVariants = {
  hidden:  { opacity: 0, x: '100%' },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0, x: '100%',
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

// ─── NavLink with underline hover animation ──────────────────────────
function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'relative px-3 py-2 text-[13px] font-normal tracking-[0.02em] transition-colors duration-200 rounded-md',
        'text-white/70 hover:text-white hover:bg-white/5',
        active && 'text-white'
      )}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-3 right-3 h-px bg-teal-500"
        />
      )}
    </Link>
  );
}

// ─── Dropdown Menu component ─────────────────────────────────────────
function DropdownMenu({
  label,
  items,
  columns = 1,
}: {
  label: string;
  items: DropdownItem[];
  columns?: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={clsx(
          'flex items-center gap-1 px-3 py-2 text-[13px] font-normal tracking-[0.02em]',
          'text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-md',
          open && 'text-white bg-white/5'
        )}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <motion.svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={clsx(
              'absolute top-[calc(100%+8px)] left-0 z-50',
              'bg-[#0d1f3c] border border-white/10 rounded-2xl p-2 shadow-[0_24px_64px_rgba(0,0,0,0.5)]',
              'backdrop-blur-xl',
              columns === 2 ? 'min-w-[480px]' : 'min-w-[220px]'
            )}
          >
            <div
              className={clsx(
                columns === 2 ? 'grid grid-cols-2 gap-0.5' : 'flex flex-col gap-0.5'
              )}
            >
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    'px-3 py-2.5 text-[13px] text-white/65 hover:text-white',
                    'rounded-xl transition-all duration-150 hover:bg-white/8',
                    'flex items-center gap-2 group'
                  )}
                >
                  <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile Menu ─────────────────────────────────────────────────────
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations('nav');
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[98] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 z-[99] w-[320px] bg-[#0a1628] border-l border-white/10 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <span className="text-white font-serif text-lg font-light">Menu</span>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="p-4 flex flex-col gap-1">
              <Link href="/" onClick={onClose}
                className="px-4 py-3 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                {t('home')}
              </Link>
              <Link href="/about/visionary" onClick={onClose}
                className="px-4 py-3 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                {t('visionary')}
              </Link>
              <Link href="/network/team" onClick={onClose}
                className="px-4 py-3 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                {t('team')}
              </Link>

              {/* Treatments accordion */}
              <button
                onClick={() => setTreatmentsOpen((v) => !v)}
                className="flex items-center justify-between px-4 py-3 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all"
              >
                {t('treatments')}
                <motion.span animate={{ rotate: treatmentsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  ▾
                </motion.span>
              </button>
              <AnimatePresence>
                {treatmentsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden ml-3"
                  >
                    <div className="grid grid-cols-2 gap-0.5 pb-2">
                      {treatments.map((t) => (
                        <Link
                          key={t.slug}
                          href={`/treatments/${t.slug}`}
                          onClick={onClose}
                          className="px-3 py-2 text-xs text-white/55 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                        >
                          {t.icon} {t.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/contact" onClick={onClose}
                className="px-4 py-3 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                {t('contact')}
              </Link>
            </nav>

            {/* CTA */}
            <div className="p-4 border-t border-white/10">
              <Link
                href="/book-appointment"
                onClick={onClose}
                className="block w-full text-center py-3.5 px-6 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-xl transition-all"
              >
                Book Appointment →
              </Link>
              <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-xs">
                📞 <a href="tel:+917867868687" className="hover:text-white transition-colors">+91 786 786 8687</a>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── MAIN NAVBAR ─────────────────────────────────────────────────────
export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Build treatment links
  const treatmentItems: DropdownItem[] = treatments.map((tr) => ({
    label: `${tr.icon} ${tr.name}`,
    href: `/treatments/${tr.slug}`,
  }));

  const aboutItems: DropdownItem[] = [
    { label: t('visionary'), href: '/about/visionary' },
  ];

  const networkItems: DropdownItem[] = [
    { label: t('team'), href: '/network/team' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-[90] transition-all duration-500',
          scrolled
            ? 'bg-[rgba(10,22,40,0.97)] backdrop-blur-xl border-b border-white/8 py-0'
            : 'bg-gradient-to-b from-[rgba(10,22,40,0.85)] to-transparent border-b border-transparent py-0'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-teal-600 to-gold flex items-center justify-center text-white font-serif text-lg font-semibold shadow-[0_4px_16px_rgba(14,116,144,0.35)]"
            >
              Φ
            </motion.div>
            <div>
              <div className="text-white font-serif text-[19px] font-light leading-none tracking-wide">
                Phoenix
              </div>
              <div className="text-white/40 font-sans text-[9px] tracking-[2px] uppercase mt-0.5">
                Global Wellness
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            <NavLink href="/" active={pathname === '/'}>
              {t('home')}
            </NavLink>

            <DropdownMenu label={t('about')} items={aboutItems} />
            <DropdownMenu label={t('network')} items={networkItems} />
            <DropdownMenu label={t('treatments')} items={treatmentItems} columns={2} />

            <NavLink href="/contact" active={pathname.includes('/contact')}>
              {t('contact')}
            </NavLink>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Book Appointment CTA */}
            <motion.div
              whileHover={{ translateY: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:block"
            >
              <Link
                href="/book-appointment"
                className={clsx(
                  'px-5 py-2.5 text-[13px] font-medium rounded-xl',
                  'bg-teal-700 hover:bg-teal-800 text-white',
                  'transition-all duration-200',
                  'shadow-[0_4px_16px_rgba(14,116,144,0.35)] hover:shadow-[0_8px_24px_rgba(14,116,144,0.45)]'
                )}
              >
                {t('bookAppointment')}
              </Link>
            </motion.div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-white/5 border border-white/10"
              aria-label="Open menu"
            >
              <span className="w-4.5 h-px bg-white/70 rounded-full" />
              <span className="w-3.5 h-px bg-white/70 rounded-full" />
              <span className="w-4.5 h-px bg-white/70 rounded-full" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
