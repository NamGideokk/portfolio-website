import React from "react";
import "./about.scss";
import AVATAR from "../../assets/ngd.jpg";
import { TbRun } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AVATAR} alt="avatar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbRun className="about__icon" />
              <h5>Experience</h5>
              <small>Rookie</small>
            </article>
            <article className="about__card">
              <TbRun className="about__icon" />
              <h5>Experience</h5>
              <small>Rookie</small>
            </article>
            <article className="about__card">
              <TbRun className="about__icon" />
              <h5>Experience</h5>
              <small>Rookie</small>
            </article>
          </div>

          <p>
            서비스직에서 약 8년간 일했던 신입 프론트엔드 개발자 남기덕입니다.
            React 사용경험이 많으며, 웹 퍼블리싱과 반응형 개발에 관심이
            많습니다.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
