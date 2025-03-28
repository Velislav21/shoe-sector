import { createRef } from "react";
import { useGetCart } from "../../api/cartApi"


export default function Cart() {

    const { cart } = useGetCart();
    console.log(cart.map((obj) => console.log(obj)))
    return (
        <>
            {/* {cart.map()} */}
        </>
    )
}