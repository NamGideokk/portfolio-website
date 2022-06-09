import React, { useState } from "react";
import "./nav.scss";
import { GrHome } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { MdOutlineTagFaces } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { BiNote } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
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
