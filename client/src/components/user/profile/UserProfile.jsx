import styles from './UserProfile.module.css'
import useGetProfile from "../../../hooks/useGetProfile"
import EditButton from "../../reusable-buttons/edit-button/EditButton";
import DeleteButton from "../../reusable-buttons/delete-button/DeleteButton";


export default function UserProfile() {

    const [profileData, setProfileData] = useGetProfile();

    async function deleteHandler() {

    }

    return (
        <div className={styles.profilePage}>
            <div className={styles.imgContainer}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdmbyEaQPfV4HDykFBnSuPd5LqZo_3cTJcg&s"
                    alt="Profile"
                />
            </div>
            <h2 className={styles.name}>{profileData.name}</h2>

            <div className={styles.infoSection}>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Name</p>
                    <p className={styles.value}>{profileData.name} </p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>{profileData.email}</p>
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                <EditButton redirect={`/profile/${profileData._id}/edit`} />
                <DeleteButton deleteHandler={deleteHandler}/>
            </div>
        </div >
    )
}