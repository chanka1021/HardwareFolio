import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pcparts from "../pages/PcParts";
import ItemDetails from "../pages/ItemDetails";
import PcBuilder from "../pages/PcBuilder";

const Routers = () => {
  const userExists = localStorage.getItem("user"); 
  const haveitems = true ;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pcparts" element={<Pcparts />} />
      <Route path="/pcbuilder" element={<PcBuilder />} />
      <Route path="/items/:id" element={<ItemDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout"  element={haveitems ? <Checkout /> : <Cart />} />
      <Route path="/login" element={userExists ? <Navigate to="/" /> : <Login />} />
      <Route path="/register"  element={userExists ? <Navigate to="/" /> : <Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
