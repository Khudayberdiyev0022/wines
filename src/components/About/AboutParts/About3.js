import React from 'react'
import style from '../AboutParts/About3.module.css'
import icon_truck from '../../../assets/icon_truck.png'
import icon_refresh from '../../../assets/icon_refresh.png'
import icon_help from '../../../assets/icon_help.png'

function About3() {
    const aboutCards = [
        { icon: icon_truck, title: "Free Shipping" },
        { icon: icon_refresh, title: "Free Returns" },
        { icon: icon_help, title: "Customer Support" },
    ]
    return (
        <div className={style.main}>
            <div className={style.container}>
                {
                    aboutCards.map((card, index) => {
                        return (
                            <div key={index} className={style.box}>
                                <div className={style.icon_box}>
                                    <img src={card.icon} alt="#" />
                                    <p>{card.title}</p>
                                </div>
                                <p className={style.paragraf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About3
