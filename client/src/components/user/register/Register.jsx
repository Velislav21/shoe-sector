import { Link } from "react-router"

import styles from "../UserForm.module.css"

import ErrorMessage from "../../errors/ErrorMessage"
import { registerSchema } from "../../../utils/yupSchemas"
import { useRegister } from "../../../api/usersApi"
import useForm from "../../../hooks/useForm"

const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: ""
}

export default function Register() {
    const { register, fetchError, isPending } = useRegister();

    const {
        values,
        validationErrors,
        handleInputChange,
        handleSubmit
    } = useForm(initialValues, register, registerSchema)


    return (
        <form onSubmit={handleSubmit} className={styles["user-form"]}>
            <h1>Register</h1>
            <p>Please, fill in this form to create an acoount.</p>
            <div className={styles["inputs-container"]}>
                <div className={styles["user-input-container"]}>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                    {validationErrors.name
                        && validationErrors.name
                            .map((errorMessage, i) => <ErrorMessage key={i}>{errorMessage}</ErrorMessage>)}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="email"
                        placeholder="e.g. john.doe@gmail.com"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {validationErrors.email
                        && validationErrors.email
                            .map((errorMessage, i) => <ErrorMessage key={i}>{errorMessage}</ErrorMessage>)}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    {validationErrors.password
                        && validationErrors.password
                            .map((errorMessage, i) => <ErrorMessage key={i}>{errorMessage}</ErrorMessage>)}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="rePassword"
                        id="rePassword"
                        value={values.rePassword}
                        onChange={handleInputChange}
                    />
                    {validationErrors.rePassword
                        && validationErrors.rePassword
                            .map((errorMessage, i) => <ErrorMessage key={i}>{errorMessage}</ErrorMessage>)}
                </div>
                {fetchError && <ErrorMessage>{fetchError}</ErrorMessage>}
            </div>

            <button disabled={isPending} className={styles["action-btn"]}>CREATE ACCOUNT</button>
            <p className={styles["redirect"]}>Alrady have an account ? <Link to="/login">Log in</Link></p>
        </form>
    )
}