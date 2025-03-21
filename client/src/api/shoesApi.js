import { useState, useEffect } from "react";

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
    const [pending, setIsPending] = useState(true);
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        request.get(`${BASE_URL}/shoes`).then((res) => {
            setShoes(res);
            setIsPending(false);
        });
    }, []);

    return { shoes, pending }
};

export function useGetShoe(shoeId) {

    const [shoeData, setShoeData] = useState(initialShoeData)

    useEffect(() => {
        request.get(`${BASE_URL}/shoes/details/${shoeId}`).then(setShoeData)
    }, [shoeId]);
    return { shoeData, setShoeData };
};

export function useCreateShoe() {
    const [isPending, setIsPending] = useState(false);

    async function create(shoeData) {
        setIsPending(true)
        await request.post(`${BASE_URL}/shoes/create`, shoeData)
        setIsPending(false);
    }

    return {
        create,
        isPending
    }

};

export function useDeleteShoe() {
    const [isPending, setIsPending] = useState(false);

    async function deleteShoe(shoeId) {
        setIsPending(true)
        await request.delete(`${BASE_URL}/shoes/delete/${shoeId}`)
        setIsPending(false);
    }

    return {
        deleteShoe,
        isPending
    }

};

export function useEditShoe() {

    const [isPending, setIsPending] = useState(false);

    async function edit(shoeData) {
        setIsPending(true);
        await request.patch(`${BASE_URL}/shoes/update/${shoeData._id}`, shoeData);
        setIsPending(false);
    }

    return {
        edit,
        isPending
    };
};