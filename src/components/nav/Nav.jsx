import React from "react";
import "./nav.css";
import { GrHome } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <GrHome />
      </a>
      <a href="#about">
        <FiUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#contact">
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
