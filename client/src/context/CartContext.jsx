import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    cart: [],
    isPending: false,
    error: null
}

export function cartReducer(state, action) {

    switch (action.type) {

        case "PENDING":
            return { ...state, isPending: true, error: null }

        case "GET_CART":
            return { ...state, cart: action.payload, isPending: false }

        case "CLEAR_CART":
            return {...state, cart: [], isPending: false, error: action.payload}

        case "FAILED_TO_GET_CART":
            return { ...state, isPending: false, error: action.payload }
        default:
            return state;
    }

}

export function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    console.log("Cart Context State:", state);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}