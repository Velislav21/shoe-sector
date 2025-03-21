import { Link } from "react-router"
import styles from './EditButton.module.css'
import resetStyles from '../ButtonStyles.module.css'

export default function EditButton({ redirect, disabled }) {
    let stylingClasses = `${styles["edit-btn"]} ${resetStyles["btn"]}`;

    if (disabled) {
        stylingClasses += ` ${styles.disabled}`
    }
    console.log(stylingClasses)
    console.log(styles)
    return <Link
        to={redirect}
        className={stylingClasses}
        >
        EDIT
    </Link>
}