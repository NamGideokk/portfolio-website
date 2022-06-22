import React from "react";
import { useState } from "react";
import "./portfolio.scss";

const PortfolioArticle = ({
  img,
  title,
  extraInfo,
  githubLink,
  extraLink,
  extraButtonTitle = "Demo",
}) => {
  const [showModal, setShowModal] = useState(false);
  function clickPortfolio() {
    setShowModal(true);
  }
  return (
    <article className="portfolio__item" onClick={clickPortfolio}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="img__container">
        <div className="project-info">안녕 안녕</div>
        <img src={img} alt="portfolio image" className="project-image" />
      </div>
      <h3 className="kor">{title}</h3>
      <p className="kor">{extraInfo}</p>
      <div className="portfolio__item-cta">
        <a href={githubLink} className="btn" target="_blank">
          Github
        </a>
        <a href={extraLink} className="btn btn-primary" target="_blank">
          {extraButtonTitle}
        </a>
      </div>
    </article>
  );
};

export default PortfolioArticle;
