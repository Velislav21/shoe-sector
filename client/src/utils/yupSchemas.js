import * as yup from "yup";

import { emailRegExp } from "../utils/emailRegExp";

export const loginSchema = yup.object().shape({
    email:
        yup.string()
            .required("Please enter your email address.")
            .matches(emailRegExp, "Invalid email format.")
            .min(10, "The email must be at least 10 characters."),

    password: yup.string().required("Please enter your password.")
})

export const registerSchema = yup.object().shape({
    name:
        yup.string()
            .required("Please enter your name."),
    email:
        yup.string()
            .required("Please enter your email address.")
            .matches(emailRegExp, "Invalid email format.")
            .min(10, "The email must be at least 10 characters."),
    password:
        yup.string().required("Please enter your password."),
    rePassword: 
        yup.string().required("Repeat password is required").oneOf([yup.ref("password"), null], "Passwords must match")

})