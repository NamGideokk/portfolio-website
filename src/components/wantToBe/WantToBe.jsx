import React from "react";
import "./wantToBe.scss";
import { BsFillPersonCheckFill } from "react-icons//bs";
import { HiUsers } from "react-icons/hi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import SlideTitle from "../common/slideTitle/SlideTitle";

const WantToBe = () => {
  return (
    <section id="goal">
      <main className="main__container">
        <h4>Goal</h4>
        <SlideTitle
          engTitle="My Goals"
          korTitle="이런 개발자가 되고 싶습니다"
        />

        <div className="container want__container">
          <article className="want">
            <div className="want__header">
              <BsFillPersonCheckFill className="want-icon" />
              <h3 className="kor">고객중심</h3>
            </div>
            <div className="want__content">
              <p className="kor">
                <strong className="strong">고객</strong>의 만족을 최우선으로
                생각하는 개발자가 되겠습니다.
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
                소통하고 함께 맞춰 나가는{" "}
                <strong className="strong">협동</strong>하는 개발자가
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
                머무르지않고 끊임없이 <strong className="strong">성장</strong>
                하는 개발자가 되겠습니다.
              </p>
            </div>
          </article>
        </div>
      </main>
    </section>
  );
};

export default WantToBe;
