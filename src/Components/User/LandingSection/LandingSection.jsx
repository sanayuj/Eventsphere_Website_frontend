import React from 'react'
import "./LandingSection.css"
function LandingSection() {
     const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    
    <div class="landingCommon d-flex flex-column justify-content-center align-items-center" id="landing">
    <h1 class="WelcomeNote text-center">Welcome to EventSphere</h1>
    <p class="subheading">Shaping Moments, Crafting Experience!</p>
    <div><button class="getStartedBtn" onClick={() => scrollToSection('event')}>Get Started</button><button onClick={() => scrollToSection('contact')} class="contactUsBtn">Contact Us</button></div>

    </div>
  )
}

export default LandingSection