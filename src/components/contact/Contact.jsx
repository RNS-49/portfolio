import React from 'react';
import './contact.css';
import { toast } from 'react-hot-toast';

const Contact = () => {

  const sendMail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2073075f-f877-4097-b652-1461cc993733");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("We will get to you sooner",{position:"bottom-center"});
      console.log("Success", res);
    }else{
      toast.error("Error submitting form");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left" data-aos="fade-up" >
          <h2  data-aos="flip-right">DON'T BE SHY</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <span className="icon"><i class="fa-solid fa-envelope"></i></span>
              <div>
                <p>renjithns121@mail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon"><i class="fa-solid fa-phone"></i></span>
              <div>
                <p>+91 7736906162</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon"><i class="fa-solid fa-location-dot"></i></span>
              <div>
                <p>India, Kerala</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right" data-aos="fade-down">
          <h2 className="highlight-text"  data-aos="flip-left">GET IN TOUCH</h2>

          <form className="contact-form" onSubmit={sendMail}>
            <input type="text" name="name" placeholder="Enter your Name" required />
            <input type="email" name="email" placeholder="Enter a valid email address" required />
            <textarea name="message" placeholder="Enter your message" required></textarea>
            <label className="checkbox-label">
              <input type="checkbox" name="terms" required />
              I accept the Terms of Service
            </label>
            <button type="submit">SUBMIT</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;