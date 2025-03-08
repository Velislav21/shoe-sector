import { useState, useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { Link } from "react-router"
import styles from "./Login.module.css"
import ErrorMessage from "../../errors/ErrorMessage"

const initialFormValues = { email: "", password: "" }

export default function Login() {
    const [values, setValues] = useState(initialFormValues)
    const { dispatch } = useContext(AuthContext)

    function handleInputChange(e) {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json", // DONT FORGET TO ATTACH "Authentication" header with value of "user.accessToken" to authorized requests
            },
            body: JSON.stringify(values)
        })

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data))

        dispatch({ type: "LOGIN", payload: data })
    }
    return (
        <form onSubmit={handleFormSubmit} className={styles["login-form"]}>
            <h1>Login</h1>
            <div className={styles["inputs-container"]}>
                <div className={styles["input-container"]}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        value={values.email}
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
                <div className={styles["input-container"]}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={handleInputChange}
                        value={values.password}
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
            </div>

            <button className={styles["login-btn"]}>LOGIN</button>
            <p>You don't have an account ? <Link to="/register">Register here.</Link></p>
        </form>
    )
}