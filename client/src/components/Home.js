import React from 'react';
// import Button from 'react-bootstrap/Button';
import "./Home.css";

function Home() {
  return (
    <>
      <div className='container home_container'>
        <div className='home_innerdiv'>
          <div className='left_div'>
            <h2>Welcome to <span style={{ color: "#6c63ff" }}>Abhishek Ramgoliyan</span></h2>
            <p style={{ color: "black", letterSpacing: ".5px", marginTop: 2 }}>This home page of my portfolio serves as a gateway to the realm of my achievements, aspirations, and the remarkable projects I have undertaken. As you navigate through the pages of my portfolio, you will discover a tapestry of my expertise in various domains, including web development, programming, and technology. In addition to showcasing my technical skills, this platform offers glimpses into my personal journey, my inspirations, and the values that drive me.</p>
            {/* <div className="btn_div mt-4">
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}>Project</Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}>GitHub</Button>
            </div> */}
          </div>
          {/* divide in right way */}
          <div className='right_div'>
            <img src='Home.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
