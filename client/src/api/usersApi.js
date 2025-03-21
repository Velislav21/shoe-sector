import { useState } from "react";

import request from "../utils/requester";
import { BASE_URL } from "../constants/constants";
import { useAuthContext } from "../hooks/useAuthContext";
import useError from "../hooks/useError";

export function useLogin() {
    const { dispatch } = useAuthContext();
    const { error, customSetError } = useError(null);
    const [isPending, setIsPending] = useState(false);

    async function login(userData) {

        try {
            setIsPending(true);
            const user = await request.post(`${BASE_URL}/users/login`, userData);
            dispatch({ type: "LOGIN", payload: user });

            setIsPending(false)
        } catch (err) {
            customSetError(err.message, 5000)
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
    const { error, customSetError } = useError(null);
    const [isPending, setIsPending] = useState(false);

    async function register(userData) {

        try {
            setIsPending(true);

            const newUser = await request.post(`${BASE_URL}/users/register`, userData);
            dispatch({ type: "LOGIN", payload: newUser });

            setIsPending(false);
        } catch (err) {

            customSetError(err.message, 5000);
            setIsPending(false);
        }

    }

    return {
        register,
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

    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()

    async function editProfile(userId, userData) {

        setIsPending(true);
        const updatedUser =
            await request.patch(`${BASE_URL}/users/edit/${userId}`, userData)
        dispatch({ type: "LOGIN", payload: updatedUser })
        setIsPending(false);

    }
    return {
        editProfile,
        isPending
    }
}