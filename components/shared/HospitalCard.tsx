'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { type Hospital } from '@/data/hospitals';
import { clsx } from 'clsx';

interface HospitalCardProps {
  hospital: Hospital;
  priority?: boolean;
  className?: string;
}

export default function HospitalCard({ hospital, priority = false, className }: HospitalCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={clsx(
        'relative overflow-hidden rounded-2xl cursor-pointer group',
        'aspect-[4/3] bg-gray-100',
        className
      )}
    >
      <Link href={`/hospitals/${hospital.slug}`} className="block h-full">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={hospital.heroImage}
            alt={hospital.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={clsx(
              'object-cover transition-transform duration-700 ease-out',
              hovered ? 'scale-110' : 'scale-100'
            )}
            priority={priority}
          />
        </div>

        {/* Gradient overlay — always present, deepens on hover */}
        <div
          className={clsx(
            'absolute inset-0 transition-opacity duration-400',
            'bg-gradient-to-t from-[rgba(10,22,40,0.92)] via-[rgba(10,22,40,0.4)] to-transparent',
            hovered ? 'opacity-100' : 'opacity-80'
          )}
        />

        {/* Teal glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 ring-2 ring-inset ring-teal-500/30 rounded-2xl pointer-events-none"
        />

        {/* Accreditation badge */}
        {hospital.accreditations[0] && (
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{
                opacity: hovered ? 1 : 0.7,
                scale:   hovered ? 1   : 0.95,
              }}
              transition={{ duration: 0.2 }}
              className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white/80 font-medium"
            >
              {hospital.accreditations[0]}
            </motion.div>
          </div>
        )}

        {/* Card content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Location */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.8 }}
            className="flex items-center gap-1.5 mb-1.5"
          >
            <span className="text-gold text-[10px] font-medium tracking-[1.5px] uppercase">
              {hospital.city}, {hospital.country}
            </span>
          </motion.div>

          {/* Name */}
          <h3 className="font-serif text-[1.25rem] font-light text-white leading-tight mb-1.5">
            {hospital.name}
          </h3>

          {/* Tagline — reveals on hover */}
          <motion.p
            animate={{
              opacity:   hovered ? 0.7  : 0,
              y:         hovered ? 0    : 6,
              height:    hovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.25 }}
            className="text-white/70 text-[12px] leading-snug mb-3 overflow-hidden"
          >
            {hospital.tagline}
          </motion.p>

          {/* Specialties chips */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="flex flex-wrap gap-1.5"
          >
            {hospital.specialties.slice(0, 3).map((spec) => (
              <span
                key={spec}
                className="px-2 py-0.5 bg-teal-600/30 border border-teal-500/30 rounded-full text-[10px] text-teal-300 backdrop-blur-sm"
              >
                {spec}
              </span>
            ))}
          </motion.div>

          {/* View → indicator */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="mt-3 flex items-center gap-1.5 text-[12px] text-teal-300 font-medium"
          >
            View Hospital
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Compact variant for related hospitals section ────────────────────
export function HospitalCardCompact({ hospital }: { hospital: Hospital }) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(10,22,40,0.12)' }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-3.5 p-3.5 rounded-xl border border-gray-100 bg-white hover:border-teal-100 transition-all cursor-pointer"
    >
      <Link href={`/hospitals/${hospital.slug}`} className="flex items-center gap-3.5 w-full">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
          <Image
            src={hospital.heroImage}
            alt={hospital.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-navy-900 truncate">{hospital.shortName}</p>
          <p className="text-[11px] text-gray-400 mt-0.5">{hospital.city}</p>
        </div>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
          className="text-teal-600 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </motion.div>
  );
}
