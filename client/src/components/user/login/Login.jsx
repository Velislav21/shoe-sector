import styles from "./Login.module.css"
import ErrorMessage from "../../errors/ErrorMessage"


export default function Login() {
    return (
        <form action="#" className={styles["login-form"]}>
            <h1>Login</h1>
            <div className={styles["inputs-container"]}>
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
            </div>

            <button className={styles["login-btn"]}>LOGIN</button>
            <p>You don't have an account ? <a href="#">Register here.</a></p>
        </form>
    )
}