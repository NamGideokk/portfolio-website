import React from "react";
import "./contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Contact Me</h5>
      <h2 className="kor">연락처</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>namgd1222@gmail.com</h5>
            <a
              href="mailto:namgd1222@gmail.com"
              target="_blank"
              className="kor"
            >
              메일 보내기
            </a>
          </article>
          <article className="contact__option">
            <RiKakaoTalkFill />
            <h4>kakao Talk</h4>
            <h5>namkd1222</h5>
            <a
              href="http://qr.kakao.com/talk/t5eFzsoHOMsjprdi2FBXzPfeV1s-"
              target="_blank"
              className="kor"
            >
              카카오톡 프로필
            </a>
          </article>
          <article className="contact__option">
            <BsPhone />
            <h4>Phone</h4>
            <h5>010-4615-3168</h5>
          </article>
        </div>

        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
