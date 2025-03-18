import './globals.css';

import type { Metadata } from 'next';

import { Montserrat, Playfair_Display } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import { TailwindIndicator } from '@/shared/components/tailwind-indicator';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'ETech',
    template: '%s | ETech',
  },
  description: 'Join the community of tech enthusiasts',
  openGraph: {
    title: 'ETech',
    description: 'Join the community of tech enthusiasts',
    url: 'https://etech.com',
    siteName: 'etech.com',
    images: [
      {
        url: 'https://etech.com/og.png',
        width: 2322,
        height: 1306,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'ETech',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={[montserrat.variable, playfairDisplay.variable].join(' ')}
    >
      <head />
      <body className="relative min-h-screen antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
