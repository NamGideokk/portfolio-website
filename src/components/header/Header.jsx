import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../assets/ngd.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello. I'm Nam Gideok</h5>
        <h1>프론트엔드 신입 개발자 남기덕입니다.</h1>
        <h5 className="text-light">front-end developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
