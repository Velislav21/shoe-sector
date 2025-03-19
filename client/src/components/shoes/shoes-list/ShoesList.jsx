import styles from "./ShoesList.module.css";

import ShoeItem from "../shoe-item/ShoeItem";
import { useAllShoes } from "../../../api/shoesApi";
import Spinner from "../../spinner/Spinner";

export default function ShoesList() {

    const { shoes, pending } = useAllShoes();

    return (
        <section className={styles["shoe-items-container"]}>

            {!pending && shoes.length === 0 && <p>No shoes yet.</p>}

            {pending
                ?
                <Spinner/>
                :
                shoes.map((shoe) => <ShoeItem key={shoe._id} {...shoe} />)
            }
        </section>
    )
}
// !TODO: add no shoes yet message