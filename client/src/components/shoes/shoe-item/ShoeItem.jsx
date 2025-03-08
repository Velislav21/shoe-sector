import styles from './ShoeItem.module.css'

export default function ShoeItem() {
    return (
        <article className={styles["shoe-card"]}>
            <div className={styles["img-container"]}>
                <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72e40c8f-7099-48aa-aaf1-536654f849f8/WMNS+NIKE+MOTIVA+PRM.png"
                    alt=""
                />
            </div>
            <h2 className={styles["model-name"]}>Nike some model</h2>
            <p className={styles["type"]}>Women's Shoes</p>
            <p className={styles["price"]}>BGN 219.99</p>
        </article>
    )
}