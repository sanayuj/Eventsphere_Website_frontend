import React from 'react'
import "./Events.css"

function Events() {
  return (
    <div className='landingSection3 d-flex flex-column justify-content-center align-items-center' id="event">
      <h3 className='EventsHeading'>Events</h3>

      <div className="card card-custom">
        <p className='subHeading'>Upcoming Event</p>
        <div>
          <div className="row g-0 h-100">
            <div className="col-md-4">
              <img src="https://indiaeducationdiary.in/wp-content/uploads/2024/11/Pic_2.jpeg" className="custom-img" alt="..." />
            </div>
            <div class="col-md-8 card-background">
              <div class="card-body">
                <div className='d-flex align-items-center mb-4 date'>
                  <i class="bi bi-calendar4 me-2 "></i>
                  <p class="card-text"><small class="">March 15,2024</small></p>
                </div>
                <h5 class="card-title mb-4 card-head">Tech Innovation Summit 2024</h5>

                <p class="card-text card-content mb-4">Join us for our flagship technology conference featuring industry leaders, innovative workshops, and networking opportunities.</p>
                <div className='d-flex align-items-center mb-4'>
                  <div className='Small-Card-Name me-2'>Technology</div>
                  <div className='Small-Card-Name me-2'>Innovation</div>
                  <div className='Small-Card-Name'>Networking</div>
                </div>
                <button class="card-text register-Btn"><small class="">Register now <i class="bi bi-arrow-right arrow-custom"></i></small></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-custom">
        <p className='subHeading'>Past Event Highlight</p>
        <div>
          <div class="row g-0 h-100">
            <div class="col-md-4">
              <img src="https://www.livechennai.com/businesslistings/News_photo/Esports-030425.jpg" className="custom-img" alt="..." />
            </div>
            <div class="col-md-8 card-background">
              <div class="card-body">
                <div className='d-flex align-items-center mb-4 date'>
                  <i class="bi bi-calendar4 me-2 "></i>
                  <p class="card-text"><small class="">February 28,2024</small></p>
                </div>
                <h5 class="card-title mb-4 card-head">Global Gaming Championship</h5>

                <p class="card-text card-content mb-4">Our recent esports event brought together top gaming talent from around the world.</p>
                <div className='d-flex align-items-center mb-4'>
                  <div className='Small-Card-Name me-2'>Gaming</div>
                  <div className='Small-Card-Name me-2'>Esports</div>
                  <div className='Small-Card-Name'>Competition</div>
                </div>
                <button class="card-text register-Btn"><small class="">Register now <i class="bi bi-arrow-right arrow-custom"></i></small></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Events