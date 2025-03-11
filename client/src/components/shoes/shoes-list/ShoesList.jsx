import styles from "./ShoesList.module.css";

import ShoeItem from "../shoe-item/ShoeItem";
import shoeService from "../../../services/shoeService";
import { useEffect, useState } from "react";


export default function ShoesList() {

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        shoeService.getAll()
            .then(setShoes)
    }, []);

    return (
        // Hard coded.
        <section className={styles["shoe-items-container"]}>
            {shoes.length > 0
                ?
                shoes.map((shoe) => <ShoeItem key={shoe._id} {...shoe}/>)
                :
                <p>No shoes yet</p>
            }
        </section>
    )
}
// !TODO: add no shoes yet message