import { useState, useEffect } from "react";
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
}

export function useGetShoe(shoeId) {

    const [shoeData, setShoeData] = useState(initialShoeData)

    useEffect(() => {
        request.get(`${BASE_URL}/shoes/details/${shoeId}`).then(setShoeData)
    }, [shoeId]);

    return [shoeData, setShoeData];
}