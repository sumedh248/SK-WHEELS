import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return <><Loader /><Header /><main><Routes>
    <Route path="/" element={<Home />} /><Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Routes></main><Footer /></>
}
