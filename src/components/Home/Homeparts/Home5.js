import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Homeparts/Home5.module.css'
import { BsArrowRight } from 'react-icons/bs'
import wine_5 from '../../../assets/wine_5.jpg'
import hero_2 from '../../../assets/hero_2.jpg'
import wine_4 from '../../../assets/wine_4.jpg'


function Home5() {
    const cards = [
        { img: wine_5 },
        { img: hero_2 },
        { img: wine_4 },
    ]
    return (
        <div className={style.main}>
            <div className={style.title}>
                <h2>Wine's Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                <Link to="/">View All Products <BsArrowRight /> </Link>
            </div>
            <div className={style.cards_block}>
                {
                    cards.map((card, index) => {
                        return (
                            <div key={index} className={style.cards_box} >
                                <img src={card.img} alt="#" />
                                <h3>What You Need To Know About Premium Rosecco</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                <h6>Dave Rogers in News</h6>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home5