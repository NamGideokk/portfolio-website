import React, { useState } from "react";
import "./nav.scss";
import { VscHome } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { MdOutlineTagFaces } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { BiNote } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  const [className, setClassName] = useState("");
  const [htmlHeight, setHtmlHeight] = useState(window.scrollY);

  //event.path[1].pageYOffset
  // html문서 전체 height - document.body.scrollHeight
  function changeNavBg(event) {
    setHtmlHeight(window.scrollY);
    if (htmlHeight > 150) {
      setClassName("nav-bgcolor");
    } else {
      setClassName("");
    }

    if (document.body.scrollHeight < window.scrollY + window.innerHeight) {
      setClassName("nav-display-none");
    } else {
      setClassName("");
    }
    //   console.log("브라우저 뷰포트 height", event.path[1]);
    // console.log("브라우저 뷰포트 height", event.path[1].innerHeight);
    // console.log("브라우저 뷰포트 width", event.path[1].innerWidth);
    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    // console.log(document.body.scrollHeight);
    //outerHeight, outerWidth : 브라우저 전체 사이즈 (뷰포트 외각까지)
  }

  window.addEventListener("scroll", changeNavBg);

  return (
    <nav className={`nav ${className}`}>
      <a
        href="#"
        className={activeNav === "home" ? "active" : ""}
        onClick={() => {
          setActiveNav("home");
        }}
        title="home"
      >
        <VscHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => {
          setActiveNav("#about");
        }}
        title="about"
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("#experience");
        }}
        title="experience"
      >
        <BiBook />
      </a>
      <a
        href="#goal"
        className={activeNav === "#goal" ? "active" : ""}
        onClick={() => {
          setActiveNav("#goal");
        }}
        title="goal"
      >
        <MdOutlineTagFaces />
      </a>
      <a
        href="#project"
        className={activeNav === "#project" ? "active" : ""}
        onClick={() => {
          setActiveNav("#project");
        }}
        title="project"
      >
        <BiNote />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("#contact");
        }}
        title="contact"
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
