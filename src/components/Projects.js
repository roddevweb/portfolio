import React, { useState } from 'react';
import { SiNextdotjs, SiPrisma, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Modal from 'react-modal';
import './Projects.css';

const allProjects = [
  {
    title: 'BookWise',
    description: 'BookWise est une plateforme de notation de livres développée durant le bootcamp Ignite de Rocketseat. Avec un design Figma, nous avons créé une application Full Stack avec Next.js.',
    image: 'https://via.placeholder.com/600x400.png?text=BookWise',
    technologies: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiReact, SiRedux],
    category: 'Apps',
    link: 'https://example.com/bookwise'
  },
  {
    title: 'Ignite Call',
    description: 'Ce projet permet aux utilisateurs de créer un compte et de recevoir des rendez-vous sur le calendrier Google, similaire à Calendly.',
    image: 'https://via.placeholder.com/600x400.png?text=Ignite+Call',
    technologies: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiReact, SiRedux],
    category: 'Apps',
    link: 'https://example.com/ignitecall'
  },
  {
    title: 'UX/UI Design for E-commerce',
    description: 'Un projet de design UX/UI pour un site de commerce électronique, mettant en valeur une interface utilisateur intuitive et une expérience utilisateur fluide.',
    image: 'https://via.placeholder.com/600x400.png?text=UX/UI+Design+for+E-commerce',
    technologies: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiReact, SiRedux],
    category: 'UX/UI',
    link: 'https://example.com/uxui'
  },
  {
    title: 'Logo Design for Startup',
    description: 'Un logo moderne et attrayant créé pour une startup technologique.',
    image: 'https://via.placeholder.com/600x400.png?text=Logo+Design+for+Startup',
    technologies: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiReact, SiRedux],
    category: 'Logo',
    link: 'https://example.com/logo'
  }
];

const categories = ['All', 'UX/UI', 'Apps', 'Logo'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="text-white p-5">
      <div className="container">
        <h2 className="section-title">Projets en vedette</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card project-card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-content">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((Icon, i) => (
                      <Icon key={i} size={30} className="technology-icon" />
                    ))}
                  </div>
                  <button className="btn btn-info mt-3" onClick={() => openModal(project)}>Voir le projet</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="Modal"
        overlayClassName="Overlay"
      >
        {selectedProject && (
          <div className="modal-content">
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Accéder au projet</a>
            <button onClick={closeModal} className="btn btn-secondary">Fermer</button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
