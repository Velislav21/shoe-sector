import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link } from "react-router"
import { useEffect, useState } from "react"

import { useAuthContext } from "../../../hooks/useAuthContext"
import shoeService from "../../../services/shoeService"
import styles from './ShoeDetails.module.css'

const initialShoeData = {
    modelName: "",
    brand: "",
    gender: "",
    imageUrl: null,
    description: "",
    price: ""
}

export default function ShoeDetails() {
    const [shoeData, setShoeData] = useState(initialShoeData)
    const { user } = useAuthContext();
    const { shoeId } = useParams();

    const isOwner = user?._id === shoeData.owner;
    console.log(isOwner)

    useEffect(() => {

        shoeService.getOne(shoeId).then(setShoeData)

    }, [shoeId])
    return (
        <article className={styles["shoe-details-container"]}>
            <div>
                <div className={styles["img-container"]}>
                    <img
                        src={shoeData.imageUrl}
                        alt="Invalid Image Url"
                    />
                </div>
                {isOwner &&
                    <div className={styles["buttons-container"]}>
                        <Link to={`/shoes/${shoeData._id}/edit`} className={`${styles["edit-btn"]} ${styles["btn"]}`}>EDIT</Link>
                        <button className={`${styles["delete-btn"]} ${styles["btn"]}`}>DELETE</button>
                    </div>
                }
            </div>

            <div className={styles["shoe-details"]}>
                <p className={styles["model-name"]}>{shoeData.modelName}</p>
                <p className={styles["type"]}>{shoeData.gender}'s shoes</p>
                <p className={styles["price"]}>BGN {shoeData.price}</p>

                <div className={styles["size-selector"]}>
                    <label className={styles["size-label"]} htmlFor="shoe-size">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="31"
                        />
                        <span>31</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="32"
                        />
                        <span>32</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="33"
                        />
                        <span>33</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="34"
                        />
                        <span>34</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="35"
                        />
                        <span>35</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="36"
                        />
                        <span>36</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="37"
                        />
                        <span>37</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="38"
                        />
                        <span>38</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="39"
                        />
                        <span>39</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="40"
                        />
                        <span>40</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="41"
                        />
                        <span>41</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="42"
                        />
                        <span>42</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="43"
                        />
                        <span>43</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="44"
                        />
                        <span>44</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="45"
                        />
                        <span>45</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="46"
                        />
                        <span>46</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="47"
                        />
                        <span>47</span>
                    </label>
                    <label className={styles["size-label"]}>
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="48"
                        />
                        <span>48</span>
                    </label>
                </div>
                <div className={styles["buttons-container"]}>
                    <button className={styles["shoe-details-btn"]}>
                        Add to Cart
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                    <button className={styles["shoe-details-btn"]}>
                        Add to Cart
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
                <p className={styles["description"]}>{shoeData.description}</p>
            </div>
        </article>
    )
}