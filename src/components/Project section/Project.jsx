import React from 'react'
import './Project.css'
import {VscLiveShare} from 'react-icons/vsc'
import {FiGithub} from 'react-icons/fi'
import img1 from '../../Assets/MovieApp.png'
import img2 from '../../Assets/DnaNews.png'
import img3 from '../../Assets/Revv.png'
import img4 from '../../Assets/Youtube.png'
import img9 from '../../Assets/Giphy.png'


const data = [
  {
    id:1,
    image:img1,
    demo:'https://spontaneous-dieffenbachia-07fffa.netlify.app/',
    liveLink:'https://spontaneous-dieffenbachia-07fffa.netlify.app/',
    github:'https://github.com/SauravBhardwaj1/Movie_App/tree/main/movies',
    title:'Hotstar',
    desc:'This website is inspired by Hotstar App where user can search for the movies and check which movie is trending . ',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:2,
    image:img2,
    demo:'stirring-taffy-661f29.netlify.app',
    liveLink:'stirring-taffy-661f29.netlify.app',
    github:'https://github.com/SauravBhardwaj1/bustling-lumber-7924',
    title:'DNA News',
    desc:'A clone website of DNA News is a large worldwide News website for live and latest news.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:3,
    image:img3,
    demo:'https://kaleidoscopic-cascaron-704c0c.netlify.app/',
    liveLink:'https://kaleidoscopic-cascaron-704c0c.netlify.app/',
    github:'https://github.com/SauravBhardwaj1/decorous-pan-7664/tree/main/rct-101',
    title:'Revv Car',
    desc:' A clone website of Revv is one of India"s most trusted online car booking & car rental website in metro cities.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
    tech4: "React"
  },{
    id:4,
    image:img4,
    demo:'https://dancing-crisp-94d7ae.netlify.app/',
    liveLink:'https://dancing-crisp-94d7ae.netlify.app/',
    github:'https://github.com/SauravBhardwaj1/Youtube-App',
    title:'YouTube',
    desc:'A clone web application like Youtube where user can search and play videos. ',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
  {
    id:5,
    image:img9,
    demo:'https://vocal-cuchufli-b163fd.netlify.app/',
    liveLink:'https://vocal-cuchufli-b163fd.netlify.app/',
    github:'https://github.com/SauravBhardwaj1/Giphy-app',
    title:'Giphy',
    desc:'This website help you to find the gifs and stickers you searched for and get the trending gifs as well.',
    tech1:'Html',
    tech2:'CSS',
    tech3:'JavaScript',
  },
]
const Projects = () => {

  return (
    <section id="projects" className='projects container section'>
    <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {
          data.map(({
            id,github,image,liveLink,desc,demo,title,tech1,tech2,tech3,tech4
          })=>{
            return(
              <div key={id} className="singleProject">
               <div className="externalLinks flex">
               </div>
               <div className="imgDiv">
                <a href={liveLink} target='_blank'>
                  <img src={image} alt="title" />
                </a>
               </div>
               <div className="projectTitle">
                <h3>{title}</h3>
               </div>
               <div className="desc">
                {desc}
               </div>
               <div className="youtubeIcon">
                  <a href={demo} target='_blank'><VscLiveShare className='icon'/></a>                  
                  <a style={{marginLeft:"210px"}} href={github} target='_blank'><FiGithub className='icon'/></a>                  
                </div>
               <div className="technologies flex">
                <small>{tech1}</small>
                <small>{tech2}</small>
                <small>{tech3}</small>
                <small>{tech4}</small>
               </div>
              </div>
            )
          })
        }
      </div>
  </section>
  )
}

export default Projects