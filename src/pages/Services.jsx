import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import dentingImage from '../images/car-denting.png'
import paintingImage from '../images/car-paint.png'
import alignmentImage from '../images/wheel-alignment.png'
import scanningImage from '../images/sensor-scanning.png'
import balancingImage from '../images/wheel-balance.png'
import washingImage from '../images/car wash.png'
import mechanicalImage from '../images/car-lift.png'
import partsImage from '../images/hero.png'

const serviceDetails = [
  ['01', 'Car Denting', dentingImage, 'Restore your car body', 'From small door dings to larger panel damage, our technicians reshape and restore bodywork with careful attention to the original lines.', ['Panel straightening', 'Dent removal', 'Body repair']],
  ['02', 'Car Painting', paintingImage, 'A finish worth looking at', 'We prepare every panel properly and use precision colour matching to give your car a clean, even, long-lasting finish.', ['Colour matching', 'Scratch repair', 'Full-body paint']],
  ['03', 'Wheel Alignment', alignmentImage, 'Drive straight and steady', 'Correct alignment improves steering response, protects your tyres, and makes every drive feel more controlled.', ['Computer check', 'Steering correction', 'Tyre wear inspection']],
  ['04', 'Sensor Scanning', scanningImage, 'Know what your car needs', 'Our diagnostic scan helps identify warning lights and electronic faults before they become a larger repair.', ['Error-code scan', 'System diagnosis', 'Clear recommendations']],
  ['05', 'Wheel Balancing', balancingImage, 'A smoother ride ahead', 'We balance each wheel precisely to reduce vibration, improve comfort, and help your tyres wear evenly.', ['Vibration correction', 'Tyre balancing', 'Road-test check']],
  ['06', 'Car Washing', washingImage, 'A fresh start for your car', 'Give your vehicle a thorough clean inside and out, using products and methods that protect the finish.', ['Exterior wash', 'Interior cleaning', 'Detailing finish']],
  ['07', 'Mechanical Work', mechanicalImage, 'Reliable care under the hood', 'From routine maintenance to repairs, our workshop keeps essential systems running safely and efficiently.', ['Periodic service', 'Brake and suspension', 'Engine repair']],
  ['08', 'Spare Parts', partsImage, 'Parts you can rely on', 'We source dependable replacement parts and fit them correctly, so your repair is made to last.', ['Quality parts', 'Expert fitment', 'Parts guidance']]
]

export default function Services() {
  useReveal()
  return <><PageHero label="// OUR SERVICES" title="CARE FOR EVERY" accent="KILOMETRE." text="Straightforward car care, carried out by experienced hands." />
    <section className="service-list section">{serviceDetails.map(([number, title, image, heading, copy, points]) => <article className="service-detail reveal" key={number}>
      <div className="service-detail-image"><img src={image} alt={title} /><span>{number}</span></div>
      <div className="service-detail-copy"><p className="eyebrow">// {title.toUpperCase()}</p><h2>{heading}</h2><p>{copy}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul><Link className="text-link" to="/contact">Book this service -&gt;</Link></div>
    </article>)}</section><CTA />
  </>
}
