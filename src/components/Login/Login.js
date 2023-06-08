import { useContext, useState } from "react";
import { changeHandler } from "../../utils/utils";
import { regexValidator } from "../../utils/validations";
import * as userService from "../../services/userService";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

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

        if ((data.email && data.password) && (!error.email && !error.password)) {
            userService.loginUser({ email: userData.email, password: userData.password })
                .then(user => {
                    if (user.message) {
                        throw user.message;
                    } else {
                        userLogin(user);
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