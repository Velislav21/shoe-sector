import styles from "./ErrorPage.module.css"
import { Link } from "react-router"
export default function ErrorPage() {
    return <div className={styles["err-page"]}>
        <p className={styles["error-page-msg"]}>Page not found.</p>
        <Link to="/shoes" className={styles["redirect-link"]}>Go to catalog</Link>
    </div>
}