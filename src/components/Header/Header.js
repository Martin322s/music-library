import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo-img" src="./images/logo.png" alt="logo" />
            </Link>
            <nav>
                <div>
                    <Link to="/catalog">Dashboard</Link>
                </div>
                {/* Logged-in users */}
                <div className="user">
                    <Link to="/create">Add Album</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                {/* Guest users */}
                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}