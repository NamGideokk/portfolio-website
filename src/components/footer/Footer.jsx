import React from "react";
import "./footer.scss";
import HeaderSocials from "../header/HeaderSocials";
import UpButton from "../common/upButton/UpButton";

const Footer = () => {
  return (
    <footer>
      <UpButton />
      <h2 className="footer__logo">NAMGIDEOK's PORTFOLIO WEBSITE</h2>

      {/* 영구적인 주소라는 뜻 permanent link */}
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#want-to-be">WantToBe</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <HeaderSocials className="footer-header__socials" />

      <div className="footer__copyright">
        <small>Made by Nam Gideok. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
