import React, { useState } from 'react'
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNavBar = () => {
        setActive('navBar activeNavbar')
    }
    const removeNavBar = () => {
        setActive('navBar ')
    }
    const [activeHeader, setactiveHeader] = useState('header');
    const addBg = () =>{
        if(window.scrollY >=20){
            setactiveHeader('header activeHeader');
        }else{
            setactiveHeader('header');
        }
    }

    const handleClick = ()=>{
        window.open("https://drive.google.com/file/d/1GnVC62T_0odDeWZkom_CAfdC_pRWJgT-/view?usp=sharing","_blank", "noreferrer")
    }

    window.addEventListener('scroll',addBg)
  return (
    
       <header  className={activeHeader}>
        <div id='nav-menu'>
            <h1 id="user-detail-name">
                <a href='#home'> SAURAV </a>
            </h1>
        </div>
     <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
            <li className="navItem">
                <a href="#home" className="nav-link home">Home</a>
            </li>
            <li className="navItem">
                <a href="#about" className="nav-link about"> About</a>
            </li>
            <li className="navItem">
                <a href="#skills" className="nav-link skills"> Skills</a>
            </li>
            <li className="navItem">
                <a href="#projects" className="nav-link projects"> Projects</a>
            </li>
            <li className="navItem">
                <a href="#contact" className="nav-link contact"> Contact</a>
            </li>
            <button onClick={handleClick} id="resume-button-1">
             <a class="nav-link resume" href='Saurav_Bhardwaj_Resume.pdf' download>Resume</a>
            </button>
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
        <AiFillCloseCircle className='icon'/>
        </div>
     </div>
     <div onClick={showNavBar}className="toggleNavBar">
            <TbGridDots className='icon'/>
        </div>
    </header>
    
  )
}

export default Navbar