import { comment_schema } from "@utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsgTwo from "./error-msg-two";

const MovieDetailsForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: ""
      },
      validationSchema: comment_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6">
        <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Name"
              id="name"
              required
            />
            {touched.name && <ErrorMsgTwo error={errors.name} />}
        </div>
        <div className="col-xl-6">
        <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email"
              id="email"
              required
            />
               {touched.email && <ErrorMsgTwo error={errors.email} />}
        </div>
        <div className="col-xl-12">
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="message"
            cols="30"
            rows="10"
            placeholder="Type your comment..."
          ></textarea>
          {touched.message && <ErrorMsgTwo error={errors.message} />}
          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default MovieDetailsForm;
