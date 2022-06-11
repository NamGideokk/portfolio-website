import React from "react";
import "./project.scss";
import PJIMG01 from "../../assets/pickmeup-main-page.jpg";
import PJIMG02 from "../../assets/product-page.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  return (
    <Swiper spaceBetween={40} slidesPerView={1}>
      <SwiperSlide>
        <img src={PJIMG01} alt="project image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={PJIMG02} alt="project image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Project;
