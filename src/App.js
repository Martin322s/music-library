import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { AuthProvider } from "./contexts/AuthContext";
import { Logout } from "./components/Logout/Logout";

function App() {
    return (
        <div id="wrapper">
            <AuthProvider>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Dashboard />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/details" element={<Details />} />
                        <Route path="/edit" element={<Edit />} />
                    </Routes>
                </main>
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default App;