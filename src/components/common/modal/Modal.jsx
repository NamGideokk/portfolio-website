import React from "react";
import "./modal.scss";

const Modal = ({ animation, alertText = "알림 내용을 입력하세요" }) => {
  return (
    <div className="modal-outer">
      <div className={`modal-inner ${animation}`}>
        <h4 className="kor">{alertText}</h4>
      </div>
    </div>
  );
};

export default Modal;
