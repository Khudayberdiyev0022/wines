import React from 'react'
import { Link } from 'react-router-dom'
import Home2 from '../Home/Homeparts/Home2'
import Home3 from '../Home/Homeparts/Home3'
import Home4 from '../Home/Homeparts/Home4'
import style from '../Wines/Wines.module.css'
import { BsArrowRight } from 'react-icons/bs'

function Wines() {
    return (
        <div>
            <div className={style.container}>
                <p>Our Products</p>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</h6>
                <Link to="/">View All Products <BsArrowRight /> </Link>
            </div>
            <Home2 />
            <Home2 />
            <Home2 />
            <Home3 title="WINES FOR EVERYONE" />
            <Home4 />
        </div>
    )
}

export default Wines
