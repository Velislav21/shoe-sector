import { Link } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import styles from "./Navbar.module.css"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useLogout } from "../../hooks/useLogout"

export default function Navbar() {

    const { user } = useAuthContext()
    const { logout } = useLogout();

    function logoutHandler() {
        logout();
    }

    return (
        <header className={styles["site-header"]}>
            <div className={styles["logos-container"]}>
                <Link to="#" className={styles["logo"]}>My Logo</Link>
            </div>
            {/* Maybe use NavLink instead */}
            <nav>
                <ul className={styles["nav-list"]}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/shoes">All Products</Link></li>
                    {user ?
                        <>
                            <li><Link to="/create">Create</Link></li>
                            <li>
                                <button>
                                    My Cart
                                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                </button>
                            </li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={logoutHandler}>Logout</button></li>
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