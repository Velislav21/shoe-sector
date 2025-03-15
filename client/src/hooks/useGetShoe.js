import { useState, useEffect } from "react";
import { useParams } from "react-router";
import shoeService from "../services/shoeService";

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

export default function useGetShoe() {

    const { shoeId } = useParams();
    const [shoeData, setShoeData] = useState(initialShoeData)

    useEffect(() => {
        shoeService.getOne(shoeId).then(setShoeData)
        console.log(shoeData)
    }, [shoeId]);

    return [shoeData, setShoeData];
}