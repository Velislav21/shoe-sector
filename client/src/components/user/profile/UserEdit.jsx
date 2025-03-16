import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuthContext } from '../../../hooks/useAuthContext'
import styles from '../../user/UserForm.module.css'

import userService from '../../../services/userService';

export default function UserEdit() {
    const navigate = useNavigate();
    const { user, dispatch } = useAuthContext();
    const [userValues, setUserValues] = useState({ name: user.name, email: user.email });

    function handleInputChange(e) {
        setUserValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        const updatedUser = await userService.updateProfile(user._id, userValues);
        console.log(updatedUser)        

        localStorage.setItem('user', JSON.stringify(updatedUser));

        dispatch({ type: "LOGIN", payload: updatedUser });

        navigate(`/profile/${updatedUser._id}`)
        // !TODO: add error handling
    }

    return (
        <form onSubmit={handleFormSubmit} className={styles["user-form"]}>
            <h1>Edit Profile</h1>
            <div className={styles.imgContainer}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdmbyEaQPfV4HDykFBnSuPd5LqZo_3cTJcg&s"
                    alt="Profile"
                />
            </div>
            <div className={styles["inputs-container"]}>
                <div className={styles["user-input-container"]}>
                    <input
                        type="email"
                        placeholder="e.g. john.doe@gmail.com"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        value={userValues.email}
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        value={userValues.name}
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
            </div>

            <button className={styles["action-btn"]}>EDIT YOUR PROFILE</button>
        </form>
    )
}