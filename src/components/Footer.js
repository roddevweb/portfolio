import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-white p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>MeuLogo</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio ipsum. Suspendisse cursus malesuada facilisis.</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#projects" className="text-white">Projects</a></li>
              <li><a href="#skills" className="text-white">Skills</a></li>
              <li><a href="#experience" className="text-white">Experience</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaYoutube /></a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-white"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="m-0">&copy; 2024 Rodrigo Coelho. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
