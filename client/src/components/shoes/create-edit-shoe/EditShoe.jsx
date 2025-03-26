import { useNavigate, useParams } from "react-router"

import styles from "./CreateShoe.module.css"

import { useEditShoe, useGetShoe } from "../../../api/shoesApi";
import { shoeSchema } from "../../../utils/yupSchemas";
import useInputValidation from "../../../hooks/useInputValidation";
import ErrorMessage from "../../errors/ErrorMessage";

export default function EditShoe() {
    const navigate = useNavigate();

    const { shoeId } = useParams();
    const { shoeData, setShoeData } = useGetShoe(shoeId);
    const { isPending, fetchError, edit } = useEditShoe();
    const { validationErrors, validationFn } = useInputValidation(shoeSchema)

    function handleInputChange(e) {
        setShoeData((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }
    async function handleFormSubmit(e) {
        e.preventDefault();

        const validValues = await validationFn(shoeData);

        if (!validValues) {
            return;
        }
        const isSuccessful = await edit(validValues);

        isSuccessful && navigate(`/shoes/${shoeId}/details`);
    }

    return (

        <form onSubmit={handleFormSubmit} className={styles["create-shoe-form"]}>
            <h2 className={styles["form-title"]}>Edit Your Shoe Model</h2>

            <div className={styles["form-group"]}>
                <label>Model Name</label>
                <input
                    type="text"
                    placeholder="Enter model name"
                    name="modelName"
                    className={styles["input-field"]}
                    onChange={handleInputChange}
                    value={shoeData.modelName}
                />
                {validationErrors.modelName &&
                    validationErrors.modelName.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>

            <div className={styles["form-group"]}>
                <label>Brand</label>
                <input
                    type="text"
                    placeholder="Enter brand"
                    name="brand"
                    className={styles["input-field"]}
                    onChange={handleInputChange}
                    value={shoeData.brand}
                />
                {validationErrors.brand &&
                    validationErrors.brand.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>
            <div className={styles["form-group"]}>
                <label>Price</label>
                <input
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    className={styles["input-field"]}
                    onChange={handleInputChange}
                    value={shoeData.price}
                />
                {validationErrors.price &&
                    validationErrors.price.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>

            <div className={styles["form-group"]}>
                <label>Gender</label>
                <div className={styles["checkbox-group"]}>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Men"
                        checked={shoeData.gender === "Men"}
                        onChange={handleInputChange}
                    /> Men</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Women"
                        checked={shoeData.gender === "Women"}
                        onChange={handleInputChange}
                    /> Women</label>
                    <label><input
                        type="radio"
                        name="gender"
                        value="Unisex"
                        checked={shoeData.gender === "Unisex"}
                        onChange={handleInputChange}
                    /> Unisex</label>
                    {validationErrors.gender &&
                        validationErrors.gender.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
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
                    value={shoeData.imageUrl}
                />
                {validationErrors.imageUrl &&
                    validationErrors.imageUrl.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
            </div>

            <div className={styles["form-group"]}>
                <label>Description</label>
                <textarea
                    placeholder="Enter description"
                    name="description"
                    className={styles["textarea-field"]}
                    onChange={handleInputChange}
                    value={shoeData.description}
                >
                </textarea>
                {validationErrors.description &&
                    validationErrors.description.map((error, i) => <ErrorMessage key={i}>{error}</ErrorMessage>)}
                {fetchError && <ErrorMessage className={styles["error-msg"]}>{fetchError}</ErrorMessage>}
            </div>
            <button disabled={isPending} className={styles["submit-button"]}>EDIT MODEL</button>
        </form>
    )
}