'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variant } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const directionMap: Record<string, { x?: number; y?: number }> = {
  up:    { y: 40 },
  down:  { y: -40 },
  left:  { x: 40 },
  right: { x: -40 },
  none:  {},
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.75,
  once = true,
  threshold = 0.15,
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const offset = directionMap[direction] || { y: 40 };

  const hidden: Variant = {
    opacity: 0,
    ...offset,
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{ hidden, visible }}
    >
      {children}
    </MotionTag>
  );
}

// ─── Staggered children wrapper ─────────────────────────────────────
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Individual stagger child ────────────────────────────────────────
interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function StaggerChild({
  children,
  className,
  direction = 'up',
}: StaggerChildProps) {
  const offset = directionMap[direction] || { y: 30 };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
