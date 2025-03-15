import { Outlet, Navigate, useParams } from "react-router";

import { useAuthContext } from "../hooks/useAuthContext";
import useGetShoe from "../hooks/useGetShoe";

export default function RecordOwnerRoutes() {

    const { user } = useAuthContext();
    const shoeData = useGetShoe();
    
    if (!user) {
        return <Navigate to="/login" />
    }

    const isOwner = user._id === shoeData.owner;

    return isOwner ? <Outlet /> : <Navigate to={"/shoes"} />
}
