import { Route, Routes } from "react-router"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import ShoesList from "./components/shoes/shoes-list/ShoesList"

import ShoeDetails from "./components/shoes/shoe-details/ShoeDetails"
import Login from "./components/user/login/Login"
import Register from "./components/user/register/Register"
import CartModal from "./components/modals/CartModal"
import { AuthContextProvider } from "./context/AuthContext"

function App() {

    return (
        <>
            <AuthContextProvider>

                <Header />
                <main>
                    <Routes>
                        <Route path="/shoes" element={<ShoesList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    {/* <ShoeDetails/> */}
                    {/* <Register/> */}
                    {/* <CartModal /> */}
                </main>
                <Footer />
            </AuthContextProvider>
        </>
    )
}

export default App
