import styles from "./ShoesList.module.css";

import ShoeItem from "../shoe-item/ShoeItem";
import useGetAllShoes from "../../../hooks/useGetAllShoes";


export default function ShoesList() {

    const [shoes] = useGetAllShoes();

    return (
        <section className={styles["shoe-items-container"]}>
            {shoes.length > 0
                ?
                shoes.map((shoe) => <ShoeItem key={shoe._id} {...shoe} />)
                :
                <p>No shoes yet</p>
            }
        </section>
    )
}
// !TODO: add no shoes yet message