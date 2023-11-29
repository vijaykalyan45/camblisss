import React from "react";

const CouponForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row-first mb-25">
        <label>
          Username or email
          <span className="required">*</span>
        </label>
        <input type="text" placeholder="Username or email" required />
      </div>
      <div className="form-row-last mb-10">
        <label>
          Password <span className="required">*</span>
        </label>
        <input type="text" placeholder="Password" required />
      </div>
      <div className="form-row">
        <div className="form-row-check-wrap">
          <button className="fill-btn mb-30" type="submit">
            Login
          </button>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>
      </div>
    </form>
  );
};

export default CouponForm;
