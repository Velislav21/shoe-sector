import { useNavigate } from 'react-router';

import styles from '../../user/UserForm.module.css'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useEditProfile } from '../../../api/usersApi';
import useInputValidation from '../../../hooks/useInputValidation';
import { userEditSchema } from '../../../utils/yupSchemas';
import ErrorMessage from '../../errors/ErrorMessage';

export default function UserEdit() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { validationErrors, validationFn } = useInputValidation(userEditSchema)
    const { editProfile, isPending, fetchError } = useEditProfile();

    async function handleFormAction(formData) {
        const updatedValues = Object.fromEntries(formData);

        const validValues = await validationFn(updatedValues);

        if (!validValues) {
            return;
        }

        const isSuccessful = await editProfile(user._id, validValues);

        isSuccessful && navigate(`/profile/${user._id}`);
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
                        defaultValue={isPending ? "" : user.name}
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