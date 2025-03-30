import { Link } from "react-router"

import styles from "./CartItem.module.css";
import { useCartContext } from "../../../hooks/useCartContext";
import { useUpdateQuantity } from "../../../api/cartApi";

export default function CartItem({
    _id,
    imageUrl,
    brand,
    modelName,
    quantity,
    gender,
    price
}) {

    const { isPending } = useCartContext();
    const { updateQuantity } = useUpdateQuantity();

    return (
        <article className={styles["cart-item"]}>

            <Link to={`/shoes/${_id}/details`} className={styles["image-container"]}>
                <img src={imageUrl} alt="" />
            </Link>

            <div className={styles["details"]}>
                <h2>{modelName}</h2>
                <p>{brand}</p>
                <p>For {gender}</p>
            </div>

            <div className={styles["quantity-buttons"]}>

                <button
                    className={styles["circular-btn"]}
                    disabled={isPending}
                    onClick={() => updateQuantity(_id, "increase")}
                > + </button>

                <span>{quantity}</span>

                <button
                    className={styles["circular-btn"]}
                    disabled={isPending}
                    onClick={() => updateQuantity(_id, "decrease")}
                > - </button>

            </div>

            <div className={styles["price-info"]}>
                <p className={styles["price"]}>BGN {price}</p>
                <p className={styles["sub-total"]}>Sub-total {(price * quantity).toFixed(2)}</p>

                <button disabled={isPending} className={styles["remove-btn"]}>Remove</button>
            </div>

        </article>
    )
}