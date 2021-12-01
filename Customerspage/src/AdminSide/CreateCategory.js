import React from 'react'
import style from './CreateRestaurant.module.css';
import { Link } from 'react-router-dom'


export default function CreateCategory() {
    return (
        <div className={style.box_margin}>
            <div className={style.box_category}>
                <div>
                    <div className={style.header_style}>Create a new category</div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Category</div>
                        <input className={style.input_style} placeholder="Please enter the name of the category" /></div>
                        <div className={style.button_marginCategory}>
                    <Link to='/Manager'><button className={style.button_size}>Cancel</button></Link>
                    <button className={style.button_size}>Create</button>
                </div>
                </div>
            </div>
        </div>
    )
}