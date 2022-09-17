import React from 'react'
import './Parda.css'
import imgBody from '../src/Images/body1.jpg'
import about from '../src/Images/about.png';


export default function parda() {
    return (
        <>
            <div className='body'>
                <div className='body-write'>
                    <h1 className>Homie</h1>
                    <p >
                        Good friends are good for your health.
                        Friends can help you celebrate good times
                        and provide support during bad times.
                        Friends prevent loneliness and give you a
                        chance to offer needed companionship, too.
                        Find friendship stock images in HD and millions
                        of other royalty-free stock photos, illustrations
                        and vectors in the Shutterstock collection.
                        Thousands of new, high-quality pictures added every day.
                </p>

                    <button>Know More..</button>
                </div>
                <img src={imgBody} alt="body image" className='body-image' />
            </div>

            <div className='about'>
                <img src={about} alt="aboutUs image" className='about-image' />
                <div className='about-write'>
                    <h1 className>About Us</h1>
                    <p>
                        Good friends are good for your health.
                        Friends can help you celebrate good times
                        and provide support during bad times.
                        Friends prevent loneliness and give you a
                        chance to offer needed companionship, too.
                        Find friendship stock images in HD and millions
                        of other royalty-free stock photos, illustrations
                        and vectors in the Shutterstock collection.
                        Thousands of new, high-quality pictures added every day.
                </p>
                    <button>Know More..</button>
                </div>
            </div>
        </>
    )
}
