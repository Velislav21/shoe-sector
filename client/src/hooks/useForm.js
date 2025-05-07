import { useState } from "react"
import useInputValidation from "./useInputValidation"

export default function useForm(initialValues, submitHandler, validationSchema) {
    const [values, setValues] = useState(initialValues);
    const { validationErrors, validationFn } = useInputValidation(validationSchema);
    const [isSuccessful, setIsSuccessful] = useState(false);


    function handleInputChange(e) {
        const { name, value } = e.target
        setValues(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSuccessful(false);
        try {
            const valid = await validationFn(values)
            if (valid) {
                const result = await submitHandler(values)
                setIsSuccessful(result)
            }
        } catch (error) {
            setIsSuccessful(false);
        }
    }

    return {
        values,
        handleInputChange,
        handleSubmit,
        validationErrors,
        isSuccessful,
    }
}