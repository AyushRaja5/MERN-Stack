import React, { useState, useEffect } from 'react'
import './circle.css'

const meta = 'https://seeklogo.com/images/T/threads-logo-9F3F8228AC-seeklogo.com.png?v=638243212870000000'
const netflix = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/423px-Netflix_2015_N_logo.svg.png'
const google = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'
const microsoft = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/640px-Microsoft_icon.svg.png'
const amazon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png'
const flipkart = 'https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png'
const apple = 'https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png'
const cisco = 'https://www.freepnglogos.com/uploads/cisco-png-logo/new-cisco-logo-png-1.png'
const twitter = 'https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png'
const adobe = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1477px-Adobe_Systems_logo_and_wordmark.svg.png'

const logos = [
    google, netflix, microsoft, amazon, flipkart, apple, twitter, adobe, meta
];
const innerlogos = [
    google, netflix, microsoft, amazon, flipkart
]
const Circle = () => {
    return (
        <div className="contain">
        <div className="icon outer-circle" data-aos='flip-left'>
            
            {logos.map((logo, index) => (
                <div
                    className="imgBx"
                    key={index}
                    style={{
                        transform: `rotate(-${index * (360 / logos.length)}deg) translate(150px) rotate(${index * (360 / logos.length)}deg)`
                    }}
                >
                    <img src={logo} alt={`Logo ${index}`} />
                </div>
            ))}
        </div>
        {/* <div className="icon inner-circle">
            {innerlogos.map((logo, index) => (
                <div
                    className="imgBx"
                    key={index}
                    style={{
                        
                        transform: `rotate(${index * (360 / innerlogos.length)}deg) translate(80px) rotate(${index * (360 / innerlogos.length)}deg)`
                    }}
                >
                    <img src={logo} alt={`Logo ${index}`} />
                </div>
            ))}
        </div> */}
    </div>

    )
}

export default Circle
