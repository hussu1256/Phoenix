import { clsx } from 'clsx';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  backgroundImage?: string;
  height?: 'sm' | 'md' | 'lg';
  centered?: boolean;
  children?: React.ReactNode;
}

const heightMap = {
  sm:  'h-[280px]',
  md:  'h-[360px]',
  lg:  'h-[460px]',
};

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  height = 'md',
  centered = true,
  children,
}: PageHeroProps) {
  return (
    <section
      className={clsx(
        'relative flex items-center overflow-hidden',
        heightMap[height],
        'bg-[#0a1628]'
      )}
    >
      {/* Background image */}
      {backgroundImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 to-[#0a1628]/90" />
        </>
      )}

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,116,144,0.25),transparent_60%)] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className={clsx(
        'relative z-10 w-full max-w-[1280px] mx-auto px-6',
        centered && 'text-center flex flex-col items-center'
      )}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center gap-2 mb-4 text-[11px] tracking-[1.5px] uppercase text-white/40">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20">/</span>}
                <span className={i === breadcrumbs.length - 1 ? 'text-gold' : ''}>
                  {crumb.label}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-white font-light leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/55 text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Slot for extra content (e.g. CTA) */}
        {children}
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
}
