import React from "react";

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact-content">
      <h3 className="section-title">Get in Touch</h3>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea rows="5" id="message" placeholder="Write your message here" required />
        </div>
        <button className="submit-btn" type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;