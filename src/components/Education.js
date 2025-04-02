import React from 'react';
import './Education.css';

const educations = {
  fr: [
    {
      school: 'Cégep Gérald-Godin',
      degree: 'Attestation d\'études collégiales (AEC)',
      program: 'Programmation en technologies Web',
      period: '2024-2025',
      location: 'Québec',
      logo: '/logo-cegep-gerald-godin.jpg',
    },
    {
      school: 'Collège LaSalle',
      degree: 'Attestation d\'études collégiales (AEC)',
      program: 'Intégrateur multimédia',
      period: '2018-2019',
      location: 'Montréal',
      logo: '/logo-LaSalle.jpg',
    },
    {
      school: 'Université Estácio de Sá',
      degree: 'Diplôme d\'études collégiales (DEC)',
      program: 'Design graphique',
      period: '2006-2009',
      location: 'Brésil',
      logo: '/logo-estacio.jpg',
    },
  ],
  en: [
    {
      school: 'Cégep Gérald-Godin',
      degree: 'Attestation of College Studies (AEC)',
      program: 'Web Technologies Programming',
      period: '2024-2025',
      location: 'Quebec',
      logo: '/logo-cegep-gerald-godin.jpg',
    },
    {
      school: 'LaSalle College',
      degree: 'Attestation of College Studies (AEC)',
      program: 'Multimedia Integration',
      period: '2018-2019',
      location: 'Montreal',
      logo: '/logo-LaSalle.jpg',
    },
    {
      school: 'Estácio de Sá University',
      degree: 'Diploma of Collegiate Studies (DEC)',
      program: 'Graphic Design',
      period: '2006-2009',
      location: 'Brazil',
      logo: '/logo-estacio.jpg',
    },
  ]
};

const titles = {
  fr: "Formation scolaire",
  en: "Education"
};

const Education = ({ language = 'fr' }) => {
  const currentEducations = educations[language] || educations.fr;
  const sectionTitle = titles[language] || titles.fr;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="timeline">
          {currentEducations.map((education, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-icon">
                <img src={education.logo} alt={`Logo ${education.school}`} className="school-logo" />
              </div>
              <div className="timeline-content">
                <h3 className="degree-title">{education.degree}</h3>
                <h4 className="program-name">{education.program}</h4>
                <div className="school-info">
                  <span className="school-name">{education.school}</span>
                  <span className="period">{education.period}</span>
                  <span className="location">({education.location})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 