import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('fr');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="logo">
          <img src="/logo-rcoelhoweb-1.png" alt="Rodrigo Coelho Logo" />
        </div>
        <nav ref={menuRef} className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="language-selector">
          <button 
            className={`btn btn-language ${language === 'fr' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('fr')}
          >
            <img src="/Flag_of_Quebec.svg" alt="FR" className="flag-icon" />
          </button>
          <button 
            className={`btn btn-language ml-2 ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <img src="/Flag_of_Canada.svg" alt="EN" className="flag-icon" />
          </button>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
