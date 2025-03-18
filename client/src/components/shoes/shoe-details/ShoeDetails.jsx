import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link, useNavigate } from "react-router"

import styles from './ShoeDetails.module.css'

import { useAuthContext } from "../../../hooks/useAuthContext"
import { useGetShoe } from "../../../api/shoesApi"
import EditButton from "../../reusable-buttons/edit-button/EditButton"
import DeleteButton from "../../reusable-buttons/delete-button/DeleteButton"

export default function ShoeDetails() {

    const navigate = useNavigate();
    const { shoeId } = useParams();
    const { user } = useAuthContext();
    const [shoeData] = useGetShoe(shoeId);

    const isOwner = user?._id === shoeData.owner;

    async function deleteHandler() {
        await shoeService.delete(shoeId);
        navigate("/shoes")
    }

    return (
        <article className={styles["shoe-details-container"]}>
            <div>
                <div className={styles["img-container"]}>
                    <img
                        src={shoeData.imageUrl || null}
                        alt="Invalid Image Url"
                    />
                </div>
                {isOwner &&
                    <div className={styles["buttons-container"]}>
                        <EditButton redirect={`/shoes/${shoeData._id}/edit`}>EDIT</EditButton>
                        <DeleteButton deleteHandler={deleteHandler}>DELETE</DeleteButton>
                    </div>
                }
            </div>

            <div className={styles["shoe-details"]}>
                <p className={styles["model-name"]}>{shoeData.brand}</p>
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