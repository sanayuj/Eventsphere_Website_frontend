import React from 'react'
import "./About.css"
function About() {
  return (
    <div className='landingSection4 d-flex flex-column justify-content-center align-items-center'>
     <h3 className='AboutHeading'>About Us</h3>
     <div className=' d-flex gap-3 justify-content-center align-items-center'>
        <div className='firstCard commonCardProp2'>
        <i class="bi bi-calendar-event icons"></i>
        <h4>Event Planning</h4>
        <p className='cardContext'>Expert event planning and coordination services tailored to your needs.</p>
        </div>
         <div className='secondCard commonCardProp2'>
         <i class="bi bi-people-fill icons"></i>
 <h4>Professional Team</h4>
 <p className='cardContext'>Dedicated team of professionals committed to making your event successful.</p>
        </div>
         <div className='ThirdCard commonCardProp2'>
         <i class="bi bi-mic icons"></i>
<h4>Award Winning</h4>
<p className='cardContext'>Recognized for excellence in event management and customer satisfaction.</p>
        </div>
    </div>
    </div>
  )
}

export default About