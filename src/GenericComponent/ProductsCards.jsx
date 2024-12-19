import React from "react";
import {
  leatherbag1,
  leatherbag2,
  leatherbag3,
  leatherbag4,
  leatherbag5,
} from "../utils/utils";
import GenericButton from "./GenericButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductsCards = (props) => {
  const { heading, cardJson, headingClass, mainClass } = props;
  const navigate = useNavigate();

  const handleClick = (cardData) => {
    console.log("clicked");
    navigate(`/product-laptop-bag?${cardData.productTitle}`, {
      state: { productDetails: cardData },
    });
  };
  return (
    <div className={`bg-[white] ${mainClass}`}>
      <h1 className={`font-medium  text-textColor ${headingClass}`}>
        {heading}
      </h1>
      <div class="flex flex-wrap -mx-3 mt-16 cursor-pointer ">
        {cardJson.map((val) => (
          <div
            className="xl:w-3/12 lg:w-5/12 md:w-6/12 sm:w-6/12 w-full px-3 py-3"
            onClick={() => handleClick(val)}
          >
            <motion.div
              key={val.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.3 },
              }}
              viewport={{ once: true }}
              className={`overflow-hidden  bg-cover rounded-2xl relative shadow-lg h-full shadow-[#1c150f4a] pb-4`}
            >
              <img
                src={val?.productImages[0]?.image}
                alt=""
                className="h-4/5  w-full "
              />
              <div class="text-start p-4">
                <p className="text-textColor text-xl mb-2">{val.productTitle}</p>
                <p className="text-textColor text-base ">
                  {val.productShortDescription}
                </p>
                <p className="text-textColor text-base font-medium ">{val.productPrice}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
