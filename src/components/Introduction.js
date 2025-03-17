import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowDown } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Introduction.css';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const iconsRef = useRef([]);
  const scrollIndicatorRef = useRef(null);
  const imageRef = useRef(null);
  
  // eslint-disable-next-line no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Timeline para animações de entrada
    const tl = gsap.timeline();
    
    tl.fromTo(headingRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(nameRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(roleRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(descriptionRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(ctaRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(iconsRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(imageRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
      "-=1.5"
    )
    .fromTo(scrollIndicatorRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', repeat: -1, yoyo: true },
      "-=0.5"
    );

    // Efeito de parallax no movimento do mouse
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Atualizar posição para efeitos
      setMousePosition({ 
        x: clientX, 
        y: clientY 
      });
      
      // Efeito sutil na imagem
      gsap.to(imageRef.current, {
        x: (clientX / window.innerWidth - 0.5) * 10,
        y: (clientY / window.innerHeight - 0.5) * 10,
        duration: 1,
        ease: 'power1.out'
      });
    };

    // Remover o ScrollTrigger que estava causando problemas
    // Agora o hero permanecerá visível ao rolar a página

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="introduction" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting" ref={headingRef}>Hello, I'm</span>
            <h1 className="hero-name" ref={nameRef}>Rodrigo <span>Coelho</span></h1>
            <h2 className="hero-role" ref={roleRef}>Full Stack Developer & UI/UX Designer</h2>
            
            <p className="hero-description" ref={descriptionRef}>
              I transform ideas into exceptional digital experiences.
              Creating intuitive interfaces and robust technical solutions.
            </p>
            
            <div className="hero-cta" ref={ctaRef}>
              <a href="/cv.pdf" className="btn-cta">
                <span>Download CV</span>
                <span className="btn-arrow">→</span>
              </a>
              
              <div className="social-links">
                <a 
                  href="https://github.com/roddevweb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="GitHub" 
                  ref={(el) => (iconsRef.current[0] = el)}
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/roddevweb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="LinkedIn" 
                  ref={(el) => (iconsRef.current[1] = el)}
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://wa.me/14384090178" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="WhatsApp" 
                  ref={(el) => (iconsRef.current[2] = el)}
                  className="social-link"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero-image" ref={imageRef}>
            <div className="image-container">
              <div className="image-frame"></div>
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" ref={scrollIndicatorRef}>
          <span>Discover my projects</span>
          <FaArrowDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
