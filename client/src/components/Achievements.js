import React from 'react';
import "./About.css";

function About() {
  const handleGFGClick = () => {
    window.open("https://auth.geeksforgeeks.org/user/20bcs0142/practice", "_blank");
  };

  const handleLeetcodeClick = () => {
    window.open("https://leetcode.com/abhishekram7/", "_blank");
  };

  const handleCodingninjasClick = () => {
    window.open("https://www.codingninjas.com/studio/profile/Abhi_ram77", "_blank");
  };

  const handleCodechefClick = () => {
    window.open("https://www.codechef.com/users/abhishekr99", "_blank");
  };

  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Achievements</h2>
            <p style={{ color: "black", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
              <ul>
                <li>I solve 800 DSA problems on
                  <span
                    onClick={handleGFGClick}
                    style={{ cursor: 'pointer', color: '#0000FF' }} // Change the initial color to blue
                  > GFG</span>
                  ,
                  <span
                    onClick={handleLeetcodeClick}
                    style={{ cursor: 'pointer', color: '#0000FF', marginLeft: '5px', marginRight: '5px' }} // Change the initial color to blue
                  > Leetcode</span>
                  ,
                  <span
                    onClick={handleCodingninjasClick}
                    style={{ cursor: 'pointer', color: '#0000FF' }} // Change the initial color to blue
                  > Codingninjas</span>.
                </li>
                <li>I am an Expert in Problem Solving Dashboard on Codingninjas.</li>
                <li>
                  I am 3* at <span
                    onClick={handleCodechefClick}
                    style={{ cursor: 'pointer', color: '#0000FF' }} // Change the color to blue and add link for Codechef
                  >Codechef</span> .
                </li>
                <li>I got AIR 1347 among 135k in Codekaze June'23.</li>
                <li>I worked as a Software Developer in Fusion (College website of IIITDM, Jabalpur).</li>
                <li>I got a Global Rank 1 in July Long Two 2022 Division.</li>
              </ul>
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="achievements.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
