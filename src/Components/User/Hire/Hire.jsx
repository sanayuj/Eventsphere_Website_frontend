import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./Hire.css";
import { toast } from "react-toastify";
import { hire } from "../../../Services/userApi";
function Hire() {
  const initialValues = {
    Username: "",
    email: "",
    PositionInterest: "",
    YearOfExp: "",
    resume: null,
  };

 const onSubmit = async (values, { resetForm }) => {
  try {
    console.log("value is ", values);
         const { data } = await hire(values)
        if (data.status) {
          toast.success(data.message);
           resetForm();
        } else {
          toast.error(data.message);
        }
  } catch (error) {
    toast.error("Submission failed. Please try again.");
    console.error("Submission error:", error);
  }
};

  const validationSchema = Yup.object({
    Username: Yup.string()
      .min(2, "* Name must be at least 2 characters")
      .required("* Name is required"),
    email: Yup.string()
      .email("* Invalid email address")
      .required("* Email is required"),
    PositionInterest: Yup.string().required("* Please select a position"),
    YearOfExp: Yup.number()
      .min(0, "* Experience must be 0 or more")
      .required("* Year of Experience is required"),
    resume: Yup.mixed().required("* Resume is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div
      className="landingSection6 d-flex flex-column justify-content-center align-items-center"
      id="hire"
    >
      <h3 className="EventsHeading">Hire Talent</h3>
      <div className="b-box">
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
                <li>Event Anchors/Hosts</li>
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
          <p className="right-div-content">
            Join our talent pool and be part of amazing events
          </p>

          <form onSubmit={formik.handleSubmit} className="Form-custom-final">
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                Full Name
              </label>
              <input
                id="Username"
                name="Username"
                type="text"
                className="form-control input-custom"
                aria-describedby="emailHelp"
                placeholder="Your name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.Username}
              />
              {formik.touched.Username && formik.errors.Username ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.Username}
                </p>
              ) : null}
            </div>
            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control input-custom"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Your email"
              />
              {formik.touched.email && formik.errors.email ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="positionSelect" className="form-label">
                Position Interest
              </label>
              <select
                className="form-control input-custom-final"
                id="positionSelect"
                name="PositionInterest"
                value={formik.values.PositionInterest}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select a position</option>
                <option value="Software Developers">Software Developers</option>
                <option value="UI/UX Designers">UI/UX Designers</option>
                <option value="System Architects">System Architects</option>
                <option value="DevOps Engineers">DevOps Engineers</option>
                <option value="Event Photographers">Event Photographers</option>
                <option value="Videographers">Videographers</option>
                <option value="Video Editors">Video Editors</option>
                <option value="Graphic Designers">Graphic Designers</option>
                <option value="Event Anchors/Hosts">Event Anchors/Hosts</option>
                <option value="Stage Managers">Stage Managers</option>
                <option value="Sound Engineers">Sound Engineers</option>
                <option value="Production Coordinators">
                  Production Coordinators
                </option>
                <option value="Tournament Organizers">
                  Tournament Organizers
                </option>
                <option value="Game Developers">Game Developers</option>
                <option value="Esports Commentators">
                  Esports Commentators
                </option>
                <option value="Stream Managers">Stream Managers</option>
              </select>
              {formik.touched.PositionInterest &&
              formik.errors.PositionInterest ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.PositionInterest}
                </p>
              ) : null}
            </div>

            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">
                Year of Experience
              </label>
              <input
                type="Number"
                id="YearOfExp"
                name="YearOfExp"
                className="form-control input-custom"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.YearOfExp}
                placeholder="Your Year Of Experience"
              />
              {formik.touched.YearOfExp && formik.errors.YearOfExp ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.YearOfExp}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="resume" className="form-label">
                Resume/CV
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="form-control input-custom-final"
                accept=".pdf,.doc,.docx"
                onChange={(event) =>
                  formik.setFieldValue("resume", event.currentTarget.files[0])
                }
                onBlur={formik.handleBlur}
              />
              {formik.touched.resume && formik.errors.resume ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.resume}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              class="btn btn-primary submit-Btn-Custom-final"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hire;
