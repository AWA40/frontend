import React, { Component, Link } from 'react'
import AdminNavigation from './AdminNavigation'
import AdminRoutes from './AdminRoutes'
import data from './NewOrderData.json'
import historyData from './OrderHistoryData.json'


export default class AdminPage extends Component {
    constructor(props){
        super(props);
        this.state={
            item: data.NewOrderData,
            history: historyData.OrderHistoryData
        }
    }
    render(){
        return (
            <div>
                <div> <AdminNavigation/> </div>
                <div> <AdminRoutes items={this.state.item} history={this.state.history}/> </div>
            </div>
            
        )
    }
    
}