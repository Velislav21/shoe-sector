import { Route, Routes } from "react-router"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Navbar from "./components/nav-bar/Navbar"
import ShoesList from "./components/shoes/shoes-list/ShoesList"
import ShoeDetails from "./components/shoes/shoe-details/ShoeDetails"
import Login from "./components/user/login/Login"
import Register from "./components/user/register/Register"
import Logout from "./components/user/logout/Logout"
import UserProfile from "./components/user/profile/UserProfile"
import CreateShoe from "./components/shoes/create-edit-shoe/CreateShoe"
import EditShoe from "./components/shoes/create-edit-shoe/EditShoe"
import UserEdit from "./components/user/profile/UserEdit"
import Cart from "./components/cart/Cart"
import ErrorPage from "./components/error-page/ErrorPage"
import AuthorizedRoutes from "./components/route-guards/AuthorizedRoutes"
import UnAuthorizedRoutes from "./components/route-guards/UnAuthorizedRoutes"

import { AuthContextProvider } from "./context/AuthContext"
import { CartContextProvider } from "./context/CartContext"

console.log(import.meta.env.VITE_APP_SERVER_URL)
console.log("we are in: ", import.meta.env.MODE, " mode")

function App() {

    return (
        <AuthContextProvider>
            <CartContextProvider>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="*" element={<ErrorPage />} />

                        <Route path="/" element={<Home />} />
                        <Route path="/shoes" element={<ShoesList />} />
                        <Route path="/shoes/:shoeId/details" element={<ShoeDetails />} />

                        <Route element={<UnAuthorizedRoutes />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>

                        <Route element={<AuthorizedRoutes />}>
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/shoes/create" element={<CreateShoe />} />
                            <Route path="/shoes/:shoeId/edit" element={<EditShoe />} />

                            <Route path="/profile/:userId" element={<UserProfile />} />
                            <Route path="/profile/:userId/edit" element={<UserEdit />} />

                            <Route path="/cart" element={<Cart />} />

                        </Route>
                    </Routes>
                </main>
                <Footer />
            </CartContextProvider>
        </AuthContextProvider>
    )
}

export default App
