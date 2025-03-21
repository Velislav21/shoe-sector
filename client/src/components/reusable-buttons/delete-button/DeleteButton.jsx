import styles from './DeleteButton.module.css'
import resetStyles from '../ButtonStyles.module.css'

export default function DeleteButton({ deleteHandler, ...props }) {
    return (
        <button
            {...props}
            onClick={deleteHandler}
            className={`${styles["delete-btn"]} ${resetStyles["btn"]}`}>
            DELETE
        </button>
    )
}