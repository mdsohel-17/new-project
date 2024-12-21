import React, { useEffect, useState } from "react";
import { logo, logonobg } from "../utils/utils";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAV_LINKS, TOP_HEADER_TEXT } from "./common.const";
import { animate, motion } from "framer-motion";
import GenericButton from "../GenericComponent/GenericButton";
import { Link, useNavigate } from "react-router-dom";

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
  const [hoveredItem, setHoveredItem] = useState(null); // Track which item is hovered

  const handleMouseEnter = (val) => {
    setHoveredItem(val.id); // Set hovered item ID
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Reset hovered item when mouse leaves
  };
  const navigate = useNavigate();
  const onClickBulkOrder = () => {
    navigate("/bulk-order");
  };
  const onNavButtonClick = (title) => {
    if (title === "Laptop Bags") navigate("/laptop-bag");
  };
  return (
    <>
      <TopHeader />
      <div className=" w-100 h-fit flex flex-wrap px-20 justify-between items-center bg-white shadow-lg sticky top-0 z-50">
        <div className="w-6/12 md:w-4/12 lg:w-2/12 flex items-center overflow-hidden h-full ">
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
        <div className="w-5/12 cursor-pointer hidden lg:block h-full ">
          <ul className="  list-none flex justify-around overflow-hidden ">
            {NAV_LINKS.map((val) => (
              <>
                <motion.li
                  key={val.id}
                  className="relative z-50 group text-lg text-[#0b0f12a3] flex items-center py-5 font-medium h-full hover:text-primarycolor"
                  onMouseEnter={() => handleMouseEnter(val)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={val.url} key={val.id}>
                    {val.link}
                  </Link>
                  {val.innerLinks.length > 0 && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`${
                        hoveredItem && hoveredItem === val.id
                          ? `rotate-180`
                          : ""
                      } transition-all duration-1000 ms-2 `}
                    />
                  )}
                </motion.li>

                {hoveredItem === val.id && val.innerLinks.length > 0 && (
                  <div
                    className="absolute flex top-full left-0 bg-white border-t pt-8  w-full h-[50vh] px-20 justify-center"
                    onMouseEnter={() => setHoveredItem(val.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {val.innerLinks.map((innerVal) => (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.5,
                          },
                        }}
                        key={innerVal.title}
                        className="w-2/12 "
                      >
                        <div
                          className="text-black font-medium text-lg"
                          onClick={() => onNavButtonClick(innerVal.title)}
                        >
                          {innerVal.title}
                        </div>
                        {innerVal.items.map((item) => (
                          <p className="text-textColor font-normal mt-2 hover:text-primarycolor">
                            {item}
                          </p>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end w-6/12 md:w-8/12 lg:w-3/12">
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
            handleClick={onClickBulkOrder}
            // primary={true}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
