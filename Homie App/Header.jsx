import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, NavLink } from 'react-router-dom';


function header() {
  return (
    <>
      <div className="header">
        <img src="https://www.rent.com/blog/wp-content/uploads/2019/02/apartment_vs_flat.jpg" alt="image" className='img' />

        <div className='header_center'>
          <input type="text" placeholder='search' />
          <SearchIcon />
        </div>

        <div className='header_right'>

          <NavLink to='/' exact activeClassName='link'>
            <div><span className='home'>
              <HomeIcon style={{ fontSize: 25 }} /> Home
          </span></div>
          </NavLink>

          <NavLink to='/login' exact activeClassName='link'>
            <div><span className='profile'>
              <PersonIcon style={{ fontSize: 25 }} />
              Login
              </span></div></NavLink>

          <NavLink to='/notification' exact activeClassName='link'>
            <div><span className='setting'>
              <SettingsIcon style={{ fontSize: 25 }} />
            Notification
            </span></div></NavLink>

        </div>
      </div>
    </>
  )
}

export default header


