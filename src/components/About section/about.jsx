import React from "react";
import { TbCloudDownload } from "react-icons/tb";

import "./about.css";
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div id="user-detail-intro" className="textSection">
          <h4>
          Motivated and innovative aspiring full-stack web developer with hands-on experience (1200+ hours) in
            building websites with MERN stack and various web technologies including HTML, CSS, and JS. 
            <br />
            Curious to learn about emerging web technologies. Looking forward to make a significant contribution
            to an organization through dedicated efforts
          </h4>
          <div id="resume-button-2" className="aboutBtn">
            <a href="Saurav_Bhardwaj_Resume.pdf" 
              download="Saurav_Bhardwaj_Resume.pdf" 
              id="resume-link-2"
              className="flex" style={{
                color:"black"
            }}>
              Download CV <TbCloudDownload className='icon'/>
            </a>
          </div>
        </div>
        <div className="aboutImgDiv">
          <img src="https://avatars.githubusercontent.com/u/108116026?v=4" alt="saurav"  class="home-img"/>
        </div>
      </div>
    </section>
  );
};

export default About;