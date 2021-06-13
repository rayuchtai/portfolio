import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

//importing components
import Home from './components/Home.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="nav-bar">
          <ul className="nav nav-tabs justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <div className="about-container">
              <About />
            </div>
          </Route>
          <Route path="/portfolio">
            <div className="portfolio-container">
              <Portfolio />
            </div>
          </Route>
          <Route path="/contact">
            <div className="contact-container">
              <Contact />
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
