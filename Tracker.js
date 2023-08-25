import React from 'react'
import '../Bookings/booking.css'

const Tracker = () => {
  return (
    <div>
        <div className='booking-header'>
        <div className='points'>
          <div className='step completed'>
            <div className='step-icon-wrap'>
              <div className='step-icon'>
                1
              </div>
            </div>
            <h4 className='step-title'>Search</h4>
          </div>
          <div className='step completed'>
            <div className='step-icon-wrap'>
              <div className='step-icon'>
                2
              </div>
            </div>
            <h4 className='step-title'>Recommended Services</h4>
          </div>

          <div className='step completed'>
            <div className='step-icon-wrap'>
              <div className='step-icon'>
                3
              </div>
            </div>
            <h4 className='step-title'>Results</h4>
          </div>
          <div className='step completed'>
            <div className='step-icon-wrap'>
              <div className='step-icon'>
                4
              </div>
            </div>
            <h4 className='step-title'>Booking</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracker
