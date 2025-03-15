import { useState, useEffect } from "react";
import shoeService from "../services/shoeService";

export default function useAllGetShoes() {
    
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        shoeService.getAll().then(setShoes)
    }, []);

    return [shoes];
}