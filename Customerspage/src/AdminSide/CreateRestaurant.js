import React from 'react'
import style from './CreateRestaurant.module.css';
import { Link } from 'react-router-dom'



export default function CreateRestaurant() {
    return (
        <div className={style.box_margin}>
            <div className={style.box}>
                <div>
                    <div className={style.header_style}>Restaurant information</div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Restaurant name</div>
                        <input className={style.input_style} 
                        placeholder="Please enter the name of the restaurant" />
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Restaurant address</div>
                        <input className={style.input_style} 
                        placeholder="Please enter the address of the restaurant"/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Operatin hours</div>
                        <input className={style.input_style} 
                        placeholder="Please enter the operating hours of the restaurant"/>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Image</div>
                    </div>
                    <div className={style.input_margin}>
                    <div className={style.information_style}>Select restaurant type</div>
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Select price level</div>
                    </div>
                </div>
                <div className={style.button_margin}>
                    <Link to='/Manager'><button className={style.button_size}>Cancel</button></Link>
                    <button className={style.button_size}>Create</button>
                </div>
            </div>
            
        </div>
    )
}