'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
          <span className="eyebrow">DID | Bridal styling and Creative Direction</span>
          <h1>Timeless elegance, made for you.</h1>
          <p>
            Luxury bridal designs meticulously crafted to celebrate your love story.
          </p>
          <div className="hero-actions">
            <a href="/contact#book-consultation" className="button button-primary">Book Consultation</a>
            <a href="#gallery" className="button button-secondary">View Gallery</a>
          </div>
        </div>
      </section>

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

      <section className="process" id="bespoke">
        <div className="section-header">
          <span className="eyebrow">THE DERIN IN DETAILS EXPERIENCE</span>
          <h2></h2>
        </div>
        <div className="process-grid">
          {[
            { step: '01', title: 'DISCOVER', detail: 'Understanding your vision, personal style, event and priorities.' },
            { step: '02', title: 'DEFINE', detail: 'Establishing your creative direction, budget and overall styling framework.' },
            { step: '03', title: 'CURATE', detail: 'Selecting designers, vendors, fabrics, colours and visual references that bring the direction to life.' },
            { step: '04', title: 'CREATE', detail: 'Overseeing the design, production and development of each look.' },
            { step: '05', title: 'REFINE', detail: 'Fittings, accessories, final adjustments and all the details that complete your wardrobe.' },
            { step: '06', title: 'DELIVER', detail: 'Bringing everything together through a considered itinerary and seamless wedding-day execution.' },
          ].map((item) => (
            <article key={item.step} className="process-card">
              <div className="process-step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured" id="gallery">
        <div className="section-header">
          <span className="eyebrow">Featured designs</span>
          <h2>Made to be remembered.</h2>
        </div>
        <div className="filter-bar">
          {['All', 'Bridal', 'Reception', 'Traditional', 'Custom', 'Latest'].map((label) => (
            <button key={label} type="button" className={label === 'All' ? 'filter active' : 'filter'}>
              {label}
            </button>
          ))}
        </div>
        <div className="featured-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="featured-item" />
          ))}
        </div>
      </section>
    </main>
  );
}
