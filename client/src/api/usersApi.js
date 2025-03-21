import { BASE_URL } from "../constants/constants";
import request from "../utils/requester";

import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

export function useLogin() {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState("test");

    async function login(userData) {

        try {
            const user = await request.post(`${BASE_URL}/users/login`, userData);
            dispatch({ type: "LOGIN", payload: user });
        } catch (err) {
            setError(err.message)
        }
    }

    return {
        login,
        error
    }
}
export function useRegister() {

    const { dispatch } = useAuthContext();

    async function register(userData) {
        const newUser = await request.post(`${BASE_URL}/users/register`, userData);

        dispatch({ type: "LOGIN", payload: newUser });
    }

    return {
        register
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