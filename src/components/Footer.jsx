import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="reveal"><div className="footer-top"><div><Link to="/" className="brand light"><b>SK</b><span>WHEELS<small>CAR CARE STUDIO</small></span></Link><p>Better care. Better drive.<br />Your trusted auto workshop.</p></div><div><h5>EXPLORE</h5><Link to="/services">Our services</Link><Link to="/about">Our story</Link><Link to="/contact">Contact us</Link></div><div><h5>VISIT US</h5><p>SK Wheels Car Workshop<br />Your workshop address, India<br /><a href="tel:+919000000000">+91 90000 00000</a></p></div></div><div className="footer-bottom"><span>(c) 2026 SK Wheels</span><a href="#top">BACK TO TOP</a></div></footer>
}
