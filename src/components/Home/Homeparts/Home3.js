import React from 'react'
import style from '../Homeparts/Home3.module.css'

function Home3({ title }) {
    return (
        <div className={style.main}>
            <div className={style.dark}>
            </div>
            <div className={style.container}>
                <p>Welcome</p>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Home3