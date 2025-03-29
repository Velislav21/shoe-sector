import { Link } from "react-router"

import styles from "./CartItem.module.css";
import requester from "../../../utils/requester";
import { BASE_URL } from "../../../constants/constants";
import { useCartContext } from "../../../hooks/useCartContext";
import { useDecreaseQuantity, useIncreaseQuantity } from "../../../api/cartApi";

export default function CartItem({
    _id,
    imageUrl,
    brand,
    modelName,
    quantity,
    gender,
    price
}) {

    const { increaseQuantity, increasePending } = useIncreaseQuantity();
    const { decreaseQuantity, decreasePending } = useDecreaseQuantity();

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
                    onClick={() => increaseQuantity(_id)}
                > + </button>

                <span>{quantity}</span>

                <button onClick={() => decreaseQuantity(_id)}
                    className={styles["circular-btn"]}
                > - </button>

            </div>

            <div className={styles["price"]}>
                <p>BGN {price}</p>

                <button className={styles["remove-btn"]}>Remove</button>
            </div>

        </article>
    )
}