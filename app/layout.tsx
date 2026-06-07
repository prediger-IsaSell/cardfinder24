import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cardfinder24.de'),
  title: {
    default: 'cardfinder24 · Deine Karte. Null Gebühren.',
    template: '%s · cardfinder24',
  },
  description:
    'Dauerhaft kostenlose Karten, die sich wirklich lohnen. Such dir deine aus und beantrage sie in Minuten.',
  openGraph: {
    title: 'cardfinder24 · Deine Karte. Null Gebühren.',
    description:
      'Dauerhaft kostenlose Karten, die sich wirklich lohnen. Such dir deine aus.',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070B16',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
