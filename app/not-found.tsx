import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(14,116,144,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-lg">
        {/* Big Φ */}
        <div className="font-serif text-[120px] font-light text-white/5 leading-none select-none mb-4">
          404
        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-[#c9a96e] flex items-center justify-center mx-auto mb-6 text-white font-serif text-2xl">
          Φ
        </div>

        <h1 className="font-serif text-3xl font-light text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-white/45 text-[15px] leading-relaxed mb-8">
          The page you are looking for doesn't exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-3">
          <Link
            href="/"
            className="px-7 py-3.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-xl transition-all"
          >
            Go Home →
          </Link>
          <Link
            href="/book-appointment"
            className="px-7 py-3.5 border border-white/15 hover:bg-white/5 text-white/70 hover:text-white text-sm rounded-xl transition-all"
          >
            Book Appointment
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 border border-white/15 hover:bg-white/5 text-white/70 hover:text-white text-sm rounded-xl transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
