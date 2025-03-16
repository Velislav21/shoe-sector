import styles from './UserProfile.module.css'
import EditButton from "../../reusable-buttons/edit-button/EditButton";
import DeleteButton from "../../reusable-buttons/delete-button/DeleteButton";
import userService from '../../../services/userService';
import { useParams } from 'react-router';
import { useAuthContext } from '../../../hooks/useAuthContext';


export default function UserProfile() {
    const { user, dispatch } = useAuthContext();
    const { userId } = useParams();

    async function deleteHandler() {
        await userService.deleteProfile(userId);

        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className={styles.profilePage}>
            <div className={styles.imgContainer}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdmbyEaQPfV4HDykFBnSuPd5LqZo_3cTJcg&s"
                    alt="Profile"
                />
            </div>
            <h2 className={styles.name}>{user.name}</h2>

            <div className={styles.infoSection}>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Name</p>
                    <p className={styles.value}>{user.name} </p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>{user.email}</p>
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                <EditButton redirect={`/profile/${user._id}/edit`} />
                <DeleteButton deleteHandler={deleteHandler} />
            </div>
        </div >
    )
}