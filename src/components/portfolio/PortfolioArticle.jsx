import React from "react";
import "./portfolio.scss";

const PortfolioArticle = ({
  img,
  title,
  extraInfo,
  githubLink,
  demoLink,
  extraButtonTitle = "Demo",
}) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={img} alt="portfolio image" />
      </div>
      <h3>{title}</h3>
      <p>{extraInfo}</p>
      <div className="portfolio__item-cta">
        <a href={githubLink} className="btn" target="_blank">
          Github
        </a>
        <a href={demoLink} className="btn btn-primary" target="_blank">
          {extraButtonTitle}
        </a>
      </div>
      {/* <div className="empty-bar"></div> */}
    </article>
  );
};

export default PortfolioArticle;
