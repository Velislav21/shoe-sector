import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from '../../user/UserForm.module.css'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useEditProfile } from '../../../api/usersApi';
import { userEditSchema } from '../../../utils/yupSchemas';
import ErrorMessage from '../../errors/ErrorMessage';
import useForm from '../../../hooks/useForm';

export default function UserEdit() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { editProfile, isPending, fetchError } = useEditProfile();
    const {
        values,
        handleInputChange,
        handleSubmit,
        validationErrors,
        isSuccessful
    } = useForm(
        { name: user.name, email: user.email },
        editProfile,
        userEditSchema)

    useEffect(() => {
        if (isSuccessful) {
            navigate(`/profile/${user._id}`);
        }
    }, [isSuccessful])

    return (
        <form onSubmit={handleSubmit} className={styles["user-form"]}>
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
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {validationErrors.email &&
                        validationErrors.email.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                    {validationErrors.name &&
                        validationErrors.name.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
                    {fetchError && <ErrorMessage>{fetchError}</ErrorMessage>}
                </div>
            </div>

            <button disabled={isPending} className={styles["action-btn"]}>EDIT YOUR PROFILE</button>
        </form>
    )
}