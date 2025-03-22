import { useNavigate } from "react-router";

import styles from "./CreateShoe.module.css";
import ErrorMessage from "../../errors/ErrorMessage";
import { useCreateShoe } from "../../../api/shoesApi";
import useInputValidation from "../../../hooks/useInputValidation";

export default function CreateShoe() {
    const navigate = useNavigate();
    const { validateInput, errors } = useInputValidation();
    const { createShoe, isPending } = useCreateShoe();

    async function handleFormAction(formData) {

        const values = Object.fromEntries(formData);

        createShoe(values)
            .finally(() => navigate('/shoes'));
    };
    console.log(errors)
    return (

        <form action={handleFormAction} className={styles["create-shoe-form"]}>
            <h2 className={styles["form-title"]}>ADD NEW SHOE MODEL</h2>

            <div className={styles["form-group"]}>
                <label>Model Name</label>
                <input
                    type="text"
                    placeholder="e.g. Nike Downshifter"
                    name="modelName"
                    className={styles["input-field"]}
                    onBlur={validateInput}
                    defaultValue=""
                    required />
                {errors["modelName"] && <ErrorMessage>{errors["modelName"]}</ErrorMessage>}
            </div>

            <div className={styles["form-group"]}>
                <label>Brand</label>
                <input
                    type="text"
                    placeholder="e.g. Nike"
                    name="brand"
                    className={styles["input-field"]}
                    onBlur={validateInput}
                    defaultValue=""
                    required />
            </div>
            <div className={styles["form-group"]}>
                <label>Price</label>
                <input
                    type="number"
                    placeholder="e.g. 99.99"
                    name="price"
                    className={styles["input-field"]}
                    onBlur={validateInput}
                    defaultValue=""
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Gender</label>
                <div className={styles["checkbox-group"]}>
                    <label><input
                        type="radio"
                        name="gender"
                        defaultValue="Men"
                        required
                    /> Men</label>
                    <label><input
                        type="radio"
                        name="gender"
                        defaultValue="Women"
                        required
                    /> Women</label>
                    <label><input
                        type="radio"
                        name="gender"
                        defaultValue="Unisex"
                        required
                    /> Unisex</label>
                </div>
            </div>
            <div className={styles["form-group"]}>
                <label>Image URL</label>
                <input
                    type="text"
                    placeholder="e.g. https://..."
                    name="imageUrl"
                    className={styles["input-field"]}
                    onBlur={validateInput}
                    defaultValue=""
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Description</label>
                <textarea
                    placeholder="e.g. Inspired by the beach but made for city streets, the Nike Air Max Plus Utility gets a rugged upgrade perfect for your urban adventures. "
                    name="description"
                    className={styles["textarea-field"]}
                    onBlur={validateInput}
                    defaultValue=""
                    required
                ></textarea>
            </div>
            <button disabled={isPending} className={styles["submit-button"]}>ADD MODEL</button>
        </form>
    )
}