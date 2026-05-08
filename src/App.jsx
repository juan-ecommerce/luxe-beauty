import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyCowork from './components/sections/WhyCowork'
import Gallery from './components/sections/Gallery'
import Brands from './components/sections/Brands'
import ReserveCTA from './components/sections/ReserveCTA'
import Location from './components/sections/Location'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyCowork />
        <Gallery />
        <Brands />
        <ReserveCTA />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
