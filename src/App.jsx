import Login from "./pages/Auth/Login";
import NotFound from "./pages/Auth/NotFound";
import Signup from "./pages/Auth/SignUp";
import Home from "./pages/Home"
import { Route,Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth/signup" element={<Signup/>} />
            <Route path="/auth/login" element={<Login/>} />

            <Route path="*" element={<NotFound/>} />

        </Routes>
    );
}

export default App
