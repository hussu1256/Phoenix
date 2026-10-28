import { clsx } from 'clsx';

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  gold?: boolean;
  className?: string;
  centered?: boolean;
}

export default function SectionLabel({
  children,
  light = false,
  gold = false,
  className,
  centered = false,
}: SectionLabelProps) {
  return (
    <div
      className={clsx(
        'section-label',
        centered && 'justify-center',
        light && 'text-teal-300 [&::before]:bg-teal-300',
        gold  && 'text-gold   [&::before]:bg-gold',
        className
      )}
    >
      {children}
    </div>
  );
}
