import './ShoeDetails.css'

export default function ShoeDetails() {
    return (
        <article className="shoe-details-container">
            <div className="img-container">
                <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72e40c8f-7099-48aa-aaf1-536654f849f8/WMNS+NIKE+MOTIVA+PRM.png"
                    alt=""
                />
            </div>
            <div className="shoe-details">
                <p className="model-name">Nike some model</p>
                <p className="type">Women's Shoes</p>
                <p className="price">BGN 219.99</p>

                <div className="size-selector">
                    <label className="size-label" htmlFor="shoe-size">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="31"
                        />
                        <span>31</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="32"
                        />
                        <span>32</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="33"
                        />
                        <span>33</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="34"
                        />
                        <span>34</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="35"
                        />
                        <span>35</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="36"
                        />
                        <span>36</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="37"
                        />
                        <span>37</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="38"
                        />
                        <span>38</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="39"
                        />
                        <span>39</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="40"
                        />
                        <span>40</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="41"
                        />
                        <span>41</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="42"
                        />
                        <span>42</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="43"
                        />
                        <span>43</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="44"
                        />
                        <span>44</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="45"
                        />
                        <span>45</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="46"
                        />
                        <span>46</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="47"
                        />
                        <span>47</span>
                    </label>
                    <label className="size-label">
                        <input
                            type="radio"
                            name="shoe-size"
                            defaultValue="48"
                        />
                        <span>48</span>
                    </label>
                </div>
                <div className="buttons-container">
                    <button className="add-btn">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className="add-btn">
                        Add to Cart
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
                <p className="description">
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