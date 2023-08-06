import React, {useEffect} from 'react'
import { portfolio } from '../../data'
import Portfolioitem from '../../components/Portfolioitem'
import './portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='portfolio section'>
      <h2 data-aos='fade-down' className="section_title">My <span>Works</span></h2>

      <div className="portfolio_container container grid">
        {portfolio.map((item)=>{
            return <Portfolioitem key={item.id} {...item}/>
        })}
      </div>
      <br/>
    </section>
  )
}

export default Portfolio