import React from "react";
import PortfolioArticle from "./PortfolioArticle";
import "./portfolio.scss";
import PFIMG01 from "../../assets/pmu-logo-ex.png";
import PFIMG02 from "../../assets/LogoHorizon.png";
import PFIMG03 from "../../assets/twixxer_logo.png";

// issue - 상위 container와 분리되어 반응형 작동 완벽히 안함
//       - 서로 다른 이미지 크기 맞추는 작업 필요
//       - live demo 없는 포트폴리오 버튼 처리 필요
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>포트폴리오</h2>

      <div className="container portfolio__container">
        <PortfolioArticle
          img={PFIMG01}
          title="픽미업"
          extraInfo="#온라인쇼핑몰 #팀프로젝트 #우수상🏆"
          githubLink="https://github.com/NamGideokk/semi_final_project"
          demoLink="https://www.miricanvas.com/v/1vwvzx"
          extraButtonTitle="PPT"
        />
        <PortfolioArticle
          img={PFIMG02}
          title="PET ＆ PET"
          extraInfo="#반려인커뮤니티 #팀프로젝트 #우수상🏆"
          githubLink="https://github.com/NamGideokk/final_project"
          demoLink="https://www.miricanvas.com/v/1yf530"
          extraButtonTitle="PPT"
        />
        <PortfolioArticle
          img={PFIMG03}
          title="픽미업"
          extraInfo="#트위터클론코딩 #토이프로젝트 #1인개발"
          githubLink="https://github.com/NamGideokk/twixxer"
          demoLink="https://namgideokk.github.io/twixxer/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
