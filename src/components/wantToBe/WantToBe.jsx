import React from "react";
import "./wantToBe.scss";
import { BsFillPersonCheckFill } from "react-icons//bs";
import { HiUsers } from "react-icons/hi";
import { BsFillBarChartLineFill } from "react-icons/bs";

const WantToBe = () => {
  return (
    <section id="want-to-be">
      <h4>I want to be a developer like this</h4>
      <h2 className="kor">이런 개발자가 되고 싶습니다</h2>

      <div className="container want__container">
        <article className="want">
          <div className="want__header">
            <BsFillPersonCheckFill className="want-icon" />
            <h3 className="kor">고객중심</h3>
          </div>
          <div className="want__content">
            <p className="kor">
              <strong>고객</strong>의 만족을 최우선으로 생각하는 개발자가
              되겠습니다.
            </p>
          </div>
        </article>

        <article className="want">
          <div className="want__header">
            <HiUsers className="want-icon" />
            <h3 className="kor">협동</h3>
          </div>
          <div className="want__content">
            <p className="kor">
              소통하고 함께 맞춰 나가는 <strong>협동</strong> 중심의 개발자가
              되겠습니다.
            </p>
          </div>
        </article>

        <article className="want">
          <div className="want__header">
            <BsFillBarChartLineFill className="want-icon" />
            <h3 className="kor">성장</h3>
          </div>
          <div className="want__content">
            <p className="kor">
              머무르지않고 끊임없이 <strong>성장</strong>하는 개발자가
              되겠습니다.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WantToBe;
