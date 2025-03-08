import styles from "./ErrorMessage.module.css"

export default function ErrorMessage({ children: errorMessage, props}) {
    return (
        <p className={styles["error-msg"]} {...props}>{errorMessage}</p>
    )
}