import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <header className={location.pathname === "/" ? "home-header" : ""}>
      <Link to="/" className="brand">
        <b>SK</b>
        <span>
          WHEELS<small>CAR CARE STUDIO</small>
        </span>
      </Link>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? "x" : "menu"}
      </button>
      <nav className={open ? "open" : ""}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link className="nav-cta" to="/contact">
          Book a service
        </Link>
      </nav>
    </header>
  );
}
