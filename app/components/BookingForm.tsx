 'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <aside className="booking-card">
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <h3>Consultation request</h3>
          <label>Full name
            <input name="name" />
          </label>
          <label>Email / WhatsApp
            <input name="contact" />
          </label>
          <label>Service
            <select name="service">
              <option>Bridal - Moment</option>
            </select>
          </label>
          <label>Event date
            <input name="date" type="date" />
          </label>
          <label>Tell us about your event
            <textarea name="notes" />
          </label>
          <button className="button button-primary" type="submit">Submit Request</button>
        </form>
      ) : (
        <div className="booking-confirm">
          <h4>Thanks — we’ll follow up within 48 hours</h4>
        </div>
      )}
    </aside>
  );
}
