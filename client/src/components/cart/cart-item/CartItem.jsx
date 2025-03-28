

import styles from "./CartItem.module.css";

export default function CartItem({ _id, imageUrl, brand, modelName, quantity, gender, price }) {
    return (
        <article className={styles["cart-item"]}>

            <div className={styles["image-container"]}>
                <img src={imageUrl} alt="" />
            </div>

            <div className={styles["details"]}>
                <h2>{modelName}</h2>
                <p>{brand}</p>
            </div>

            <div className={styles["quantity-buttons"]}>
                <button className={styles["circular-btn"]}> + </button>
                <span>{quantity}</span>
                <button className={styles["circular-btn"]}> - </button>
            </div>

            <div className={styles["price"]}>
                <p>BGN {price}</p>

                <button className={styles["remove-btn"]}>Remove</button>
            </div>

        </article>
    )
}