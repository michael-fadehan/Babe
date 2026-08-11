'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set a small threshold (e.g., 10px) to avoid changing the header on minimal scroll.
      const scrollThreshold = 10;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
      <div className="topbar-left-group">
        <Link href="/" className="brand">Derin in details</Link>
        <button className="mobile-menu-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav className={`nav-links ${mobileNavOpen ? 'open' : ''}`}>
        <Link href="/#home">Home</Link>
        <Link href="/#bespoke">Bespoke</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/rates">Rates</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-cta">
        <Link href="/contact#book-consultation" className="button button-outline">Book Consultation</Link>
      </div>
    </header>
  );
}