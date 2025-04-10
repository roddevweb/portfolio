import React, { useRef } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWordpress, FaBootstrap } from 'react-icons/fa';
import { SiFigma, SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro, SiCsharp, SiMysql, SiPhp, SiFirebase, SiSupabase, SiAdobeillustrator, SiWoocommerce, SiShopify } from 'react-icons/si';

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
          {/* Première colonne - gauche */}
          <div className="col-md-6">
            {/* UX / UI */}
            <div className="skill-block">
              <h3 className="skill-title">{currentTitles.categories.uxui}</h3>
              <div className="icon-grid">
                <div className="icon-wrapper" data-tooltip="Figma">
                  <SiFigma className="skill-icon" />
                  <span className="icon-label">Figma</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Photoshop">
                  <SiAdobephotoshop className="skill-icon" />
                  <span className="icon-label">Photoshop</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Illustrator">
                  <SiAdobeillustrator className="skill-icon" />
                  <span className="icon-label">Illustrator</span>
                </div>
              </div>
            </div>

            {/* Front-End */}
            <div className="skill-block">
              <h3 className="skill-title">{currentTitles.categories.frontend}</h3>
              <div className="icon-grid">
                <div className="icon-wrapper" data-tooltip="HTML5">
                  <FaHtml5 className="skill-icon" />
                  <span className="icon-label">HTML5</span>
                </div>
                <div className="icon-wrapper" data-tooltip="CSS3">
                  <FaCss3Alt className="skill-icon" />
                  <span className="icon-label">CSS3</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Bootstrap">
                  <FaBootstrap className="skill-icon" />
                  <span className="icon-label">Bootstrap</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Material UI">
                  <div className="mui-placeholder">MUI</div>
                  <span className="icon-label">Material UI</span>
                </div>
                <div className="icon-wrapper" data-tooltip="JavaScript">
                  <FaJsSquare className="skill-icon" />
                  <span className="icon-label">JavaScript</span>
                </div>
                <div className="icon-wrapper" data-tooltip="React">
                  <FaReact className="skill-icon" />
                  <span className="icon-label">React</span>
                </div>
                <div className="icon-wrapper" data-tooltip="React Native">
                  <FaReact className="skill-icon react-native-icon" />
                  <span className="icon-label">React Native</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deuxième colonne - droite */}
          <div className="col-md-6">
            {/* CMS & Outils */}
            <div className="skill-block">
              <h3 className="skill-title">{currentTitles.categories.cms}</h3>
              <div className="icon-grid">
                <div className="icon-wrapper" data-tooltip="WordPress">
                  <FaWordpress className="skill-icon" />
                  <span className="icon-label">WordPress</span>
                </div>
                <div className="icon-wrapper" data-tooltip="WooCommerce">
                  <SiWoocommerce className="skill-icon" />
                  <span className="icon-label">WooCommerce</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Shopify">
                  <SiShopify className="skill-icon" />
                  <span className="icon-label">Shopify</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Premiere Pro">
                  <SiAdobepremierepro className="skill-icon" />
                  <span className="icon-label">Premiere</span>
                </div>
                <div className="icon-wrapper" data-tooltip="After Effects">
                  <SiAdobeaftereffects className="skill-icon" />
                  <span className="icon-label">After Effects</span>
                </div>
              </div>
            </div>

            {/* Back-End */}
            <div className="skill-block">
              <h3 className="skill-title">{currentTitles.categories.backend}</h3>
              <div className="icon-grid">
                <div className="icon-wrapper" data-tooltip="C#">
                  <SiCsharp className="skill-icon" />
                  <span className="icon-label">C#</span>
                </div>
                <div className="icon-wrapper" data-tooltip="PHP">
                  <SiPhp className="skill-icon" />
                  <span className="icon-label">PHP</span>
                </div>
                <div className="icon-wrapper" data-tooltip="MySQL">
                  <SiMysql className="skill-icon" />
                  <span className="icon-label">MySQL</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Supabase">
                  <SiSupabase className="skill-icon" />
                  <span className="icon-label">Supabase</span>
                </div>
                <div className="icon-wrapper" data-tooltip="Firebase">
                  <SiFirebase className="skill-icon" />
                  <span className="icon-label">Firebase</span>
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
