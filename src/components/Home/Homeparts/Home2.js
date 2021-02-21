import React from 'react'
import style from '../Homeparts/Home2.module.css'
import wine_1 from '../../../assets/wine_1.png'
import wine_2 from '../../../assets/wine_2.png'
import wine_3 from '../../../assets/wine_3.png'

function Home2() {
    const images = [wine_1, wine_2, wine_3]
    return (
        <div className={style.main}>
            <div className={style.container}>
                {
                    images.map((image, index) => {
                        return (
                            <div key={index} className={style.card}>
                                <div className={style.image} style={{ backgroundImage: `url(${image})` }}></div>
                                <div className={style.information}>
                                    <h3>Nostrud labore exercitation</h3>
                                    <h5>623.000 $</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home2
