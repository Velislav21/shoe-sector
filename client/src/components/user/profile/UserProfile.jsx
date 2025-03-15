import styles from './UserProfile.module.css'

export default function UserProfile() {
    return (
        <div className={styles.profilePage}>
            <div className={styles.imgContainer}>
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Profile"
                />
            </div>
            <h2 className={styles.name}>Jessica Alba</h2>
            <p className={styles.handle}>
                @jennywilson
            </p>

            <div className={styles.infoSection}>
                <div className={styles.infoRow}>
                    <span className={styles.label}>Username</span>
                    <span className={styles.value}>Jessica</span>
                </div>
                <div className={styles.infoRow}>
                    <span className={styles.label}>Email</span>
                    <span className={styles.value}>jenny@gmail.com</span>
                </div>
                <div className={styles.infoRow}>
                    <span className={styles.label}>Address</span>
                    <span className={styles.value}> New York, USA
                    </span>
                </div>
                <div className={styles.infoRow}>
                    <span className={styles.label}>Nickname</span>
                    <span className={styles.value}> Sky Angel</span>
                </div>
                <div className={styles.infoRow}>
                    <span className={styles.label}>DOB</span>
                    <span className={styles.value}>April 28, 1981</span>
                </div>
            </div>
        </div>
    )
}