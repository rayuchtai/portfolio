import React from 'react'

const Resume = () => {
  return (
    <>
      <h1>My Resume</h1>
      <div className="resume">
        <img src="imgs/resume.png" alt="resume" id="resume-img"/>
        <a href="files/resume.pdf" id="download-btn" className="btn btn-light" download>Download</a>
      </div>
    </>
  )
}

export default Resume
