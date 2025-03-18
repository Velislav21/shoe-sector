import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuthContext } from '../../../hooks/useAuthContext'
import styles from '../../user/UserForm.module.css'
import { useEditProfile } from '../../../api/usersApi';

export default function UserEdit() {
    const { editProfile } = useEditProfile();
    const navigate = useNavigate();
    const { user, dispatch } = useAuthContext();

    async function handleFormAction(formData) {
        const updatedValues = Object.fromEntries(formData);

        const updatedUser = await editProfile(user._id, updatedValues);
        localStorage.setItem('user', JSON.stringify(updatedUser));

        dispatch({ type: "LOGIN", payload: updatedUser });

        navigate(`/profile/${updatedUser._id}`)
        // !TODO: add error handling
    }

    return (
        <form action={handleFormAction} className={styles["user-form"]}>
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
                        defaultValue={user.email}
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
                        defaultValue={user.name}
                        required
                    />
                    {/* <ErrorMessage>Error.</ErrorMessage> */}
                </div>
            </div>

            <button className={styles["action-btn"]}>EDIT YOUR PROFILE</button>
        </form>
    )
}