import React from 'react'
import './home.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { TbArrowBigRightLines } from 'react-icons/tb'
import {FiChevronsDown} from 'react-icons/fi'
const Home = () => {
  return (
    <section id="home" className='home section'>
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className='title'>
        Saurav Bhardwaj
        </h1>
        <span className='subTitle'>
        Full Stack Web Developer
        </span>
        <p className="homeParagraph">
          I code within the Required coding standards and styles to serve the exact need.
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn"> 
            <a href="#contact" className="flex" style={{color:"black"}}>
              Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className='scroll'>Scroll Down </h6><FiChevronsDown className="icon"/>
            </a>
          </div>

        </div>
      </div>
  </section>
  )
}

export default Home