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
        <nav className="navbar sticky-top justify-content-end">
          <ul className="nav justify-content-end">
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
    <footer className="navbar justify-content-center fixed-bottom">
      <li><a href="https://www.linkedin.com/in/racheltaima/" target="_blank" rel="noreferrer"><img src="imgs/linkedin-icon.png" alt="linkedin-icon" /></a></li>
      <li><a href="https://github.com/rayuchtai" target="_blank" rel="noreferrer"><img src="imgs/github-icon.png" alt="github-icon" /></a></li>
      <li><a href="mailto:rayuchtai@gmail.com" target="_blank" rel="noreferrer"><img className="email" src="imgs/email-icon.png" alt="email-icon" /></a></li>
    </footer>
  </>
  )
}

export default App
