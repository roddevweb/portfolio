import React, { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
// import Testimonials from './components/Testimonials'; // Comentado - não será usado agora
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; // Importando o Footer

function App() {
  const [language, setLanguage] = useState('fr');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <Header onLanguageChange={handleLanguageChange} />
      <Introduction language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Experience language={language} />
      <Education language={language} />
      {/* <Testimonials /> */} {/* Seção de testemunhos comentada - não será usada agora */}
      <ContactForm language={language} />
      <Footer language={language} /> {/* Inclusão do Footer */}
    </div>
  );
}

export default App;
