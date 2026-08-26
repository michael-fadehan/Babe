export default function Services() {
  const packages = [
    { title: 'The Muse', desc: 'Introduction / Engagement styling' },
    { title: 'The Vow', desc: 'One-day styling for your wedding day' },
    { title: 'The Atelier', desc: 'Two-day styling & fittings' },
    { title: 'The Revere', desc: 'Three-day styling, venue checks & run-through' },
    { title: 'The Legacy', desc: 'Full creative direction and signature wardrobe' },
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <span className="eyebrow">SERVICES</span>
        <h2>Styled with intention, every time</h2>
      </div>
      <div className="services-grid">
        <div className="service-hero" />
        <div className="service-list">
          {packages.map((p) => (
            <div key={p.title} className="service-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
