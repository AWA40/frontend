import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Secondview from './Secondview';
import Header from './components/Header';
import Search from './Search';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
    <h1>Hello User X</h1>
    
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path = "/secondview" element={<Secondview/>} />
      <Route path = "/search" element={<Search/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;