import { useState } from "react"
import { Link, useNavigate } from "react-router"

import styles from "../UserForm.module.css"
import ErrorMessage from "../../errors/ErrorMessage"
import { useAuthContext } from "../../../hooks/useAuthContext"
import userService from "../../../services/userService"

const initialFormValues = { name: "", email: "", password: "", rePassword: "" }

export default function Register() {

    const [values, setValues] = useState(initialFormValues)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();

    function handleInputChange(e) {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        const user = await userService.register(values);

        localStorage.setItem('user', JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: user });

        navigate('/shoes')
        // !TODO: error handling 
    }


    return (
        <form onSubmit={handleFormSubmit} className={styles["user-form"]}>
            <h1>Register</h1>
            <p>Please, fill in this form to create an acoount.</p>
            <div className={styles["inputs-container"]}>
                <div className={styles["user-input-container"]}>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        value={values.name}
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
                <div className={styles["user-input-container"]}>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="rePassword"
                        id="rePassword"
                        onChange={handleInputChange}
                        value={values.rePassword}
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
            </div>

            <button className={styles["action-btn"]}>CREATE ACCOUNT</button>
            <p>Alrady have an account ? <Link to="/login">Log in</Link></p>
        </form>
    )
}