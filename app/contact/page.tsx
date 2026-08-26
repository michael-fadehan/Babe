 'use client';
import BookingForm from '../components/BookingForm';

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <span className="eyebrow">Contact Us</span>
          <h1>We would love to hear from you.</h1>
          <p>
            Whether you have a question, want to book a consultation, or simply want to say hello — we are here to help.
          </p>
          <p className="contact-hero-subtitle">
            Our team will respond as soon as possible to bring your bridal vision to life.
          </p>
        </div>
        <div className="contact-hero-media" />
      </section>

      <section id="book-consultation" className="contact-grid">
        <div className="contact-form-card">
          <h2>Book a consultation</h2>
          <p>Please provide a few details and we’ll follow up within 48 hours.</p>
          <BookingForm />
        </div>

        <div className="contact-info-card">
          <div>
            <span className="eyebrow">Our Studio</span>
            <h2>Visit us or get in touch.</h2>
            <p>
              Derin in Details is available by appointment for bespoke consultations and custom bridal services.
            </p>
          </div>

          <div className="contact-info-list">
            <div>
              <p className="contact-info-label">Reach Us</p>
              <p>derinindetails@gmail.com<br />+234 812 324 3296 • @derinindetails</p>
            </div>
          </div>

          <div className="contact-social-links">
            <a href="https://www.instagram.com/derinindetails?igsh=MTBqNXNmY3d5ZnQ4dg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@derin.in.details?_r=1&_t=ZS-98lfD9mzl6j" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </section>

      <section className="contact-cta-banner">
        <div>
          <p>Your story is unique.</p>
          <h2>Let’s create your dream look together.</h2>
        </div>
        <a href="#book-consultation" className="button button-primary">Book Your Consultation</a>
      </section>
    </main>
  );
}
