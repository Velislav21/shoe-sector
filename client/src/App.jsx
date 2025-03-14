import { Route, Routes } from "react-router"

import Footer from "./components/footer/Footer"
import Navbar from "./components/nav-bar/Navbar"
import ShoesList from "./components/shoes/shoes-list/ShoesList"

import ShoeDetails from "./components/shoes/shoe-details/ShoeDetails"
import Login from "./components/user/login/Login"
import Register from "./components/user/register/Register"
import CartModal from "./components/modals/CartModal"
import CreateShoe from "./components/shoes/create-edit-shoe/CreateShoe"
import EditShoe from "./components/shoes/create-edit-shoe/EditShoe"
import { AuthContextProvider } from "./context/AuthContext"

import AuthorizedRoutes from "./utils/route-guards/AuthorizedRoutes"
import UnAuthorizedRoutes from "./utils/route-guards/UnAuthorizedRoutes"

function App() {

    return (
        <>
            <AuthContextProvider>

                <Navbar />

                <main>
                    <Routes>
                        <Route path="/shoes" element={<ShoesList />} />

                        <Route element={<UnAuthorizedRoutes />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>

                        <Route element={<AuthorizedRoutes />}>
                            <Route path="/create" element={<CreateShoe />} />
                            <Route path="/shoes/:shoeId/details" element={<ShoeDetails />} />
                            <Route path="/shoes/:shoeId/edit" element={<EditShoe />} />
                        </Route>

                    </Routes>
                    {/* <CartModal /> */}
                </main>

                <Footer />
            </AuthContextProvider>
        </>
    )
}

export default App
