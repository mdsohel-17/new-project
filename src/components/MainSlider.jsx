import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { sliderImage1 } from "../utils/utils";
import { sliderImage } from "./common.const";

export const MainSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[700px]"
      >
        {sliderImage.map((val) => (
          <SwiperSlide>
            <div>
              {" "}
              <img
                src={val.image}
                alt=""
                className={`bg-cover bg-center w-full h-full`}
              />{" "}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSlider;
