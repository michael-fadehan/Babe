'use client';

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
          <h2>Send us a message</h2>
          <p>Fill in the form below and we’ll get back to you.</p>
          <form className="contact-form">
            <label>
              Full Name*
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email Address*
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone Number*
              <input type="tel" name="phone" placeholder="123 456 7890" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" placeholder="Message subject" />
            </label>
            <label>
              Your Message*
              <textarea name="message" placeholder="Write your message here" rows={6} />
            </label>
            <button type="submit" className="button button-primary">Send Message</button>
          </form>
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
              <p className="contact-info-label">Visit Us</p>
              <p>Derin In Details Studio<br />12 Grace Avenue, Ikoyi<br />Lagos, Nigeria</p>
            </div>
            <div>
              <p className="contact-info-label">Call Us</p>
              <p>+234 812 345 6789<br />+234 901 234 5678</p>
            </div>
            <div>
              <p className="contact-info-label">Email Us</p>
              <p>hello@derinindetails.com<br />info@derinindetails.com</p>
            </div>
            <div>
              <p className="contact-info-label">Studio Hours</p>
              <p>Monday – Saturday: 10am – 6pm<br />Sunday: By appointment only</p>
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
