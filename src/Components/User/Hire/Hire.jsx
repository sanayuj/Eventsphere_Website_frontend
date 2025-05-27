import React from "react";
import "./Hire.css";
function Hire() {
  return (
    <div className="landingSection6 d-flex flex-column justify-content-center align-items-center">
      <h3 className="EventsHeading">Hire Talent</h3>
      <div className=" d-flex flex-row justify-content-center align-items-center">
        <div className="common-div">
          <h5 className="d-flex flex-row justify-content-center align-items-center m-3 left-div-heading">
            Available Positions
          </h5>
          <div className="left-sub-div d-flex flex-row justify-content-start left-div-heading">
            <div className="subDiv-content">
              <h5 className="sub-div-head">
                <i class="bi bi-code div-symbol"></i>Technical Roles
              </h5>
              <ul>
                <li>Software Developers</li>
              </ul>
              <ul>
                <li>UI/UX Designers</li>
              </ul>
              <ul>
                <li>System Architects</li>
              </ul>
              <ul>
                <li>DevOps Engineers</li>
              </ul>
            </div>
          </div>

          <div className="left-sub-div d-flex flex-row justify-content-start left-div-heading">
            <div className="subDiv-content">
              <h5 className="sub-div-head">
                <i class="bi bi-camera div-symbol"></i>Creative Media
              </h5>
              <ul>
                <li>Event Photographers</li>
              </ul>
              <ul>
                <li>Videographers</li>
              </ul>
              <ul>
                <li>Video Editors</li>
              </ul>
              <ul>
                <li>Graphic Designers</li>
              </ul>
            </div>
          </div>
          <div className="left-sub-div d-flex flex-row justify-content-start left-div-heading">
            <div className="subDiv-content">
              <h5 className="sub-div-head">
                <i class="bi bi-mic div-symbol"></i>Event Production
              </h5>
              <ul>
                <li>Event Anchors/Hostss</li>
              </ul>
              <ul>
                <li>Stage Managers</li>
              </ul>
              <ul>
                <li>Sound Engineers</li>
              </ul>
              <ul>
                <li>Production Coordinators</li>
              </ul>
            </div>
          </div>
          <div className="left-sub-div d-flex flex-row justify-content-start left-div-heading">
            <div className="subDiv-content">
              <h5 className="sub-div-head">
                <i class="bi bi-film div-symbol"></i>Gaming & Esports
              </h5>
              <ul>
                <li>Toumament Organizers</li>
              </ul>
              <ul>
                <li>Game Developers</li>
              </ul>
              <ul>
                <li>Esports Commentators</li>
              </ul>
              <ul>
                <li>Stream Managers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="common-div  d-flex flex-column justify-content-start align-items-center">
<i class="bi bi-file-earmark-text resume"></i>
<h4 className="right-div-content">Submit Your Resume</h4>
<p className="right-div-content">Join our talent pool and be part of amazing events</p>

<form className='Form-custom-final'>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control input-custom-final" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your name'/>
   
  </div>
  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="text" class="form-control input-custom-final" id="exampleInputPassword1" placeholder='Your email'/>
  </div>

  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Position Interest</label>
    <input type="text" class="form-control input-custom-final" id="exampleInputPassword1" placeholder='Select a position'/>
  </div>

  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Year of Experience</label>
    <input type="text" class="form-control input-custom-final" id="exampleInputPassword1" placeholder='Enter year of experience'/>
  </div>

  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Resume/CV</label>
    <input type="text" class="form-control input-custom-final" id="exampleInputPassword1" placeholder='Upload Resume (PDF,DOC,DOCX)'/>
  </div>

  
  
  <button type="submit" class="btn btn-primary submit-Btn-Custom-final">Submit Application</button>
</form>

        </div>
      </div>
    </div>
  );
}

export default Hire;
