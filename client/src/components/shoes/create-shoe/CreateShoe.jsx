import { useState } from "react";
import styles from "./CreateShoe.module.css"
import { useAuthContext } from "../../../hooks/useAuthContext";

const initialValues = {
    modelName: "",
    brand: "",
    price: "",
    imageUrl: "",
    description: ""
}

export default function CreateShoe() {
    const { user } = useAuthContext();

    const [gender, setGender] = useState("");
    const [values, setValues] = useState(initialValues);

    function setGenderHandler(e) {
        setGender(e.target.value)
    }

    function handleInputChange(e) {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        
        const response = await fetch("http://localhost:3000/shoes/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authentication": `Bearer ${JSON.parse(user).accessToken}`
            },
            body: JSON.stringify({...values, gender})
        })

    }

    return (

        <form onSubmit={handleFormSubmit} className={styles["create-shoe-form"]}>
            <h2 className={styles["form-title"]}>Add New Shoe Model</h2>

            <div className={styles["form-group"]}>
                <label>Model Name</label>
                <input
                    type="text"
                    placeholder="Enter model name"
                    name="modelName"
                    className={styles["input-field"]}
                    onChange={handleInputChange}
                    value={values.email}
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Brand</label>
                <input
                    type="text"
                    placeholder="Enter brand"
                    name="brand"
                    className={styles["input-field"]}
                    onChange={handleInputChange}
                    value={values.brand}
                    required />
            </div>
            <div className={styles["form-group"]}>
                <label>Price</label>
                <input
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    className={styles["input-field"]}
                    onChange={handleInputChange}
                    value={values.price}
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Gender</label>
                <div className={styles["checkbox-group"]}>
                    <label><input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={setGenderHandler}
                    /> Male</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={setGenderHandler}
                    /> Female</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="unisex"
                        checked={gender === "unisex"}
                        onChange={setGenderHandler}
                    /> Unisex</label>
                </div>
            </div>

            <div className={styles["form-group"]}>
                <label>Image URL</label>
                <input
                    type="text"
                    placeholder="Enter image URL"
                    name="imageUrl"
                    className={styles["input-field"]}
                    onChange={handleInputChange}
                    value={values.imageUrl}
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Description</label>
                <textarea
                    placeholder="Enter description"
                    name="description"
                    className={styles["textarea-field"]}
                    onChange={handleInputChange}
                    value={values.description}
                    required
                ></textarea>
            </div>
            <button className={styles["submit-button"]}>Submit</button>
        </form>
    )
}