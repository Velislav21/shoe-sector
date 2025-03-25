import { Navigate } from "react-router";
import { useLogout } from "../../../hooks/useLogout";
import { useEffect } from "react";

export default function Logout() {

    const { logout } = useLogout();

    useEffect(() => {
        logout();
    }, [])

    return <Navigate to="/login" />

}