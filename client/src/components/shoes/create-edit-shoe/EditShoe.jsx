import { useNavigate, useParams } from "react-router"
import styles from "./CreateShoe.module.css"
import { useEditShoe, useGetShoe } from "../../../api/shoesApi";

export default function EditShoe() {
    const navigate = useNavigate();

    const { shoeId } = useParams();
    const { shoeData, setShoeData } = useGetShoe(shoeId);
    const { edit, isPending } = useEditShoe();


    function handleInputChange(e) {
        setShoeData((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }
    function handleFormSubmit(e) {
        e.preventDefault();

        edit(shoeData).finally(() => {

            navigate(`/shoes/${shoeData._id}/details`);
        });
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
                    value={shoeData.brand}
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
                    value={shoeData.price}
                    required />
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
                    required />
            </div>

            <div className={styles["form-group"]}>
                <label>Description</label>
                <textarea
                    placeholder="Enter description"
                    name="description"
                    className={styles["textarea-field"]}
                    onChange={handleInputChange}
                    value={shoeData.description}
                    required
                ></textarea>
            </div>
            <button disabled={isPending} className={styles["submit-button"]}>EDIT MODEL</button>
        </form>
    )
}