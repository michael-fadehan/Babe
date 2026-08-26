export default function RateGallery({ images }: { images: string[] }) {
  return (
    <div className="rate-gallery">
      {images.map((src, i) => (
        <div key={i} className="rate-thumb" style={{ backgroundImage: `url(${src})` }} />
      ))}
    </div>
  );
}
