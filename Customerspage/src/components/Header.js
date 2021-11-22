import React from "react";
import styles from './Header.module.css';


export default function Header() {

    const mainStyle = { paddingLeft: '4%', paddingRight: '3%' };

    return (
        <div className={ styles.header }>
            <div className={ styles.container }>
                <div className={styles.brand}>Ravintola X</div>
                <div style={mainStyle}><button>Etusivu</button></div>
                <div style={mainStyle}><button>Ravintolat</button></div>
                <div style={mainStyle}><button>Ostoskori</button></div>
                <div style={mainStyle}><button>Kirjaudu sisään</button></div>
                <input type="text" placeholder="Etsi" name="etsi"/>
            </div>
        </div>
    )
}