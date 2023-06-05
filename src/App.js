import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
    return (
        <>
            <div id="wrapper">
                <Header />
                <main>
                    <Home />
                    <Dashboard />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;