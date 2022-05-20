import React from 'react'
import ShuksAd from '../assets/ShucksAd.mp4';

const Main = () => {
  return (
   <div className="main">
<video src={ShuksAd} autoPlay loop muted/>
   </div>
  )
}

export default Main