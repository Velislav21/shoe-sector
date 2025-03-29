import { Link } from "react-router"

import styles from "./CartItem.module.css";
import requester from "../../../utils/requester";
import { BASE_URL } from "../../../constants/constants";
import { useCartContext } from "../../../hooks/useCartContext";
import { useIncreaseQuantity } from "../../../api/cartApi";

export default function CartItem({
    _id,
    imageUrl,
    brand,
    modelName,
    quantity,
    gender,
    price
}) {

    const { increaseQuantity, isPending } = useIncreaseQuantity();

    return (
        <article className={styles["cart-item"]}>

            <Link to={`/shoes/${_id}/details`} className={styles["image-container"]}>
                <img src={imageUrl} alt="" />
            </Link>

            <div className={styles["details"]}>
                <h2>{modelName}</h2>
                <p>{brand}</p>
            </div>

            <div className={styles["quantity-buttons"]}>

                <button onClick={() => increaseQuantity(_id)} className={styles["circular-btn"]}> + </button>
                <span>{quantity}</span>
                <button onClick={() => {}} className={styles["circular-btn"]}> - </button>

            </div>

            <div className={styles["price"]}>
                <p>BGN {price}</p>

                <button className={styles["remove-btn"]}>Remove</button>
            </div>

        </article>
    )
}