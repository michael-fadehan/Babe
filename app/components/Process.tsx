export default function Process() {
  const steps = [
    { step: '01', title: 'DISCOVER', detail: 'Understanding your vision, personal style, event and priorities.' },
    { step: '02', title: 'DEFINE', detail: 'Establishing your creative direction, budget and overall styling framework.' },
    { step: '03', title: 'CURATE', detail: 'Selecting designers, vendors, fabrics, colours and visual references.' },
    { step: '04', title: 'CREATE', detail: 'Overseeing the design, production and development of each look.' },
    { step: '05', title: 'REFINE', detail: 'Fittings, accessories, final adjustments that complete your wardrobe.' },
    { step: '06', title: 'DELIVER', detail: 'Bringing everything together through a considered itinerary and seamless execution.' },
  ];

  return (
    <section className="process" id="bespoke">
      <div className="section-header">
        <span className="eyebrow">THE DERIN IN DETAILS EXPERIENCE</span>
        <h2>The Derin in Details Experience</h2>
      </div>
      <div className="process-grid">
        {steps.map((s) => (
          <article key={s.step} className="process-card">
            <div className="process-step">{s.step}</div>
            <h3>{s.title}</h3>
            <p>{s.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
