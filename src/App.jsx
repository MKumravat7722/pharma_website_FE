import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";

import { fetchCart } from "./redux/actions/cartActions";

export default function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  // 🔥 load cart once when app starts
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // 🔥 get cart count from Redux
  const cartCount =
    useSelector((state) => state.cart.cart?.cart_items?.length) || 0;

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<Products search={search} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}
