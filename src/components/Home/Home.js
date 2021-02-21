import React, { Fragment } from 'react'
import Home1 from './Homeparts/Home1'
import Home2 from './Homeparts/Home2'
import Home3 from './Homeparts/Home3'
import Home4 from './Homeparts/Home4'
import Home5 from './Homeparts/Home5'


function Home() {
  return (
    <Fragment>
      <Home1 />
      <Home2 />
      <Home3 title='Home for everyone' />
      <Home4 />
      <Home5 />
    </Fragment>
  )
}

export default Home
