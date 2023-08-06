import React from 'react'
import { personalInfo } from '../data'
const Info = () => {
  return (
    <>
        {personalInfo.map(({title,description},id)=>{
          const animationDuration = id * 1000+ 1000;
            return(
                <li data-aos='fade-left' data-aos-duration={animationDuration} className="info_item" key={id} >
                    <span className='info_title'>{title}</span>
                    <span className='info_description'>{description}</span>
                </li>
            )
        })}
    </>
  )
}

export default Info