import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Slide from 'react-reveal/Slide'


function NavbarMobile() {
    const [clicked, setClicked] = useState(false)
    return (
        <div className={style.mainPhone}>
            <div className={style.container}>
                <div className={style.visible}>
                    <h3>HBBH</h3>
                    {clicked ? <AiOutlineClose onClick={() => setClicked(false)} /> : <AiOutlineMenu onClick={() => setClicked(true)} />}
                </div>
                <div className={clicked ? `${style.active} ${style.nav}` : `${style.nonActive} ${style.nav}`}>
                    <Slide left>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/wines">Wines</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/contact">Contact</Link>
                    </Slide>
                </div>


            </div>
        </div>
    )
}

export default NavbarMobile
