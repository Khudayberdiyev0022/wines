import React from 'react'
// import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './Home/Home'
import NavbarMobile from './Navbar/NavbarMobile'
import Footer from './Footer/Footer'
import About from './About/About'
import Wines from './Wines/Wines'
import Shop from './Shop/Shop'
import Contact from './Contact/Contact'


function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <NavbarMobile />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/wines">
                        <Wines />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
