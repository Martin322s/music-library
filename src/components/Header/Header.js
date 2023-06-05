export function Header() {
    return (
        <header>
            <a id="logo" href="/">
                <img id="logo-img" src="./images/logo.png" alt="logo" />
            </a>
            <nav>
                <div>
                    <a href="/catalog">Dashboard</a>
                </div>
                {/* Logged-in users */}
                <div className="user">
                    <a href="/create">Add Album</a>
                    <a href="/logout">Logout</a>
                </div>
                {/* Guest users */}
                <div className="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}