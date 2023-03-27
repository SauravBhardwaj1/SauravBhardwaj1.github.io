import React from 'react'
import { TbBrandReactNative,TbBrandNextjs } from 'react-icons/tb'
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoWordpress } from 'react-icons/io'
import './Skills.css'
import GitHubCalendar from 'react-github-calendar';
import { AiFillGithub, AiFillGitlab, AiFillHtml5 } from 'react-icons/ai'
import { GrMysql } from 'react-icons/gr'
import { SiBootstrap, SiChakraui, SiCypress, SiExpress, SiFigma, SiMongodb, SiRedux, SiStyledcomponents, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills" className='skills container section'>
      <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      {/* skills container */}
      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">FrontEnd</h2>
          </div>
          <div className="generalSkills">
            <div className="skills-card">
              <div className="skills-card-img flex">
                <AiFillHtml5 className='icon' />
              </div>
              <span class="skills-card-name">HTML5</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <IoLogoCss3 className='icon' />
              </div>
              <span class="skills-card-name">Css3</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiStyledcomponents className='icon' />
              </div>
              <span  class="skills-card-name">Styled<br></br>Component</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <TbBrandNextjs className='icon' />
              </div>
              <span class="skills-card-name">NextJs</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <IoLogoJavascript className='icon' />
              </div>
              <span class="skills-card-name">JavaScript</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <TbBrandReactNative className='icon' />
              </div>
              <span class="skills-card-name">React</span>
            </div>

          </div>
        </div>
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">BackEnd</h2>
          </div>
          <div className="generalSkills">
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiRedux className='icon' />
              </div>
              <span class="skills-card-name">Redux</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <IoLogoNodejs className='icon' />
              </div>
              <span class="skills-card-name">NodeJs</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiExpress className='icon' />
              </div>
              <span class="skills-card-name">ExpressJs</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiMongodb className='icon' />
              </div>
              <span class="skills-card-name">MongoDB</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiCypress className='icon' />
              </div>
              <span class="skills-card-name">Cypress</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <GrMysql className='icon' />
              </div>
              <span class="skills-card-name">Mysql</span>
            </div>
          </div>
        </div>
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Others</h2>
          </div>
          <div className="generalSkills">
            <div className="skills-card">
              <div className="skills-card-img flex">
                <AiFillGithub className='icon' />
              </div>
              <span class="skills-card-name">GitHub</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <AiFillGitlab className='icon' />
              </div>
              <span class="skills-card-name">Git</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiFigma className='icon' />
              </div>
              <span class="skills-card-name">Figma</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <IoLogoWordpress className='icon' />
              </div>
              <span class="skills-card-name">Wordpress</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiChakraui className='icon' />
              </div>
              <span class="skills-card-name">ChakraUI</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-img flex">
                <SiBootstrap className='icon' />
              </div>
              <span class="skills-card-name">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="education">
        <h1 style={{color:"white"}}>Saurav Bhardwaj Github Statistics</h1>
        <div id="github-stats-card">
          <div class="react-activity-calendar">
            <GitHubCalendar username="SauravBhardwaj1" year={new Date().getFullYear()} blockMargin={7}
              color="#00eaff"
              responsive={true} />
          </div>
          <div id="github-streak-stats" class="stats" style={{marginTop:"30px"}}>           
            <img  src="https://github-readme-streak-stats.herokuapp.com?user=SauravBhardwaj1&theme=violet-punch&mode=weekly" alt='github' />
          </div>
          <div id="github-top-langs" style={{marginTop:"20px"}}>         
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SauravBhardwaj1&&hide_progress=true" alt='lang' />
          </div>

        </div>

      </div>
    </section>

  )
}

export default Skills