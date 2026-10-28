import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          50:  '#e8edf5',
          100: '#c5d0e4',
          200: '#9eb0cf',
          300: '#7790ba',
          400: '#5a77ab',
          500: '#3d5e9c',
          600: '#2e4d8a',
          700: '#1e3a6b',
          800: '#112244',
          900: '#0a1628',
        },
        teal: {
          DEFAULT: '#0e7490',
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#0e7490',
          800: '#065f46',
          900: '#064e3b',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e8d5a3',
          dark:  '#a07840',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'spin-slow':   'spin 8s linear infinite',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
