import React from 'react'
import style from './Product.module.css'

export default function Product(props) {
    return (
        <div className={style.product_margin}>
            <div>
                {props.Item}
            </div>
            <div>
                {props.Price}
            </div>
        </div>
    )
}