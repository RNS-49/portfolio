import React from 'react'
import profile2 from '../../assets/profile2.jpeg'
import './about.css'
import StatsCounter from './StatsCounter';

function About() {

  const SkillCard = ({title, level }) => (
    <div className="col-md-6 col-sm-4 mb-3">
      <div className="skill-card p-3 d-flex align-items-center">
        <div className="ms-3">
          <h5 className='skill'>{title}</h5>
          <p className="text-muted mb-0">{level}</p>
        </div>
      </div>
    </div>
  );

  return (
<div data-aos='slide-up' className="about-section container py-5" id='about'>
   <h1 className="about-head text-center mb-5">About Me</h1>

<div className="row align-items-center">
    <div className="col-md-4 text-center">
      <img data-aos='flip-right' src={profile2} alt="Profile" className="profile-two" />
    </div>

    <div className="col-md-8">
      <p className="text-white myself">
      I’m a Fullstack Developer with hands-on experience in building modern, responsive, and high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). 
  I specialize in developing clean and interactive frontends, as well as designing efficient RESTful APIs and backend systems. 
  My goal is to build scalable solutions that not only meet business requirements but also offer a seamless user experience. 
  I’m passionate about learning emerging technologies and continuously improving my craft to deliver impactful digital products.
      </p>

          <div data-aos='flip-left' className="row mt-4">
            <SkillCard  title="Node & Express"  />
            <SkillCard  title="React JS"  />
            <SkillCard  title="MongoDB" />
            <SkillCard  title="C Language" />
            <SkillCard  title="Python" />
            <SkillCard  title="Java" />
          </div>
    </div>
  </div>

<StatsCounter/>
 
</div>


  )
}

export default About
