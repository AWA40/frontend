import React from 'react'
import style from './CreateProduct.module.css';
import {Link} from 'react-router-dom'

export default function CreateProduct() {
    return (
        <div className={style.box_margin}>
            <div className={style.box}>
                <div>
                    <div className={style.header_style}>Product information</div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Name</div>
                        <input className={style.input_style}
                        placeholder="Please enter the name of the product" />
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Description</div>
                        <input className={style.input_style}
                        placeholder="Please enter description of the product" />
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Price</div>
                        <input className={style.input_style}
                        placeholder="Please enter price of the product" />
                    </div>
                    <div className={style.input_margin}>
                        <div className={style.information_style}>Category</div>
                        <input className={style.input_style}
                        placeholder="Please enter gategory of the product" />
                    </div>
                    <div className={style.input_margin}>
                    <div className={style.information_style}>Image</div>
                    </div>
                </div>
                <div className={style.button_margin}>
                    <Link to='/Manager'><button className={style.button_size}>Cancel</button></Link>
                    <button className={style.button_size}>Create product</button>
                </div>
            </div>
            
        </div>
    )
}