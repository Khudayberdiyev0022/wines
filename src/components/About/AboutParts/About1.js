import React from 'react'
import style from '../AboutParts/About1.module.css'
import hero_1 from '../../../assets/hero_1.jpg'
function About1() {
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.block}>
                    <img src={hero_1} alt="#" />
                </div>
                <div className={style.block}>
                    <h2>How We Started</h2>
                    <p>Rerum quis soluta, esse, cupiditate voluptate ipsum? Sunt unde eos vitae suscipit harum eligendi reprehenderit, illo eaque sit!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequuntur hic quaerat cupiditate tempore temporibus nulla at eum!</p>
                </div>
            </div>
        </div>
    )
}

export default About1