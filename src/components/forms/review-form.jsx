import { useFormik } from "formik";
import React from "react";
import ErrorMsgTwo from "./error-msg-two";
import { review_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";

const ReviewForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        comment: "",
      },

      validationSchema: review_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      id="contacts-form"
      className="conatct-post-form"
    >
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-icon p-relative mb-30 contacts-name">
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
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="contact-icon p-relative mb-30 contacts-name">
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
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-icon p-relative mb-30 contacts-email">
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
        </div>
        <div className="col-xl-12">
          <div className="contact-icon p-relative mb-30 contacts-message">
            <textarea
              name="comment"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              id="comment"
              placeholder="Comment"
            ></textarea>
            {touched.comment && <ErrorMsg error={errors.comment} />}
          </div>
        </div>
        <div className="col-xl-12">
          <button className="border-btn">Post Comment</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
