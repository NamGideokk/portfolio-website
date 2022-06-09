import React from "react";
import "./portfolio.scss";

const PortfolioArticle = ({ img, title, githubLink, demoLink }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={img} alt="portfolio image" />
      </div>
      <h3>{title}</h3>
      <a href={githubLink} className="btn" target="_blank">
        Github
      </a>
      <a href={demoLink} className="btn btn-primary" target="_blank">
        Live Demo
      </a>
    </article>
  );
};

export default PortfolioArticle;
