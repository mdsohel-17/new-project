import React, { useEffect, useState } from "react";
import { logo, logonobg } from "../utils/utils";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAV_LINKS, TOP_HEADER_TEXT } from "./common.const";
import { animate, motion } from "framer-motion";
import GenericButton from "../GenericComponent/GenericButton";
import { Link } from "react-router-dom";

export const TopHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TOP_HEADER_TEXT.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [TOP_HEADER_TEXT.length]);

  return (
    <div
      className="bg-primarycolor  py-2 text-white font-medium text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {TOP_HEADER_TEXT.map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1, y: 0 }} // Initial animation state
          animate={
            activeIndex === index
              ? { opacity: 1, y: 0 } // Animate into view
              : { opacity: 0, y: 10 } // Animate out of view
          }
          transition={{ duration: 0.5 }} // Animation duration
          className="cursor-pointer"
        >
          {activeIndex === index && <p className="text-lg">{text.title}</p>}
        </motion.div>
      ))}
    </div>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");

  const handleMouseEnter = (value) => {
    console.log(value);
    if (value.innerLinks.length) setShow(true);
  };

  return (
    <>
      <TopHeader />
      <div className="w-100 h-fit flex flex-wrap px-20 justify-between items-center bg-white shadow-lg py-3 sticky top-0 z-50">
        <div className="w-6/12 md:w-4/12 lg:w-2/12 flex items-center overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
            src={logonobg}
            alt=""
            className="w-3/12"
          />
          <motion.span
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className=" text-lg leading-[20px] font-mono font-medium text-[#af601a] "
          >
            TrailBliss
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1.5,
                transition: {
                  duration: 1,
                  delay: 0.4,
                },
              }}
              className="ms-14"
            >
              Bags
            </motion.div>
          </motion.span>
        </div>
        <div className="w-5/12 cursor-pointer hidden lg:block">
          <ul className="list-none flex justify-around overflow-">
            {NAV_LINKS.map((val) => (
              <>
                <motion.li
                  key={val.id}
                  // whileHover={{
                  //   scale: 1.1,
                  //   transition: { duration: 0.1 }, // Optional: Customize hover transition
                  // }}
                  className="relative group text-lg text-[#0b0f12a3] font-medium hover:text-primarycolor"
                  // onMouseEnter={() => handleMouseEnter(val)}
                  // onMouseLeave={() => setShow(false)}
                >
                  <Link to={val.url}>{val.link}</Link>
                  <div
                    className={`text-black hidden h-max pt-8 bg-white group-hover:block w-max top-full absolute ${
                      val?.innerLinks?.length ? "p-5" : ""
                    }`}
                  >
                    {val?.innerLinks?.length ? (
                      val?.innerLinks?.map((value) => (
                        <Link
                          to={value.link}
                          className="h-max block mb-2 last-of-type:mb-0 text-base hover:text-primarycolor text-textColor"
                        >
                          {value.title}
                        </Link>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                </motion.li>

                {/* {show && val?.innerLinks?.length ? (
                  <div className="absolute inset-0 top-full  w-full h-fit bg-opacity-65 bg-white text-black border-2">
                    {val?.innerLinks?.map((value) => (
                      <div className="">{value.title}</div>
                    ))}
                  </div>
                ) : (
                  <></>
                )} */}
              </>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end w-6/12 md:w-8/12 lg:w-3/12">
          {/* <div className="relative flex items-center border border-primarycolor pe-2 rounded-3xl me-5 w-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="h-full py-2 px-3 me-3 rounded-full focus:outline-none w-full"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#af601a" }}
              size="lg"
              className=""
            />
          </div> */}
          <GenericButton
            text={"Sign In"}
            mainClass={
              "py-3 text-sm w-full sm:w-4/5 md:w-1/5 lg:w-[50%] xl:w-[35%] "
            }
            primary={true}
          />
          <GenericButton
            text={"Order in Bulk"}
            mainClass={
              "py-3 ms-3 text-sm w-full sm:w-4/5 md:w-1/5 lg:w-[50%] xl:w-[35%] "
            }
            childClass={"text-black"}
            // primary={true}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
