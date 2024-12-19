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
      <div className="h-fit lg:h-[700px]">
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
          className="mySwiper w-full h-fit lg:h-max xl:h-full"
        >
          {sliderImage.map((val) => (
            <SwiperSlide className="h-full">
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
      </div>
    </>
  );
};

export default MainSlider;
