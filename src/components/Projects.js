import React, { useState, useEffect, useRef } from 'react';
import { SiNextdotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiFigma, SiAdobexd } from 'react-icons/si';
import Modal from 'react-modal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

Modal.setAppElement('#root');

// Comentário - Array de projetos
const allProjects = {
  fr: [
    // Projetos comentados
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
  ],
  en: [
    // Projects (commented out)
    {
      title: 'PlayTasks',
      description: 'A modern gaming platform focused on user experience and intuitive interface.',
      image: 'https://via.placeholder.com/600x400.png?text=PlayTasks',
      technologies: [SiFigma, SiReact, SiNextdotjs, SiTailwindcss],
      category: 'UX/UI',
      link: 'https://example.com/playtasks'
    },
    {
      title: 'IntegraQC',
      description: 'A complete quality control system with an elegant and user-friendly interface.',
      image: 'https://via.placeholder.com/600x400.png?text=IntegraQC',
      technologies: [SiFigma, SiAdobexd, SiReact, SiRedux],
      category: 'UX/UI',
      link: 'https://example.com/integraqc'
    },
    {
      title: 'SomaFlix',
      description: 'A streaming platform focused on educational content with a clean and modern design.',
      image: 'https://via.placeholder.com/600x400.png?text=SomaFlix',
      technologies: [SiFigma, SiReact, SiNextdotjs, SiTailwindcss],
      category: 'UX/UI',
      link: 'https://example.com/somaflix'
    },
    {
      title: 'Start Projecting Now',
      description: 'A project management tool designed to help teams collaborate effectively with an intuitive interface.',
      image: 'https://via.placeholder.com/600x400.png?text=Start+Projecting+Now',
      technologies: [SiFigma, SiReact, SiTypescript, SiRedux],
      category: 'UX/UI',
      link: 'https://example.com/startprojectingnow'
    }
  ]
};

const categories = {
  fr: ['Tous', 'UX/UI', 'Applications', 'Logo'],
  en: ['All', 'UX/UI', 'Applications', 'Logo']
};

const titles = {
  fr: "Projets en vedette",
  en: "Featured Projects"
};

const developmentMessage = {
  fr: "En développement",
  en: "Under development"
};

const Projects = ({ language = 'fr' }) => {
  const currentCategories = categories[language] || categories.fr;
  const defaultCategory = currentCategories[0];
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);
  const sectionTitle = titles[language] || titles.fr;
  const message = developmentMessage[language] || developmentMessage.fr;

  /*
  const filteredProjects = selectedCategory === defaultCategory
    ? allProjects[language]
    : allProjects[language].filter(project => project.category === (selectedCategory === currentCategories[2] ? 'Apps' : selectedCategory));

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };
  */
  
  useEffect(() => {
    // Reset selected category when language changes
    setSelectedCategory(currentCategories[0]);
    
    // Animar o título da section
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
    
    // Animar os botões de categoria
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
    
    /*
    // Animar as cartas de projetos
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
    */
    
    // Réanimation lorsque la catégorie change
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedCategory, currentCategories, language]);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="categories">
          {currentCategories.map((category, index) => (
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
          <div className="col-12 text-center my-5">
            <h3>{message}</h3>
          </div>
        </div>
        
        {/* Conteúdo da seção de projetos comentado
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
        */}
      </div>

      {/* Modal comentado
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
      */}
    </section>
  );
};

export default Projects;