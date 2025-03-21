import { useState } from "react";

import request from "../utils/requester";
import { BASE_URL } from "../constants/constants";
import { useAuthContext } from "../hooks/useAuthContext";

export function useLogin() {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false);

    async function login(userData) {

        try {
            setIsPending(true);

            const user = await request.post(`${BASE_URL}/users/login`, userData);
            dispatch({ type: "LOGIN", payload: user });

            setIsPending(false)
        } catch (err) {
            setError(err.message);

            setTimeout(() => {
                setError(null);
            }, 5000);

            setIsPending(false)
        }
    }

    return {
        login,
        error,
        isPending
    }
}
export function useRegister() {

    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false);

    async function register(userData) {

        try {
            setIsPending(true);

            const newUser = await request.post(`${BASE_URL}/users/register`, userData);
            dispatch({ type: "LOGIN", payload: newUser });

            setIsPending(false);
        } catch (err) {
            setError(err.message);

            setTimeout(() => {
                setError(null);
            }, 5000);
            // If needed i can wrap the timeout function in another one and send it to the component to be executed on demand.
            setIsPending(false);
        }

    }

    return {
        register,
        setError,
        error,
        isPending
    }
}
export function useDeleteProfile() {

    async function deleteProfile(id) {
        await request.delete(`${BASE_URL}/users/profile/${id}`);
    }

    return {
        deleteProfile
    }
}
export function useEditProfile() {

    async function editProfile(userId, userData) {
        const updatedUser = await request.patch(`${BASE_URL}/users/edit/${userId}`, userData)
        return updatedUser;
    }
    return {
        editProfile
    }
}