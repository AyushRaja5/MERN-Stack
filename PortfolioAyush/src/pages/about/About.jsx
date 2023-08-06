import React, {useEffect} from 'react'
import Info from '../../components/Info'
import { FaFileDownload } from 'react-icons/fa'
import resumeCV from '../../assets/Ayush Resume.pdf'
import Stats from '../../components/Stats'
import './about.css'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import Circle from '../../components/Circle'
import Carosel from '../../components/Carosel'
const lpu = 'https://i.pinimg.com/originals/c9/12/d4/c912d49f5f63e3c25aae2465f7577e7a.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <main className="section container">
      <section className='about'>
        <h2 data-aos='fade-down' data-aos-duration='1000' className="section_title">About <span>Me</span></h2>

        <div className="about_container grid">

          <div className="stats grid"><Stats /></div>

          <div className="about_info">
            <h3 className='section_subtitle'>Personal Infos</h3>

            <ul className="info_list grid"><Info /></ul>

            <a data-aos='flip-down' href={resumeCV} download='' className="button">Download Resume <span className='button_icon'><FaFileDownload /></span></a>
          </div>

        </div>
      </section>

      <div data-aos='flip-left' className="seperator"></div>

      <section className="resume">
        <h3  data-aos='fade-down' className="section_subtitle subtitle_center">Education History</h3>
        <div className="resume_container grid">
          <div className="resume_data">
            {
            resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>

          <div className="resume_data">
            <Carosel />
            <Circle />
          </div>

        </div>
      </section>

      <div className="seperator"></div>
    </main>
  )
}

export default About