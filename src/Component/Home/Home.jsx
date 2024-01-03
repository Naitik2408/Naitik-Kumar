import React from 'react'
import './Home.css'
import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { useSelector } from 'react-redux'

function Home() {
  const allFrameworks = useSelector(state => state.langBarData.language)
  return (
    <div className='home'>
      <div className="home-title">
        <div>
            <h1>CREATIVE</h1>
            <h2>DEVELOPER</h2>
            <h3>SENSIBLE TO FRONTEND</h3>
        </div>
      </div>
      <div className='profile-image-and-solical-links'>
        <div className='image-box'>
            <div className="social-link">
                <a href="https://github.com/Naitik2408" target="_blank" title='github'><PiGithubLogoThin className='icons' /></a>
                <a href="https://www.linkedin.com/in/naitik2/" target="_blank" title='linkedIn'><PiLinkedinLogoThin className='icons' /></a>
                <a href="https://www.instagram.com/dev_trek/" target="_blank" title='Instagram'><PiInstagramLogoThin className='icons' /></a>
            </div>
            <div className="image-background" style={{backgroundColor:allFrameworks.color}}></div>
        </div>
      </div>
    </div>
  )
}

export default Home
