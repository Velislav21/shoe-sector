import { useState, use } from "react";
import { useNavigate, useSearchParams } from "react-router"
import styles from "./CreateShoe.module.css"
import shoeService from "../../../services/shoeService";
import { useAuthContext } from "../../../hooks/useAuthContext";

const initialValues = {
    modelName: "",
    brand: "",
    price: "",
    imageUrl: "",
    description: "",
    gender: ""
}

export default function CreateShoe() {

    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    function handleInputChange(e) {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        console.log(values)
        await shoeService.create(values)

        // navigate('/shoes')
        //!TODO add error handling
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
                        value="Men"
                        checked={values.gender === "Men"}
                        onChange={handleInputChange}
                    /> Men</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Women"
                        checked={values.gender === "Women"}
                        onChange={handleInputChange}
                    /> Women</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Unisex"
                        checked={values.gender === "Unisex"}
                        onChange={handleInputChange}
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
            <button className={styles["submit-button"]}>ADD MODEL</button>
        </form>
    )
}