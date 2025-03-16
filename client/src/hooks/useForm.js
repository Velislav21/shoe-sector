import { useState } from "react"


export default function useForm(initialFormValues, submitCallback) {

    const [values, setValues] = useState(initialFormValues);

    function handleInputChange(e) {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    return {
        values,
        handleInputChange
    }
}

