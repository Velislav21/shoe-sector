import { useState, useEffect } from "react";
import shoeService from "../services/shoeService";

export default function useGetAllShoes() {
    
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        shoeService.getAll().then(setShoes)
    }, []);

    return [shoes];
}