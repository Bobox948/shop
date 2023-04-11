import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Navbar from "./Navbar";


const RouteSwitch = () => {
  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;