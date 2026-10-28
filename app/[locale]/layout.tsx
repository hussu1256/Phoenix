import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';
import { Toaster } from 'react-hot-toast';
import LenisProvider from '@/components/providers/LenisProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Phoenix Global Wellness',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: '#0a1628',
                  color: '#fff',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '12px 16px',
                },
                success: {
                  iconTheme: {
                    primary: '#0e7490',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
