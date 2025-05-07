import { useNavigate } from "react-router";
import { useEffect } from "react";
import styles from "./CreateShoe.module.css";
import ErrorMessage from "../../errors/ErrorMessage";
import useForm from "../../../hooks/useForm";
import { useCreateShoe } from "../../../api/shoesApi";
import { shoeSchema } from "../../../utils/yupSchemas";

const initialValues = {
    modelName: "",
    brand: "",
    price: "",
    gender: "",
    imageUrl: "",
    description: "",
}

export default function CreateShoe() {
    const navigate = useNavigate();
    const { createShoe, isPending, fetchError } = useCreateShoe();
    const {
        values,
        handleInputChange,
        handleSubmit,
        validationErrors,
        isSuccessful
    } = useForm(initialValues, createShoe, shoeSchema)

    useEffect(() => {
        if (isSuccessful) {
            navigate("/shoes");
        }
    }, [isSuccessful])
    return (

        <form onSubmit={handleSubmit} className={styles["create-shoe-form"]}>
            <h2 className={styles["form-title"]}>ADD NEW SHOE MODEL</h2>

            <div className={styles["form-group"]}>
                <label>Model Name</label>
                <input
                    type="text"
                    placeholder="e.g. Nike Downshifter"
                    name="modelName"
                    className={styles["input-field"]}
                    value={values.modelName}
                    onChange={handleInputChange}
                />
                {validationErrors.modelName &&
                    validationErrors.modelName.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>

            <div className={styles["form-group"]}>
                <label>Brand</label>
                <input
                    type="text"
                    placeholder="e.g. Nike"
                    name="brand"
                    className={styles["input-field"]}
                    value={values.brand}
                    onChange={handleInputChange}
                />
                {validationErrors.brand &&
                    validationErrors.brand.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>
            <div className={styles["form-group"]}>
                <label>Price</label>
                <input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 99.99"
                    name="price"
                    className={styles["input-field"]}
                    value={values.price}
                    onChange={handleInputChange}
                />
                {validationErrors.price &&
                    validationErrors.price.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>

            <div className={styles["form-group"]}>
                <label>For</label>
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
                {validationErrors.gender &&
                    validationErrors.gender.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>
            <div className={styles["form-group"]}>
                <label>Image URL</label>
                <input
                    type="text"
                    placeholder="e.g. https://..."
                    name="imageUrl"
                    className={styles["input-field"]}
                    value={values.imageUrl}
                    onChange={handleInputChange}
                />
                {validationErrors.imageUrl &&
                    validationErrors.imageUrl.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>

            <div className={styles["form-group"]}>
                <label>Description</label>
                <textarea
                    placeholder="e.g. Inspired by the beach but made for city streets, the Nike Air Max Plus Utility gets a rugged upgrade perfect for your urban adventures. "
                    name="description"
                    className={styles["textarea-field"]}
                    value={values.description}
                    onChange={handleInputChange}
                >
                </textarea>
                {validationErrors.description &&
                    validationErrors.description.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
                {fetchError && <ErrorMessage>{fetchError}</ErrorMessage>}
            </div>
            <button disabled={isPending} className={styles["submit-button"]}>ADD MODEL</button>
        </form>
    )
}