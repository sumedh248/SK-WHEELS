import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { services } from "../data/services.js";

const whatsappNumber = "9487875521";

function ContactIcon({ type }) {
  const paths = {
    phone: (
      <path d="M5 3h3l2 5-2 1.5c1.3 2.7 3.3 4.7 6 6L15.5 14l5 2v3c0 1.1-.9 2-2 2C9.4 21 3 14.6 3 5.5 3 4.4 3.9 3 5 3Z" />
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.4a8.5 8.5 0 1 1-15.9 4.1L3 21l5.7-1.5a8.5 8.5 0 0 1 11.8-8.1Z" />
        <path d="M8 8.5c.2 4 3.3 6.8 7.4 7.2l1.1-1.4-2.1-1.1-.9.7a6.2 6.2 0 0 1-2.9-2.8l.7-.9-1.2-2Z" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.3" />
      </>
    ),
  };
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      {paths[type]}
    </svg>
  );
}

const contactLinks = [
  ["phone", "CALL US", "+91 90000 00000", "tel:+94878755214"],
  [
    "whatsapp",
    "WHATSAPP",
    "Message us directly",
    `https://wa.me/${whatsappNumber}`,
  ],
  ["email", "EMAIL", "shashikantkhot07@gmail.com", "mailto:shashikantkhot07@gmail.com"],
  ["instagram", "INSTAGRAM", "@skwheels", "https://instagram.com/sk_wheelss"],
  ["map", "WORKSHOP", "Open our location", "https://maps.app.goo.gl/ciLHLjqz6LdneycUA"],
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  useReveal();
  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  function submit(event) {
    event.preventDefault();
    const message = `Hello SK Wheels,%0A%0AI would like to book a service.%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message || "None"}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
  return (
    <>
      <section className="contact-section contact-page section">
        <div className="contact-info reveal">
          <p className="eyebrow">// GET IN TOUCH</p>
          <h2>
            COME SAY
            <br />
            <em>HELLO.</em>
          </h2>
          <p className="contact-intro">
            Have a question or need a service? Reach us through any channel
            below.
          </p>
          <div className="contact-link-list">
            {contactLinks.map(([type, label, value, href]) => (
              <a
                href={href}
                target={
                  type === "phone" || type === "email" ? undefined : "_blank"
                }
                rel="noreferrer"
                key={type}
              >
                <span className="contact-icon-wrap">
                  <ContactIcon type={type} />
                </span>
                <span>
                  <small>{label}</small>
                  <b>{value}</b>
                </span>
                <i>-&gt;</i>
              </a>
            ))}
          </div>
        </div>
        <form className="inquiry-form reveal" onSubmit={submit}>
          <p className="eyebrow">// BOOK A SERVICE</p>
          <h3>Send an Inquiry</h3>
          <label>
            Full Name *
            <input name="name" value={form.name} onChange={update} required />
          </label>
          <label>
            Phone Number *
            <input
              name="phone"
              value={form.phone}
              onChange={update}
              required
              type="tel"
              placeholder="10-digit mobile number"
            />
          </label>
          <label>
            What do you need for your car? *
            <select
              name="service"
              value={form.service}
              onChange={update}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map(([, service]) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label>
            Additional Message <span>(optional)</span>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows="5"
            />
          </label>
          <button className="whatsapp-submit" type="submit">
            Send inquiry on WhatsApp <i>-&gt;</i>
          </button>
        </form>
      </section>
      <div className="map-placeholder">
        <div>
          <span>SK</span>
          <p>
            YOUR WORKSHOP
            <br />
            LOCATION
          </p>
          <a href="https://maps.app.goo.gl/ciLHLjqz6LdneycUA" target="_blank" rel="noreferrer">
            OPEN IN MAPS
          </a>
        </div>
      </div>
    </>
  );
}
