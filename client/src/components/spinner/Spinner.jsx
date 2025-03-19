import styles from "./Spinner.module.css"

export default function Spinner() {
    console.log('rendered')
    return (
        <span className={styles["loader"]}></span>
    )
}