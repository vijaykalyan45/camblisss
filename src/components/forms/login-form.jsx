// import React, { useState } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// // internal
// import { login_schema } from "@utils/validation-schema";
// import ErrorMsg from "./error-msg";
// import UserThree from "@svg/user-3";
// import Lock from "@svg/lock";
// import EyeCut from "@svg/eye-cut";
// import axios from "axios";
// import useGlobalContext from "@hooks/use-context";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

// const LoginForm = () => {
//   const { loading, setLoading } = useGlobalContext();
//   const [showPass, setShowPass] = useState(false);
//   const [isCheckbox, setIsCheckbox] = useState(false)
//   const router = useRouter()
//   const handleChackbox = () => {
//     setIsCheckbox(!isCheckbox)
//   }

//   // use formik
//   const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
//     useFormik({
//       initialValues: {
//         email: "",
//         password: "",
//       },
//       validationSchema: login_schema,
//       onSubmit: (values, { resetForm }) => {
//         resetForm();
//         const userInfo = {
//           email: values.email,
//           password: values.password,
//         };

//         axios
//           .post(`${process.env.BASE_URL}user/login`, userInfo)
//           .then((res) => {
//             setLoading(false);
//             if (res.data.data) {
//               toast.success(res.data.message);
//               localStorage.setItem("accessToken", res.data.data);
//               const redirectUrl = localStorage.getItem('redirectUrl');
//               if (redirectUrl) {
//                 router.push(redirectUrl);
//                 localStorage.removeItem('redirectUrl');
//               } else {
//                 router.push('/');
//               }
//               setLoading(true);
//             } else if (res.data.message === "password not Match")
//               toast.warning(res.data.message);
//           });
//       },
//     });

//   if (loading) {
//     return <div>Loading....</div>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="login__input-wrapper">
//         <div className="login__input-item">
//           <div className="login__input">
//             <input
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               type="email"
//               placeholder="Enter your email"
//               id="email"
//             />
//             <span>
//               <UserThree />
//             </span>
//           </div>
//           {touched.email && <ErrorMsg error={errors.email} />}
//         </div>

//         <div className="login__input-item">
//           <div className="login__input-item-inner p-relative">
//             <div className="login__input">
//               <input
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 type={showPass ? "text" : "password"}
//                 placeholder="Password"
//                 id="password"
//               />
//               <span>
//                 <Lock />
//               </span>
//             </div>
//             <span
//               className="login-input-eye"
//               onClick={() => setShowPass(!showPass)}
//             >
//               {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
//             </span>
//           </div>
//           {touched.password && <ErrorMsg error={errors.password} />}
//         </div>
//       </div>

//       <div className="login__option mb-25 d-sm-flex justify-content-between">
//         <div className="login__remember">
//           <input type="checkbox"
//             checked={isCheckbox}
//             onChange={handleChackbox}
//             id="tp-remember" />
//           <label htmlFor="tp-remember">Remember me</label>
//         </div>
//         <div className="login__forgot">
//           <Link href="/forgot-password">forgot password?</Link>
//         </div>
//       </div>
//       <div className="login__btn text-center">
//         <button disabled={!isCheckbox} type="submit" className={isCheckbox == false ? "disabled-btn" : "fill-btn"}>
//           SignIn
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;










// import React, { useState } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import { login_schema } from "@utils/validation-schema";
// import ErrorMsg from "./error-msg";
// import UserThree from "@svg/user-3";
// import Lock from "@svg/lock";
// import EyeCut from "@svg/eye-cut";
// import axios from "axios";
// import useGlobalContext from "@hooks/use-context";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

// const LoginForm = () => {
//   const { loading, setLoading } = useGlobalContext();
//   const [showPass, setShowPass] = useState(false);
//   const [isCheckbox, setIsCheckbox] = useState(false);
//   const router = useRouter();
//   const handleChackbox = () => {
//     setIsCheckbox(!isCheckbox);
//   };

//   // use formik
//   const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
//     useFormik({
//       initialValues: {
//         email: "",
//         password: "",
//       },
//       validationSchema: login_schema,
//       onSubmit: (values, { resetForm }) => {
//         resetForm();
//         const userInfo = {
//           email: values.email,
//           password: values.password,
//         };

//         axios
//           .post(`${process.env.BASE_URL}user/login`, userInfo)
//           .then((res) => {
//             setLoading(false);
//             if (res.data.data) {
//               toast.success(res.data.message);
//               localStorage.setItem("accessToken", res.data.data);
//               const redirectUrl = localStorage.getItem("redirectUrl");
//               if (redirectUrl) {
//                 router.push(redirectUrl);
//                 localStorage.removeItem("redirectUrl");
//               } else {
//                 router.push("/");
//               }
//               setLoading(true);
//             } else if (res.data.message === "password not Match")
//               toast.warning(res.data.message);
//           });
//       },
//     });

