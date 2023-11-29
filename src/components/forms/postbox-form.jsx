import React, { useState } from 'react';
import ErrorMsg from './error-msg';
import { useFormik } from 'formik';
import { review_schema } from '@utils/validation-schema';
import { toast } from 'react-toastify';

const PostboxForm = () => {
  const [isCheckbox, setIsCheckbox] = useState(false);

  const handleToggle = () => {
    setIsCheckbox(!isCheckbox);
  };

  // Use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        comment: '',
      },
      validationSchema: review_schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Post Successfully")
        resetForm();
      },
    });

  return (
    <div className="postbox__comment-wrapper ">
      <div className="postbox__comment-form mb-70">
        <h3 className="postbox__comment-title">Leave A Reply</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Your Name*"
                  id="name"
                  required
                />
                {touched.name && <ErrorMsg error={errors.name} />}
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="postbox__comment-input">
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Your Email*"
                  id="email"
                  required
                />
                {touched.email && <ErrorMsg error={errors.email} />}
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <textarea
                  name="comment"
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="comment"
                  placeholder="Write Comment"
                ></textarea>
                {touched.comment && <ErrorMsg error={errors.comment} />}
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-check mb-60">
                <input
                  className="e-check-input"
                  type="checkbox"
                  id="e-agree"
                  checked={isCheckbox}
                  onChange={handleToggle}
                />
                <label
                  className="e-check-label"
                  htmlFor="e-agree"
                >
                  I agree that my submitted data is being collected and
                  stored. *
                </label>
              </div>
            </div>
            <div className="col-xl-12">
              <button
                disabled={!isCheckbox}
                type="submit"
                className={isCheckbox == false ? "fm-checkbox-disabled" : 'fm-submit-btn'}
              >
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostboxForm;
