import React from 'react'
import "./About.css"

function About() {
  return (
    <>
    <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
      <div className="container main_container d-flex justify-content-around flex-wrap">
        <div className="left_container mt-5" style={{ width: 500 }}>
          <h2>Abhishek Ramgoliyan</h2>
          <p style={{ color: "black", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Hi, I am Abhishek Ramgoliyan, a passionate individual pursuing my Bachelor's degree in Technology from IIITDM Jabalpur, Madhya Pradesh. My area of expertise lies in Computer Science and Engineering, and I am currently in my final year of studies.With a strong foundation in MERN stack development, 
I invite you to explore my portfolio of projects, which demonstrates my dedication, creativity, and problem-solving abilities. Each project highlights my meticulous approach to software development, attention to detail, and commitment to delivering high-quality solutions.</p>
        </div>
        <div className="right_container mt-3">
          <img src="Abhishek.jpg" alt="image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About