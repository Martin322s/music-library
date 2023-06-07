import { useState } from "react";
import { Link } from "react-router-dom";
import { changeHandler } from "../../utils/utils";
import { passwordsMatch } from "../../utils/validations";

export function Register() {
    const [data, setData] = useState({
        email: "",
        password: "",
        repassword: ""
    });

    const [error, setError] = useState({
        email: false,
        password: false,
    });

    const submitHandler = (ev, userData) => {
        ev.preventDefault();
        
    }

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form 
                    className="login-form"
                    autoComplete=""
                    onSubmit={(ev) => submitHandler(ev, data)}
                >
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        value={data.email}
                        onChange={(ev) => changeHandler(ev, setData)}
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={data.password}
                        onChange={(ev) => changeHandler(ev, setData)}
                    />
                    <input
                        type="password"
                        name="repassword"
                        id="repeat-password"
                        placeholder="repeat password"
                        value={data.repassword}
                        onChange={(ev) => changeHandler(ev, setData)}
                        onBlur={() => passwordsMatch(data.password, data.repassword, 'password', setError)}
                    />
                    <button type="submit">register</button>
                    <p className="message">
                        Already registered? <Link to="/logins">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}