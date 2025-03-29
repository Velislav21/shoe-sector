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

export function useIncreaseQuantity() {
    const { dispatch } = useCartContext();

    async function increaseQuantity(id) {

        dispatch({ type: "PENDING", payload: null })

        const shoes = await requester.patch(`${BASE_URL}/cart/edit/quantity`, {
            operationType: "increase",
            shoeId: id
        })

        dispatch({ type: "GET_CART", payload: shoes })
    }

    return {
        increaseQuantity
    };
}
export function useDecreaseQuantity() {
    const { dispatch } = useCartContext();

    async function decreaseQuantity(id) {

        dispatch({ type: "PENDING", payload: null })
        const shoes = await requester.patch(`${BASE_URL}/cart/edit/quantity`, {
            operationType: "decrease",
            shoeId: id
        })
        dispatch({ type: "GET_CART", payload: shoes })
    }

    return {
        decreaseQuantity
    };
}