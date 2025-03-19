import React from 'react';
import './Education.css';

const educations = [
  {
    school: 'Cégep Gérald-Godin',
    degree: 'Attestation d\'études collégiales (AEC)',
    program: 'Programmation en technologies Web',
    period: '2024-2025',
    location: 'Québec',
    logo: '/logo_gerald_godin.jpg',
  },
  {
    school: 'Collège LaSalle',
    degree: 'Attestation d\'études collégiales (AEC)',
    program: 'Intégrateur multimédia',
    period: '2018-2019',
    location: 'Montréal',
    logo: '/logo_lasalle.jpg',
  },
  {
    school: 'Université Estacio De Sa',
    degree: 'Diplôme d\'études collégiales (DEC)',
    program: 'Design graphique',
    period: '2006-2009',
    location: 'Brésil',
    logo: '/logo_estacio.jpg',
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Formation scolaire</h2>
        <div className="timeline">
          {educations.map((education, index) => (
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