import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Secondview from './Secondview';
import Header from './components/Header';
import Search1 from './Search1';
import RestaurantList from './RestaurantList'
import ShoppingCart from './ShoppingCart'



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
    </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;