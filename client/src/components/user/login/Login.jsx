import { Link } from "react-router"

import styles from "../UserForm.module.css"
import { useLogin } from "../../../api/usersApi";
import useForm from "../../../hooks/useForm";
import { loginSchema } from "../../../utils/yupSchemas";
import ErrorMessage from "../../errors/ErrorMessage"

const initialValues = {
    email: "",
    password: ""
}

export default function Login() {
    const { login, fetchError, isPending } = useLogin();
    const {
        values,
        handleInputChange,
        handleSubmit,
        validationErrors,
        isSuccessful
    } = useForm(initialValues, login, loginSchema)

    return (
        <form onSubmit={handleSubmit} className={styles["user-form"]}>
            <h1>Login</h1>
            <div className={styles["inputs-container"]}>
                <div className={styles["user-input-container"]}>
                    <input
                        type="email"
                        placeholder="e.g. john.doe@gmail.com"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleInputChange}
                        className={validationErrors.email ? styles["error"] : ""}
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
                        className={validationErrors.password ? styles["error"] : ""}
                    />
                    {validationErrors.password
                        && validationErrors.password
                            .map((errorMessage, i) => <ErrorMessage key={i}>{errorMessage}</ErrorMessage>)}
                    {fetchError && <ErrorMessage>{fetchError}</ErrorMessage>}
                </div>
            </div>
            <button disabled={isPending} className={styles["action-btn"]}>LOGIN</button>
            <p className={styles["redirect"]}>You don't have an account ? <Link to="/register">Register here.</Link></p>
        </form >
    )
}