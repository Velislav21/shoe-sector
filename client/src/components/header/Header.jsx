import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles["site-header"]}>
            <div className={styles["logos-container"]}>
                <a href="#" className={styles["logo"]}>My Logo</a>
            </div>

            <nav>
                <ul className={styles["nav-list"]}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Logout</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Create</a></li>
                    <li>
                        <a href="#"
                        >My Cart
                            <i className="fa-solid fa-cart-shopping"></i> 
                            {/* Check the styling of the icons when added */}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}