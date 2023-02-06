import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import {TfiEmail} from "react-icons/tfi"
import { TbArrowBigRightLines } from 'react-icons/tb'
import {IoIosCall} from "react-icons/io"
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xdy8r85', 'template_7q09r67', form.current, 'xkAVIy-WKLKe8tbrG')
      e.target.reset()
  };

  return (
    <section id="contact" className='contact container section'>
     <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Get in Touch</h3>
          <div className="cards grid">
            <div className="card">
              <div>
                <AiFillLinkedin className='icon'/>
              </div>
              <h4>Linkedin</h4>
              <span className="userName">
              saurav-bhardwaj-63230a133
              </span>
              <div>
                <a id="contact-linkedin" href="https://www.linkedin.com/in/saurav-bhardwaj-63230a133/" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiFillGithub className='icon'/>
              </div>
              <h4>Github</h4>
              <span className="userName">
                SauravBhardwaj1
              </span>
              <div>
                <a id="contact-github" href="https://github.com/SauravBhardwaj1" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiOutlineInstagram className='icon'/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
              limitless_saurav
              </span>
              <div>
                <a href="https://www.instagram.com/limitless_saurav/" className='flex' target="_blank">
                  Send Message<TbArrowBigRightLines className='icon'/>
                </a>
              </div>
            </div>
            <div id="contact-email" className="card">
              <div>
                <TfiEmail className='icon'/>
              </div>
              <h4>Email</h4>
              <span className="userName">
                sauravbhardwaj836@gmail.com
              </span>
              <div>
              <a id="contact-phone" href='tel:9599844246'>9599844246 <IoIosCall className='icon'  />   </a> 
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form action="https://formspree.io/f/mpznbyel" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" autoComplete="off"  required />
            <input type="email" placeholder="Enter Email" name="email" autoComplete="off"  required/>
            <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Message"></textarea>
            <button className='formBtn' type="submit" value="Send">Send Email</button>
          </form>
        </div>
      </div>
  </section>
  )
}

export default Contact