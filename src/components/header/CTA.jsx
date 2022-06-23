import React, { useState } from "react";
import CV from "../../assets/cv.pdf";
import Modal from "../common/modal/Modal";

const CTA = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("");
  const [text, setText] = useState("");

  function downloadHandler() {
    setShowAlert(true);
    setText("이력서 업데이트 중입니다.");
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
  }

  return (
    <>
      <div className="cta">
        <a href="#" className="btn" onClick={downloadHandler}>
          Download CV
        </a>
      </div>
      {showAlert && <Modal animation={modalAnimation} alertText={text} />}
    </>
  );
};

export default CTA;
