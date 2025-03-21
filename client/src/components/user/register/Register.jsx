import { Link } from "react-router"

import styles from "../UserForm.module.css"
import ErrorMessage from "../../errors/ErrorMessage"
import { emailRegExp } from "../../../utils/emailRegExp"
import { useRegister } from "../../../api/usersApi"

export default function Register() {
    const { register, error, isPending } = useRegister();

    async function handleFormAction(formData) {
        const values = Object.fromEntries(formData)

        register(values);
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
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="email"
                        placeholder="e.g. john.doe@gmail.com"
                        name="email"
                        id="email"
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="rePassword"
                        id="rePassword"
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>

            <button disabled={isPending} className={styles["action-btn"]}>CREATE ACCOUNT</button>
            <p>Alrady have an account ? <Link to="/login">Log in</Link></p>
        </form>
    )
}