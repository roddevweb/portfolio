import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
// import Testimonials from './components/Testimonials'; // Comentado - não será usado agora
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; // Importando o Footer

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Experience />
      {/* <Testimonials /> */} {/* Seção de testemunhos comentada - não será usada agora */}
      <ContactForm />
      <Footer /> {/* Inclusão do Footer */}
    </div>
  );
}

export default App;
