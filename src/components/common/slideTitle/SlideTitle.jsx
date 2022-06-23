import React from "react";
import "./slideTitle.scss";

const SlideTitle = ({ engTitle, korTitle }) => {
  return (
    <div className="title__wrapper">
      <div className="slide-title">
        <h2>{engTitle}</h2>
        <h2 className="kor">{korTitle}</h2>
        <h2>{engTitle}</h2>
      </div>
    </div>
  );
};

export default SlideTitle;
