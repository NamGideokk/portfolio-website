import React from "react";
import "./about.css";
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
            안녕하세요 신입 개발자를 꿈꾸는 남기덕입니다. 안녕하세요 신입
            개발자를 꿈꾸는 남기덕입니다.안녕하세요 신입 개발자를 꿈꾸는
            남기덕입니다.안녕하세요 신입 개발자를 꿈꾸는 남기덕입니다.안녕하세요
            신입 개발자를 꿈꾸는 남기덕입니다.안녕하세요 신입 개발자를 꿈꾸는
            남기덕입니다.안녕하세요 신입 개발자를 꿈꾸는 남기덕입니다.안녕하세요
            신입 개발자를 꿈꾸는 남기덕입니다.안녕하세요 신입 개발자를 꿈꾸는
            남기덕입니다.
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
