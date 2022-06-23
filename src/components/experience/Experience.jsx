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
  },
  {
    id: 2,
    icon: <SiCss3 className="skill-icon css" />,
    skill: "CSS",
  },
  {
    id: 3,
    icon: <SiJavascript className="skill-icon javascript" />,
    skill: "JavaScript",
  },
  {
    id: 4,
    icon: <SiTypescript className="skill-icon typescript" />,
    skill: "TypeScript",
  },
  {
    id: 5,
    icon: <SiReact className="skill-icon react" />,
    skill: "React",
  },
  {
    id: 6,
    icon: <SiFirebase className="skill-icon firebase" />,
    skill: "Firebase",
  },
  {
    id: 7,
    icon: <SiGraphql className="skill-icon graphql" />,
    skill: "GraphQL",
  },
  {
    id: 8,
    icon: <SiAdobephotoshop className="skill-icon photoshop" />,
    skill: "Photoshop",
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
                  <h4>{s.skill}</h4>
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
