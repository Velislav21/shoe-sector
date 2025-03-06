import "./ShoesList.css"
import ShoeItem from "../shoe-item/ShoeItem"


export default function ShoesList() {
    return (
        // Hard coded.
        <section className="shoe-items-container">
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
            <ShoeItem />
        </section>
    )
}