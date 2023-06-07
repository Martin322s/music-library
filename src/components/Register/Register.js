import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { changeHandler } from "../../utils/utils";
import { passwordsMatch, regexValidator } from "../../utils/validations";
import * as userService from "../../services/userService";
import { useLogin } from "../../hooks/useLogin";

export function Register() {
    const navigate = useNavigate();
    const { setUser, setLoggedIn } = useLogin();

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

        if (!error.email && !error.password) {
            userService.registerUser({ email: userData.email, password: userData.password })
                .then(user => {
                    if (user.message) {
                        throw user.message;
                    } else {
                        setUser(user);
                        setLoggedIn(true);
                        navigate('/');
                    }
                })
                .catch(err => {
                    alert(err);
                });
        } else {
            alert("Invalid email or password!");
        }
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
                        id="register-password"
                        placeholder="password"
                        value={data.password}
                        onChange={(ev) => changeHandler(ev, setData)}
                        onBlur={() => passwordsMatch(data.password, data.repassword, 'password', setError)}
                        required
                    />
                    <input
                        type="password"
                        name="repassword"
                        id="repeat-password"
                        placeholder="repeat password"
                        value={data.repassword}
                        onChange={(ev) => changeHandler(ev, setData)}
                        onBlur={() => passwordsMatch(data.password, data.repassword, 'password', setError)}
                        required
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