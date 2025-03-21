import { Link, useNavigate, } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import styles from "./Navbar.module.css"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Navbar() {

    const { user, dispatch } = useAuthContext()
    const navigate = useNavigate();

    function logoutHandler() {
        dispatch({ type: "LOGOUT" })
        // localStorage.removeItem("user")
        navigate('/login')
    }

    return (
        <header className={styles["site-header"]}>
            <div className={styles["logos-container"]}>
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
                                <button>
                                    My Cart
                                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                </button>
                            </li>
                            <li><Link to={`/profile/${user._id}`}>{user.name}' Profile</Link></li>
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