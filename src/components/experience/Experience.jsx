import React from "react";
import "./experience.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiGraphql,
  SiAdobephotoshop,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    icon: <SiHtml5 />,
    skill: "HTML",
    level: "상",
  },
  {
    id: 2,
    icon: <SiCss3 />,
    skill: "CSS",
    level: "상",
  },
  {
    id: 3,
    icon: <SiJavascript />,
    skill: "Java Script",
    level: "상",
  },
  {
    id: 4,
    icon: <SiTypescript />,
    skill: "Type Script",
    level: "하",
  },
  {
    id: 5,
    icon: <SiReact />,
    skill: "React",
    level: "중",
  },
  {
    id: 6,
    icon: <SiFirebase />,
    skill: "Firebase",
    level: "중",
  },
  {
    id: 7,
    icon: <SiGraphql />,
    skill: "GraphQL",
    level: "하",
  },
  {
    id: 8,
    icon: <SiAdobephotoshop />,
    skill: "Photoshop",
    level: "중",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>보유 스킬</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {skills.map((s) => (
              <article key={s.id} className="experience__details">
                {s.icon}
                <h4>{s.skill}</h4>
                <small className="text-light">{s.level}</small>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
};

export default Experience;
