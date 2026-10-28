'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { type ReactNode } from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'ghost' | 'gold' | 'dark' | 'outline-light';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-teal-700 text-white hover:bg-teal-800 shadow-[0_8px_24px_rgba(14,116,144,0.3)] hover:shadow-[0_12px_32px_rgba(14,116,144,0.45)]',
  ghost:
    'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60',
  gold:
    'bg-gold text-navy-900 hover:bg-gold-dark shadow-[0_8px_24px_rgba(201,169,110,0.3)]',
  dark:
    'bg-navy-900 text-white hover:bg-navy-800 border border-white/10 hover:border-white/20',
  'outline-light':
    'bg-transparent text-navy-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-xs gap-1.5',
  md:  'px-6 py-3 text-sm gap-2',
  lg:  'px-8 py-4 text-base gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className,
  external = false,
  icon,
  iconRight,
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-medium rounded-xl',
    'transition-all duration-200 ease-smooth-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2',
    'select-none cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-60 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      {loading ? (
        <span className="spinner" />
      ) : (
        icon && <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {iconRight && !loading && (
        <span className="flex-shrink-0">{iconRight}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ translateY: disabled ? 0 : -2 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        className={fullWidth ? 'w-full' : 'inline-block'}
      >
        <Link
          href={href}
          className={baseClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      whileHover={{ translateY: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {content}
    </motion.button>
  );
}
