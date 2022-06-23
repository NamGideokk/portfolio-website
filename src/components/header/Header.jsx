import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../assets/ngd.jpg";
import HeaderSocials from "./HeaderSocials";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [vw, setVw] = useState(null);

  function resizeVw() {
    setVw(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeVw);
    return () => {
      window.removeEventListener("resize", resizeVw);
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h4>Hello. I'm Nam Gideok</h4>

        {vw && !null && vw < 710 ? (
          <h1>
            프론트엔드 신입 개발자
            <br />
            남기덕입니다
          </h1>
        ) : (
          <h1>프론트엔드 신입 개발자 남기덕입니다</h1>
        )}

        <h3 className="text-light">front-end developer</h3>

        <HeaderSocials className="header__socials" />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <CTA />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
