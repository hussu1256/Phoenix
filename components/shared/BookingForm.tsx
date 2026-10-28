'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { toast } from 'react-hot-toast';
import { clsx } from 'clsx';
import { treatments } from '@/data/treatments';
import { hospitals } from '@/data/hospitals';

interface BookingFormProps {
  dark?: boolean;
  showHospital?: boolean;
  className?: string;
  onSuccess?: () => void;
  preselectedTreatment?: string;
  compact?: boolean;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  treatmentType: string;
  hospitalPreference: string;
  message: string;
}

const INITIAL: FormData = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  treatmentType: '',
  hospitalPreference: '',
  message: '',
};

// ─── Input component ─────────────────────────────────────────────────
function Field({
  label,
  children,
  required,
  dark,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className={clsx(
          'text-[11px] font-medium tracking-[0.5px] uppercase',
          dark ? 'text-white/40' : 'text-gray-400'
        )}
      >
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputBase = (dark: boolean) =>
  clsx(
    'w-full px-4 py-3 rounded-xl text-[14px] outline-none transition-all duration-200',
    'focus:ring-2 focus:ring-teal-500/30 placeholder:text-sm',
    dark
      ? 'bg-white/6 border border-white/10 text-white placeholder:text-white/25 focus:border-teal-500/40 focus:bg-teal-900/10'
      : 'bg-gray-50 border border-gray-200 text-[#0a1628] placeholder:text-gray-400 focus:border-teal-400 focus:bg-white'
  );

// ─── Success state ───────────────────────────────────────────────────
function SuccessMessage({ dark }: { dark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={clsx(
        'flex flex-col items-center justify-center text-center py-10 px-6',
        'rounded-2xl border',
        dark ? 'border-teal-500/20 bg-teal-900/20' : 'border-teal-100 bg-teal-50'
      )}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 20 }}
        className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-3xl mb-4"
      >
        ✅
      </motion.div>
      <h3 className={clsx(
        'font-serif text-2xl font-light mb-2',
        dark ? 'text-white' : 'text-[#0a1628]'
      )}>
        Request Submitted!
      </h3>
      <p className={clsx(
        'text-sm leading-relaxed max-w-xs',
        dark ? 'text-white/55' : 'text-gray-500'
      )}>
        Thank you — our medical coordinator will contact you within 24 hours with a personalized plan.
      </p>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────
export default function BookingForm({
  dark = false,
  showHospital = true,
  className,
  onSuccess,
  preselectedTreatment = '',
  compact = false,
}: BookingFormProps) {
  const t = useTranslations('form');
  const [formData, setFormData] = useState<FormData>({
    ...INITIAL,
    treatmentType: preselectedTreatment,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function update(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
    };
  }

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim())    newErrors.fullName    = 'Required';
    if (!formData.email.trim())       newErrors.email       = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim())       newErrors.phone       = 'Required';
    if (!formData.country.trim())     newErrors.country     = 'Required';
    if (!formData.treatmentType)      newErrors.treatmentType = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        onSuccess?.();
        toast.success(t('successTitle'), { duration: 5000 });
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return <SuccessMessage dark={dark} />;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={clsx('flex flex-col gap-4', className)}
    >
      {/* Row 1: Name + Email */}
      <div className={clsx('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <Field label={t('fullName')} required dark={dark}>
          <input
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={update('fullName')}
            className={clsx(inputBase(dark), errors.fullName && 'border-red-400')}
            autoComplete="name"
          />
          <AnimatePresence>
            {errors.fullName && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-400"
              >
                {errors.fullName}
              </motion.span>
            )}
          </AnimatePresence>
        </Field>

        <Field label={t('email')} required dark={dark}>
          <input
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={update('email')}
            className={clsx(inputBase(dark), errors.email && 'border-red-400')}
            autoComplete="email"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-400"
              >
                {errors.email}
              </motion.span>
            )}
          </AnimatePresence>
        </Field>
      </div>

      {/* Row 2: Phone + Country */}
      <div className={clsx('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <Field label={t('phone')} required dark={dark}>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            value={formData.phone}
            onChange={update('phone')}
            className={clsx(inputBase(dark), errors.phone && 'border-red-400')}
            autoComplete="tel"
          />
          <AnimatePresence>
            {errors.phone && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-400"
              >
                {errors.phone}
              </motion.span>
            )}
          </AnimatePresence>
        </Field>

        <Field label={t('country')} required dark={dark}>
          <input
            type="text"
            placeholder="Your country"
            value={formData.country}
            onChange={update('country')}
            className={clsx(inputBase(dark), errors.country && 'border-red-400')}
            autoComplete="country-name"
          />
          <AnimatePresence>
            {errors.country && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-400"
              >
                {errors.country}
              </motion.span>
            )}
          </AnimatePresence>
        </Field>
      </div>

      {/* Row 3: Treatment + Hospital */}
      <div className={clsx('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <Field label={t('treatmentType')} required dark={dark}>
          <select
            value={formData.treatmentType}
            onChange={update('treatmentType')}
            className={clsx(
              inputBase(dark),
              errors.treatmentType && 'border-red-400',
              dark ? 'bg-[#0d1f3c]' : ''
            )}
          >
            <option value="">{t('selectTreatment')}</option>
            {treatments.map((tr) => (
              <option key={tr.slug} value={tr.name}>
                {tr.icon} {tr.name}
              </option>
            ))}
          </select>
          <AnimatePresence>
            {errors.treatmentType && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[11px] text-red-400"
              >
                {errors.treatmentType}
              </motion.span>
            )}
          </AnimatePresence>
        </Field>

        {showHospital && (
          <Field label={t('hospitalPreference')} dark={dark}>
            <select
              value={formData.hospitalPreference}
              onChange={update('hospitalPreference')}
              className={clsx(inputBase(dark), dark ? 'bg-[#0d1f3c]' : '')}
            >
              <option value="">{t('selectHospital')}</option>
              {hospitals.map((h) => (
                <option key={h.slug} value={h.name}>
                  {h.name}
                </option>
              ))}
              <option value="No preference">{t('noPreference')}</option>
            </select>
          </Field>
        )}
      </div>

      {/* Message */}
      <Field label={t('message')} dark={dark}>
        <textarea
          placeholder="Describe your condition, symptoms, and any existing medical reports..."
          value={formData.message}
          onChange={update('message')}
          rows={compact ? 3 : 4}
          className={clsx(inputBase(dark), 'resize-none leading-relaxed')}
        />
      </Field>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ translateY: loading ? 0 : -2, boxShadow: loading ? 'none' : '0 12px 32px rgba(14,116,144,0.4)' }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className={clsx(
          'mt-1 w-full py-4 rounded-xl text-[14px] font-medium tracking-[0.3px] transition-all duration-200',
          'flex items-center justify-center gap-2',
          loading
            ? 'bg-teal-700/60 cursor-not-allowed text-white/60'
            : 'bg-teal-700 hover:bg-teal-800 text-white shadow-[0_6px_20px_rgba(14,116,144,0.3)]'
        )}
      >
        {loading ? (
          <>
            <span className="spinner" />
            {t('sending')}
          </>
        ) : (
          <>
            {t('submit')}
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </motion.button>

      {/* Privacy note */}
      <p className={clsx(
        'text-center text-[11px]',
        dark ? 'text-white/25' : 'text-gray-400'
      )}>
        🔒 Your information is safe and never shared with third parties.
      </p>
    </form>
  );
}
