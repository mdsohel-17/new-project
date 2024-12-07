import React from "react";
import { logo, logonobg } from "../utils/utils";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="w-100 h-fit flex flex-wrap px-20 justify-between items-center bg-white shadow-lg border-b anim py-3 sticky top-0 z-50">
      <div className="w-2/12 flex items-center">
        <img src={logonobg} alt="" className="w-3/12" />
        <span className=" text-lg leading-[20px] font-mono font-medium text-[#af601a] ">
          TrailBliss
          <div className="ms-14">Bags</div>
        </span>
      </div>
      <div className="w-5/12 cursor-pointer">
        <ul className="list-none flex justify-around ">
          <li className="text-lg flex text-[#0b0f12a3] hover:text-[#af601a] font-medium relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Home
          </li>
          <li className="text-lg flex text-[#0b0f12a3] font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full ">
            New Release
          </li>
          <li className="text-lg flex text-[#0b0f12a3] font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Product
          </li>
          <li className="text-lg flex text-[#0b0f12a3] font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Gallery
          </li>
          <li className="text-lg flex text-[#0b0f12a3] font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            About
          </li>
          <li className="text-lg flex text-[#0b0f12a3] font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Contact
          </li>
        </ul>
      </div>
      <div className="w-3/12 border">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#af601a" }}
          size="lg"
        />
      </div>
    </div>
  );
};

export default Header;
