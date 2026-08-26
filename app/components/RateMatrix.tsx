export default function RateMatrix({ packages }: { packages: string[] }) {
  const features = [
    'Initial consultation',
    'Fittings',
    'Venue visit',
    'On-day styling',
    'Creative direction',
  ];

  return (
    <section className="rate-matrix">
      <h3 className="sr-only">Package comparison</h3>
      <div className="matrix-scroll">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              {packages.map((p) => (
                <th key={p}>{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f}>
                <td className="feature">{f}</td>
                {packages.map((p) => (
                  <td key={p} className="check">✓</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
