import React from "react";
import "./footer.scss";
import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {
  function scrollUp() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer>
      <BsArrowUpCircle
        className="up-button__icon"
        onClick={scrollUp}
        title="상단으로 이동"
      />
      <a href="#" className="footer__logo">
        NAMGD
      </a>

      {/* 영구적인 주소라는 뜻 permanent link */}
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
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

      <div className="footer__copyright">
        <small>Nam Gideok. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
