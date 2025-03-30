import { Navigate } from "react-router";
import { useLogout } from "../../../api/usersApi";
import { useEffect } from "react";
import { useCartContext } from "../../../hooks/useCartContext";

export default function Logout() {

    const { logout } = useLogout();
    const { dispatch } = useCartContext();

    useEffect(() => {
        logout();
        dispatch({ type: "CLEAR_CART", payload: null })
    }, [])

    return <Navigate to="/login" />

}