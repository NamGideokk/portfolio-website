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
import SlideTitle from "../common/slideTitle/SlideTitle";

const skills = [
  {
    id: 1,
    icon: <SiHtml5 className="skill-icon html" />,
    skill: "HTML",
    level: "고급",
  },
  {
    id: 2,
    icon: <SiCss3 className="skill-icon css" />,
    skill: "CSS",
    level: "고급",
  },
  {
    id: 3,
    icon: <SiJavascript className="skill-icon javascript" />,
    skill: "JavaScript",
    level: "중급",
  },
  {
    id: 4,
    icon: <SiTypescript className="skill-icon typescript" />,
    skill: "TypeScript",
    level: "초급",
  },
  {
    id: 5,
    icon: <SiReact className="skill-icon react" />,
    skill: "React",
    level: "중급",
  },
  {
    id: 6,
    icon: <SiFirebase className="skill-icon firebase" />,
    skill: "Firebase",
    level: "중급",
  },
  {
    id: 7,
    icon: <SiGraphql className="skill-icon graphql" />,
    skill: "GraphQL",
    level: "초급",
  },
  {
    id: 8,
    icon: <SiAdobephotoshop className="skill-icon photoshop" />,
    skill: "Photoshop",
    level: "중급",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <main className="main__container">
        <h4>Experience</h4>
        <SlideTitle engTitle="My Skills" korTitle="이런 스킬을 사용합니다" />

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {skills.map((s) => (
                <article key={s.id} className="experience__details">
                  {s.icon}
                  <div>
                    <h4>{s.skill}</h4>
                    <small className="text-light kor">{s.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="experience__backend"></div>
        </div>
      </main>
    </section>
  );
};

export default Experience;
