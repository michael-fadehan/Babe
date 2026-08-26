 'use client';

import { useEffect, useState } from 'react';
import Process from './components/Process';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSlides = [
    { id: '01', image: '/images/hero.png' },
    { id: '02', image: '/images/hero2.png' },
    { id: '03', image: '/images/hero3.png' },
    { id: '04', image: '/images/hero4.png' },
    { id: '05', image: '/images/hero5.png' },
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length]);

  return (
    <main className="page-shell">
      <section
        className={`hero hero-slide-${activeSlide}`}
        id="home"
        style={{ backgroundImage: `url(${heroSlides[activeSlide].image})` }}
      >
        <div className="hero-copy">
          <span className="eyebrow">DID | Bridal and Moment styling</span>
          <h1>Bridal styling, expertly considered.</h1>
          <p>
            Luxury bridal designs meticulously crafted to celebrate your love story
          </p>
          <div className="hero-actions">
            <a href="/contact#book-consultation" className="button button-primary">Book Consultation</a>
            <a href="#gallery" className="button button-secondary">View Gallery</a>
          </div>
        </div>
        <div className="annotation">Image — editorial / behind the fitting</div>
      </section>

      <Testimonial />

      <section className="story" id="about">
        <div className="story-media">
          <div
            className="story-card story-card-large"
            style={{ backgroundImage: `url('/images/story-image.jpeg')` }}
          />
        </div>
        <div className="story-copy">
          <span className="eyebrow">Our story</span>
          <h2>Where craftsmanship meets artistry.</h2>
          <p>
            At Derin In Details, every piece is a celebration of femininity, elegance and individuality. From the finest fabrics to the most intricate details, we create more than just dresses—we create unforgettable moments.
          </p>
          <a href="/about" className="button button-ghost">Discover Our Story</a>
        </div>
      </section>

      <Process />
      <Services />
      <Gallery />
      <Testimonial />
    </main>
  );
}
