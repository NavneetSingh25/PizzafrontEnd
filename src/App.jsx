import AddProduct from "./pages/Admin/AddProduct";
import Denied from "./pages/Auth/Denied";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/Auth/NotFound";
import Signup from "./pages/Auth/SignUp";
import Home from "./pages/Home"
import { Route,Routes } from "react-router-dom";
import ProductDetails from "./pages/Products/ProductDetails";
import CartDetails from "./pages/Cart/CartDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            < Route path="/denied" element={<Denied/>} />
            <Route path="/auth/signup" element={<Signup/>} />
            <Route path="/auth/login" element={<Login/>} />
            <Route path="/auth/logout" element={<Login/>} />
            <Route path="/product/:productId" element={<ProductDetails/>} />
            <Route path="/cart" element={<CartDetails/>} />

            <Route path="/admin/addproduct" element={<AddProduct/>} />
            <Route path="*" element={<NotFound/>} />

        </Routes>
    );
}

export default App
