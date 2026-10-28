import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://phoenixglobalwellness.com"),
  title: {
    default: 'Phoenix Global Wellness — World-Class Medical Travel',
    template: '%s | Phoenix Global Wellness',
  },
  description:
    'Phoenix Global Wellness is a premier medical travel consultancy led by an expert orthopaedic surgeon. We connect international patients with top hospitals in India and Singapore.',
  keywords: [
    'medical travel',
    'medical tourism India',
    'orthopaedic surgery India',
    'hospital in Mumbai',
    'cancer treatment India',
    'Phoenix Global Wellness',
    'joint replacement Mumbai',
  ],
  authors: [{ name: 'Phoenix Global Wellness' }],
  creator: 'Phoenix Global Wellness Private Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Phoenix Global Wellness',
    title: 'Phoenix Global Wellness — World-Class Medical Travel',
    description:
      'Connecting international patients with the finest hospitals in India and Singapore since 2020.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Phoenix Global Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phoenix Global Wellness',
    description: 'Premium medical travel consultancy — India & Singapore.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a1628" />
      </head>
      <body>{children}</body>
    </html>
  );
}
