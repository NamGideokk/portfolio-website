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
    if (window.scrollY > 150 && window.scrollY <= 8700) {
      setClassName("nav-bgcolor");
    } else if (window.scrollY > 8500) {
      setClassName("nav-dis-none");
    } else {
      setClassName("");
    }
  }

  window.addEventListener("scroll", changeNavBg);

  return (
    <nav className={className}>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <GrHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#want-to-be"
        className={activeNav === "#want-to-be" ? "active" : ""}
        onClick={() => {
          setActiveNav("#want-to-be");
        }}
      >
        <MdOutlineTagFaces />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => {
          setActiveNav("#portfolio");
        }}
      >
        <BiNote />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
