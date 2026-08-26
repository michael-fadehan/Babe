export default function Testimonial() {
  const quotes = [
    'Every fitting felt considered. Nothing was rushed, nothing was generic.',
    'I looked like the best version of myself, not a version of someone else’s bride.'
  ];

  return (
    <section className="testimonial-band">
      <div className="testimonial-inner">
        {quotes.map((q, i) => (
          <blockquote key={i} className="testimonial-quote">{q}</blockquote>
        ))}
      </div>
    </section>
  );
}
