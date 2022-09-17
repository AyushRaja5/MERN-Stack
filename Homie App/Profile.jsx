import React from 'react'
import './Profile.css';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { NavLink } from 'react-router-dom';
import { Button, Checkbox, Container } from '@material-ui/core';

function profile() {

    return (
        <>
            <section className="signup">
                <div className="box " >
                    <div className="form"><h2 className='form-heading'>Register Here</h2><br />
                        <form className='form'>
                            <span className='from-box'><label><PersonPinIcon /></label>
                                <input type="text" placeholder='Your Name' className='input-reg' /></span>

                            <span className='from-box'><label><PhoneInTalkIcon /></label>
                                <input type="mobile" placeholder='Your Mobile' className='input-reg' /></span>

                            <span className='from-box'> <label><EmailIcon /></label>
                                <input type="e-mail" placeholder='Your E-mail' className='input-reg' /></span>

                            <span className='from-box'><label><LocationCityIcon /></label>
                                <input type="text" placeholder='Your Address' className='input-reg' /></span>
                            <br /><button className='but-reg' onClick={() => { alert('Registered') }}>Submit</button><br />
                        </form>
                    </div>


                    <div className="dp">

                        <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                            alt="image" className='dp-img' onClick={()=> alert('hii')} /><br />
                        <input type='file' name='image' className='dp-upload' />
                        <br />
                        <div className='bottom-dp'>
                            <button className='but-dp' onClick={() => { alert('Picture Uploaded') }}>Upload</button>
                            <NavLink to='/login' exact activeClassName='button' >Already have an account?</NavLink>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default profile
