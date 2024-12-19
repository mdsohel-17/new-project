import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import GenericButton from "./GenericButton";
import ProductsCards from "./ProductsCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const GenericProductPage = () => {
  const location = useLocation();
  const prodDetails = location?.state?.productDetails;
  const [showCaseImage, setShowCaseImage] = useState(
    prodDetails?.productImages[0]?.image
  );
  const [selectedOption, setSelectedOption] = useState(
    prodDetails?.productColors[0]?.color
  );
  const [btnTitle, setBtnTitle] = useState("Specifications");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleImageClick = (image) => {
    setShowCaseImage(image);
  };

  const handleButtonClick = (btnTitle) => {
    setBtnTitle(btnTitle);
  };
  console.log(prodDetails);
  const specification = () => {
    return prodDetails?.productDescription?.map((val) => (
      <>
        <h1 className="text-xl font-normal mb-4">{val.title}</h1>
        <div className="mb-10">
          {val.data.map((value) => (
            <>
              <div className="flex flex-wrap">
                <div className="text-base font-normal flex w-1/6 mb-2">
                  <span className="text-textColor">{value.spec}</span>
                </div>
                <div>
                  <span className="text-start">{value.specData}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    ));
  };

  const review = () => {
    return prodDetails?.productReview?.map((val) => (
      <>
        <div className="mb-3 py-2 border-b">
          <span className="bg-primarycolor text-white px-2 py-1 rounded ">
            {val.rating}
            <FontAwesomeIcon icon={faStar} className="ms-1" />
          </span>
          <p className=" font-normal mt-3">{val.reviewDetail}</p>
          <p className="text-textColor font-medium mt-3">
            <span className="me-3">{val.name}</span>
            <span className="me-3">{val.address}</span>
            <span>{val.date}</span>
          </p>
        </div>
      </>
    ));
  };
  return (
    <>
      <Header />
      <div className="px-20 pt-6">
        <div className="flex flex-wrap -mx-5 ">
          <div className="w-4/12 px-5">
            <div className="flex flex-wrap  -mx-3">
              <div className="w-3/12">
                <div className="flex flex-col px-3 -my-3">
                  {prodDetails?.productImages?.map((val) => (
                    <img
                      src={val.image}
                      className="w-4/5 py-3 cursor-pointer"
                      alt=""
                      onClick={() => handleImageClick(val.image)}
                    />
                  ))}
                </div>
              </div>
              <div className="w-9/12">
                <div className="px-3 h-[400px]">
                  <img src={showCaseImage} alt="" className="h-full bg-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-8/12">
            <div>
              <h1 className="text-textColor text-3xl">
                {prodDetails.productTitle}
              </h1>
              <p className="text-textColor text-xl my-3">
                {prodDetails?.productShortDescription}
              </p>
              <p className="font-medium text-xl">
                {prodDetails?.productPrice}
              </p>
              <div className=" flex items-center mt-8">
                {prodDetails?.productColors.map((val) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name={val.attribute}
                        id={val.color}
                        className={`me-3 outline-[${val.color}]`}
                        checked={selectedOption === val.color}
                        value={val.color}
                        onChange={handleChange}
                      />
                      <label
                        className={`me-2 font-medium w-10 h-6 rounded-sm`}
                        style={{ background: `${val.color}` }}
                        htmlFor={val.color}
                      ></label>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full pt-10 ">
            <div className="flex">
              {prodDetails?.productAdditionalButtons?.map((val) => (
                <GenericButton
                  text={val?.btnTitle}
                  mainClass={"w-max p-3 py-2 me-16 rounded"}
                  handleClick={() => handleButtonClick(val?.btnTitle)}
                />
              ))}
            </div>
            <div className="mt-5 p-5">
              {btnTitle === "Specifications" && specification()}
              {btnTitle === "Product Review" && review()}
            </div>
          </div>

          <div className="w-full">
            <ProductsCards
              mainClass={"pb-10"}
              headingClass={"text-3xl md:text-5xl"}
              heading={"Similar Products"}
              cardJson={prodDetails?.similarProducts}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GenericProductPage;
