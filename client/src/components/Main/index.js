// Adding a video to the home or main page.
import React from 'react'
import shuk from '../../assets/shuk.mp4'

const Play = () => {
  return (
  <div className='main'>
      <video src={shuk} autoPlay loop muted />
  </div>
  )
}

export default Play