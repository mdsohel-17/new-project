import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { slider1 } from "../utils/utils";
import bag from "../assets/image/bag111.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faShop } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <>
      <div className="bg-[#ebf5fb] h-[90vh] px-20">
        <div className="flex flex-wrap h-full -mx-3">
          <div className="w-full px-2">
            <div className=" text-center pt-10">
              <h1 className=" text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium md:px-24 lg:px-36 xl:leading-[65px] lg:leading-[45px]">
                TrailBliss Bags Brings You High-Quality Bags Designed to Fit
                Your Everyday Life.
              </h1>
              <p className="mt-3 text-xs md:text-sm lg:text-base font-medium">
                TrailBliss Bags offers stylish, durable, and versatile bags for
                every occasion. Carry comfort and quality wherever you go.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between px-2 pb-10 items-end">
            <div className="w-2/12 px-3">
              <div className=" group py-16 shadow-lg shadow-[#1c150f4a] bg-[#af601a] rounded-3xl ">
                <img
                  src={bag}
                  alt=""
                  className="group-hover:scale-150 transition-all duration-1000"
                />
              </div>
            </div>
            <div className="w-2/12 px-3">
              <div className=" p-4 drop-shadow-xl shadow-xl  border-[#af601a] bg-[#af601a] rounded-3xl hover:scale-110 transition-all duration-1000">
                <div className=" bg-white rounded-full w-12 h-12 flex justify-center items-center  ">
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    style={{ color: "#af601a" }}
                    size="xl"
                  />
                </div>
                <h1 className="mt-3 text-white font-medium text-4xl">100+</h1>
                <p className="text-white py-4 xl:text-xl  ">
                  Bags Sold Every Week, Bringing Quality, Style, and Versatility
                  to Our Customers Every Single Day!
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3">
              <div className=" py-10 drop-shadow-xl shadow-xl bg-[#d7dbdd42] rounded-3xl"></div>
            </div>
            <div className="w-2/12 px-3">
              <div className="p-4 drop-shadow-xl shadow-xl  border-[#af601a] bg-[#af601a] rounded-3xl hover:scale-110 transition-all duration-1000">
                <div className=" bg-white rounded-full w-12 h-12 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faShop}
                    style={{ color: "#af601a" }}
                    size="xl"
                  />
                </div>
                <h1 className="mt-3 text-white font-medium text-4xl">60+</h1>
                <p className="text-white py-4 pb-11 text-xl ">
                  New Designs Every Month to Keep Your Style Fresh and Exciting!
                </p>
              </div>
            </div>

            <div className="w-2/12 px-3">
              <div className=" py-16 group shadow-lg group-[]: shadow-[#1c150f4a]  bg-[#af601a] rounded-3xl">
                <img
                  src={bag}
                  alt=""
                  className="group-hover:scale-150 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" className=" w-full h-[90vh] " />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
};

export default Slider;
