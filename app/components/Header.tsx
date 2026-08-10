'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`} ref={headerRef}>
      <div className="topbar-left-group">
        <Link href="/" className="brand">Derin in details</Link>
        <button className="mobile-menu-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav className={`nav-links ${mobileNavOpen ? 'open' : ''}`}>
        <Link href="/#gallery">Works</Link>
        <Link href="/about">About</Link>
        <Link href="/#bespoke">Bespoke</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-cta">
        <Link href="/contact#book-consultation" className="button button-outline">Book Consultation</Link>
      </div>
    </header>
  );
}