import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import LandingSection from '../../Components/User/LandingSection/LandingSection'
import Services from '../../Components/User/Services/Services'
import Events from '../../Components/User/Events/Events'
import About from '../../Components/User/About/About'
import Contact from '../../Components/User/Contact/Contact'
import Footer from '../../Components/User/Footer/Footer'
import Hire from '../../Components/User/Hire/Hire'

function LandingPage() {
  return (
    <div>

      <Navbar />
      <LandingSection />
      <Events />
      <Services />
      <About />
      <Hire />
      <Contact />
      <Footer />

    </div>
  )
}

export default LandingPage