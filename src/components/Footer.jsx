import React from "react";
import { logo, logonobg } from "../utils/utils";

const Footer = () => {
  return (
    <div className="bg-slate-950 px-20 py-16">
      <div className="flex flex-wrap">
        <div className="w-4/12 items-end">
          <img src={logonobg} alt="" className="w-2/12" />
          <span className=" text-lg leading-[20px] font-mono font-medium text-white hover:text-primarycolor ">
            TrailBliss
            <div className="ms-14">Bags</div>
          </span>
        </div>
        <div className="w-4/12"></div>
        <div className="w-4/12"></div>
        <div className="w-4/12"></div>
      </div>
    </div>
  );
};

export default Footer;
