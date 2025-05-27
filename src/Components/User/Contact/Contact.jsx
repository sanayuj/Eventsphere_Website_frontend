import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='landingCommon5 d-flex flex-column justify-content-center align-items-center' id="contact">
    <h2 className='ContactHeading'>Contact Us</h2>
<form className='Form-custom'>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control input-custom" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your name'/>
   
  </div>
  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="text" class="form-control input-custom" id="exampleInputPassword1" placeholder='Your email'/>
  </div>

  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Message</label>
    <textarea type="text" class="form-control textArea-custom" id="exampleInputPassword1" placeholder='Your message'/>
  </div>
  
  <button type="submit" class="btn btn-primary submit-Btn-Custom">Send Message</button>
</form>

    </div>
  )
}

export default Contact