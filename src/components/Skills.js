import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiFigma, SiAdobephotoshop, SiAdobexd, SiAdobeaftereffects, SiAdobepremierepro, SiCsharp, SiMysql } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const progressRefs = useRef([]);

  useEffect(() => {
    // Animar as barras de progresso quando a seção estiver visível
    const progressBars = progressRefs.current;
    
    progressBars.forEach((bar) => {
      const percentage = bar.getAttribute('data-percentage');
      
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${percentage}%`,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
    
    // Animar os cards quando a seção estiver visível
    gsap.fromTo(
      '.skill-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2>My Skills</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">UX / UI</h5>
                <div className="skill-icons">
                  <div className="icon-wrapper" data-tooltip="Figma">
                    <SiFigma className="si" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="Photoshop">
                    <SiAdobephotoshop className="si" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="Adobe XD">
                    <SiAdobexd className="si" />
                  </div>
                </div>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    data-percentage="90" 
                    ref={el => progressRefs.current[0] = el}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">Front-End</h5>
                <div className="skill-icons">
                  <div className="icon-wrapper" data-tooltip="HTML5">
                    <FaHtml5 className="fa" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="CSS3">
                    <FaCss3Alt className="fa" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="JavaScript">
                    <FaJsSquare className="fa" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="React">
                    <FaReact className="fa" />
                  </div>
                </div>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    data-percentage="95" 
                    ref={el => progressRefs.current[1] = el}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">Back-End</h5>
                <div className="skill-icons">
                  <div className="icon-wrapper" data-tooltip="Node.js">
                    <FaNodeJs className="fa" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="C#">
                    <SiCsharp className="si" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="MySQL">
                    <SiMysql className="si" />
                  </div>
                </div>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    data-percentage="85" 
                    ref={el => progressRefs.current[2] = el}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">CMS & Tools</h5>
                <div className="skill-icons">
                  <div className="icon-wrapper" data-tooltip="WordPress">
                    <FaWordpress className="fa" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="Premiere Pro">
                    <SiAdobepremierepro className="si" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="After Effects">
                    <SiAdobeaftereffects className="si" />
                  </div>
                </div>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    data-percentage="80" 
                    ref={el => progressRefs.current[3] = el}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
