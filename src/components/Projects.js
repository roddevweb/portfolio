import React, { useState, useEffect, useRef } from 'react';
import { SiNextdotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiFigma, SiAdobexd } from 'react-icons/si';
import Modal from 'react-modal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

Modal.setAppElement('#root');

const allProjects = [
  {
    title: 'PlayTasks',
    description: 'Une plateforme de jeu moderne mettant l\'accent sur l\'expérience utilisateur et une interface intuitive.',
    image: 'https://via.placeholder.com/600x400.png?text=PlayTasks',
    technologies: [SiFigma, SiReact, SiNextdotjs, SiTailwindcss],
    category: 'UX/UI',
    link: 'https://example.com/playtasks'
  },
  {
    title: 'IntegraQC',
    description: 'Un système complet de contrôle qualité avec une interface élégante et conviviale.',
    image: 'https://via.placeholder.com/600x400.png?text=IntegraQC',
    technologies: [SiFigma, SiAdobexd, SiReact, SiRedux],
    category: 'UX/UI',
    link: 'https://example.com/integraqc'
  },
  {
    title: 'SomaFlix',
    description: 'Une plateforme de diffusion en continu axée sur le contenu éducatif avec un design épuré et moderne.',
    image: 'https://via.placeholder.com/600x400.png?text=SomaFlix',
    technologies: [SiFigma, SiReact, SiNextdotjs, SiTailwindcss],
    category: 'UX/UI',
    link: 'https://example.com/somaflix'
  },
  {
    title: 'Start Projecting Now',
    description: 'Un outil de gestion de projet conçu pour aider les équipes à collaborer efficacement avec une interface intuitive.',
    image: 'https://via.placeholder.com/600x400.png?text=Start+Projecting+Now',
    technologies: [SiFigma, SiReact, SiTypescript, SiRedux],
    category: 'UX/UI',
    link: 'https://example.com/startprojectingnow'
  }
];

const categories = ['Tous', 'UX/UI', 'Applications', 'Logo'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  const filteredProjects = selectedCategory === 'Tous'
    ? allProjects
    : allProjects.filter(project => project.category === (selectedCategory === 'Applications' ? 'Apps' : selectedCategory));

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };
  
  useEffect(() => {
    // Animer le titre de la section
    gsap.fromTo(
      '.section-title',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Animer les boutons de catégorie
    gsap.fromTo(
      '.category-btn',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Animer les cartes de projets
    const animateProjects = () => {
      gsap.fromTo(
        projectsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none'
          }
        }
      );
    };
    
    animateProjects();
    
    // Réanimation lorsque la catégorie change
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedCategory]);

  return (
    <section id="projects" ref={sectionRef}>
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
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div 
                className="project-card" 
                onClick={() => openModal(project)}
                ref={el => projectsRef.current[index] = el}
              >
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-content">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((Icon, i) => (
                      <Icon key={i} size={24} className="technology-icon" />
                    ))}
                  </div>
                  <button className="btn btn-info">Voir le projet</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image du projet"
        className="Modal"
        overlayClassName="Overlay"
      >
        {selectedProject && (
          <div className="modal-content">
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
            <h3 className="mt-4">{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="technologies">
                {selectedProject.technologies.map((Icon, i) => (
                  <Icon key={i} size={24} className="technology-icon mr-2" />
                ))}
              </div>
              <button className="btn btn-info" onClick={() => window.open(selectedProject.link, '_blank')}>
                Visiter le projet
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;