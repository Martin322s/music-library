import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <>
            <div id="wrapper">
                <Header />
                <main>
                    <Home />
                    <Dashboard />
                    <Register />
                    <Login />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;