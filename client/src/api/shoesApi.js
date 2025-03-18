import { useState, useEffect, use } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

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
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        request.get(`${BASE_URL}/shoes`).then(setShoes);
    }, []);

    return { shoes }
};

export function useGetShoe(shoeId) {

    const [shoeData, setShoeData] = useState(initialShoeData)

    useEffect(() => {
        request.get(`${BASE_URL}/shoes/details/${shoeId}`).then(setShoeData)
    }, [shoeId]);
    return { shoeData, setShoeData };
};

export function useCreateShoe() {

    function create(shoeData) {
        request.post(`${BASE_URL}/shoes/create`, shoeData)
    }

    return {
        create
    }

};

export function useDeleteShoe() {

    function deleteShoe(shoeId) {
        request.delete(`${BASE_URL}/shoes/delete/${shoeId}`)
    }

    return {
        deleteShoe
    }

};

export function useEditShoe() {

    function edit(shoeData) {
        request.patch(`${BASE_URL}/shoes/update/${shoeData._id}`, shoeData);
    }

    return {
        edit,
    };
};