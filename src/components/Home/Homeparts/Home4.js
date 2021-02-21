import React from 'react'
import style from '../Homeparts/Home4.module.css'
import person_2 from '../../../assets/person_2.jpg'
import person_1 from '../../../assets/person_1.jpg'
import person_3 from '../../../assets/person_3.jpg'

function Home4() {
    const persons = [
        { img: person_1, title: "— Allie Smith" },
        { img: person_2, title: "— Levi Morris" },
        { img: person_3, title: "— Collin Miller" },
    ]
    return (
        <div className={style.main}>
            <div className={style.container}>
                {
                    persons.map((person, index) => {
                        return (
                            <div className={style.block} key={index}>
                                <img src={person.img} alt="#" />
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                                <h6>{person.title}</h6>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home4