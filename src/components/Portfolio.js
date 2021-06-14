import React from 'react'

const Portfolio = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project" id="atf-h2">
          <h2>All The Feels</h2>
          <div className="info" id="atf">
            <img src="imgs/atf.png" alt="all_the_feels" />
            <div className="desc">
              <h3>Description:</h3>
              <p>
                All The Feels is a Mood-Booster app with Full CRUD functionality and was built with a React frontend and a Django API server. This app was inspired by the emotional state that our team was in as project week began. If a user is not in the best of moods they will be able hop on to All The Feels to get a positive boost and maybe even have a laugh or two! This project was great experience working collaboratively in a React App with multiple components!
              </p>
              <p className="built">Built with: REACT, JAVASCRIPT, AXIOS, CSS3/BOOTSTRAP, PYTHON, DJANGO, PSQL</p>
              <div className="project-links">
                <a href="https://github.com/thewrightbrandon/All_The_Feels_CRA" className="btn code-btn" target="_blank" rel="noreferrer"><img src="imgs/code.png" alt="code-icon"/></a>
                <a href="https://all-the-feels-app.herokuapp.com/" className="btn" target="_blank" rel="noreferrer"><img src="imgs/site.png" className="site-btn" alt="site-icon"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <h2>PenPursue</h2>
          <div className="info" id="pen">
            <img src="imgs/penpursue.png" alt="penpursue" />
            <div className="desc">
              <h3>Description:</h3>
              <p>
                PenPursue is an app that allows writers to log their information of their writings. Inspired by my own love for writing and the mental strain of remembering every aspect of the writing as well as other ideas and features of the story. The app has sections that will allow the writer to divide their works by: characters, settings, plot, chapters, and notes.
              </p>
              <p className="built">Built with: MONGO, MONGODB, NODEJS, EXPRESS, MONGOOSE, EJS</p>
              <div className="project-links">
                <a href="https://github.com/rayuchtai/penpursue" className="btn code-btn" target="_blank" rel="noreferrer"><img src="imgs/code.png" alt="code-icon"/></a>
                <a href="https://penpursue.herokuapp.com/elements" className="btn" target="_blank" rel="noreferrer"><img src="imgs/site.png" className="site-btn" alt="site-icon"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <h2>R.W. Reading</h2>
          <div className="info" id="tarot">
            <img src="imgs/tarot.png" alt="tarot" />
            <div className="desc">
              <h3>Description:</h3>
              <p>
                R.W. Reading is an app that allows the user to experience a single card reading. Inspired by my interest in tarot reading and the interesting story told by the cards themselves and meanings of each indiviual card. Utilizing a third party api, I mimicked a single card reading.
              </p>
              <p className="built">Built with: HTML, CSS, JAVASCRIPT, JQUERY</p>
              <div className="project-links">
                <a href="https://github.com/rayuchtai/tarotreading" className="btn code-btn" target="_blank" rel="noreferrer"><img src="imgs/code.png" alt="code-icon"/></a>
                <a href="https://rider-waite-tarot-simple-app.netlify.app/" className="btn" target="_blank" rel="noreferrer"><img src="imgs/site.png" className="site-btn" alt="site-icon"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
