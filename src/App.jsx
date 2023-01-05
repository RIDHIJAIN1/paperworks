import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import Register from "./pages/Register";
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/Product" element={<Product />}></Route>
        <Route exact path="/Productlist" element={<ProductList />}></Route>
      </Routes>
    </BrowserRouter>
  )
  // return <Home/>;
  // return <Product/>;
  // return <ProductList/>;
  // return <Cart/>;
  // return <Login/>;
  // return <Register/>;
};

export default App;