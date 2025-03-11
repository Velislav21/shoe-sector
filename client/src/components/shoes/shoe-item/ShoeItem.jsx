import styles from './ShoeItem.module.css'

export default function ShoeItem({ imageUrl, modelName, gender, price }) {
    return (
        <article className={styles["shoe-card"]}>
            <div className={styles["img-container"]}>
                <img
                    src={imageUrl}
                    alt=""
                />
            </div>
            <div>
                <h2 className={styles["model-name"]}>{modelName}</h2>
                <p className={styles["type"]}>{gender}</p>
                <p className={styles["price"]}>BGN {price}</p>
            </div>
        </article>
    )
}