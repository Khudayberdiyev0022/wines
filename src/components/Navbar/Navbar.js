import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {
    return (
        <div className={style.main}>
            <div className={style.logo}>
                <h1>HBBH</h1>
                <p>IT Company</p>
            </div>  
                    <div className={style.links}>
       
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/wines">Wines</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
            </div>
    )
}

export default Navbar
