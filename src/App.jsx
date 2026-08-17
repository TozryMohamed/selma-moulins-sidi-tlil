import useLanguageDirection from './hooks/useLanguageDirection.js'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Products from './components/Products/Products.jsx'
import Process from './components/Process/Process.jsx'
import Quality from './components/Quality/Quality.jsx'
import Values from './components/Values/Values.jsx'
import Industry from './components/Industry/Industry.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  useLanguageDirection()

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Quality />
        <Values />
        <Industry />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
