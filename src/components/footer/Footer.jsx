import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer-icons'>
        <a href="https://m.facebook.com/renjith.ns.96/"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://mobile.x.com/Renjith19946692"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.linkedin.com/in/renjith-n-s"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/rns_4_9_/"><i class="fa-brands fa-instagram"></i></a>
      
      </div>
      <div className='footer-info'> 
       <p><span><i class="fa-regular fa-copyright"></i></span> 2025 Renjith N S. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
