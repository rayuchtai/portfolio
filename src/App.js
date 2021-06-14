import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

//importing components
import Home from './components/Home.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'
import Resume from './components/Resume.js'

const App = () => {
  return (
    <>
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
              <Link className="nav-link" to="/resume">RESUME</Link>
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
          <Route path="/resume">
            <div className="resume-container">
              <Resume />
            </div>
          </Route>
          <Route path="/">
            <div className="home-container">
              <Home />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    <footer>
      <h5>Connect with me: Linkedin and Github</h5>
    </footer>
  </>
  )
}

export default App
