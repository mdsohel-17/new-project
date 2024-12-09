import React from "react";
import {
  leatherbag1,
  leatherbag2,
  leatherbag3,
  leatherbag4,
  leatherbag5,
} from "../utils/utils";

const ProductsCards = (props) => {
  const { heading, cardJson } = props;
  return (
    <div className="bg-white px-20 ">
      <h1 className=" text-center text-3xl md:text-5xl font-medium  text-textColor">
        {heading}
      </h1>

      <div className="flex flex-wrap -mx-3 mt-16">
        <div class="w-64 flex flex-col items-center border-white border-2 rounded-xl">
          <img src={leatherbag1} alt="" />
          <p>
            price: "$22.00"
          </p>
        </div>
        <div class="w-64 flex flex-col items-center border-white border-2 rounded-xl">
          <img src={leatherbag2} alt="" />
        </div>
        <div class="w-64 flex flex-col items-center border-white border-2 rounded-xl">
          <img src={leatherbag3} alt="" />
        </div>
        <div class="w-64 flex flex-col items-center border-white border-2 rounded-xl">
          <img src={leatherbag4} alt="" />
        </div>
        <div class="w-64 flex flex-col items-center border-white border-2 rounded-xl">
          <img src={leatherbag5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
