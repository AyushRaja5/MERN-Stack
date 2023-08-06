import React, { useState, useEffect } from 'react'
import { FaInstagramSquare, FaTwitter, FaTelegram } from 'react-icons/fa'
import { BsFillTelephonePlusFill, BsGithub, BsLinkedin, BsFillSendFill } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BiLogoGmail } from 'react-icons/bi'
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const whatsappMessage = `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://api.whatsapp.com/send?phone=919304709806&text=${encodedMessage}&app_absent=0`;
    console.log(whatsappLink);
    window.open(whatsappLink, '_blank').focus()
  };
  return (
    <main className="section container">
      <section className='about'>
        <h2 data-aos='fade-down' className="section_title">Get In <span>Touch</span></h2>

        <div className="contact_container container grid">
          <div className="contact_data">
            <h3 data-aos='flip-right' data-aos-duration='2500' className="contact_title"><span>How</span> can I help you <span>?</span></h3>

            <p data-aos='zoom-out-right' data-aos-duration='3000' className="contact_description">
              Don't be shy!<br />
              Feel free to contact me in following ways.
              I am always open to be a part of new and creative project.
              Share your ideas with <span>Me</span>
            </p>

            <div className="contact_info">

              <div data-aos="zoom-in-right" data-aos-duration='3500' className="info_item">
                <BiLogoGmail className='info_icon' />
                <div>
                  <span className="info_title">Mail</span>
                  <h4 className='info_desc'>ayushraja2022@gmail.com</h4>
                </div>
              </div>

              <div data-aos="zoom-in-right" data-aos-duration='4000' className="info_item">
                <BsFillTelephonePlusFill className='info_icon' />
                <div>
                  <span className="info_title">Mobile</span>
                  <h4 className='info_desc'>+91-9304709806</h4>
                </div>
              </div>
            </div>
            <div className="contact_social">
              <a data-aos="zoom-in" data-aos-duration='4000' href="https://www.instagram.com/rjayush5/" className="contact_social-link"><FaInstagramSquare /></a>
              <a data-aos="zoom-in" data-aos-duration='4000' href="//api.whatsapp.com/send?phone=919304709806&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" className="contact_social-link"><IoLogoWhatsapp /></a>
              <a data-aos="zoom-in" data-aos-duration='4000' href="https://telegram.me/Ayushraja5" className="contact_social-link"><FaTelegram /></a>
            </div>
          </div>

          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="form_input-group">
              <div data-aos="flip-down" data-aos-duration='3000' className="form_input-div">
                <input type='text' placeholder='Your Name' className='form_control' name='name' value={formData.name} onChange={handleChange} />
              </div>

              <div data-aos="flip-down" data-aos-duration='3500' className="form_input-div">
                <input type='phone' placeholder='Your Mobile Number' className='form_control' name='mobile' value={formData.mobile} onChange={handleChange} />
              </div>

              <div data-aos="flip-down" data-aos-duration='4000' className="form_input-div">
                <input type='email' placeholder='Your G-mail Id' className='form_control' name='email' value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div data-aos="flip-up" data-aos-duration='7000' className="form_input-div">
              <textarea placeholder='Share your Ideas...' className='form_control textarea' name='message' value={formData.message} onChange={handleChange} />
            </div>
            <button className="button" type='submit'>
              Send Message
              <span className="button_icon contact_button-icon">
                <BsFillSendFill /></span>
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact