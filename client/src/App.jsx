import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import AddToCard from "./Pages/AddToCard";
import CheckOut from "./Pages/CheckOut";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PaymentPage from "./Pages/paymentPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookdetails" element={<ProductPage />} />
        <Route path="/addtocart" element={<AddToCard />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/pay" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
