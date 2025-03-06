import "./Login.css"

export default function Login() {
    return (
        <form action="#" className="login-form">
            <h1>Login</h1>
            <div className="inputs-container">
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                        required
                    />
                    <p className="error-msg">Error.</p>
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        required
                    />
                    <p className="error-msg">Error.</p>
                </div>
            </div>

            <button className="login-btn">LOGIN</button>
            <p>You don't have an account ? <a href="#">Register here.</a></p>
        </form>
    )
}