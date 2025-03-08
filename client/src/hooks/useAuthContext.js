import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export function useAuthContext() {

    const authContext = useContext(AuthContext);

    return authContext
}