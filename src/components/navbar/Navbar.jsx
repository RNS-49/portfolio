import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div  class="container-fluid">
      <img  className='logo' src={logo} alt="" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Freelancing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact"><button className='nav-button'>Connect With Me</button></a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
