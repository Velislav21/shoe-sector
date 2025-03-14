import { useState, useEffect } from "react";
import { useParams } from "react-router";
import shoeService from "../services/shoeService";


const initialShoeData = {
    modelName: "",
    brand: "",
    gender: "",
    imageUrl: null,
    description: "",
    price: "",
    _id: "",
}

export default function useGetShoe() {

    const { shoeId } = useParams();
    const [shoeData, setShoeData] = useState(initialShoeData)

    useEffect(() => {

        async function getShoe() {
            const shoe = await shoeService.getOne(shoeId);
            setShoeData(shoe);
        }
        getShoe();

    }, [shoeId])
    console.log(shoeData)
    return shoeData;
}