import { Link } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles["site-header"]}>
            <div className={styles["logos-container"]}>
                <a href="#" className={styles["logo"]}>My Logo</a>
            </div>
            {/* Maybe use NavLink instead */}
            <nav>
                <ul className={styles["nav-list"]}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shoes">All Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="#">Logout</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create">Create</Link></li>
                    <li>
                        <a href="#"
                        >My Cart
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            {/* Check the styling of the icons when added */}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}