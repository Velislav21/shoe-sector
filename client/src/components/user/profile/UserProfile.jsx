import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"

import styles from './UserProfile.module.css'
import useGetProfile from "../../../hooks/useGetProfile"


export default function UserProfile() {

    const [profileData, setProfileData] = useGetProfile();

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
                    <p className={styles.value}>{profileData.name} <button><FontAwesomeIcon icon={faPen} /></button></p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>{profileData.email} <button><FontAwesomeIcon icon={faPen} /></button></p>
                </div>
            </div>
        </div >
    )
}