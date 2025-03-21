import { Outlet, Navigate } from "react-router";

import { useAuthContext } from "../../hooks/useAuthContext";

export default function UnAuthorizedRoutes() {

    const { user } = useAuthContext(); 
    return user ? <Navigate to={"/shoes"} /> : <Outlet />
}