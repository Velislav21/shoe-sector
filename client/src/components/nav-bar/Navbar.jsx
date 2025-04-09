import { Link } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import styles from "./Navbar.module.css"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Navbar() {

    const { user } = useAuthContext()

    return (
        <header className={styles["site-header"]}>
            <div className={styles["logo-container"]}>
                <Link to="#" className={styles["logo"]}>My Logo</Link>
            </div>
            <nav>
                <ul className={styles["nav-list"]}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shoes">Catalog</Link></li>
                    {user ?
                        <>
                            <li><Link to="/shoes/create">Create</Link></li>
                            <li>
                                <Link to="/cart">
                                    My Cart
                                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                </Link>
                            </li>
                            <li><Link to={`/profile/${user._id}`}>{user.name} Profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>}

                </ul>
            </nav>
        </header>
    )
}