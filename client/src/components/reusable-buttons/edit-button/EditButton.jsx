import { Link } from "react-router"
import styles from './EditButton.module.css'
import resetStyles from '../ButtonStyles.module.css'

export default function EditButton({ id }) {
    return <Link
        to={`/shoes/${id}/edit`}
        className={`${styles["edit-btn"]} ${resetStyles["btn"]}`}>
        EDIT
    </Link>
}