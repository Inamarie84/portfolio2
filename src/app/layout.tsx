import './globals.css';
import { Montserrat, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-head',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Your Name — Portfolio',
  description: 'Portfolio showcasing projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col bg-porcelain text-ink">
        {/* Optional: Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 rounded bg-white px-3 py-2 text-sm"
        >
          Skip to content
        </a>

        <Nav />

        <main id="main" role="main" className="flex-1">
          {children}
        </main>

        <Footer sticky={false} />
      </body>
    </html>
  );
}
