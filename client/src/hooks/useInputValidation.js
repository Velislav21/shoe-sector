import { useState } from "react";
import * as yup from "yup";

import { emailRegExp } from "../utils/emailRegExp";

const schema = yup.object().shape({
    email:
        yup.string()
            .required("Please enter your email address.")
            .matches(emailRegExp, "Invalid email format.")
            .min(10, "The email must be longer"),
    password:
        yup.string().required("Please enter your password.")
})


export default function useInputValidation() {

    const [validationErrors, setValidationErrors] = useState({});

    async function validationFn(values) {
        try {
            const result = await schema.validate(values, { abortEarly: false });
            return result;

        } catch (err) {
            const errors = {};

            err.inner
                .forEach((currentError) => {
                    if (!errors[currentError.path]) {
                        errors[currentError.path] = [];
                    }
                    errors[currentError.path].push(currentError.message);
                })
            setValidationErrors(errors);
            setTimeout(() => setValidationErrors({}), 10000)
        }

    };

    return {
        validationErrors,
        validationFn,
    };

};