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
    <div className="bg-white px-20 py-10 ">
      <h1 className=" text-center text-3xl md:text-5xl font-medium  text-textColor">
        {heading}
      </h1>
     <div class="flex flex-wrap -mx-3 mt-16 ">
      {cardJson.map((val) => (
        <div className="xl:w-3/12 lg:w-5/12 md:w-6/12 sm:w-6/12 w-full px-3 py-3">
          <div
            className={` group overflow-hidden bg-white flex  flex-col items-center justify-center rounded-2xl relative shadow-lg h-full shadow-[#1c150f4a]`}
          >
            <img
              src={val.productImage}
              alt=""
              className=" h-4/5 object-cover"
            />
            {/* <div className="absolute flex flex-col justify-between  border translate-y-[-140%]  transition-transform duration-[.8s] p-4 ease-in-out bg-primaryTransparent bg-opacity-45 w-full h-full rounded-2xl">
             <div>
                  <div className="text-textColor md:text-2xl font-medium">
                    {val.title}
                  </div>
                  <div className="text-textColor md:text-xl font-medium mt-3">
                    {val.decription}
                  </div>
                </div>
                <div className="hover:border py-2 hover:border-primarycolor hover:bg-transparent bg-primarycolor hover:text-black text-center cursor-pointer text-textColor font-medium">
                  Buy at : {val.price}
                </div> 
             
            </div> */}
            <div class="bg-slate-400 text-center">
                <p>TrailBliss City Crossbody
                    <br></br>
                    price: "$26.00"
                    <br></br>
                    Lightweight and spacious, perfect for your daily needs

                </p>
                <button class="bg-sky-500 text-center mt-2 text-white rounded-md p-2">Buy now</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductsCards;
