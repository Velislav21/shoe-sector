import styles from "./ShoesList.module.css";
import ShoeItem from "../shoe-item/ShoeItem";
import Spinner from "../../spinner/Spinner";
import { useAllShoes } from "../../../api/shoesApi";

export default function ShoesList() {

    const { shoes, isPending } = useAllShoes();
    console.log(isPending)
    return (
        <section className={styles["shoe-items-container"]}>

            {!isPending && shoes.length === 0 && <p>No shoes yet.</p>}

            {isPending
                ?
                <Spinner/>
                :
                shoes.map((shoe) => <ShoeItem key={shoe._id} {...shoe} />)
            }
        </section>
    )
}