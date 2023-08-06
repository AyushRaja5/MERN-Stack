import React,{useEffect, useState} from 'react'
import { stats } from '../data'
import parse from 'html-react-parser'
import CountUp,{useCountUp} from 'react-countup';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Stats = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
    {stats.map(({no,title},id)=>{
      const animationDuration = id * 1000+500;
        return(
            <div data-aos='fade-right' data-aos-duration={animationDuration}  className="stats_box" key={id}>
                <h3 className="stats_no"><CountUp end={no} duration={5}/>+</h3>
                <p className='stats_title'>{title}</p>
            </div>
        )
    })}
    </>
  )
}

export default Stats