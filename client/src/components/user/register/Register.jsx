import "./Register.css"

export default function Register() {
    return (
        <form action="#" className="register-form">
            <h1>Register</h1>
            <p>Please, fill in this form to create an acoount.</p>
            <div className="inputs-container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        id="name"
                        required
                    />
                    <p className="error-msg">Errorasdsadasdasda.</p>
                </div>
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
                <div className="input-container">
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="rePassword"
                        id="rePassword"
                        required
                    />
                    <p className="error-msg">Error.</p>
                </div>
            </div>

            <button className="register-btn">CREATE ACCOUNT</button>
            <p>Alrady have an account ? <a href="#">Sign In</a></p>
        </form>
    )
}