import { Navigate } from "react-router";
import { useLogout } from "../../../api/usersApi";
import { useEffect } from "react";

export default function Logout() {

    const { logout } = useLogout();

    useEffect(() => {
        logout();
    }, [])

    return <Navigate to="/login" />

}