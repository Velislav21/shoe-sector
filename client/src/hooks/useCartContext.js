import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCartContext() {
    const cartContext = useContext(CartContext)
    return cartContext
}