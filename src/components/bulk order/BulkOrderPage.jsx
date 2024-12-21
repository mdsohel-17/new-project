import React, { useEffect, useState } from "react";
import Header from "../Header";
import MainSlider from "../MainSlider";
import Footer from "../Footer";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PRODUCT_LAPTOP_BAG } from "../laptop bag/LaptopBag.const";
import { FORM_DETAILS } from "./BulkOrder.const";
import Loader from "../Loader";
import GenericButton from "../../GenericComponent/GenericButton";

const BulkOrderPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds
    return () => clearTimeout(timer); // Cleanup
  }, []);

  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };
  const handleTextAreaChange = () => {};
  const handleChange = () => {};
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MainSlider />
          <div>
            <h1 className="text-3xl text-center text-textColor py-6 bg-slate-300">
              QUICK ITEMS FOR YOU
            </h1>
            <Swiper
              modules={[Autoplay, Virtual, Navigation, Pagination]}
              slidesPerView={4}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              virtual
              className="my-10 "
            >
              {PRODUCT_LAPTOP_BAG.slice(0, 8).map((slideContent, index) => (
                <SwiperSlide
                  key={slideContent}
                  virtualIndex={index}
                  className="px-10 "
                >
                  <img
                    src={slideContent?.productImages[0]?.image}
                    alt=""
                    className="bg-[#F3EEEB] bg-cover h-[400px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-wrap flex-col items-center">
            <h1 className="text-3xl text-center text-textColor py-6 bg-slate-300 w-full">
              SEND US YOUR QUERY
            </h1>
            <div className="flex flex-wrap items-center flex-col border w-6/12 rounded-xl my-10 pt-5 pb-10 text-textColor">
              {FORM_DETAILS.map((val, ind) => (
                <>
                  <div className=" w-6/12" key={ind}>
                    <label
                      className="block text-xl  mt-4 mb-1"
                      htmlFor={val.field}
                    >
                      {val.lable}
                    </label>
                    {val.type === "select" ? (
                      <select
                        name={val.field}
                        id={val.field}
                        onChange={handleSelectChange}
                        className="w-full border-2 px-2 outline-none py-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                      >
                        {val?.options?.map((opt) => (
                          <option value={opt.value}>{opt.option}</option>
                        ))}
                      </select>
                    ) : val.type === "textarea" ? (
                      <textarea
                        name={val.field}
                        className="w-full border-2 px-2 outline-none py-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        id={val.field}
                        onChange={handleTextAreaChange}
                      ></textarea>
                    ) : (
                      <input
                        type={val.type}
                        name={val.field}
                        id={val.field}
                        onChange={handleChange}
                        className="w-full border-2 px-2 outline-none py-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                      />
                    )}
                  </div>
                </>
              ))}
              <GenericButton
                text={"Submit"}
                type="submit"
                mainClass="w-6/12 mt-8 py-2 "
                primary={true}
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default BulkOrderPage;
