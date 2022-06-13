import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiTelegraph } from "react-icons/si";

const HeaderSocials = ({ className }) => {
  return (
    <div className={className}>
      <a href="https://github.com/NamGideokk" target="_blank" title="Github">
        <BsGithub />
      </a>
      <a
        href="https://fe-developer-ngd.tistory.com/"
        target="_blank"
        title="Tistory"
      >
        <SiTelegraph />
      </a>
    </div>
  );
};

export default HeaderSocials;
