import React from 'react'
import "./Services.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

function Services() {
  return (
    <div class="landingCommon  d-flex flex-column justify-content-center align-items-center"id="service">
    <h2 className='ServiceHeading'>Our Services</h2>
    <div className=' d-flex gap-3 justify-content-center align-items-center'>
        <div className='firstCard commonCardProp'>
        <i class="bi bi-code icons"></i>
        <h4>Hackathons</h4>
        <p className='cardContext'>Organizing innovative hackathons to foster creativity and technical excellence.</p>
        </div>
         <div className='secondCard commonCardProp'>
         <i class="bi bi-laptop icons"></i>
 <h4>Seminars</h4>
 <p className='cardContext'>Educational seminars and workshops led by industry experts.</p>
        </div>
         <div className='ThirdCard commonCardProp'>
         <i class="bi bi-controller icons"></i>
<h4>Esports Events</h4>
<p className='cardContext'>Professional esports tournaments and gaming competitions.</p>
        </div>
    </div>
    
    
    </div>
  )
}

export default Services