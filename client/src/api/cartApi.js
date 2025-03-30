import { useEffect, useState } from "react";
import { useCartContext } from "../hooks/useCartContext";
import requester from "../utils/requester";
import { BASE_URL } from "../constants/constants";
import { calculateCartPrice } from "../utils/calculateCartPrice";

export function useGetCart() {

    const { cart, isPending, dispatch } = useCartContext();
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {

        async function getCart() {
            try {
                setIsFetching(true)

                const cart = await requester.get(`${BASE_URL}/cart`);

                dispatch({ type: "GET_CART", payload: cart })

                setIsFetching(false);
            } catch (err) {
                setIsFetching(false);
            }
        }
        getCart();
    }, [])

    const cartData = calculateCartPrice(cart)
    return { cart, isPending, cartData, isFetching };
}

export function useAddToCart() {

    const { isPending, dispatch } = useCartContext();

    async function addToCart(id) {
        dispatch({ type: "PENDING", payload: null })
        const cart = await requester.post(`${BASE_URL}/cart/add/${id}`, {})
        dispatch({ type: "GET_CART", payload: cart.shoes })
    }

    return {
        addToCart, isPending
    }
}

export function useUpdateQuantity() {
    const { dispatch } = useCartContext();

    async function updateQuantity(id, operationType) {

        dispatch({ type: "PENDING", payload: null })

        const shoes = await requester.patch(`${BASE_URL}/cart/edit/quantity`, {
            operationType,
            shoeId: id
        })

        dispatch({ type: "GET_CART", payload: shoes })
    }

    return {
        updateQuantity
    };
}