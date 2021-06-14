import React from 'react'

const Portfolio = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects">
        <div className="atf-project">
          <h2>All The Feels</h2>
          <div className="atf-info">
            <img src="imgs/atf.png" alt="all_the_feels" />
          </div>
        </div>
        <div className="penpursue-project">
          <h2>PenPursue</h2>
          <div className="pen-info">
            <img src="imgs/penpursue.png" alt="penpursue" />
          </div>
        </div>
        <div className="tarot-project">
          <h2>RW Tarot Reading</h2>
          <div className="tarot-info">
            <img src="imgs/tarot.png" alt="tarot" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
