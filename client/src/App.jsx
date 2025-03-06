import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import ShoesList from "./components/shoes/shoes-list/ShoesList"

import ShoeDetails from "./components/shoes/shoe-details/ShoeDetails"
import Login from "./components/user/login/Login"
import Register from "./components/user/register/Register"

function App() {

    return (
        <>
            <Header />
            <main>
                {/* <ShoesList /> */}
                {/* <ShoeDetails/> */}
                <Register/>
            </main>
            <Footer/>
        </>
    )
}

export default App
