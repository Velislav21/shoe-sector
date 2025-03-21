import { useState } from "react"
import { Link, useNavigate } from "react-router"

import styles from "../UserForm.module.css"
import { useLogin } from "../../../api/usersApi";
import ErrorMessage from "../../errors/ErrorMessage"

export default function Login() {

    const { login, error, isPending } = useLogin();

    const navigate = useNavigate();
    const [valid, setIsValid] = useState(true);

    const emailRegExp = new RegExp("^(?![._])[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$", "i");

    function handleInputValidation(e) {
        
        const isInputValid = emailRegExp.test(e.target.value);
        setIsValid(isInputValid);
    }

    function handleFormAction(formData) {
        const values = Object.fromEntries(formData);

        login(values);
        console.log(error)
        // navigate('/shoes')
        // !TODO: add error handling
    }
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
                        className={!valid ? styles["error"] : ""}
                        onBlur={handleInputValidation}
                        defaultValue=""
                        required
                    />
                    {!valid && <ErrorMessage>Please enter valid email address.</ErrorMessage>
                    }
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        defaultValue=""
                        required
                    />
                </div>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
            <button disabled={isPending} className={styles["action-btn"]}>LOGIN</button>
            <p>You don't have an account ? <Link to="/register">Register here.</Link></p>
        </form >
    )
}