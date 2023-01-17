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

    window.addEventListener('scroll',addBg)
  return (
    
       <header id='nav-menu' className={activeHeader}>
     <div className="logoDiv">
        <h1 className='logo'>
        <a href='#home'> SAURAV </a>
        </h1>
     </div>
     <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
            <li className="navItem">
                <a href="#home" className="navLink"><span className='headerNumber'></span>Home</a>
            </li>
            <li className="navItem">
                <a href="#about" className="navLink"><span className='headerNumber'></span> About</a>
            </li>
            <li className="navItem">
                <a href="#skills" className="navLink"><span className='headerNumber'></span> Skills</a>
            </li>
            <li className="navItem">
                <a href="#projects" className="navLink"><span className='headerNumber'></span> Projects</a>
            </li>
            <li className="navItem">
                <a href="#contact" className="navLink"><span className='headerNumber'></span> Contact</a>
            </li>
            <button className='btn'>
             <a href='Saurav_Bhardwaj_Resume.pdf' download>Resume</a>
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