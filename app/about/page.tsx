 'use client';
import Testimonial from '../components/Testimonial';

const values = [
  {
    title: 'Craftsmanship',
    detail: 'Impeccable attention to detail and a commitment to perfection in every stitch.',
  },
  {
    title: 'Quality',
    detail: 'We use only the finest fabrics and materials to bring your dream dress to life.',
  },
  {
    title: 'Elegance',
    detail: 'Timeless designs that celebrate your beauty and make you feel unforgettable.',
  },
  {
    title: 'Personalized Experience',
    detail: 'A bespoke journey tailored to you, ensuring a seamless and joyful experience.',
  },
  {
    title: 'Integrity',
    detail: 'Honesty, transparency and dedication in everything we do.',
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">Our story</span>
          <h1>Crafted with passion. Designed for forever.</h1>
          <p>
            At Derin In Details, we believe every love story is unique and your dress should be too. We are here to bring your dream to life with timeless elegance and impeccable craftsmanship.
          </p>
          <div className="hero-actions">
            <a href="/contact#book-consultation" className="button button-primary">Book Consultation</a>
            <a href="/#bespoke" className="button button-secondary">Discover Our Process</a>
          </div>
        </div>
        <div
          className="about-hero-media"
          style={{ backgroundImage: `url('/images/about-image4.jpeg')` }}
        />
      </section>

      <section className="about-story-section">
        <div className="about-story-image about-story-image-left" style={{ backgroundImage: `url('/images/about-image2.jpeg')` }} />
        <div className="about-story-copy">
          <span className="eyebrow">Our story</span>
          <h2>A journey of creativity, dedication and love.</h2>
          <p>
            Founded on the belief that elegance is in the details, Derin In Details began as a small passion project and has grown into a couture house known for refined designs and unforgettable experiences.
          </p>
          <p>
            From the finest fabrics to the last delicate stitch, every piece is crafted with intention to celebrate you, your story, and the beautiful moments that last a lifetime.
          </p>
          <div className="signature-copy">
            <p className="signature-name">The Derin In Details Team</p>
            <p className="signature-subtitle">The Derin In Details Bridal Team</p>
          </div>
        </div>
        <div className="about-story-image about-story-image-right" style={{ backgroundImage: `url('/images/about-image3.jpeg')` }} />
      </section>

      <section className="about-values">
        <div className="section-header">
          <span className="eyebrow">Our values</span>
          <h2>What defines us.</h2>
        </div>
        <div className="values-grid">
          {values.map((item) => (
            <article key={item.title} className="value-card">
              <div className="value-icon" aria-hidden="true">•</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <Testimonial />

      <section className="about-behind">
        <div className="about-behind-copy">
          <span className="eyebrow">Behind the brand</span>
          <h2>A team that cares.</h2>
          <p>
            We are a team of designers, artisans and dreamers who pour our hearts into creating gowns that make you feel truly seen, celebrated and confident.
          </p>
          <p>
            Learn more about our bespoke process and how we bring your vision to life.
          </p>
          <a href="/#bespoke" className="button button-secondary">Explore Our Process</a>
        </div>
        <div className="about-behind-grid">
          <div className="about-behind-image about-behind-image-large">
            <img src="/images/about-image5.jpeg" alt="Behind the brand" />
          </div>
        </div>
      </section>

      <section className="about-cta-banner">
        <div>
          <p>Your story is unique.</p>
          <h2>Your dress should be too.</h2>
        </div>
        <a href="/#contact" className="button button-primary">Book Your Consultation</a>
      </section>
    </main>
  );
}
