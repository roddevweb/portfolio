import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const translations = {
  fr: {
    nav: [
      { href: '#home', text: 'Accueil' },
      { href: '#projects', text: 'Projets' },
      { href: '#skills', text: 'Compétences' },
      { href: '#experience', text: 'Expérience' },
      { href: '#education', text: 'Formation' },
      { href: '#contact', text: 'Contact' }
    ],
    copyright: '2024 Rodrigo Silva. Tous droits réservés.',
    legal: 'Mentions légales'
  },
  en: {
    nav: [
      { href: '#home', text: 'Home' },
      { href: '#projects', text: 'Projects' },
      { href: '#skills', text: 'Skills' },
      { href: '#experience', text: 'Experience' },
      { href: '#education', text: 'Education' },
      { href: '#contact', text: 'Contact' }
    ],
    copyright: '2024 Rodrigo Silva. All rights reserved.',
    legal: 'Legal Notice'
  }
};

const Footer = ({ language = 'fr' }) => {
  const text = translations[language] || translations.fr;
  
  return (
    <footer id="footer" className="bg-dark text-white p-5">
      <div className="container">
        <div className="footer-links">
          <ul className="list-unstyled">
            {text.nav.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white">{item.text}</a>
              </li>
            ))}
          </ul>
          <div className="social-icons">
            <a href="https://github.com/roddevweb" target="_blank" rel="noopener noreferrer" className="text-white"><FaGithub /></a>
            <a href="https://linkedin.com/in/roddevweb" target="_blank" rel="noopener noreferrer" className="text-white"><FaLinkedin /></a>
            <a href="https://wa.me/4384090178" target="_blank" rel="noopener noreferrer" className="text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
