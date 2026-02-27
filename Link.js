import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";
// import Admin from "../About/About";
import Home from "../Home/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
