import React, { Component } from 'react'
import OrderHistory from './OrderHistory'
import CreateProduct from'./CreateProduct'
import CreateRestaurant from './CreateRestaurant'
import CreateCategory from './CreateCategory'
import {Routes,Route} from "react-router-dom"
import ReceiveOrder from './ReceiveOrder'


export default function AdminRoutes (props) {
     
        return (
            <div>
                <Routes>
                    <Route path="/OrderHistory" element={props.history.map(element=><OrderHistory {...element}/>)}/>
                    <Route path="/CreateProduct" element={<CreateProduct/>}/>
                    <Route path="/CreateCategory" element={<CreateCategory/>}/>
                    <Route path="/CreateRestaurant" element={<CreateRestaurant/>}/>
                    <Route path="/Orders" element={props.items.map(elememt=><ReceiveOrder {...elememt}/>)}/>
                </Routes>
            </div>
        );
}