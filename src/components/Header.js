import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const navItems = {
  fr: [
    { href: '#home', text: 'Accueil' },
    { href: '#projects', text: 'Projets' },
    { href: '#skills', text: 'Compétences' },
    { href: '#experience', text: 'Expérience' },
    { href: '#education', text: 'Formation' },
    { href: '#contact', text: 'Contact' }
  ],
  en: [
    { href: '#home', text: 'Home' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#experience', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#contact', text: 'Contact' }
  ]
};

const Header = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('fr');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const currentNavItems = navItems[language] || navItems.fr;

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
          <img src="/logo-rod-silva.png" alt="Logo Rodrigo Silva" />
        </div>
        <nav ref={menuRef} className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {currentNavItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">{item.text}</a>
              </li>
            ))}
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
