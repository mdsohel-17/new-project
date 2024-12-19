import React from "react";
import sampleVideo from "../assets/video/proj video.mp4";
import { videosLoop } from "./common.const";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const VideoGallery = () => {
  return (
    <div className="px-20 pb-20">
      <h1 className="text-center text-3xl md:text-5xl font-medium mt-10 text-textColor pb-10">
        Products Clip
      </h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper video-gallery py-20"
        style={{ padding: "80px 0px" }}
      >
        {[...Array(10).keys()].map((val) => (
          <SwiperSlide className="flex flex-wrap">
            <div className="w-11/12">
              <div className="flex justify-center group">
                <video className="h-96 w-full object-cover" autoPlay muted loop>
                  <source src={sampleVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Slide 1 */}
      </Swiper>
      {/* <div className="flex flex-wrap bg-white ">
        {videosLoop.map((val) => (
          <div className="w-3/12">
            <div className="flex justify-center group">
              <video
                className="h-96 w-8/12 object-cover group-hover:scale-110 transition-all duration-1000"
                autoPlay
                muted
                loop
              >
                <source src={sampleVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default VideoGallery;
