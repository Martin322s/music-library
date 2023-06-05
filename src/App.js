import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";

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
                    <Create />
                    <Details />
                    <Edit />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;