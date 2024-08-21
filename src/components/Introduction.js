import React from 'react';
import './Introduction.css';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section id="introduction">
      <div className="container">
        <div className="text-container">
          <h1>Bonjour, je m'appelle <span className="text-highlight">Rodrigo Coelho</span></h1>
          <p className="lead">Je suis un développeur front-end passionné par la technologie. Avec plus de 5 ans d'expérience, je crée des interfaces utilisateur belles et fonctionnelles.</p>
          <div className="button-and-icons">
            <a href="/cv.pdf" className="btn btn-primary button-highlight">Télécharger CV</a>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube /></a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
