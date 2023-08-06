import React, {useEffect} from 'react'
import AyushDP from '../../assets/AyushDP1.png'
import { Link } from 'react-router-dom'
import { FaLocationArrow, FaFileDownload } from 'react-icons/fa'
import './home.css'
import Typewriter from "typewriter-effect";
import resumeCV from '../../assets/Ayush Resume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <section className="home section grid">
      <img data-aos='zoom-out-right' src={AyushDP} alt='Picture' className='home_img' />

      <div className="home_content">
        <div className="home_data">
          <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='home_title'>
            <span className='ayush'>
              Hello<span class="wave">👋</span> <br />
              I am Ayush Raja.<br />
            </span>
            <Typewriter
              options={{
                wrapperClassName:'Typewriter__wrapper',
                strings: ['Software Developer', 'Full Stack Developer','Data Analyst'],
                autoStart: true,
                loop: true,
                pause:1000,
                wrapperClassName:'writter'
              }}
            />
          </h1>

          <p  data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="home_description">
            A versatile Software Engineer skilled in web application development,
            with an aspiring passion for becoming a Data Scientist.
            Equipped with a deep understanding of programming languages and frameworks,
            I can craft user-friendly web applications that seamlessly blend design and functionality.
          </p>
          <div className="homebutton grid">
          <Link to='/about' className='button'>Know More<span className='button_icon'><FaLocationArrow /></span></Link>
          <a href={resumeCV} download='' className="button">Download Resume <span className='button_icon'><FaFileDownload /></span></a>
          </div>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  )
}

export default Home