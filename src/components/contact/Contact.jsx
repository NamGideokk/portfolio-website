import React from "react";
import "./contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";

import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k0lvind",
        "template_xxbht2o",
        form.current,
        "aRvps5C62mAyOvtVz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Contact Me</h5>
      <h2 className="kor">연락처</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
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
            <RiKakaoTalkFill className="contact__option-icon" />
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
            <BsPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>010-4615-3168</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="이름을 입력해주세요."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="이메일 주소를 입력해주세요."
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="메세지를 입력해주세요."
            required
          ></textarea>
          <button type="sumbit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
