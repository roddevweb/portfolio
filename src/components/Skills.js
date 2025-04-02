import React, { useRef } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiFigma, SiAdobephotoshop, SiAdobexd, SiAdobeaftereffects, SiAdobepremierepro, SiCsharp, SiMysql } from 'react-icons/si';

const titles = {
  fr: {
    section: "Mes compétences",
    categories: {
      uxui: "UX / UI",
      frontend: "Front-End",
      backend: "Back-End",
      cms: "CMS & Outils"
    }
  },
  en: {
    section: "My Skills",
    categories: {
      uxui: "UX / UI",
      frontend: "Front-End",
      backend: "Back-End",
      cms: "CMS & Tools"
    }
  }
};

const Skills = ({ language = 'fr' }) => {
  const sectionRef = useRef(null);
  const currentTitles = titles[language] || titles.fr;

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{currentTitles.section}</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">{currentTitles.categories.uxui}</h5>
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
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">{currentTitles.categories.frontend}</h5>
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
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">{currentTitles.categories.backend}</h5>
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
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">{currentTitles.categories.cms}</h5>
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
                    style={{ width: '80%' }}
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
