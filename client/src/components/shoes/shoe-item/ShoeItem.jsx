import { Link } from 'react-router'
import styles from './ShoeItem.module.css'


export default function ShoeItem({ _id, imageUrl, modelName, gender, price }) {
    console.log(imageUrl)
    return (
        <article className={styles["shoe-card"]}>
            <Link to={`/shoes/${_id}/details`} className={styles["img-container"]}>
                <img
                    src={imageUrl}
                    alt=""
                />
            </Link>
            <p >
                <h2 className={styles["model-name"]}>{modelName}</h2>
                <p className={styles["type"]}>{gender}</p>
                <p className={styles["price"]}>BGN {price}</p>
            </p>
        </article>
    )
}