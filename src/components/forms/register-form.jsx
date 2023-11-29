import React, { useState } from "react";
import { useFormik } from "formik";
// internal
import { register_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import UserThree from "@svg/user-3";
import Email from "@svg/email";
import Lock from "@svg/lock";
import EyeCut from "@svg/eye-cut";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false)
  const router = useRouter();
  const handleCheckbox = () => {
    setIsCheckbox(!isCheckbox)
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: register_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        const userinfo = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        axios
          .post(`${process.env.BASE_URL}user/register`, userinfo)
          .then((res) => {
            if (res.data.message === "User created successfully") {
              router.push('/login');
              toast.success(res.data.message);
            } else {
              toast.warning(res.data.message);
            }
          })
          .catch((err) => console.log(err));
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter your name"
              id="name"
              required
            />
            <span>
              <UserThree />
            </span>
          </div>
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>
        <div className="login__input-item">
          <div className="login__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter your email"
              id="email"
              required
            />
            <span>
              <Email />
            </span>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                id="password"
                required
              />
              <span>
                <Lock />
              </span>
            </div>
            <span
              className="login-input-eye"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
            </span>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showConPass ? "text" : "password"}
                placeholder="Confirm Password"
                id="passwordConfirmation"
                required
              />
              <span>
                <Lock />
              </span>
            </div>
            <span
              className="login-input-eye"
              onClick={() => setShowConPass(!showConPass)}
            >
              {showConPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
            </span>
          </div>
          {touched.passwordConfirmation && (
            <ErrorMsg error={errors.passwordConfirmation} />
          )}
        </div>
      </div>
      <div className="login__option mb-25 d-sm-flex justify-content-between">
        <div className="login__remember">
          <input type="checkbox"
            onBlur={handleCheckbox}
            onChange={handleCheckbox}
            checked={isCheckbox}
            id="tp-remember" />
          <label htmlFor="tp-remember">Remember me</label>
        </div>
      </div>
      <div className="login__btn text-center">
        <button disabled={!isCheckbox} type="submit" className={isCheckbox === false ? "disabled-btn" : "fill-btn"}>
          SignUp
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
