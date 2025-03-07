import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import "./CartModal.css"


export default function CartModal() {
    return (
        <dialog open className="cart-modal">
            <div className="shoes-container">

                <div className="shoe-info">
                    <div className="cart-img-container">
                        <img
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92eec47b-96f7-4fc9-8b9f-996b69863451/NIKE+SB+ZOOM+JANOSKI+OG%2B+PRM.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="shoe-model">Nike</p>
                        <p className="size">Size: 42</p>
                        <p className="quantity">BGN 1 x 99.99</p>
                        <p className="cart-item-btn-container">
                            <button>
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            </button>
                            1
                            <button>
                                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <p className="total-cost">
                Total cost: <strong>BGN 99.99</strong>
            </p>
            <button className="cart-btn">GO TO CART</button>
        </dialog>
    )
}