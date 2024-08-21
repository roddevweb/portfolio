import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiFigma, SiAdobephotoshop, SiAdobexd, SiAdobeaftereffects, SiAdobepremierepro, SiCsharp, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Compétences</h2>
        <div className="row">
          <div className="col-md-3">
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
              </div>
            </div>
          </div>
          <div className="col-md-3">
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
                  <div className="icon-wrapper" data-tooltip="Node.js">
                    <FaNodeJs className="fa" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="WordPress">
                    <FaWordpress className="fa" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <div className="skill-icons">
                  <div className="icon-wrapper" data-tooltip="C#">
                    <SiCsharp className="si" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="MySQL">
                    <SiMysql className="si" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="Node.js">
                    <FaNodeJs className="fa" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card skill-card">
              <div className="card-body">
                <h5 className="card-title">Video et Photo</h5>
                <div className="skill-icons">
                  <div className="icon-wrapper" data-tooltip="Premiere Pro">
                    <SiAdobepremierepro className="si" />
                  </div>
                  <div className="icon-wrapper" data-tooltip="After Effects">
                    <SiAdobeaftereffects className="si" />
                  </div>
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
