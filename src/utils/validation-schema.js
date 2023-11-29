import * as Yup from "yup";

// Review_schema
export const review_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().min(20).label("Comment"),
});

// comment form schema
export const comment_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  message: Yup.string().required().min(20).label("Message"),
});
// contact_schema
export const contact_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message"),
});
// register_schema
export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
// login_schema
export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
// login_schema
export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});

//checkout_schema
export const checkout_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  lastName: Yup.string().required().label("Last name"),
  streetAddress:Yup.string().required().label("Street address"),
  townCity:Yup.string().required().label("Town / City"),
  stateCounty:Yup.string().required().label("State / Country"),
  postcodeZip:Yup.string().required().label("Password / Zip"),
  phone: Yup.string().required().min(11).label("Phone Number"),
  password:Yup.string().required().min(6).label("Password"),
  email: Yup.string().required().email().label("Email"),
});


export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.string().required().min(11).label("Number"),
  msg: Yup.string().required().min(20).label("Message"),
  terms: Yup.bool().oneOf([
    true,
    "You need to accept the terms and conditions",
  ]),
});
