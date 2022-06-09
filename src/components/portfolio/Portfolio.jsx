import React from "react";
import PortfolioArticle from "./PortfolioArticle";
import "./portfolio.scss";
import PFIMG01 from "../../assets/pmu-logo-ex.png";
import PFIMG02 from "../../assets/LogoHorizon.png";
import PFIMG03 from "../../assets/twixxer_logo.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>포트폴리오</h2>

      <div className="container portfolio__container">
        <PortfolioArticle
          img={PFIMG01}
          title="픽미업"
          githubLink="https://github.com/NamGideokk/semi_final_project"
          demoLink="#"
        />
        <PortfolioArticle
          img={PFIMG02}
          title="PET ＆ PET"
          githubLink="https://github.com/NamGideokk/final_project"
          demoLink="#"
        />
        <PortfolioArticle
          img={PFIMG03}
          title="픽미업"
          githubLink="https://github.com/NamGideokk/twixxer"
          demoLink="https://namgideokk.github.io/twixxer/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
