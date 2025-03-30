import { Link } from "react-router"

import styles from "./CartItem.module.css";
import { useCartContext } from "../../../hooks/useCartContext";
import { useUpdateQuantity, useRemoveShoeFromCart } from "../../../api/cartApi";

export default function CartItem({
    cartItemId,
    _id: shoeId,
    imageUrl,
    brand,
    modelName,
    quantity,
    gender,
    price
}) {
    const { isPending } = useCartContext();
    const { updateQuantity } = useUpdateQuantity();
    const { removeShoeFromCart } = useRemoveShoeFromCart();

    return (
        <article className={styles["cart-item"]}>

            <Link to={`/shoes/${shoeId}/details`} className={styles["image-container"]}>
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
                    onClick={() => updateQuantity(shoeId, "increase")}
                > + </button>

                <span>{quantity}</span>

                <button
                    className={styles["circular-btn"]}
                    disabled={isPending}
                    onClick={() => updateQuantity(shoeId, "decrease")}
                > - </button>

            </div>

            <div className={styles["price-info"]}>
                <p className={styles["price"]}>BGN {price}</p>
                <p className={styles["sub-total"]}>Sub-total {(price * quantity).toFixed(2)}</p>

                <button
                    onClick={() => removeShoeFromCart(cartItemId)}
                    className={styles["remove-btn"]}
                    disabled={isPending}
                >Remove</button>
            </div>

        </article>
    )
}