import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
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
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;