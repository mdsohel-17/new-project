import React from "react";
import { bagimage5 } from "../utils/utils";
import bag from "../assets/image/bag111.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faShop } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Slider = () => {
  return (
    <>
      <div className="bg-white lg:h-screen -mt-20 px-20 overflow-hidden">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-2 mb-10">
            <div className=" text-center pt-10">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className=" text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl mt-20 font-medium md:px-24 lg:px-36 xl:leading-[65px] lg:leading-[45px]"
              >
                TrailBliss Bags Brings You High-Quality Bags Designed to Fit
                Your Everyday Life.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 1,
                  },
                }}
                className="mt-3 text-xs md:text-sm lg:text-base font-medium"
              >
                TrailBliss Bags offers stylish, durable, and versatile bags for
                every occasion. Carry comfort and quality wherever you go.
              </motion.p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between px-2 -mx-3 -my-3 items-end mt-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 1,
                },
              }}
              className="  w-full sm:w-6/12 order-1 lg:order-1 lg:w-3/12 px-3 py-3"
            >
              <div className=" p-4 drop-shadow-xl shadow-xl  border-[#af601a] bg-[#af601a] rounded-3xl first-child transition-all duration-[.8s]">
                <div className=" bg-white rounded-full w-12 h-12 flex justify-center items-center  ">
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    style={{ color: "#af601a" }}
                    size="xl"
                  />
                </div>
                <h1 className="mt-3 text-white font-medium text-4xl">100+</h1>
                <p className="text-white py-4 text-lg xl:text-xl  ">
                  Bags Sold Every Week, Bringing Quality, Style, and Versatility
                  to Our Customers Every Single Day!
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  // delay: 1,
                },
              }}
              className=" lg:w-6/12 order-3 lg:order-2 px-3 py-3"
            >
              <div className="flex justify-center group py-10 drop-shadow-xl shadow-xl bg-primarycolor rounded-3xl">
                <img
                  src={bagimage5}
                  alt=""
                  className=" w-5/12  group-hover:translate-x-full group-hover:scale-125 transitio duration-1000"
                />
                <img
                  src={bag}
                  alt=""
                  className=" w-5/12 group-hover:-translate-x-full group-hover:scale-125 transitio duration-1000"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 1,
                },
              }}
              className=" w-full sm:w-6/12 lg:w-3/12 order-2 lg:order-3 py-3  px-3"
            >
              <div className="p-4 drop-shadow-xl shadow-xl  border-[#af601a] bg-[#af601a] rounded-3xl  second-child transition-all duration-[.8s]">
                <div className=" bg-white rounded-full w-12 h-12 flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faShop}
                    style={{ color: "#af601a" }}
                    size="xl"
                  />
                </div>
                <h1 className="mt-3 text-white font-medium text-4xl">60+</h1>
                <p className="text-white py-4 text-lg xl:text-xl ">
                  Fresh Designs Each Month, Delivering Quality, Style, and
                  Excitement to Elevate Your Look Every Day!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
