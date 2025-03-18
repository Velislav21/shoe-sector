import { useState } from "react";
import { useNavigate } from "react-router"
import styles from "./CreateShoe.module.css"
import { useCreateShoe } from "../../../api/shoesApi";

export default function CreateShoe() {
    const { create: createShoe } = useCreateShoe();
    const navigate = useNavigate();

    async function handleFormAction(formData) {

        const values = Object.fromEntries(formData)
        createShoe(values)

        navigate('/shoes')
        //!TODO add error handling
    }

    return (

        <form action={handleFormAction} className={styles["create-shoe-form"]}>
            <h2 className={styles["form-title"]}>Add New Shoe Model</h2>

            <div className={styles["form-group"]}>
                <label>Model Name</label>
                <input
                    type="text"
                    placeholder="Enter model name"
                    name="modelName"
                    className={styles["input-field"]}
                    defaultValue=""
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Brand</label>
                <input
                    type="text"
                    placeholder="Enter brand"
                    name="brand"
                    className={styles["input-field"]}
                    defaultValue=""
                    required />
            </div>
            <div className={styles["form-group"]}>
                <label>Price</label>
                <input
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    className={styles["input-field"]}
                    defaultValue=""
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Gender</label>
                <div className={styles["checkbox-group"]}>
                    <label><input
                        type="radio"
                        name="gender"
                        // value="Men"
                        defaultValue="Men"
                    /> Men</label>
                    <label><input
                        type="radio"
                        name="gender"
                        // value="Women"
                        defaultValue="Women"
                    /> Women</label>
                    <label><input
                        type="radio"
                        name="gender"
                        // value="Unisex"
                        defaultValue="Unisex"
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
                    defaultValue=""
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Description</label>
                <textarea
                    placeholder="Enter description"
                    name="description"
                    className={styles["textarea-field"]}
                    defaultValue=""
                    required
                ></textarea>
            </div>
            <button className={styles["submit-button"]}>ADD MODEL</button>
        </form>
    )
}