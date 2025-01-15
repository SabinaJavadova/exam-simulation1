import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Details from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/Detail/:id" element={<Details />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
