import React from "react";
import { CHOOSE_US } from "./common.const";
import sc from "../assets/icons/scissors.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Promotion = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-wrap  ">
        <div className="lg:w-6/12 py-20 ">
          <div className=" ps-20 pe-14">
            <h1
              className="text-5xl  leading-[56px] font-medium h-full tracking-[3.5px]"
              //   style={{ wordSpacing: "0px" }}
            >
              Unmatched Quality, Timeless Style for <i>Every Need</i>
            </h1>
            <p className="mt-10 text-2xl text-textColor leading-9 pe-5">
              Discover our collection of expertly crafted bags that offer
              unmatched quality and timeless style. Designed to meet the demands
              of your busy lifestyle, our bags seamlessly blend practicality,
              elegance, and durability, making them the perfect companion for
              every occasion.
            </p>
            <div className="relative group overflow-hidden rounded-full border p-4 cursor-pointer text-center border-primarycolor w-1/4 mt-8">
              <p className="text-black group-hover:text-textColor z-10 relative ">
                Find Out More
              </p>
              <div className="absolute w-full h-full bg-primarycolor inset-0 rounded-full translate-x-[-105%] group-hover:translate-x-0  transition-transform duration-[.4s] ease-in-out"></div>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12 bg-primarycolor px-20 ">
          <div className="flex flex-wrap justify-center px-5 pt-20 pb-20 lg:pb-0 -mx-3">
            {CHOOSE_US.map((val) => (
              <div className="w-12/12 sm:w-6/12 md:w-4/12 px-3 py-3 hover:scale-110 transition-all duration-[.6s] ease-linear">
                <div className="bg-white w-full shadow-lg h-full shadow-[#1c150f4a] p-3">
                  <FontAwesomeIcon
                    icon={val.icon}
                    className="text-primarycolor border border-primarycolor p-2"
                  />
                  <h1 className=" font-medium text-xl mt-6">{val.title}</h1>
                  <p className="text-textColor mt-3 text-sm">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;