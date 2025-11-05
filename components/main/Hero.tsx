import React from 'react'
import HeroContent from '../sub/HeroContent'

function Hero() {
  return (
    <div className='relative z-20 flex flex-col h-full w-full '  id='about-me' >

        <video
           autoPlay
           muted
           loop
           className='rotate-180 absolute top-[-320px] left-0 z-[1] w-full h-full object-cover'
         >
            <source src='/blackhole.webm' type='video/webm'  />
         </video>

          <HeroContent />

    </div>
  )
}

export default Hero