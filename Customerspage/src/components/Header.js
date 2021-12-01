import React from "react";
import styles from './Header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {

    const mainStyle = { paddingLeft: '4%', paddingRight: '3%' };

    return (
        <div className={ styles.header }>
            <div className={ styles.container }>
                <div className={styles.brand}>Restaurant X</div>
                <div style={mainStyle}><button>Home</button></div>
                <div style={mainStyle}><button>Restaurants</button></div>
                <div style={mainStyle}><button>Shopping cart</button></div>
                <div style={mainStyle}><Link to="/Admin"><button>Admin</button></Link></div>
                <div style={mainStyle}><button>Log in</button></div>
                <div style={mainStyle}><Link to="Search"> <button>Search</button> </Link> </div>
            </div>
        </div>
    )
}