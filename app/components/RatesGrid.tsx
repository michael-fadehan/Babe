import Image from 'next/image';

export default function RatesGrid({ packages }: { packages: { title: string; desc: string; image?: string }[] }) {
  return (
    <div className="rates-grid">
      {packages.map((p) => (
        <article key={p.title} className="rate-card">
          <div className="rate-media">
            <Image src={p.image || '/images/hero.png'} alt={p.title} width={720} height={480} style={{ objectFit: 'cover' }} />
          </div>
          <div className="rate-body">
            <h3>{p.title}</h3>
            <p className="rate-desc">{p.desc}</p>
            <ul className="rate-features">
              <li>Consultation & styling plan</li>
              <li>Fittings and alterations guidance</li>
              <li>On-day styling support (depending on package)</li>
            </ul>
            <a href="/contact#book-consultation" className="button button-outline">Request details</a>
          </div>
        </article>
      ))}
    </div>
  );
}
