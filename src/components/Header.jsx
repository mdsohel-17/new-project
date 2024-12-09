import React, { useState } from "react";
import { logo, logonobg } from "../utils/utils";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAV_LINKS } from "./common.const";
import { motion } from "framer-motion";
import GenericButton from "../GenericComponent/GenericButton";
const Header = () => {
  const [spread, setSpread] = useState(false);

  const onSearchClick = () => {
    setSpread(true);
  };

  return (
    <div className="w-100 h-fit flex flex-wrap px-20 justify-between items-center bg-white shadow-lg border-b anim py-3 sticky top-0 z-50">
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
        <ul className="list-none flex justify-around overflow-hidden ">
          {NAV_LINKS.map((val) => (
            <motion.li
              key={val.id}
              initial={{ y: -200, opacity: 1 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5 + val.id * 0.2,
                  delay: val.id * 0.2,
                },
              }}
              className="text-lg flex text-[#0b0f12a3] hover:text-[#af601a] font-medium relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-7 hover:after:w-full hover:translate-y-[-8%] transition-all"
            >
              {val.link}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-end w-6/12 md:w-8/12 lg:w-3/12">
        <div className="relative flex items-center border border-primarycolor pe-2 rounded-3xl me-5 w-full">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent h-full py-2 px-3 me-3 rounded-full focus:outline-none w-full"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#af601a" }}
            size="lg"
            className=""
          />
        </div>
        <GenericButton
          text={"Sign In"}
          mainClass={"py-2 text-sm w-full sm:w-4/5 md:w-1/5 lg:w-[50%] xl:w-[35%] "}
          animate={true}
        />
      </div>
    </div>
  );
};

export default Header;
