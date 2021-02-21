import React from 'react'
import Home3 from '../Home/Homeparts/Home3'
import Home4 from '../Home/Homeparts/Home4'
import About1 from './AboutParts/About1'
import About2 from './AboutParts/About2'
import About3 from './AboutParts/About3'

function About() {
    return (
        <div>
            <Home3 title="ABOUT US" />
            <About1 />
            <About2 />
            <About3 />
            <Home4 />
        </div>
    )
}

export default About