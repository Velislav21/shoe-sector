import { Link } from "react-router"
import styles from './EditButton.module.css'
import resetStyles from '../ButtonStyles.module.css'

export default function EditButton({ redirect }) {
    return <Link
        to={redirect}
        className={`${styles["edit-btn"]} ${resetStyles["btn"]}`}>
        EDIT
    </Link>
}