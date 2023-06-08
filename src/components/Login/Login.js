import { useState } from "react";
import { changeHandler } from "../../utils/utils";
import { regexValidator } from "../../utils/validations";

export function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        email: false,
        password: false
    });

    const submitHandler = (ev, userData) => {
        ev.preventDefault();
        console.log(userData);
    }

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={(ev) => submitHandler(ev, data)}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={data.email}
                        onChange={(ev) => changeHandler(ev, setData)}
                        onBlur={
                            () => regexValidator(
                                // eslint-disable-next-line
                                "^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$",
                                data.email,
                                "email",
                                setError
                            )
                        }
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={data.password}
                        onChange={(ev) => changeHandler(ev, setData)}
                        required
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <a href="/">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
    );
}