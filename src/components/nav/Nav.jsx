import React, { useEffect, useState } from "react";
import "./nav.scss";
import { GrHome } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { MdOutlineTagFaces } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { BiNote } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  const [className, setClassName] = useState("");

  function changeNavBg() {
    if (window.scrollY > 150 && window.scrollY <= 7000) {
      setClassName("nav-bgcolor");
    } else if (window.scrollY > 7000) {
      setClassName("nav-dis-none");
    } else {
      setClassName("");
    }
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
        <GrHome />
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
