'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { type TeamMember } from '@/data/team';
import { clsx } from 'clsx';

// ─── Gradient map ────────────────────────────────────────────────────
const GRADIENTS: Record<string, string> = {
  'from-teal-700 to-navy-900': 'from-teal-700 to-[#0a1628]',
  'from-teal-600 to-blue-900': 'from-teal-600 to-blue-900',
  'from-gold-DEFAULT to-navy-900': 'from-[#c9a96e] to-[#0a1628]',
  'from-blue-700 to-teal-700': 'from-blue-700 to-teal-700',
  'from-teal-500 to-navy-800': 'from-teal-500 to-[#112244]',
  'from-gold-DEFAULT to-teal-700': 'from-[#c9a96e] to-teal-700',
};

function resolveGradient(g: string) {
  return GRADIENTS[g] || 'from-teal-700 to-[#0a1628]';
}

// ─── Modal ───────────────────────────────────────────────────────────
function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const gradient = resolveGradient(member.avatarGradient);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/65 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-8 max-w-[500px] w-full relative shadow-[0_40px_80px_rgba(0,0,0,0.3)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-all text-sm"
          >
            ✕
          </button>

          {/* Avatar */}
          <div
            className={clsx(
              'w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br flex items-center justify-center mx-auto mb-5',
              `${gradient}`,
              'font-serif text-3xl text-white font-light shadow-lg'
            )}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              member.initials
            )}
          </div>

          {/* Name & role */}
          <div className="text-center mb-5">
            <h3 className="font-serif text-2xl font-light text-[#0a1628] mb-1">
              {member.name}
            </h3>
            <p className="text-[11px] text-teal-600 font-medium tracking-[1.5px] uppercase">
              {member.role}
            </p>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-500 leading-[1.8] mb-5">
            {member.bio}
          </p>

          {/* Credentials */}
          {member.credentials.length > 0 && (
            <div className="mb-4">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2.5">
                Credentials
              </p>
              <div className="flex flex-wrap gap-1.5">
                {member.credentials.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 bg-teal-50 text-teal-700 rounded-full text-[11px] font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {member.languages.length > 0 && (
            <div className="mb-6">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2.5">
                Languages
              </p>
              <div className="flex flex-wrap gap-1.5">
                {member.languages.map((l) => (
                  <span
                    key={l}
                    className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-full text-[11px] border border-gray-200"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <Link
            href="/book-appointment"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-xl transition-all"
          >
            Book a Consultation →
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Team Card ───────────────────────────────────────────────────────
interface TeamCardProps {
  member: TeamMember;
  showBio?: boolean;
}

export default function TeamCard({ member, showBio = false }: TeamCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const gradient = resolveGradient(member.avatarGradient);

  return (
    <>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
        className="text-center cursor-pointer group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Avatar */}
        <div className="relative w-36 h-36 mx-auto mb-5">
          {/* Ring */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.9 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-[-3px] rounded-full"
            style={{
              background: 'linear-gradient(135deg, #0e7490, #c9a96e)',
              padding: '2px',
              borderRadius: '9999px',
            }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </motion.div>

          {/* Avatar circle */}
          <div
            className={clsx(
              'absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br flex items-center justify-center',
              'font-serif text-4xl text-white font-light shadow-lg',
              `${gradient}`
            )}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              member.initials
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-serif text-[1.15rem] font-light text-[#0a1628] group-hover:text-teal-700 transition-colors">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-[11px] text-teal-600 font-medium tracking-[1.2px] uppercase mt-1">
          {member.role}
        </p>

        {/* Short bio (optional) */}
        {showBio && (
          <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
            {member.shortBio}
          </p>
        )}

        {/* "View profile" hint */}
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-[11px] text-teal-500 font-medium"
        >
          View Profile →
        </motion.p>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <TeamModal member={member} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}