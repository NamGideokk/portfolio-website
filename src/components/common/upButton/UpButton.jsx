import React from "react";
import "./upButton.scss";
import { BsArrowUpCircle } from "react-icons/bs";

const UpButton = () => {
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
    <BsArrowUpCircle
      className="up-button__icon"
      onClick={scrollUp}
      title="상단으로 이동"
    />
  );
};

export default UpButton;
