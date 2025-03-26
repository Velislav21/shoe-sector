import { useState } from "react";

export default function useInputValidation(schema) {

    const [validationErrors, setValidationErrors] = useState({});

    async function validationFn(values) {
        try {
            const validValues = await schema.validate(values, { abortEarly: false });
            return validValues;

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

            return null;
        }

    };

    return {
        validationErrors,
        validationFn,
    };

};