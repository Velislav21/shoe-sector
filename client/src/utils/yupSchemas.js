import * as yup from "yup";

import { emailRegExp } from "../utils/emailRegExp";
import { httpRegExp } from "./httpsRegExp";

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

export const shoeSchema = yup.object().shape({
    modelName: yup.string().required("Please enter a model name."),
    brand: yup.string().required("Please enter the brand name."),
    price: yup.number().positive("The price can't be negative number").required("Please enter the price."),
    gender: yup.string().required("Please select gender"),
    imageUrl: yup.string().required("Please provide image URL.").matches(httpRegExp, "Invalid URL format"),
    description: yup.string().required("Please enter the description.")
})