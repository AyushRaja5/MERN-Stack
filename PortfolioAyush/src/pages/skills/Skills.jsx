import React,{useEffect} from 'react'
import Skill from '../../components/Skill'
import './skills.css'
import CountUp, { useCountUp } from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      },[])
    return (
        <>
            <div className="container">
                <h2 data-aos='fade-down' className="section_title">Skills <span>I Know</span></h2>

                <div className="skills">
                    <div className="skills_container grid"><Skill /></div>
                </div>
            </div>

            <div className="seperator"></div>

            <div className="scorecards grid container">
                
                <div data-aos='zoom-out-right' data-aos-duration='1500' className="card">
                    <div className="scorecard">
                        <div className="cardlogo">
                            <img src='https://media.geeksforgeeks.org/wp-content/uploads/20210610212340/gfglogo.png' alt='gfg' className='gfgimg' />
                        </div>
                        <span className="title">GeeksforGeeks</span>
                        <div className="scorediv">
                            <h3 className="stats_no">Ques: <CountUp end={450} duration={5} />+</h3>
                        </div>
                    </div>
                </div>

                <div data-aos='zoom-out-up' data-aos-duration='3000' className="card">
                    <div className="scorecard">
                        <div className="cardlogo">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png' alt='gfg' className='gfgimg' />
                        </div>
                        <span className="title">HackerRank</span>
                        <div className="scorediv">
                            <div className="stats_no">5* Bathces: 3</div>
                        </div>
                    </div>
                </div>

                <div data-aos='zoom-out-left' data-aos-duration='4500' className="card">
                    <div className="scorecard">
                        <div className="cardlogo">
                            <img src='https://www.langoly.com/wp-content/uploads/2021/09/coursera-logo.png' alt='gfg' className='gfgimg' />
                        </div>
                        <span className="title">Coursera</span>
                        <div className="scorediv">
                            <h3 className="stats_no">Hours: <CountUp end={85} duration={5} />+</h3>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Skills