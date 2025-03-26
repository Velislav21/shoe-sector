import { useState, useEffect } from "react";

import useError from "../hooks/useError";
import request from "../utils/requester";
import { BASE_URL } from "../constants/constants";

const initialShoeData = {
    modelName: "",
    brand: "",
    gender: "",
    imageUrl: "",
    description: "",
    price: "",
    owner: "",
    _id: "",
};

export function useAllShoes() {
    const [isPending, setIsPending] = useState(true);
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        request.get(`${BASE_URL}/shoes`)
            .then(setShoes)
            .finally(setIsPending)
    }, []);

    return { shoes, isPending }
};

export function useGetShoe(shoeId) {
    const [isShoePending, setIsShoePending] = useState(true);

    const [shoeData, setShoeData] = useState(initialShoeData)

    useEffect(() => {
        request.get(`${BASE_URL}/shoes/details/${shoeId}`)
            .then(setShoeData)
            .finally(setIsShoePending(false))
    }, [shoeId]);

    return { shoeData, setShoeData, isShoePending };
};

export function useCreateShoe() {

    const { error: fetchError, setCustomError } = useError(null);
    const [isPending, setIsPending] = useState(false);

    async function createShoe(shoeData) {

        try {
            setIsPending(true)
            await request.post(`${BASE_URL}/shoes/create`, shoeData)
            setIsPending(false);

            return true;
        } catch (err) {
            setCustomError(err.message, 5000)
            setIsPending(false)

            return false;
        }
    }

    return {
        createShoe,
        isPending,
        fetchError
    }

};

export function useDeleteShoe() {
    const [isDeletePending, setIsPending] = useState(false);

    async function deleteShoe(shoeId) {
        setIsPending(true)
        await request.delete(`${BASE_URL}/shoes/delete/${shoeId}`)
        setIsPending(false);
    }

    return {
        deleteShoe,
        isDeletePending
    }

};

export function useEditShoe() {

    const { error: fetchError, setCustomError } = useError(null);
    const [isPending, setIsPending] = useState(false);

    async function edit(shoeData) {
        try {
            setIsPending(true);
            await request.patch(`${BASE_URL}/shoes/update/${shoeData._id}`, shoeData);
            setIsPending(false);
            
            return true;
        } catch (err) {
            setCustomError(err.message, 5000)
            setIsPending(false)

            return false;
        }
    }

    return {
        edit,
        isPending,
        fetchError
    };
};