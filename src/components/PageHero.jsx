export default function PageHero({ label, title, accent, text }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{label}</p>
      <h1>
        {title}
        <br />
        <em>{accent}</em>
      </h1>
      {text && <p>{text}</p>}
    </section>
  );
}
