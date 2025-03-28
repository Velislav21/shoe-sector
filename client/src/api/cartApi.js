import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import requester from "../utils/requester";
import { BASE_URL } from "../constants/constants";

export  function useGetCart() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        requester.get(`${BASE_URL}/cart`).then(setCart)
    }, [])
    
    return {
        cart
    }
}