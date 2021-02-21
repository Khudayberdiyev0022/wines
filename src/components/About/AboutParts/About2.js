import React from 'react'
import style from '../AboutParts/About2.module.css'
import hero_2 from '../../../assets/hero_2.jpg'

function About2() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.block}>
                    <h2>Wines For You All</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequuntur hic quaerat cupiditate tempore temporibus nulla at eum!</p>
                    <p>Magni debitis minima ipsam, itaque nam eligendi iusto? Adipisci blanditiis itaque ipsam cupiditate architecto, dolore saepe placeat culpa.</p>
                </div>
                <div className={style.block}>
                    <img src={hero_2} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default About2
