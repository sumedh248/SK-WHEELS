import useReveal from "../hooks/useReveal.js";
import PageHero from "../components/PageHero.jsx";
import CTA from "../components/CTA.jsx";
import ownerImage from "../images/deservers.png";

const values = [
  ["01", "HONEST ADVICE", "Clear recommendations and no unnecessary work."],
  ["02", "EXPERT HANDS", "Skilled technicians who respect every car."],
  ["03", "QUALITY FIRST", "Parts and practices chosen to last."],
];
export default function About() {
  useReveal();
  return (
    <>
      <PageHero
        label="// THE PEOPLE BEHIND THE WRENCH"
        title="WE KEEP YOU"
        accent="MOVING."
        text="SK Wheels is built on a simple belief: good car care should feel straightforward, personal and dependable."
      />
      <section className="about-story section">
        <div className="about-image reveal">
          <img
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=85"
            alt="Auto repair workshop"
          />
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">// OUR STORY</p>
          <h2>
            THE CRAFT IS
            <br />
            <em>IN THE CARE.</em>
          </h2>
          <p>
            We are a team of automotive people who take pride in the details
            others overlook. From a quick wash to a complex repair, every
            vehicle gets treated like our own.
          </p>
          <p>
            Our workshop brings expert hands, clear advice and the right tools
            together under one roof.
          </p>
        </div>
      </section>
      <section className="owner-section section">
        <div className="owner-copy reveal">
          <p className="eyebrow">// MEET THE OWNER</p>
          <h2>
            CARE THAT
            <br />
            <em>COMES FROM EXPERIENCE.</em>
          </h2>
          <p>
            SK Wheels was built with one clear purpose: to give every customer
            honest advice, quality workmanship and a workshop they can trust.
          </p>
          
          
        </div>
        <div className="owner-image reveal">
          <img src={ownerImage} alt="SK Wheels workshop" />
          <div>
            <span>SK</span>
            <p>
              
            </p>
          </div>
        </div>
      </section>
      <section className="values">
        {values.map(([number, title, copy]) => (
          <article className="reveal" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
