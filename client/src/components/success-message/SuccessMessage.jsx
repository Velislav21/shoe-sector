
import styles from "./SuccessMessage.module.css"

export default function SuccessMessage({ children, props }) {
    return <p className={styles["success-msg"]} {...props}>{children}</p>
}