import React, { useState, useEffect, useRef } from 'react';
import { SiNextdotjs, SiReact, SiTailwindcss, SiFigma, SiAdobexd, SiBootstrap, SiWordpress, SiWoocommerce, SiCsharp, SiSupabase, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects } from 'react-icons/si';
import { FaGithub, FaTimes, FaReact, FaWordpress } from 'react-icons/fa';
import Modal from 'react-modal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

Modal.setAppElement('#root');

// Array de projetos
const allProjects = {
  fr: [
    // Projet SkillUp (en premier)
    {
      title: 'SkillUp',
      description: 'Plateforme d\'apprentissage de langues développée pour le CEGEP Gerald-Godin, offrant des parcours personnalisés, des contenus interactifs et une interface responsive moderne. Projet de fin d\'études où j\'étais responsable du front-end.',
      image: require('../works/skillup.jpg'),
      technologies: [SiFigma, SiBootstrap, SiReact, SiCsharp],
      category: 'Applications',
      link: 'https://skill-up-pied.vercel.app/',
      github: 'https://github.com/roddevweb/SkillUp'
    },
    // Projet PlayTasks (en deuxième position)
    {
      title: 'PlayTasks',
      description: 'Application mobile éducative qui enseigne la gestion financière aux enfants tout en organisant leurs routines quotidiennes. Interface ludique permettant aux parents de créer des tâches, suivre les progrès et récompenser les enfants.',
      image: require('../works/app-play-tasks.jpg'),
      technologies: [SiFigma, {component: FaReact, isNative: true}, SiSupabase],
      category: 'UX/UI',
      link: 'https://play.google.com/store/apps/details?id=com.playstaks'
    },
    // SomaFlix (en troisième position)
    {
      title: 'SomaFlix',
      description: 'Application éducative aidant les enfants à maîtriser les mathématiques à travers des histoires ludiques interactives. Les problèmes mathématiques sont présentés par niveaux de difficulté, enseignant les opérations de base de façon engageante.',
      image: require('../works/soma-flix.jpg'),
      technologies: [SiFigma, {component: FaReact, isNative: true}, SiSupabase],
      category: 'UX/UI',
      link: 'https://example.com/somaflix'
    },
    // Projet Cadeau Super
    {
      title: 'Cadeau Super',
      description: 'Boutique en ligne de produits personnalisables (vêtements, accessoires, décorations) développée avec WordPress et WooCommerce. Design responsive et expérience utilisateur optimisée pour faciliter la personnalisation et l\'achat de cadeaux uniques.',
      image: require('../works/cadeau-super.jpg'),
      technologies: [SiFigma, SiWordpress, SiWoocommerce],
      category: 'Applications',
      link: 'https://cadeausuper.ca/',
      github: ''
    },
    // Projet Start Projecting Now
    {
      title: 'Start Projecting Now',
      description: 'Site de consultoria et de formation en gestion de projet, proposant des cours en ligne et des ressources pour la préparation aux certifications PMP et Scrum Master. Interface utilisateur moderne et responsive avec WordPress.',
      image: require('../works/site_startprojectingnow.jpg'),
      technologies: [SiFigma, SiWordpress, FaWordpress, SiWoocommerce, FaWordpress],
      category: 'Applications',
      link: 'https://startprojectingnow.com/',
      github: ''
    },
    // Médias sociaux SPN (vers la fin)
    {
      title: 'Posts SPN v2',
      description: 'Conception graphique de publications pour médias sociaux avec identité visuelle modernisée pour Start Projecting Now. Design stratégique optimisé pour l\'engagement et la visibilité dans les fils d\'actualité des plateformes LinkedIn et Instagram.',
      image: require('../works/posts-spn-v2.jpg'),
      technologies: [SiAdobephotoshop],
      category: 'UX/UI',
      link: '',
      github: ''
    },
    // Projet Logos Variés (vers la fin)
    {
      title: 'Collection de Logos',
      description: 'Création d\'identités visuelles pour diverses marques et secteurs. Chaque logo capture l\'essence du client et reflète ses valeurs fondamentales.',
      image: require('../works/logos.jpg'),
      technologies: [SiAdobeillustrator, SiAdobephotoshop],
      category: 'Logo',
      link: '',
      github: ''
    },
    // Ajout des vidéos (en dernier)
    {
      title: 'Teaser - Start Projecting Now',
      description: 'Vidéo promotionnelle annonçant le lancement de la plateforme de formation en ligne de Start Projecting Now, spécialisée en gestion de projet.',
      image: require('../works/videos/video-teaser-spn.jpg'),
      technologies: [SiAdobepremierepro, SiAdobeaftereffects],
      category: 'Vidéos',
      link: '',
      videoUrl: require('../works/videos/video-teaser-spn.mp4')
    },
    {
      title: 'Project Management - SPN',
      description: 'Vidéo promotionnelle pour réseaux sociaux présentant les services de consultoria pour aspirants gestionnaires de projet.',
      image: require('../works/videos/video-consulting-spn.jpg'),
      technologies: [SiAdobepremierepro, SiAdobeaftereffects],
      category: 'Vidéos',
      link: '',
      videoUrl: require('../works/videos/video-1-consulting-pm.mp4')
    }
  ],
  en: [
    // SkillUp Project (en premier)
    {
      title: 'SkillUp',
      description: 'Language learning platform developed for CEGEP Gerald-Godin, offering personalized learning paths, interactive content, and a modern responsive interface. Final project where I was responsible for the front-end.',
      image: require('../works/skillup.jpg'),
      technologies: [SiFigma, SiBootstrap, SiReact, SiCsharp],
      category: 'Applications',
      link: 'https://skill-up-pied.vercel.app/',
      github: 'https://github.com/roddevweb/SkillUp'
    },
    // PlayTasks Project (en deuxième position)
    {
      title: 'PlayTasks',
      description: 'Educational mobile app teaching financial literacy to children while organizing their daily routines. Playful interface allowing parents to create tasks, track progress, and reward children through a gamified experience.',
      image: require('../works/app-play-tasks.jpg'),
      technologies: [SiFigma, {component: FaReact, isNative: true}, SiSupabase],
      category: 'UX/UI',
      link: 'https://play.google.com/store/apps/details?id=com.playstaks'
    },
    // SomaFlix (en troisième position)
    {
      title: 'SomaFlix',
      description: 'Educational app helping children master mathematics through interactive playful stories. Math problems are presented by difficulty levels, teaching basic operations in an engaging way.',
      image: require('../works/soma-flix.jpg'),
      technologies: [SiFigma, {component: FaReact, isNative: true}, SiSupabase],
      category: 'UX/UI',
      link: 'https://example.com/somaflix'
    },
    // Cadeau Super Project
    {
      title: 'Cadeau Super',
      description: 'Online store for customizable products (clothing, accessories, home decor) developed with WordPress and WooCommerce. Responsive design and optimized user experience to facilitate personalization and purchase of unique gifts.',
      image: require('../works/cadeau-super.jpg'),
      technologies: [SiFigma, SiWordpress, SiWoocommerce],
      category: 'Applications',
      link: 'https://cadeausuper.ca/',
      github: ''
    },
    // Start Projecting Now Project
    {
      title: 'Start Projecting Now',
      description: 'Project management consultancy and training site offering online courses and resources for PMP and Scrum Master certification preparation. Modern and responsive user interface built with WordPress.',
      image: require('../works/site_startprojectingnow.jpg'),
      technologies: [SiFigma, SiWordpress, FaWordpress, SiWoocommerce, FaWordpress],
      category: 'Applications',
      link: 'https://startprojectingnow.com/',
      github: ''
    },
    // SPN Social Media (vers la fin)
    {
      title: 'SPN Posts v2',
      description: 'Graphic design for social media content with modernized visual identity for Start Projecting Now. Strategic design optimized for engagement and visibility in LinkedIn and Instagram news feeds.',
      image: require('../works/posts-spn-v2.jpg'),
      technologies: [SiAdobephotoshop],
      category: 'UX/UI',
      link: '',
      github: ''
    },
    // Various Logos Project (vers la fin)
    {
      title: 'Logo Collection',
      description: 'Creation of visual identities for various brands and industries. Each logo captures the client\'s essence and reflects their core values.',
      image: require('../works/logos.jpg'),
      technologies: [SiAdobeillustrator, SiAdobephotoshop],
      category: 'Logo',
      link: '',
      github: ''
    },
    // Adding videos (en dernier)
    {
      title: 'Teaser - Start Projecting Now',
      description: 'Promotional video announcing the launch of Start Projecting Now\'s online training platform specialized in project management.',
      image: require('../works/videos/video-teaser-spn.jpg'),
      technologies: [SiAdobepremierepro, SiAdobeaftereffects],
      category: 'Videos',
      link: '',
      videoUrl: require('../works/videos/video-teaser-spn.mp4')
    },
    {
      title: 'Project Management - SPN',
      description: 'Promotional social media video showcasing consulting services for aspiring project managers.',
      image: require('../works/videos/video-consulting-spn.jpg'),
      technologies: [SiAdobepremierepro, SiAdobeaftereffects],
      category: 'Videos',
      link: '',
      videoUrl: require('../works/videos/video-1-consulting-pm.mp4')
    }
  ]
};

