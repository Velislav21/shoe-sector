import styles from './UserProfile.module.css'
import EditButton from "../../reusable-buttons/edit-button/EditButton";
import DeleteButton from "../../reusable-buttons/delete-button/DeleteButton";
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useDeleteProfile } from '../../../api/usersApi';


export default function UserProfile() {
    const { user } = useAuthContext();
    const { deleteProfile, isPending } = useDeleteProfile();

    async function deleteHandler() {
        deleteProfile(user._id);
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
                <EditButton disabled={isPending} redirect={`/profile/${user._id}/edit`} />
                <DeleteButton disabled={isPending} deleteHandler={deleteHandler} />
            </div>
        </div >
    )
}