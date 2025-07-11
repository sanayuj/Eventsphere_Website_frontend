import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { contact } from "../../../Services/userApi";
import { toast } from "react-toastify";
import "./Contact.css";
function Contact() {
   const navigate=useNavigate()
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = async (values) => {
    console.log("value is ", values);
     const { data } = await contact(values);
    if (data.status) {

      navigate("/")
      console.log(data);
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "* Name must be at least 2 characters")
      .required("* Name is required"),
    email: Yup.string()
      .email("* Invalid email address")
      .required("* Email is required"),

    message: Yup.string().required("* Message is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div
      className="landingCommon5 d-flex flex-column justify-content-center align-items-center"
      id="contact"
    >
      <h2 className="ContactHeading">Contact Us</h2>
      <form onSubmit={formik.handleSubmit} className="Form-custom">
        <div class="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control input-custom"
            aria-describedby="emailHelp"
            placeholder="Your name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p
              className="text-danger"
              style={{ fontSize: "12px", margin: "0px" }}
            >
              {formik.errors.name}
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
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
          <label for="exampleInputPassword1" className="form-label">
            Message
          </label>
          <textarea
            type="text"
             id="message"
            name="message"
            className="form-control textArea-custom"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Your message"
          />
          {formik.touched.message && formik.errors.message ? (
            <p
              className="text-danger"
              style={{ fontSize: "12px", margin: "0px" }}
            >
              {formik.errors.message}
            </p>
          ) : null}
        </div>

        <button type="submit" className=" submitBtn btn btn-primary submit-Btn-Custom">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
