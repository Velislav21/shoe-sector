import styles from './ShoeDetails.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function ShoeDetails() {
    return (
        <article className={styles["shoe-details-container"]}>
            <div className={styles["img-container"]}>
                <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72e40c8f-7099-48aa-aaf1-536654f849f8/WMNS+NIKE+MOTIVA+PRM.png"
                    alt=""
                />
            </div>
            <div className={styles["shoe-details"]}>
                <p className={styles["model-name"]}>Nike some model</p>
                <p className={styles["type"]}>Women's Shoes</p>
                <p className={styles["price"]}>BGN 219.99</p>

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
                <p className={styles["description"]}>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Deleniti laborum dolorum iure
                    assumenda autem veritatis esse rem sequi
                    corporis debitis! Possimus, aspernatur error
                    eaque aperiam assumenda praesentium laboriosam
                    nulla magnam?
                </p>
            </div>
        </article>
    )
}