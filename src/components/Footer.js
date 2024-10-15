import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Sai Dineshchandra Devisetti</h3>
        <p>Full-stack Developer | Passionate about Software Development and Cloud Telephony</p>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:dineshdevisetti2000@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Sai Dineshchandra Devisetti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
