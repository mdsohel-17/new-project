import React from "react";
import { bagimage1, bagimage2 } from "../utils/utils";

const Banner = () => {
  return (
    <div className="px-20 border border-black h-screen -mt-20">
      <div className="flex flex-wrap -mx-3 h-full ">
        <div className="w-6/12 px-3 pt-20">
          <h1 className="font-semibold text-primarycolor pb-2">
            EXPLORE TRAILBLISS
          </h1>
          <div class="ps-10">
            <h1
              className="text-5xl  leading-[66px] font-medium h-full tracking-[3.5px]"
              style={{ wordSpacing: "10px" }}
            >
              TrailBliss Bags <i>Designed</i> to Elevate <i>Everyday Living.</i>
            </h1>
            <p class="text-2xl pe-40 text-textColor mt-20">
              Offering stylish, durable, and versatile bags for every occasion,
              we ensure comfort, quality, and unmatched elegance wherever you
              go.
            </p>

            <div className="relative group overflow-hidden rounded-full border p-4 cursor-pointer text-center border-primarycolor w-1/4 mt-5">
              <p className="text-textColor group-hover:text-white z-10 relative ">
                Try It Now
              </p>
              <div className="absolute w-full h-full bg-primarycolor inset-0 rounded-full translate-x-[-105%] group-hover:translate-x-0  transition-transform duration-[.4s] ease-in-out"></div>
            </div>
          </div>
        </div>
        <div className="w-6/12 px-3 flex flex-wrap border">
          <div className="flex flex-wrap -mx-7 ">
            <div className=" w-6/12 px-7">
              <div className="shadow-lg  shadow-[#1c150f4a] rounded-xl mt-10">
                <img src={bagimage1} alt="" className="w-6/6" />
              </div>
            </div>
            <div className="w-6/12 px-7">
              <div className="shadow-lg border-2  shadow-[#1c150f4a] rounded-xl">
                <img src={bagimage2} alt="" className="w-6/6" />
              </div>
            </div>
            <div className=" w-6/12 px-7">
              <div className="shadow-lg  border-2 shadow-[#1c150f4a] rounded-xl">
                <img src={bagimage1} alt="" className="w-6/6" />
              </div>
            </div>
            <div className="w-6/12 px-7 -mt-10">
              <div className="shadow-lg border-2  shadow-[#1c150f4a] rounded-xl">
                <img src={bagimage2} alt="" className="w-6/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
