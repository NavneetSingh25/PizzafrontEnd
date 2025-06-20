import Signup from "./pages/Auth/SignUp";
import Home from "./pages/Home"
import { Route,Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth/signup" element={<Signup/>} />

        </Routes>
    );
}

export default App
