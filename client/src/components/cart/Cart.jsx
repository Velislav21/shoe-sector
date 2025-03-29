
import styles from "./Cart.module.css"

import CartItem from "./cart-item/CartItem";
import { useGetCart } from "../../api/cartApi"

export default function Cart() {

    const { cart } = useGetCart();

    return (
        <>
            <section className={styles["cart-container"]}>
                <header className={styles["cart-header"]}>
                    <h1 className={styles["cart-heading"]}>Your Shopping Cart</h1>
                    <button className={styles["clear-btn"]}>Clear Cart</button>
                </header>
                {cart.map((cartItem) =>
                    <CartItem
                        key={cartItem._id}
                        {...cartItem.shoeId}
                        quantity={cartItem.quantity}
                    />)}
                {/* shoeId holds the actual shoe data after being populated on the backend */}
                <div className={styles["checkout"]}>
                    <div>
                        <p className={styles["total"]}>Total: <span>BGN 0.00</span></p>
                        <p className={styles["items-count"]}>Products count: </p>
                    </div>
                    <div>
                        <button className={styles["checkout-btn"]}>Checkout</button>
                    </div>
                </div>

            </section>
        </>
    )
}