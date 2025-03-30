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
        const { shoes } = await requester.post(`${BASE_URL}/cart/add/${id}`, {})
        dispatch({ type: "GET_CART", payload: shoes })
    }

    return {
        addToCart, isPending
    }
}

export function useUpdateQuantity() {
    const { dispatch } = useCartContext();

    async function updateQuantity(id, operationType) {

        dispatch({ type: "PENDING", payload: null })

        const shoes = await requester.patch(`${BASE_URL}/cart/edit/quantity/${id}`, {
            operationType,
        })

        dispatch({ type: "GET_CART", payload: shoes })
    }

    return {
        updateQuantity
    };
}
export function useRemoveShoeFromCart() {
    const { dispatch } = useCartContext();

    async function removeShoeFromCart(cartItemId) {

        dispatch({ type: "PENDING", payload: null })
        const shoes = await requester.patch(`${BASE_URL}/cart/remove/${cartItemId}`)
        dispatch({ type: "GET_CART", payload: shoes })
    }

    return {
        removeShoeFromCart
    }

}

export function useDeleteCart() {
    const { dispatch } = useCartContext()

    async function deleteCart(userId) {
        dispatch({ type: "PENDING", payload: null })
        await requester.delete(`${BASE_URL}/cart/delete`);
        dispatch({type: "CLEAR_CART", payload: null})
    }
    return {
        deleteCart
    }
}