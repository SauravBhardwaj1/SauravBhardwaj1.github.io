import React from "react";
import { TbCloudDownload } from "react-icons/tb";

import "./about.css";
const About = () => {
  const handleClick = ()=>{
    window.open("https://drive.google.com/file/d/1GnVC62T_0odDeWZkom_CAfdC_pRWJgT-/view?usp=sharing","_blank", "noreferrer")
}

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
          <button onClick={handleClick} id="resume-button-2" className="aboutBtn">
            <a href="Saurav_Bhardwaj_Resume.pdf" 
              download="Saurav_Bhardwaj_Resume.pdf" 
              id="resume-link-2"
              className="flex" >
              Download CV <TbCloudDownload style={{color:"white", background:"#030e18"}} className='icon'/>
            </a>
          </button>
        </div>
        <div className="aboutImgDiv">
          <img src="https://avatars.githubusercontent.com/u/108116026?v=4" alt="saurav"  class="home-img"/>
        </div>
      </div>
    </section>
  );
};

export default About;