//   if (loading) {
//     return <div>Loading....</div>;
//   }

//   const formStyles = {
//     maxWidth: "260px",
//     width: "100%",
//     margin: "0 10px",
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//     gridColumn: "1 / 2",
//     gridRow: "1 / 2",
//     transition: "opacity 0.02s 0.4s",
//   };

//   const boxStyles = {
//     position: "relative",
//     width: "100%",
//     maxWidth: "1100px",
//     height: "640px",
//     backgroundColor: "#fff",
//     borderRadius: "3.3rem",
//     boxShadow: "0 60px 40px -30px rgba(0, 0, 0, 0.27)",
//   };

//   return (
//     <main
//       style={{
//         width: "100%",
//         minHeight: "100vh",
//         overflow: "hidden",
//         backgroundColor: "black",
//         padding: "2rem",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div className="box" style={boxStyles}>
//         <div className="inner-box">
//           <div
//             className="forms-wrap"
//             style={{
//               position: "absolute",
//               height: "100%",
//               width: "45%",
//               top: 0,
//               left: "-10px",
//               display: "grid",
//               gridTemplateColumns: "1fr",
//               gridTemplateRows: "1fr",
//               transition: "0.8s ease-in-out",
//             }}
//           >
//             <form onSubmit={handleSubmit} style={formStyles}>
//               <div className="logo"></div>

//               <div className="heading">
//                 <h2>Welcome Back</h2>
//                 <h6>Not registered yet?</h6>
//                 <Link href="#" passHref>
//   <div className="toggle">Sign up</div>
// </Link>
//               </div>

//               <div className="actual-form">
//                 <div className="input-wrap">
//                   <input
//                     type="email"
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`input-field ${touched.email && errors.email ? "active" : ""}`}
//                     placeholder="Enter your email"
//                     id="email"
//                     autoComplete="off"
//                   />
//                   <span>
//                     <UserThree />
//                   </span>
//                 </div>
//                 {touched.email && <ErrorMsg error={errors.email} />}

//                 <div className="input-wrap">
//                   <div className="input-item-inner p-relative">
//                     <input
//                       type={showPass ? "text" : "password"}
//                       name="password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`input-field ${touched.password && errors.password ? "active" : ""}`}
//                       placeholder="Password"
//                       id="password"
//                       autoComplete="off"
//                     />
//                     <span>
//                       <Lock />
//                     </span>
//                   </div>
//                   <span className="login-input-eye" onClick={() => setShowPass(!showPass)}>
//                     {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
//                   </span>
//                 </div>
//                 {touched.password && <ErrorMsg error={errors.password} />}

//                 <div className="login-option mb-25 d-sm-flex justify-content-between">
//                   <div className="login-remember">
//                     <input
//                       type="checkbox"
//                       checked={isCheckbox}
//                       onChange={handleChackbox}
//                       id="tp-remember"
//                     />
//                     <label htmlFor="tp-remember">Remember me</label>
//                   </div>
//                   <div className="login-forgot">
                 
//                     <Link href="/forgot-password" passHref>
//                     <div className="toggle">forgot password?</div>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="login-btn text-center">
//                   <button
//                     disabled={!isCheckbox}
//                     type="submit"
//                     className={isCheckbox == false ? "disabled-btn" : "fill-btn"}
//                   >
//                     Sign In
//                   </button>
//                 </div>
//               </div>
//             </form>

//             <form action="index.html" autoComplete="off" className="sign-up-form" style={formStyles}>
//               {/* ... your sign-up form code ... */}
//             </form>
//           </div>

//           <div
//             className="carousel"
//             style={{
//               position: "absolute",
//               height: "100%",
//               width: "65%",
//               left: "35%",
//               top: 0,
//               backgroundColor: "#ffe0d2",
//               borderRadius: "2rem",
//               display: "grid",
//               overflow: "hidden",
//               transition: "0.8s ease-in-out",
//             }}
//           >
//             <div className="images-wrapper">
//               <video width="100%" autoPlay muted volume="0" loop>
//                 <source src="/assets/videocomingsoon.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default LoginForm;







// LoginForm.js
// LoginForm.js
// import React, { useState } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import UserThree from "@svg/user-3";
// import Lock from "@svg/lock";
// import EyeCut from "@svg/eye-cut";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

// const LoginForm = () => {
//   const router = useRouter();
//   const [showPass, setShowPass] = useState(false);
//   const [isCheckbox, setIsCheckbox] = useState(false);

