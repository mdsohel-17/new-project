import React from "react";
import { CHOOSE_US } from "./common.const";
import sc from "../assets/icons/scissors.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenericButton from "../GenericComponent/GenericButton";
import { motion } from "framer-motion";
const Promotion = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-wrap  ">
        <div className="lg:w-6/12 pb-20">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            <h1 className="font-medium text-3xl text-primarycolor text-center lg:text-end pe-1 py-10">
              Why Choose <span className=" visible lg:hidden">Us ?</span>
            </h1>
          </motion.div>
          <div className=" ps-20 pe-14">
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.1 },
              }}
              className="text-5xl  leading-[56px] font-medium h-full tracking-[3.5px]"
            >
              Unmatched Quality, Timeless Style for <i>Every Need</i>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 1.6 },
              }}
              className="mt-10 text-2xl text-textColor leading-9 pe-5"
            >
              Discover our collection of expertly crafted bags that offer
              unmatched quality and timeless style. Designed to meet the demands
              of your busy lifestyle, our bags seamlessly blend practicality,
              elegance, and durability, making them the perfect companion for
              every occasion.
            </motion.p>
            {/* <div className="relative group overflow-hidden rounded-full border p-4 cursor-pointer text-center border-primarycolor w-2/6 mt-14 ">
              <p className="text-black group-hover:text-textColor z-10 relative font-semibold ">
                Find Out More
              </p>
              <div className="absolute w-full h-full bg-primarycolor inset-0 rounded-full translate-x-[-105%] group-hover:translate-x-0  transition-transform duration-[.4s] ease-in-out"></div>
            </div> */}
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.8 },
              }}
            >
              <GenericButton
                text={"Find Out More"}
                mainClass={"w-2/6 mt-14 p-4"}
                animate={true}
                rounded={true}
              />
            </motion.div>
          </div>
        </div>
        <div className="lg:w-6/12 bg-primarycolor pb-20">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.3 },
            }}
          >
            <h1 className="font-medium text-3xl text-white ps-2 py-10 invisible lg:visible">
              Us ?
            </h1>
          </motion.div>
          <div className="flex flex-wrap justify-center lg:pb-0 pe-20 ps-5 -my-2 overflow-hidden">
            {CHOOSE_US.map((val) => (
              <motion.div
                key={val.id}
                initial={{ x: 500 * val.id, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5 + val.id * 0.2, delay: 1.5 },
                }}
                className="w-12/12 sm:w-6/12 md:w-4/12 px-2 py-2 hover:scale-110 transition-all duration-[.6s] ease-linear"
              >
                <div className="bg-white w-full shadow-lg h-full shadow-[#1c150f4a] p-3">
                  <FontAwesomeIcon
                    icon={val.icon}
                    className="text-primarycolor border border-primarycolor p-2"
                  />
                  <h1 className=" font-medium text-xl mt-6">{val.title}</h1>
                  <p className="text-textColor mt-3 text-sm">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
