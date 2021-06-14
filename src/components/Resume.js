import React from 'react'

const Resume = () => {
  return (
    <>
      <h1>My Resume</h1>
      <div className="resume">
        <a href="files/resume.pdf" className="btn btn-light" download>Download</a>
        <img src="imgs/resume.png" alt="resume" />
      </div>
    </>
  )
}

export default Resume
