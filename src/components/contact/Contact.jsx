import React, { useState } from "react";
import "./contact.scss";
import { MdOutlineMail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import Modal from "../common/modal/Modal";

import emailjs from "emailjs-com";
import { useRef } from "react";
import SlideTitle from "../common/slideTitle/SlideTitle";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("");
  const [text, setText] = useState("");

  function onChange(e) {
    const {
      target: { name, value },
    } = e;
  }

  const sendEmail = (e) => {
    setLoading(true);
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
          // 이메일 보내기 성공후 text 초기화
          e.target.reset();
          setShowAlert(true);
          setText("이메일이 성공적으로 발송되었습니다. 감사합니다!");
          setModalAnimation("modal-open-animation");

          setTimeout(() => {
            setModalAnimation("");
          }, 1000);

          setTimeout(() => {
            setModalAnimation("modal-close-animation");
          }, 2000);

          setTimeout(() => {
            setShowAlert(false);
            setModalAnimation("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          alert("오류가 발생했습니다. 나중에 다시 시도해 주세요.");
        }
      );
    setLoading(false);
  };

  return (
    <section id="contact">
      <main className="main__container">
        <h4>Contact</h4>
        <SlideTitle
          engTitle="Contact Me"
          korTitle="관심있는 분들의 연락을 기다립니다"
        />

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <a
                href="mailto:namgd1222@gmail.com"
                target="_blank"
                className="kor"
              >
                <MdOutlineMail
                  className="contact__option-icon link-icon"
                  title="메일 보내기"
                />
              </a>
              <h4>Email</h4>
              <h5>namgd1222@gmail.com</h5>
            </article>
            <article className="contact__option">
              <RiKakaoTalkFill className="contact__option-icon" />
              <h4>Kakao Talk</h4>
              <h5>namkd1222</h5>
              {/* <a
              href="http://qr.kakao.com/talk/t5eFzsoHOMsjprdi2FBXzPfeV1s-"
              target="_blank"
              className="kor"
            >
              카카오톡 프로필
            </a> */}
            </article>
            <article className="contact__option">
              <BsPhone className="contact__option-icon" />
              <h4>Phone</h4>
              <h5>010-4615-3168</h5>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input type="text" name="name" onChange={onChange} required />
              <span className="name">name</span>
            </div>

            <div className="input-box">
              <input type="email" name="email" onChange={onChange} required />
              <span className="email">email</span>
            </div>

            <div className="input-box">
              <textarea
                name="message"
                rows="10"
                onChange={onChange}
                required
              ></textarea>
              <span className="message">message</span>
            </div>
            <button
              type="sumbit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
        {showAlert && <Modal animation={modalAnimation} alertText={text} />}
      </main>
    </section>
  );
};

export default Contact;
