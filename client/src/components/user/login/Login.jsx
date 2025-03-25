import { Link } from "react-router"

import styles from "../UserForm.module.css"
import { useLogin } from "../../../api/usersApi";
import ErrorMessage from "../../errors/ErrorMessage"
import useInputValidation from "../../../hooks/useInputValidation";

export default function Login() {

    const { login, error: fetchError, isPending } = useLogin();
    const { validationErrors, validationFn } = useInputValidation();

    async function handleFormAction(formData) {

        const values = Object.fromEntries(formData);
        const validData = await validationFn(values);

        if (!validData) {
            return;
        }
        login(validData);
    }
    console.log(validationErrors)
    return (
        <form action={handleFormAction} className={styles["user-form"]}>
            <h1>Login</h1>
            <div className={styles["inputs-container"]}>
                <div className={styles["user-input-container"]}>
                    <input
                        type="email"
                        placeholder="e.g. john.doe@gmail.com"
                        name="email"
                        id="email"
                        className={validationErrors["email"] ? styles["error"] : ""}
                    />
                    {validationErrors["email"]
                        && validationErrors["email"]
                            .map((errorMessage, i) => <ErrorMessage key={i}>{errorMessage}</ErrorMessage>)}

                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className={validationErrors["password"] ? styles["error"] : ""}
                    />
                </div>
                {validationErrors["password"] && validationErrors["password"].map((errorMessage, i) => <ErrorMessage key={i}>{errorMessage}</ErrorMessage>)}
                {fetchError && <ErrorMessage>{fetchError}</ErrorMessage>}
            </div>
            <button disabled={isPending} className={styles["action-btn"]}>LOGIN</button>
            <p className={styles["redirect"]}>You don't have an account ? <Link to="/register">Register here.</Link></p>
        </form >
    )
}