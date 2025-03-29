import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";
import requester from "../utils/requester";
import { BASE_URL } from "../constants/constants";

export function useGetCart() {
    const { cart, isPending, dispatch } = useCartContext()

    useEffect(() => {
        async function getCart() {
            const cart = await requester.get(`${BASE_URL}/cart`);
            dispatch({ type: "GET_CART", payload: cart })
        }
        getCart();
    }, [])

    return { cart, isPending };
}

export function useIncreaseQuantity() {
    const { dispatch, isPending } = useCartContext();

    async function increaseQuantity(id) {

        dispatch({ type: "PENDING", payload: null })

        const result = await requester.patch(`${BASE_URL}/cart/edit/quantity`, {
            operationType: "increase",
            shoeId: id
        })

        dispatch({ type: "GET_CART", payload: result })
    }

    return {
        increaseQuantity, isPending
    };
}
export function useDecreaseQuantity() {
    const { dispatch, isPending } = useCartContext();

    async function decreaseQuantity(id) {

        dispatch({ type: "PENDING", payload: null })

        const result = await requester.patch(`${BASE_URL}/cart/edit/quantity`, {
            operationType: "decrease",
            shoeId: id
        })

        dispatch({ type: "GET_CART", payload: result })
    }

    return {
        decreaseQuantity, isPending
    };
}