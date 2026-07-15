import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#hero" className="footer-logo">
          &lt;<span>Ahmad</span>/&gt;
        </a>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/muhammad-ahmad-bb9bb2343" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/MuhammadAhmad830" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:muhammadahmadcs830@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">
          Powered by Muhammad Ahmad
        </p>
        <p className="footer-copy">&copy; 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
