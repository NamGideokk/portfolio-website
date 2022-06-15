import React from "react";
import "./about.scss";
import AVATAR from "../../assets/ngd.jpg";
import { TbRun } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log(document.documentElement.offsetHeight);
  }, []);

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
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>
                벤처스타트업 아카데미 - 지능형 웹서비스 풀스택 개발 수료
              </small>
            </article>
            <article className="about__card">
              <IoMdTrophy className="about__icon" />
              <h5>Awards</h5>
              <small>프로젝트 우수상 2회 수상</small>
            </article>
            <article className="about__card">
              <TbRun className="about__icon" />
              <h5>Experience</h5>
              <small>Rookie</small>
            </article>
          </div>

          <p className="kor">
            서비스직에서 약 8년간 일하고, 진로를 전향한 신입 프론트엔드 개발자
            남기덕입니다. React 사용경험이 많으며, 웹 퍼블리싱과 반응형 개발에
            관심이 많습니다. 풀스택 개발 교육을 수료했으며, 팀프로젝트에서
            우수상을 2회 수상했습니다.
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
