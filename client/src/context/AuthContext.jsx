import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext(); // This creates wrapper component, which will wrap the components that need the auth state of the app

export function authReducer(state, action) {

    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };

        case "LOGOUT":
            return { user: null };

        default:
            return state;
    }
}

export function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(authReducer, { user: null });

    useEffect(() => {

        const user = localStorage.getItem("user");
        if (user) {
            dispatch({ type: "LOGIN", payload: JSON.parse(user) })
        };
    }, []);

    console.log("Auth Context state: ", state);

    return (
        // spreading the "state" even tho it has only one property as of now, but in the future it may have more than one.
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );

};