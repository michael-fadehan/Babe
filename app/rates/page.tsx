export const metadata = {
  title: 'Rates — Derin in Details',
};

const packages = [
  'The Muse',
  'The Vow',
  'The Atelier',
  'The Revere',
  'The Legacy',
];

import RatesGrid from '../components/RatesGrid';
import RateMatrix from '../components/RateMatrix';
import RateGallery from '../components/RateGallery';

export default function RatesPage() {
  const pkgData = [
    { title: 'The Muse', desc: 'Introduction / Engagement styling', image: '/images/rates/muse.jpg' },
    { title: 'The Vow', desc: 'One-day styling for your wedding day', image: '/images/rates/vow.jpg' },
    { title: 'The Atelier', desc: 'Two-day styling & fittings', image: '/images/rates/atelier.jpg' },
    { title: 'The Revere', desc: 'Three-day styling, venue checks & run-through', image: '/images/rates/revere.jpg' },
    { title: 'The Legacy', desc: 'Full creative direction and signature wardrobe', image: '/images/rates/legacy.jpg' },
  ];

  return (
    <main className="page-shell rates-page">
      <section className="rates-hero">
        <div className="rates-hero-inner">
          <span className="eyebrow">RATES</span>
          <h1>Packages crafted for meaningful moments</h1>
          <p>Pricing is bespoke. Request our full rate card and we'll tailor the right package for you.</p>
          <div className="rates-hero-cta">
            <a href="/contact#book-consultation" className="button button-primary">Request Full Rates</a>
            <a href="#packages" className="button button-secondary">See Packages</a>
          </div>
        </div>
      </section>

      <section id="packages" className="section-header">
        <div>
          <span className="eyebrow">PACKAGES</span>
          <h2>Our package offerings</h2>
        </div>
      </section>

      <RatesGrid packages={pkgData} />

      <RateMatrix packages={pkgData.map((p) => p.title)} />

      <section className="rates-samples">
        <h2>Sample work</h2>
        <RateGallery images={[ '/images/hero2.png', '/images/hero3.png', '/images/hero4.png' ]} />
      </section>

      <section className="about-cta-banner" id="request">
        <div>
          <p>Full rate card available on request</p>
          <h2>Request full package details</h2>
        </div>
        <a href="/contact#book-consultation" className="button button-primary">Request Full Rates</a>
      </section>
    </main>
  );
}
