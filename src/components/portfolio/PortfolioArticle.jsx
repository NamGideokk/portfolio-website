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
      <div className="portfolio__item-image">
        <img src={img} alt="portfolio image" />
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
