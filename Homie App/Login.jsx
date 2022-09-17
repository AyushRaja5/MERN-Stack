import { Button, Link } from '@material-ui/core'
import React from 'react';
import './Login.css'
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="container">
                <div className="login">
                    <h1>Login Here..</h1>
                    <input type='text' placeholder='Mobile Number'
                        name='mobile' autoComplete='off' className='input' />
                    <input type='password' placeholder='Password'
                        name='mobile' autoComplete='off' className='input' /><br />
                    <button className='button' onClick={() => alert('logined')}>Login</button><br /><br />
                    <NavLink to='/profile' exact activeClassName='link' >Didn't Have Account?</NavLink>
                </div>
            </div>
        </>
    )
}

export default Login
