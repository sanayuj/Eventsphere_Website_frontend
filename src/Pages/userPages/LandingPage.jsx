import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import LandingSection from '../../Components/User/LandingSection/LandingSection'
import Services from '../../Components/User/Services/Services'
import Events from '../../Components/User/Events/Events'

function LandingPage() {
  return (
    <div><Navbar/>
    <LandingSection/>
    
    <Events/>
    <Services/>
    </div>
  )
}

export default LandingPage