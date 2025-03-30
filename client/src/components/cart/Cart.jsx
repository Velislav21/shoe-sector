
import styles from "./Cart.module.css"

import CartItem from "./cart-item/CartItem";
import { useGetCart } from "../../api/cartApi"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errors/ErrorMessage";

export default function Cart() {
    const { cart, cartData, isPending, isFetching } = useGetCart();
    return (
        <section className={styles["cart-container"]}>

            {isFetching ? <Spinner /> :
                cart.length === 0 ? <ErrorMessage>Your cart is empty!</ErrorMessage> : (
                    <>
                        <header className={styles["cart-header"]}>
                            <h1 className={styles["cart-heading"]}>Your Shopping Cart</h1>
                            <button
                                className={styles["clear-btn"]}
                                disabled={isPending}
                            >
                                Clear Cart
                            </button>
                        </header>
                        {cart.map((cartItem) => (
                            <CartItem
                                key={cartItem._id}
                                {...cartItem.shoeId}
                                quantity={cartItem.quantity}
                            />
                        ))}
                        {/* shoeId holds the actual shoe data after being populated on the backend */}
                        <div className={styles["checkout"]}>
                            <div>
                                <p className={styles["total"]}>
                                    Total: <span>BGN {(cartData.totalCartPrice).toFixed(2)}</span>
                                </p>
                                <p className={styles["items-count"]}>
                                    Products count: {cartData.totalCartItemsCount}
                                </p>
                            </div>
                            <div>
                                <button
                                    disabled={isPending}
                                    className={styles["checkout-btn"]}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
        </section>
    );
}