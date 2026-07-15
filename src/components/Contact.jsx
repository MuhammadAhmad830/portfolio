import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:muhammadahmadcs830@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">
        &lt;<span>Contact</span>/&gt;
      </h2>
      <p className="section-subtitle">Let's work together</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out for collaborations, internships, or just a friendly chat about tech!</p>

          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <div className="contact-value">
                  <a href="mailto:muhammadahmadcs830@gmail.com">muhammadahmadcs830@gmail.com</a>
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard('muhammadahmadcs830@gmail.com', 'email')}
                    title="Copy email"
                  >
                    {copied === 'email' ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <div className="contact-value">
                  <a href="tel:+923219791281">+92 321 9791281</a>
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard('+923219791281', 'phone')}
                    title="Copy phone"
                  >
                    {copied === 'phone' ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/muhammad-ahmad-bb9bb2343" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/MuhammadAhmad830" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
