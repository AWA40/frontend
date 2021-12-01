import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Secondview from './Secondview';
import Header from './components/Header';
import Search from './Search';
import AdminPage from './AdminSide/AdminPage';
import CreateRestaurant from './AdminSide/CreateRestaurant';
import OrderHistory from './AdminSide/OrderHistory';
import CreateCategory from './AdminSide/CreateCategory';
import CreateProduct from './AdminSide/CreateProduct';
import ReceiveOrder from './AdminSide/ReceiveOrder'


class App extends React.Component{
  constructor(props){
    super(props);
    
  }

render() {
  return (
    <BrowserRouter>
      <Header />
    <h1>Hello User X</h1>    
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path = "/secondview" element={<Secondview/>} />
        <Route path = "/search" element={<Search/>} />

        <Route path="/Admin" element={<AdminPage/>}>
          <Route path="/Admin/CreateRestaurant" element={<CreateRestaurant />} />
          <Route path="/Admin/OrderHistory" element={<OrderHistory />} /> 
          <Route path="/Admin/CreateCategory" element={<CreateCategory />} />
          <Route path="/Admin/CreateProduct" element={<CreateProduct />} />
          <Route path="/Admin/Orders" element={<ReceiveOrder/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }
}

export default App;