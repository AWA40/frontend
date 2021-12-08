import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Search1 from './components/Search1';
import RestaurantList from './components/RestaurantList'
import ShoppingCart from './components/ShoppingCart'
import LogIn from './components/LogIn'



function App() {

  return (
    <BrowserRouter>
    <div>
      <Header />
    <h1>Hello User X</h1>
    
    
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path = "/search" element={<Search1/>} />
      <Route path = "/restaurants" element={<RestaurantList/>} />
      <Route path = "/shoppingcart" element={<ShoppingCart/>} />
      <Route path = "/login" element={<LogIn/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;