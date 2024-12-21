import React from "react";
import { logonobg } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FOOTER_LINKS, SOCIAL_ICONS } from "./common.const";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-slate-950 px-20 pt-20 pb-16">
      <div className="flex flex-wrap -my-3">
        <div className="w-full sm:w-6/12 py-3 lg:ps-0 md:ps-3 md:w-3/12 items-end cursor-pointer">
          <img src={logonobg} alt="" className="w-2/12" />
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
            viewport={{ once: true }}
            className=" text-lg leading-[20px] w-fit block font-mono font-medium text-white hover:text-primarycolor "
          >
            TrailBliss
            <motion.div
              initial={{ x: -70, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 1 },
              }}
              viewport={{ once: true }}
              className="ms-14 w-fit block"
            >
              Bags
            </motion.div>
          </motion.span>
        </div>
        {FOOTER_LINKS.map((value) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="w-full sm:w-6/12 py-3 lg:ps-0 md:ps-3 md:w-3/12"
          >
            <h1 className="text-white font-medium">{value.title}</h1>
            {value?.links?.map((val) => (
              <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
                {val.link}
              </p>
            ))}
          </motion.div>
        ))}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="w-full sm:w-6/12 py-3 lg:ps-0 md:ps-3 md:w-3/12"
        >
          <h1 className="text-white font-medium">Follow Us</h1>
          <div className="flex mt-2 w-7/12 sm:w-9/12 md:w-full lg:w-9/12 xl:w-7/12 justify-between">
            {SOCIAL_ICONS.map((val) => (
              <span className="border group text-center rounded-full w-10 cursor-pointer hover:border-primarycolor  p-2 h-10">
                <FontAwesomeIcon
                  icon={val}
                  className="text-white group-hover:text-primarycolor"
                  size="xl"
                />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-around border-t border-[#ffffff56] mt-24 ">
        <span className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
          © 2024 iLaczen Technology. All rights reserved.
        </span>
        <span className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
          Last Updated : December 6, 2024
        </span>
      </div>
    </div>
  );
};

export default Footer;
