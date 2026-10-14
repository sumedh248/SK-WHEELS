import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="cta reveal">
      <p className="eyebrow">// READY WHEN YOU ARE</p>
      <h2>
        LET'S GET
        <br />
        <em>YOU MOVING.</em>
      </h2>
      <Link className="button" to="/contact">
        Book your visit
      </Link>
    </section>
  );
}
