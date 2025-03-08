import ErrorMessage from "../../errors/ErrorMessage"
import styles from "./Register.module.css"

export default function Register() {
    return (
        <form action="#" className={styles["register-form"]}>
            <h1>Register</h1>
            <p>Please, fill in this form to create an acoount.</p>
            <div className={styles["inputs-container"]}>
                <div className={styles["input-container"]}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        id="name"
                        required
                    />
                    <ErrorMessage>Error.</ErrorMessage>
                </div>
                <div className={styles["input-container"]}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                        required
                    />
                    <ErrorMessage>Error.</ErrorMessage>
                </div>
                <div className={styles["input-container"]}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        required
                    />
                    <ErrorMessage>Error.</ErrorMessage>
                </div>
                <div className={styles["input-container"]}>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="rePassword"
                        id="rePassword"
                        required
                    />
                    <ErrorMessage>Error.</ErrorMessage>
                </div>
            </div>

            <button className={styles["register-btn"]}>CREATE ACCOUNT</button>
            <p>Alrady have an account ? <a href="#">Sign In</a></p>
        </form>
    )
}