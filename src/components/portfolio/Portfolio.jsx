import React from "react";
import PortfolioArticle from "./PortfolioArticle";
import "./portfolio.scss";
import PFIMG01 from "../../assets/semiFinal.jpg";
import PFIMG02 from "../../assets/final.jpg";
import PFIMG03 from "../../assets/toy01.jpg";
import SlideTitle from "../common/slideTitle/SlideTitle";

const Portfolio = () => {
  return (
    <section id="project">
      <main className="main__container">
        <h4>Project</h4>
        <SlideTitle engTitle="My Work" korTitle="작업한 프로젝트 입니다" />

        <div className="container portfolio__container">
          <PortfolioArticle
            img={PFIMG01}
            title="픽미업"
            extraInfo="#온라인쇼핑몰 #팀프로젝트 #우수상🏆"
            githubLink="https://github.com/NamGideokk/semi_final_project"
            extraLink="https://www.miricanvas.com/v/1vwvzx"
            extraButtonTitle="PPT"
          />
          <PortfolioArticle
            img={PFIMG02}
            title="PET ＆ PET"
            extraInfo="#반려인커뮤니티 #팀프로젝트 #우수상🏆"
            githubLink="https://github.com/NamGideokk/final_project"
            extraLink="https://www.miricanvas.com/v/1yf530"
            extraButtonTitle="PPT"
          />
          <PortfolioArticle
            img={PFIMG03}
            title="픽미업"
            extraInfo="#트위터클론코딩 #토이프로젝트 #1인개발"
            githubLink="https://github.com/NamGideokk/twixxer"
            extraLink="https://namgideokk.github.io/twixxer/"
          />
        </div>
      </main>
    </section>
  );
};

export default Portfolio;
