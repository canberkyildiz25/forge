import type { Metadata } from 'next';
import { Big_Shoulders, Fraunces, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';
import RevealInit from '@/components/RevealInit';
import GsapFx from '@/components/GsapFx';

const display = Big_Shoulders({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-display',
});

const body = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
});

const serif = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['300', '400'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    default: 'FORGE Athletic — Performance Training, London',
    template: '%s — FORGE Athletic',
  },
  description:
    'FORGE Athletic is a 26,000 sq ft performance training facility in Bermondsey, London. Programmed by sport scientists, coached by former athletes.',
  openGraph: {
    title: 'FORGE Athletic — Performance Training, London',
    description: 'Not a gym. A proving ground.',
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80'],
  },
};

export const viewport = {
  themeColor: '#0C0A08',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        <Cursor />
        <ScrollProgress />
        <Nav />
        {children}
        <Footer />
        <RevealInit />
        <GsapFx />
      </body>
    </html>
  );
}
