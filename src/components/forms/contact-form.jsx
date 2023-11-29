import React from "react";
import { useFormik } from "formik";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        msg: "",
      },

      validationSchema: contact_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        const userinfo = {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.msg,
        };
        axios
          .post(`${process.env.BASE_URL}contact/contact-info`, userinfo)
          .then((res) => {
            if (res.data) {
              toast.success("Contact Successfully");
            }
          })
          .catch((err) => console.log(err));
      },
    });

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Enter your name"
            id="name"
          />
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>
        <div className="col-xl-6 col-lg-6">
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="Enter your email"
            id="email"
          />
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
      </div>
      <div className="col-xl-12">
        <input
          type="text"
          placeholder="Subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.subject}
          id="text"
          name="subject"
        />
      </div>
      <div className="col-xl-12">
        <textarea
          name="msg"
          value={values.msg}
          onChange={handleChange}
          onBlur={handleBlur}
          id="msg"
          placeholder="Type your message..."
        ></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <div className="col-xl-12">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
