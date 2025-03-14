import { Outlet, Navigate } from "react-router";

import { useAuthContext } from "../hooks/useAuthContext";

export default function ProtectedRoutes() {

    const { user } = useAuthContext();

    return !user ? <Navigate to={"/login"} /> : <Outlet />
}