//   const handleChackbox = () => {
//     setIsCheckbox(!isCheckbox);
//   };

//   // use formik
//   const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
//     useFormik({
//       initialValues: {
//         username: "",
//         password: "",
//       },
//       onSubmit: (values, { resetForm }) => {
//         resetForm();
//         const userInfo = {
//           username: values.username,
//           password: values.password,
//         };

//         axios
//           .post(`${process.env.BASE_URL}user/login`, userInfo)
//           .then((res) => {
//             if (res.data.data) {
//               toast.success(res.data.message);
//               // Your login success logic here
//             } else if (res.data.message === "password not Match")
//               toast.warning(res.data.message);
//           });
//       },
//     });

//   return (
//     <main className="login-main">
//       <div className="login-box">
//         <div className="login-form">
//           <form onSubmit={handleSubmit}>
//             <div className="input-wrap">
//               <input
//                 type="text"
//                 name="username"
//                 value={values.username}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`input-field ${touched.username && errors.username ? "active" : ""}`}
//                 placeholder="Enter your username"
//                 autoComplete="off"
//               />
//               <span>
//                 <UserThree />
//               </span>
//             </div>
//             {touched.username && <div>{errors.username}</div>}

//             <div className="input-wrap">
//               <div className="input-item-inner p-relative">
//                 <input
//                   type={showPass ? "text" : "password"}
//                   name="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`input-field ${touched.password && errors.password ? "active" : ""}`}
//                   placeholder="Enter your password"
//                   autoComplete="off"
//                 />
//                 <span>
//                   <Lock />
//                 </span>
//               </div>
//               <span className="login-input-eye" onClick={() => setShowPass(!showPass)}>
//                 {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
//               </span>
//             </div>
//             {touched.password && <div>{errors.password}</div>}

//             <div className="login-option mb-25 d-sm-flex justify-content-between">
//               <div className="login-remember">
//                 <input
//                   type="checkbox"
//                   checked={isCheckbox}
//                   onChange={handleChackbox}
//                   id="tp-remember"
//                 />
//                 <label htmlFor="tp-remember">Remember me</label>
//               </div>
//               <div className="login-forgot">
//                 <Link href="/forgot-password" passHref>
//                   <div className="toggle">Forgot password?</div>
//                 </Link>
//               </div>
//             </div>
//             <div className="login-btn text-center">
//               <button
//                 disabled={!isCheckbox}
//                 type="submit"
//                 className={isCheckbox == false ? "disabled-btn" : "fill-btn"}
//               >
//                 Sign In
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="video-container">
//           <video width="100%" autoPlay muted loop>
//             <source src="/assets/video/comingsoon.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default LoginForm;



import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import UserThree from "@svg/user-3";
import Lock from "@svg/lock";
import EyeCut from "@svg/eye-cut";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useGlobalContext from "@hooks/use-context";
import { login_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";

const LoginForm = () => {
  const { loading, setLoading } = useGlobalContext();
  const [showPass, setShowPass] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const router = useRouter();

  const handleChackbox = () => {
    setIsCheckbox(!isCheckbox);
  };

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        const userInfo = {
          email: values.email,
          password: values.password,
        };

        axios
          .post(`${process.env.BASE_URL}user/login`, userInfo)
          .then((res) => {
            setLoading(false);
            if (res.data.data) {
              toast.success(res.data.message);
              localStorage.setItem("accessToken", res.data.data);
              const redirectUrl = localStorage.getItem("redirectUrl");
              if (redirectUrl) {
                router.push(redirectUrl);
                localStorage.removeItem("redirectUrl");
              } else {
                router.push("/");
              }
              setLoading(true);
            } else if (res.data.message === "password not Match")
              toast.warning(res.data.message);
          });
      },
    });

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <main className="login-main">
      <div className="login-box">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="login__input-wrapper">
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
                  />
                  <span>
                    <UserThree />
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
            </div>

            <div className="login__option mb-25 d-sm-flex justify-content-between">
              <div className="login__remember">
                <input
                  type="checkbox"
                  checked={isCheckbox}
                  onChange={handleChackbox}
                  id="tp-remember"
                />
                <label htmlFor="tp-remember">Remember me</label>
              </div>
              <div className="login__forgot">
                <Link href="/forgot-password">forgot password?</Link>
              </div>
            </div>
            <div className="login__btn text-center">
              <button
                disabled={!isCheckbox}
                type="submit"
                className={isCheckbox == false ? "disabled-btn" : "fill-btn"}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="video-container">
          <video width="100%" autoPlay muted loop>
            <source src="/assets/video/comingsoon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
