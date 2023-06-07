import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export function Header() {
    const { user } = useLogin();
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo-img" src="./images/logo.png" alt="logo" />
            </Link>
            <nav>
                <div>
                    <Link to="/catalog">Dashboard</Link>
                </div>
                <div className="user">
                    {user.accessToken ?
                        <>
                            <Link to="/create">Add Album</Link>
                            <Link to="/logout">Logout</Link>
                        </>
                        : null
                    }
                </div>
                <div className="guest">
                    {!user.accessToken ?
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                        : null
                    }
                </div>
            </nav>
        </header >
    );
}