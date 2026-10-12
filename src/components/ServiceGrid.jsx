import { Link } from 'react-router-dom'
import dentingImage from '../images/car-denting.png'
import paintingImage from '../images/car-paint.png'
import alignmentImage from '../images/wheel-alignment.png'
import scanningImage from '../images/sensor-scanning.png'
import balancingImage from '../images/wheel-balance.png'
import washingImage from '../images/car wash.png'
import mechanicalImage from '../images/car-lift.png'
import workshopImage from '../images/hero.png'

const icons = { '03': 'O', '04': '~', '05': 'O', '06': '*', '07': 'G', '08': '#' }
const images = { '01': dentingImage, '02': paintingImage, '03': alignmentImage, '04': scanningImage, '05': balancingImage, '06': washingImage, '07': mechanicalImage, '08': workshopImage }

export default function ServiceGrid({ items, preview = false }) {
  return <div className="service-grid">{items.map(([number, title, description], index) => <article className="service-card image-card reveal" style={{ transitionDelay: `${(index % 4) * 70}ms` }} key={number}>
    <img className="service-card-image" src={images[number]} alt="" />
    <span className="service-num">{number}</span><span className="service-icon">{icons[number] || '+'}</span><h3>{title}</h3><p>{description}</p>
    {preview && <Link to="/services" aria-label={`Learn more about ${title}`}>-&gt;</Link>}
  </article>)}</div>
}
