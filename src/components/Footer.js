import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-white p-5">
      <div className="container">
        <div className="footer-links">
          <ul className="list-unstyled">
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#projects" className="text-white">Projects</a></li>
            <li><a href="#skills" className="text-white">Skills</a></li>
            <li><a href="#experience" className="text-white">Experience</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
          </ul>
          <div className="social-icons">
            <a href="https://github.com/roddevweb" target="_blank" rel="noopener noreferrer" className="text-white"><FaGithub /></a>
            <a href="https://linkedin.com/in/roddevweb" target="_blank" rel="noopener noreferrer" className="text-white"><FaLinkedin /></a>
            <a href="https://wa.me/4384090178" target="_blank" rel="noopener noreferrer" className="text-white"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Rodrigo Coelho. Tous droits réservés. <a href="#">Mentions légales</a></p>
        </div>
      </div>
      <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
