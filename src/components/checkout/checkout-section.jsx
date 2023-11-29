import React from "react";
import OrderSidebar from "./order-sidebar";
import { useState } from "react";
import NiceSelect from "@ui/niceSelect";
import { optionArrey } from "@data/checkout-form-niceSelect-data";
import { useFormik } from "formik";
import ErrorMsg from "@components/forms/error-msg";
import { checkout_schema } from "@utils/validation-schema";
import { toast } from "react-toastify";

const CheckoutSection = () => {
  const [categorys, setCategorys] = useState("")
  const [isActiveC, setActiveC] = useState("false");
  const handleToggleC = () => {
    setActiveC(!isActiveC);
  };
  const [isActiveB, setActiveB] = useState("false");

  const handleToggleB = () => {
    setActiveB(!isActiveB);
  };
  const selectHandler = (e) => { };
  // Use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        lastName: "",
        companyName: "",
        streetAddress: "",
        townCity: "",
        stateCounty: "",
        postcodeZip: "",
        email: "",
        phone: "",
        password: ""
      },
      validationSchema: checkout_schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Checkout successfully")
        resetForm();
      },
    });

  return (
    <section className="checkout-area pb-70">
      <div className="container container-small">
        <form onSubmit={handleSubmit}>
          <div className="row wow fadeInUp" data-wow-delay=".3s">
            <div className="col-lg-6">
              <div className="checkbox-form">
                <h3 className="mb-30">Billing Details</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="country-select">
                      <label>
                        Country <span className="required">*</span>
                      </label>
                      <NiceSelect
                        options={optionArrey}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name="Select Subject"
                        setCategorys={setCategorys}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="First Name*"
                        id="name"
                        required
                      />
                      {touched.name && <ErrorMsg error={errors.name} />}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Last Name*"
                        id="lastName"
                        required
                      />
                      {touched.lastName && <ErrorMsg error={errors.lastName} />}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>Company Name</label>
                      <input
                        name="companyName"
                        value={values.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Company Name"
                        id="companyName"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>
                        Address <span className="required">*</span>
                      </label>
                      <input
                        name="streetAddress"
                        value={values.streetAddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Street address"
                        id="streetAddress"
                        required
                      />
                      {touched.streetAddress && <ErrorMsg error={errors.streetAddress} />}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <input
                        type="text"
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>
                        Town / City <span className="required">*</span>
                      </label>
                      <input
                        name="townCity"
                        value={values.townCity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Town / City"
                        id="townCity"
                        required
                      />
                      {touched.townCity && <ErrorMsg error={errors.townCity} />}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        State / County <span className="required">*</span>
                      </label>
                      <input
                        name="stateCounty"
                        value={values.stateCounty}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="State / County"
                        id="stateCounty"
                        required
                      />
                      {touched.stateCounty && <ErrorMsg error={errors.stateCounty} />}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Postcode / Zip <span className="required">*</span>
                      </label>
                      <input
                        name="postcodeZip"
                        value={values.postcodeZip}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Postcode / Zip"
                        id="postcodeZip"
                        required
                      />
                      {touched.postcodeZip && <ErrorMsg error={errors.postcodeZip} />}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="Email Address"
                        id="email"
                        required
                      />
                      {touched.email && <ErrorMsg error={errors.email} />}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Phone"
                        id="phone"
                        required
                      />
                      {touched.phone && <ErrorMsg error={errors.phone} />}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list create-acc">
                      <input onClick={handleToggleB} id="cbox" type="checkbox" />
                      <label htmlFor="cbox">Create an account?</label>
                    </div>
                    <div
                      id="cbox_info"
                      className={`checkout-form-list create-account ${isActiveB ? "danger" : "d-block"
                        }`}
                    >
                      <p>
                        Create an account by entering the information below. If you are a
                        returning customer please login at the top of the page.
                      </p>
                      <label>
                        Account password <span className="required">*</span>
                      </label>
                      <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="password"
                        placeholder="password"
                        id="password"
                        required
                      />
                      {touched.password && <ErrorMsg error={errors.password} />}
                    </div>
                  </div>
                </div>
                <div className="different-address">
                  <div className="ship-different-title">
                    <input onClick={handleToggleC} id="ship-box" className="mr-10" type="checkbox" />
                    <label htmlFor="ship-box">
                      Ship to a different address?
                    </label>
                  </div>
                  <div
                    id="ship-box-info"
                    className={`${isActiveC ? "danger" : "d-block"}`}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <NiceSelect
                            options={optionArrey}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name="Select Subject"
                            setCategorys={setCategorys}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Company Name</label>
                          <input type="text" placeholder="Company Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input
                            type="text"
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Town / City" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="State / County" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Phone" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-notes">
                    <div className="checkout-form-list">
                      <label>Order Notes</label>
                      <textarea
                        id="checkout-mess"
                        cols="30"
                        rows="10"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OrderSidebar />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutSection;
