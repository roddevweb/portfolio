import React from 'react';
import './Experience.css';

const experiences = {
  fr: [
    {
      company: 'Groupe Conseil Manso & Baehr',
      title: 'Designer Web (UI/UX)',
      period: '2019-2022',
      location: 'Longueuil, Québec',
      tasks: [
        'Transposition de maquettes (via Figma et Photoshop) en format HTML et CSS pour des sites web responsifs et esthétiques.',
        'Développement de contenus visuels attractifs pour diverses plateformes sociales, en respectant les lignes directrices de l\'entreprise.',
        'Mise en page, illustration et publication d\'articles de blogue, de documents variés et de pages d\'atterrissage en utilisant WordPress (DIVI, Fluent-CRM, WooCommerce).',
        'Mise à jour et optimisation continue des cours en ligne via l\'extension LearnDash, assurant une expérience utilisateur fluide.',
      ],
      logo: '/logo_spn.jpg',
    },
    {
      company: 'École Sacré-Cœur de Marie',
      title: 'Designer Web (UI/UX)',
      period: '2012-2018',
      location: 'Brésil',
      tasks: [
        'Créer des concepts pour différents médias imprimés et numériques (statiques et animés).',
        'Participer aux décisions marketing pour les différents projets.',
        'Retoucher les photos et produire le montage de vidéos.',
        'Maintenir et améliorer les sites existants.',
      ],
      logo: '/logo_scm.jpg',
    },
    {
      company: 'OI Telecom',
      title: 'Designer Web (UI/UX)',
      period: '2008-2012',
      location: 'Brésil',
      tasks: [
        'Concevoir et prototyper des pages Web et des systèmes internes.',
        'Découper les maquettes graphiques et intégrer HTML / CSS.',
        'Maintenir et améliorer les sites existants.',
      ],
      logo: '/logo_oi.jpg',
    },
  ],
  en: [
    {
      company: 'Groupe Conseil Manso & Baehr',
      title: 'Web Designer (UI/UX)',
      period: '2019-2022',
      location: 'Longueuil, Quebec',
      tasks: [
        'Transformed mockups (via Figma and Photoshop) into HTML and CSS format for responsive and aesthetic websites.',
        'Developed attractive visual content for various social platforms, adhering to company guidelines.',
        'Laid out, illustrated, and published blog articles, various documents, and landing pages using WordPress (DIVI, Fluent-CRM, WooCommerce).',
        'Continuously updated and optimized online courses via the LearnDash extension, ensuring a smooth user experience.',
      ],
      logo: '/logo_spn.jpg',
    },
    {
      company: 'École Sacré-Cœur de Marie',
      title: 'Web Designer (UI/UX)',
      period: '2012-2018',
      location: 'Brazil',
      tasks: [
        'Created concepts for various print and digital media (static and animated).',
        'Participated in marketing decisions for different projects.',
        'Retouched photos and produced video edits.',
        'Maintained and improved existing websites.',
      ],
      logo: '/logo_scm.jpg',
    },
    {
      company: 'OI Telecom',
      title: 'Web Designer (UI/UX)',
      period: '2008-2012',
      location: 'Brazil',
      tasks: [
        'Designed and prototyped web pages and internal systems.',
        'Sliced graphic mockups and integrated HTML/CSS.',
        'Maintained and improved existing websites.',
      ],
      logo: '/logo_oi.jpg',
    },
  ]
};

const titles = {
  fr: "Expérience professionnelle",
  en: "Professional Experience"
};

const Experience = ({ language = 'fr' }) => {
  const currentExperiences = experiences[language] || experiences.fr;
  const sectionTitle = titles[language] || titles.fr;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="timeline">
          {currentExperiences.map((experience, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-icon">
                <img src={experience.logo} alt={`Logo ${experience.company}`} className="company-logo" />
              </div>
              <div className="timeline-content">
                <h3 className="job-title">{experience.title}</h3>
                <h4 className="company-name">
                  @ {experience.company} — {experience.period} <span className="location">({experience.location})</span>
                </h4>
                <ul className="tasks-list">
                  {experience.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
