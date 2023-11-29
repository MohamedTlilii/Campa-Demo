import "./Style.css";
import React from 'react'

function Hero() {
  return (
    <div>
        <img style={{width:'1903px' , height: '950px' , }} src="/assets/img/hero.png" alt="" />
        <div className='HeroSection'>
        <h4 className='hero-titlle'>Campa The Best Camping Co.</h4>
        <h1 className='camp-titlle'>Campa The Best Camping Co. </h1>
        <p className='p'>Camping is an outdoor activity involving overnight stays away from home with or without a shelter, such as a tent or a recreational vehicle.</p>
    </div>
    </div>
  )
}

export default Hero