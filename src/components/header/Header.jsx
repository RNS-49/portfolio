import React from 'react'
import './header.css'
import profile1 from '../../assets/profile1.png'
import resume from '../../assets/resume.pdf'

function Header() {
  return (
    <div className='header-section' id='home'>
      <img className='profile1' src={profile1} alt="" />
      <h1 className='main-head'> <span className='text-color'>I'm Renjith N S,</span>  Software developer <br /> from Kerela.</h1>
      <p className='head-des'>Hey there! I'm Renjith, a fullstack developer who loves crafting cool stuff for the web.
  Whether it's a sleek frontend or a solid backend, I enjoy turning ideas into reality and learning something new every day.
</p>
      <div className='btn-sec-one'>
        <a href="#contact"><button className='btn-one'>Connect With Me</button></a>
      
      <a href={resume}><button className='btn-two'>View Resume</button></a>
      </div>

     <div className='social-links'>
      <a href="https://www.linkedin.com/in/renjith-n-s"><button className='btn btn-light buttons'><i class="fa-brands fa-linkedin main-icons"></i> Linkedin</button></a>
          
      <a href="https://github.com/RNS-49"><button className='btn btn-light buttons'><i class="fa-brands fa-square-github main-icons"></i> Github</button></a>
     </div>
    </div>
  )
}

export default Header
