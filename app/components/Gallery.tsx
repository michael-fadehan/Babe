 'use client';
import { useState } from 'react';

export default function Gallery() {
  const categories = ['All', 'Bridal', 'Moment'];
  const [active, setActive] = useState('All');

  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: `Image ${i + 1}`,
    category: i % 2 === 0 ? 'Bridal' : 'Moment',
  }));

  const visible = items.filter((it) => active === 'All' || it.category === active);

  return (
    <section className="featured" id="gallery">
      <div className="section-header">
        <span className="eyebrow">Featured designs</span>
        <h2>Made to be remembered.</h2>
      </div>

      <div className="filter-bar">
        {categories.map((c) => (
          <button key={c} className={`filter ${c === active ? 'active' : ''}`} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="featured-grid">
        {visible.map((it) => (
          <div key={it.id} className="featured-item">
            <div className="featured-item-media" />
            <div className="featured-item-caption">IMAGE — {it.title.toLowerCase()}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <a href="/portfolio" className="button button-outline">See more</a>
      </div>
    </section>
  );
}
