import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import LandingSection from '../../Components/User/LandingSection/LandingSection'
import Services from '../../Components/User/Services/Services'

function LandingPage() {
  return (
    <div><Navbar/>
    <LandingSection/>
    <Services/>
    </div>
  )
}

export default LandingPage