
import React from 'react';
import "./contact.css"

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you!</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Address: 123 Main St, Anytown, USA 12345
          <br />
          Phone: 555-555-5555
          <br />
          Email: [Abcd@example.com](mailto:info@example.com)
        </p>
      </div>
      <div className="social-links">
        <h2>Follow Us</h2>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="map">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838273894765!2d-122.0840516846056!3d37.38534847972687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad6b%3A0xb6a46221d74f1f9!2s123+Main+St%2C+Anytown%2C+USA+12345!5e0!3m2!1sen!2sus!4v1567823391391!5m2!1sen!2sus"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Contact;