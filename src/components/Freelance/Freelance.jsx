import React from 'react'
import './freelance.css'

function Freelance() {

  const services = [
    {
      id: '01',
      title: 'MERN Stack Development',
      description: 'Building full-stack web apps using MongoDB, Express, React, and Node.js.',
    },
    {
      id: '02',
      title: 'UI/UX Design',
      description: 'Designing clean and user-friendly interfaces using Figma and modern design systems.',
    },
    {
      id: '03',
      title: 'REST API Development',
      description: 'Creating secure, scalable APIs for mobile and web applications.',
    },
    {
      id: '04',
      title: 'Portfolio Development',
      description: 'Helping individuals build stunning portfolios to showcase their skills and projects.',
    },
    {
      id: '05',
      title: 'Responsive Web Design',
      description: 'Creating mobile-first responsive websites that look great on any screen.',
    },
    {
      id: '06',
      title: 'Freelance Consulting',
      description: 'Providing support, reviews, and improvements for freelance tech projects.',
    },
  ];

  return (
<section className="services-section container py-5" id="services">
      <h1 className="freelance-head text-center mb-5" data-aos="flip-right">Freelance Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <span className="service-id">{service.id}</span>
              <h5 className="service-title">{service.title}</h5>
              <p>{service.description}</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Freelance
