import React, { useState,useEffect } from 'react'
import Close from '../assets/close.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Portfolioitem = ({ img, vd, title, site, details }) => {
  const [modal, setmodal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  const toggleModal = () => {
    setmodal(!modal)
  };
  return (
    <div className="portfolio_item">
      <img data-aos='zoom-in'  src={img} alt={title} className='portfolio_img' />

      <div className="portfolio_hover" onClick={toggleModal}>
        <h3 className="portfolio_title">{title}</h3>
      </div>

      {modal && (
        <div data-aos='zoom-out' data-aos-duration='1000' className="portfolio_modal">
          <div className="portfolio_modal-content">
            <img src={Close} alt="" className="modal_close" onClick={toggleModal} />
            <h3 className="modal_title">{title}</h3>

            <ul className="modal_list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal_item" key={index}>
                    <span className="item_icon">{icon}</span>
                    <div>
                      <span className="item_title">{title}</span>
                      <a href={site} target="_blank" className="item_details">{desc}</a>
                    </div>
                  </li>
                )
              })}
            </ul>
            {vd ? (
              <video src={vd} className="modal_img" controls autoPlay loop></video>
            ) : (
              <img src={img} alt="" className="modal_img" />
            )}
          </div>
        </div>

      )}
    </div>
  )
}

export default Portfolioitem