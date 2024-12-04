import React from "react";
import { logo } from "../utils/utils";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="w-100 flex flex-wrap px-20 justify-between items-center bg-white border-b py-2">
      <div className="w-1/12 flex flex-col items-center">
        <img src={logo} alt="" />
        <div className=" text-sm font-medium text-[#af601a] ">
          WILD COLLECTION
        </div>
      </div>
      <div className="w-7/12 cursor-pointer">
        <ul className="list-none flex justify-around">
          <li className="text-lg flex hover:text-[#af601a] font-medium relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Home
          </li>
          <li className="text-lg flex font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full ">
            New Release
          </li>
          <li className="text-lg flex font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Product
          </li>
          <li className="text-lg flex font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Gallery
          </li>
          <li className="text-lg flex font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            About
          </li>
          <li className="text-lg flex font-medium hover:text-[#af601a] relative after:absolute hover:after:absolute hover:after:content-[''] after:w-0 after:rounded-lg after:h-[2.5px] after:bg-[#af601a] after:top-6 hover:after:w-full">
            Contact
          </li>
        </ul>
      </div>
      <div className="w-3/12">
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
