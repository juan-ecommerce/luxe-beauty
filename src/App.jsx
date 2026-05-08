import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyCowork from './components/sections/WhyCowork'
import ReserveCTA from './components/sections/ReserveCTA'
import Location from './components/sections/Location'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyCowork />
        <ReserveCTA />
        <Location />
      </main>
      <Footer />
    </>
  )
}