const categories = {
  fr: ['Tous', 'UX/UI', 'Applications', 'Logo', 'Vidéos'],
  en: ['All', 'UX/UI', 'Applications', 'Logo', 'Videos']
};

const titles = {
  fr: "Projets en vedette",
  en: "Featured Projects"
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
  
  // Textes pour le bouton GitHub
  const githubText = language === 'fr' ? 'Voir le code' : 'View code';

  // Fonction pour obtenir le nom de la technologie à partir de l'icône
  const getTechName = (Icon, index, technologies) => {
    if (typeof Icon === 'object' && Icon.component) {
      if (Icon.isNative) return 'React Native';
      return '';
    }
    
    if (Icon === SiFigma) return 'Figma';
    if (Icon === SiBootstrap) return 'Bootstrap';
    if (Icon === SiReact) return 'React';
    if (Icon === SiCsharp) return 'C#';
    if (Icon === SiNextdotjs) return 'Next.js';
    if (Icon === SiTailwindcss) return 'Tailwind';
    if (Icon === SiWordpress) return 'WordPress';
    if (Icon === SiWoocommerce) return 'WooCommerce';
    if (Icon === SiAdobexd) return 'Adobe XD';
    if (Icon === SiSupabase) return 'Supabase';
    if (Icon === SiAdobephotoshop) return 'Photoshop';
    if (Icon === SiAdobeillustrator) return 'Illustrator';
    if (Icon === SiAdobepremierepro) return 'Premiere Pro';
    if (Icon === SiAdobeaftereffects) return 'After Effects';
    
    // Pour différencier Divi et LearnDash
    if (Icon === FaWordpress) {
      if (index === 2) return 'Divi';
      if (index === 4) return 'LearnDash';
    }
    
    return '';
  };

  const filteredProjects = selectedCategory === defaultCategory
    ? allProjects[language]
    : allProjects[language].filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };
  
  useEffect(() => {
    // Reset selected category when language changes
    setSelectedCategory(currentCategories[0]);
    
    // Nettoyage des animations précédentes
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [language, currentCategories]);

  // Effet séparé pour les animations, s'exécutant après le rendu complet
  useEffect(() => {
    // Attendre que le DOM soit complètement mis à jour
    const animationTimeout = setTimeout(() => {
      // Animer le titre de la section
      if (sectionRef.current) {
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
      }
      
      // Animer les projets seulement si projectsRef a des éléments
      const projectElements = projectsRef.current.filter(el => el !== null);
      if (projectElements.length > 0) {
        gsap.fromTo(
          projectElements,
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
      }
    }, 100); // Petit délai pour s'assurer que le DOM est prêt
    
    return () => {
      clearTimeout(animationTimeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedCategory, language]);

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
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div 
                className="project-card" 
                onClick={() => openModal(project)}
                ref={el => projectsRef.current[index] = el}
              >
                <img src={project.image} className="card-img-top" alt={project.title} />
                {project.title === 'SkillUp' && (
                  <div className="badge-development">{language === 'fr' ? 'En développement' : 'Under development'}</div>
                )}
                <div className="card-content">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((Icon, i) => {
                      if (typeof Icon === 'object' && Icon.component) {
                        const IconComponent = Icon.component;
                        return (
                          <div key={i} className="tech-item">
                            <IconComponent size={24} className={`technology-icon ${Icon.isNative ? 'react-native-icon' : ''}`} />
                            <span className="tech-name">{getTechName(Icon, i, project.technologies)}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={i} className="tech-item">
                          <Icon size={24} className="technology-icon" />
                          <span className="tech-name">{getTechName(Icon, i, project.technologies)}</span>
                        </div>
                      );
                    })}
                  </div>
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
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        style={{
          content: {
            width: 'auto',
            maxHeight: 'fit-content'
          }
        }}
      >
        {selectedProject && (
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            {selectedProject.videoUrl ? (
              <div className="video-container">
                <video 
                  controls 
                  className="modal-video"
                  src={selectedProject.videoUrl}
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            ) : (
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
            )}
            <div className="modal-title-tech">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-tech">
                {selectedProject.technologies.map((Icon, i) => {
                  if (typeof Icon === 'object' && Icon.component) {
                    const IconComponent = Icon.component;
                    return (
                      <div key={i} className="tech-item-modal">
                        <IconComponent size={28} className={`technology-icon mx-2 ${Icon.isNative ? 'react-native-icon' : ''}`} />
                        <span className="tech-name">{getTechName(Icon, i, selectedProject.technologies)}</span>
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="tech-item-modal">
                      <Icon size={28} className="technology-icon mx-2" />
                      <span className="tech-name">{getTechName(Icon, i, selectedProject.technologies)}</span>
                    </div>
                  );
                })}
              </div>
              <div className="modal-buttons">
                {selectedProject.github && (
                  <button className="btn btn-outline-secondary me-2" onClick={() => window.open(selectedProject.github, '_blank')}>
                    <FaGithub className="me-2" /> {githubText}
                  </button>
                )}
                {selectedProject.title === 'PlayTasks' && selectedProject.link && (
                  <button className="btn btn-success me-2" onClick={() => window.open(selectedProject.link, '_blank')}>
                    Play Store
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;