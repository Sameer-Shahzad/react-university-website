import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure better education</h1>
        <h1>for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and</p><span>experiences they need to succeed in a rapidly changing world</span>
        <button className="button1">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero