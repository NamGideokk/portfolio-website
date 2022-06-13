import React from "react";
import "./footer.scss";
import { BsArrowUpCircle } from "react-icons/bs";
import HeaderSocials from "../header/HeaderSocials";

const Footer = () => {
  function scrollUp() {
    function moveUp() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    moveUp();
  }
  return (
    <footer>
      <BsArrowUpCircle
        className="up-button__icon"
        onClick={scrollUp}
        title="상단으로 이동"
      />
      <h2 className="footer__logo">NAMGIDEOK PORTFOLIO WEBSITE</h2>

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
