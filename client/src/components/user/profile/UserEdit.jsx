import { useNavigate } from 'react-router';

import styles from '../../user/UserForm.module.css'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useEditProfile } from '../../../api/usersApi';

export default function UserEdit() {
    const navigate = useNavigate();
    const { editProfile, isPending } = useEditProfile();
    const { user } = useAuthContext();

    async function handleFormAction(formData) {
        const updatedValues = Object.fromEntries(formData);
        editProfile(user._id, updatedValues).finally(() => {
            navigate(`/profile/${user._id}`)
        });
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
                        defaultValue={isPending ? "" : user.email}
                        required
                    />
                </div>
                <div className={styles["user-input-container"]}>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        name="name"
                        id="name"
                        defaultValue={isPending ? "" : user.name}
                        required
                    />
                </div>
            </div>

            <button disabled={isPending} className={styles["action-btn"]}>EDIT YOUR PROFILE</button>
        </form>
    )
}