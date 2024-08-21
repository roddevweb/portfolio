import React from 'react';
import { SiNextdotjs, SiPrisma, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import './Experience.css';

const experiences = [
  {
    company: 'Workwolf',
    title: 'Développeur Front-End',
    period: 'Oct 2022 - Présent (5 mois)',
    description: 'Développement et maintenance d\'interfaces utilisant React, Next, Tailwind, Typescript et Figma. Pour la planification des sprints, l\'utilisation de Jira.',
    technologies: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiReact, SiRedux],
    logo: 'https://via.placeholder.com/50.png?text=W',
  },
  {
    company: 'Cidade Alta',
    title: 'Développeur Front-End',
    period: 'May 2022 - Présent (1 an et 10 mois)',
    description: 'Développement et maintenance d\'interfaces utilisant React, Vite, Typescript, Redux, Styled Components et Figma. Pour la planification des sprints, l\'utilisation de Azure DevOps.',
    tasks: [
      'Développement et maintenance d\'interfaces',
      'Panneau administratif',
      'Système d\'inventaire',
      'Visualisation 3D'
    ],
    technologies: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiReact, SiRedux],
    logo: 'https://via.placeholder.com/50.png?text=CA',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="text-white p-5">
      <div className="container">
        <h2 className="section-title">Expérience Professionnelle</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-icon">
                <img src={experience.logo} alt={`${experience.company} logo`} />
              </div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <h4>@ {experience.company}</h4>
                <span className="period">{experience.period}</span>
                <p>{experience.description}</p>
                {experience.tasks && (
                  <ul className="tasks">
                    {experience.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                )}
                <div className="technologies">
                  {experience.technologies.map((Icon, i) => (
                    <Icon key={i} size={30} className="technology-icon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
