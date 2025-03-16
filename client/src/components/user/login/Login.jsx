import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router"

import styles from "../UserForm.module.css"
import { AuthContext } from "../../../context/AuthContext"
import  userService  from "../../../services/userService";

import ErrorMessage from "../../errors/ErrorMessage"

const initialFormValues = { email: "", password: "" }

export default function Login() {
    const [values, setValues] = useState(initialFormValues)
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate();


    function handleInputChange(e) {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        const user = await userService.login(values);

        localStorage.setItem('user', JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: user });

        navigate('/shoes')
        // !TODO: add error handling
    }
    return (
        <form onSubmit={handleFormSubmit} className={styles["user-form"]}>
            <h1>Login</h1>
            <div className={styles["inputs-container"]}>
                <div className={styles["user-input-container"]}>
                    <input
                        type="email"
                        placeholder="e.g. john.doe@gmail.com"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        value={values.email}
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
                        onChange={handleInputChange}
                        value={values.password}
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
            </div>

            <button className={styles["action-btn"]}>LOGIN</button>
            <p>You don't have an account ? <Link to="/register">Register here.</Link></p>
        </form>
    )
}