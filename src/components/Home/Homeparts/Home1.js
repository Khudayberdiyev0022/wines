import React, { Component, Fragment } from 'react'
import style from '../../Home/Homeparts/Home1.module.css'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Carousel from 'react-elastic-carousel'
import hero_1 from '../../../assets/hero_1.jpg'
import hero_2 from '../../../assets/hero_2.jpg'

class Home1 extends Component {
    state = {
        items: [
            { id: 1, title: 'Royal Wine', paragraf: 'Grape Wine', img: hero_1 },
            { id: 2, title: 'Welcome', paragraf: 'Wines for Everyone', img: hero_2 },
            { id: 1, title: 'Royal Wine', paragraf: 'Grape Wine', img: hero_1 },
            { id: 2, title: 'Welcome', paragraf: 'Wines for Everyone', img: hero_2 },
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Fragment>
                <Carousel enableAutoPlay='true' autoPlaySpeed="5000" pagination="2">
                    {items.map((item, index) => {
                        return (
                            <div key={index} className={style.main}>
                                <div className={style.carousel} key={item.id} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className={style.dark}></div>
                                    <div className={style.items}>
                                        <p>{item.title}</p>
                                        <h2>{item.paragraf}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Carousel>
                <div className={style.container}>
                    <p>Our Products</p>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</h6>
                    <Link to="/">View All Products <BsArrowRight /> </Link>
                </div>
            </Fragment>

        )
    }
}
export default Home1