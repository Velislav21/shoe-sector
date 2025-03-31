import { Link } from "react-router"

import styles from "../UserForm.module.css"
import ErrorMessage from "../../errors/ErrorMessage"
import { useRegister } from "../../../api/usersApi"
import useInputValidation from "../../../hooks/useInputValidation"
import { registerSchema } from "../../../utils/yupSchemas"

export default function Register() {
    const { register, fetchError, isPending } = useRegister();

    const { validationErrors, validationFn } = useInputValidation(registerSchema);

    async function handleFormAction(formData) {

        const values = Object.fromEntries(formData)
        const validValues = await validationFn(values);

        if (!validValues) {
            return;
        }
        register(validValues);
    }

    return (
        <form action={handleFormAction} className={styles["user-form"]}>
            <h1>Register</h1>
            <p>Please, fill in this form to create an acoount.</p>
            <div className={styles["inputs-container"]}>
                <div className={styles["user-input-container"]}>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        name="name"
                        id="name"
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