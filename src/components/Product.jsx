import React from "react";
import { collections } from "./common.const";

const Product = () => {
  return (
    <div className="bg-[#e69b6a6d] px-20 py-10">
      <h1 className=" text-center text-3xl md:text-5xl font-medium mt-10 text-textColor">
        OUR LATEST PRODUCTS
      </h1>
      <div className="flex flex-wrap -mx-3 mt-16">
        {collections.map((val) => (
          <div className="xl:w-2/12 lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-3 py-3">
            <div
              className={`group overflow-hidden bg-white flex  flex-col items-center justify-center rounded-2xl relative shadow-lg h-full shadow-[#1c150f4a]`}
            >
              <img
                src={val.productImage}
                alt=""
                className=" h-4/5 object-cover"
              />
              <div className="absolute flex flex-col justify-between  border translate-y-[-140%] group-hover:translate-y-0 transition-transform duration-[.8s] p-4 ease-in-out bg-primaryTransparent bg-opacity-45 w-full h-full rounded-2xl">
                <div>
                  <div className="text-textColor text-lg font-medium">
                    {val.title}
                  </div>
                  <div className="text-textColor lg:text-xs xl:text-sm font-medium mt-3">
                    {val.decription}
                  </div>
                </div>
                <div className="hover:border py-2 hover:border-primarycolor hover:bg-transparent bg-primarycolor hover:text-white text-center cursor-pointer text-textColor font-medium">
                  Buy at : {val.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
