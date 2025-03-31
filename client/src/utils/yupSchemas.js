import * as yup from "yup";

import { emailRegExp } from "../utils/emailRegExp";
import { httpsRegExp } from "./httpsRegExp";

export const loginSchema = yup.object().shape({
    email:
        yup.string()
            .required("Please enter your email address.")
            .matches(emailRegExp, "Invalid email format."),
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

    price: yup.number("Please enter a number")
        .transform((value, originalValue) => {
            return originalValue === "" ? undefined : value;
        }).required("Please enter the price."),

    gender: yup.string().required("Please select gender"),
    imageUrl: yup.string().required("Please provide image URL.").matches(httpsRegExp, "Invalid URL"),
    description: yup.string().required("Please enter the description.")
})

export const userEditSchema = yup.object().shape({

    email:
        yup.string()
            .required("Please enter your email address.")
            .matches(emailRegExp, "Invalid email format.")
            .min(10, "The email must be at least 10 characters."),

    name:
        yup.string()
            .required("Please enter your name.")
})