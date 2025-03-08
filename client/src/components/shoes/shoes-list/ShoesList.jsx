import styles from "./ShoesList.module.css"
import ShoeItem from "../shoe-item/ShoeItem"

export default function ShoesList() {
    return (
        // Hard coded.
        <section className={styles["shoe-items-container"]}>
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
        </section>
    )
}