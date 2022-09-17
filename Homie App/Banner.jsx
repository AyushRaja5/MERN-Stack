import React from 'react'
import './Banner.css'
import {Button, ButtonGroup, Link} from "@material-ui/core"
import AddLocationIcon from '@material-ui/icons/AddLocation'
import { Route ,useHistory} from 'react-router';

function Banner() {
        const history=useHistory();
    return (
        <div className="banner">
            
            <div className='parda'>
                <AddLocationIcon className='locationtag' style={{fontSize:40}} />
                <input 
                 type="text" 
                placeholder='Enter Your Location'
                className="location-input" />
                 <Button>Click</Button>

                 <div className='but-holder'>
                <button className='but1' onClick={()=> history.push('/kirayadaar')} >Kiraydaar</button>
                <button className='but2' onClick={()=> history.push('/chat')}>Maalik</button>
               
                </div>
            </div>
                
            
        </div>
    )
}

export default Banner
