import React, { useState } from 'react';
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const [githubColor, setgithubColor] = useState("#FF0000"); // Change the initial color to red
  const [linkedinColor, setLinkedinColor] = useState("#FF0000"); // Change the initial color to red
  const [mailColor, setMailColor] = useState("#FF0000"); // Change the initial color to red
  const [resumeColor, setResumeColor] = useState("#FF0000"); // Change the initial color to red

  const handlegithubClick = () => {
    window.open("https://github.com/abhi45ram", "_blank");
    setgithubColor("#FF0000"); // Change the color to red when clicked (already red)
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/abhishek-ramgoliyan-57712a230/", "_blank");
    setLinkedinColor("#FF0000"); // Change the color to red when clicked (already red)
  };

  const handleMailClick = () => {
    window.open("mailto:20bcs014@iiitdmj.ac.in", "_blank");
    setMailColor("#FF0000"); // Change the color to red when clicked (already red)
  };

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1Xv16y1xflx8JymsCHeB12KhbVv5fdJCu/view", "_blank");
    setResumeColor("#FF0000"); // Change the color to red when clicked (already red)
  };

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Abhishek Ramgoliyan</h4>
            <p>© {year} Abhishek Ramgoliyan All rights reserved</p>
            <p className='d-flex'>
            <i
                className='fa-brands fa-linkedin mx-3'
                onClick={handleLinkedInClick}
                style={{ cursor: 'pointer', color: linkedinColor }}
                onMouseEnter={() => setLinkedinColor("#000000")}
                onMouseLeave={() => setLinkedinColor("#FF0000")} // Change the color back to red on mouse leave
              ></i>
              <i
                className='fa-brands fa-github'
                onClick={handlegithubClick}
                style={{ cursor: 'pointer', color: githubColor }}
                onMouseEnter={() => setgithubColor("#000000")}
                onMouseLeave={() => setgithubColor("#FF0000")} // Change the color back to red on mouse leave
              ></i>
              
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p> Airport Rd, PDPM IIITDM Jabalpur Campus, Khamaria, Jabalpur, Madhya Pradesh 482005</p>
            <p
              onClick={handleMailClick}
              style={{ cursor: 'pointer', color: mailColor }}
              onMouseEnter={() => setMailColor("#000000")}
              onMouseLeave={() => setMailColor("#FF0000")} // Change the color back to red on mouse leave
            >
              20bcs014@iiitdmj.ac.in
            </p>
            <p>+91 7457825766</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p
              onClick={handleResumeClick}
              style={{ cursor: 'pointer', color: resumeColor }}
              onMouseEnter={() => setResumeColor("#000000")}
              onMouseLeave={() => setResumeColor("#FF0000")} // Change the color back to red on mouse leave
            >
              Resume
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
