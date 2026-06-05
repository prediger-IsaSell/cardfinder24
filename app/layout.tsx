import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cardfinder24.de'),
  title: {
    default: 'cardfinder24 — Drei Karten. Null Gebühren.',
    template: '%s · cardfinder24',
  },
  description:
    'Hör auf, fürs Bezahlen zu zahlen. Wir haben aus hunderten Karten die drei herausgesucht, die dauerhaft kostenlos sind — und sich wirklich lohnen.',
  openGraph: {
    title: 'cardfinder24 — Drei Karten. Null Gebühren.',
    description:
      'Aus hunderten Karten die drei herausgesucht, die dauerhaft kostenlos sind — und sich wirklich lohnen.',
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
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700,800&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
