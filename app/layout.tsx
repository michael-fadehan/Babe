import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import Link from 'next/link';
import Header from './components/Header';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Babe',
  description: 'A new Next.js application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <footer className="site-footer">
            <div className="site-footer__inner">
              <p>© 2026 Derin In Detials. Crafted for thoughtful, modern experiences.</p>
              <div className="site-footer__group">
                <div className="site-footer__links">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </div>
                <div className="site-footer__socials" aria-label="Social media links">
                  <a href="https://www.instagram.com/derinindetails?igsh=MTBqNXNmY3d5ZnQ4dg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="https://www.tiktok.com/@derin.in.details?_r=1&_t=ZS-98lfD9mzl6j" target="_blank" rel="noreferrer">TikTok</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
