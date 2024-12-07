import React from "react";
import { logo, logonobg } from "../utils/utils";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-slate-950 px-20 py-20">
      <div className="flex flex-wrap -my-3">
        <div className="w-full sm:w-6/12 py-3 lg:ps-0 md:ps-3 md:w-3/12 items-end cursor-pointer">
          <img src={logonobg} alt="" className="w-2/12" />
          <span className=" text-lg leading-[20px] font-mono font-medium text-white hover:text-primarycolor ">
            TrailBliss
            <div className="ms-14">Bags</div>
          </span>
        </div>
        <div className="w-full sm:w-6/12 py-3 lg:ps-0 md:ps-3 md:w-3/12">
          <h1 className="text-white font-medium">Quick Links</h1>
          <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            Shop (e.g., Men's Bags, Women's Bags).
          </p>
          <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            About Us.
          </p>
          <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            Contact Us.
          </p>
          <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            FAQs.
          </p>
          <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            Privacy Policy and Terms of Service.
          </p>
        </div>
        <div className="w-full sm:w-6/12 py-3 lg:ps-0 md:ps-3 md:w-3/12">
          <h1 className="text-white font-medium">Contact Information</h1>
          <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            Email : support@trailblissbags.com
          </p>
          <p className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            Phone: +1 234 567 890
          </p>
          <p className="text-white w-2/3 text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">
            Address : 1018, 16th Main Rd, Tavarekere, Aicobo Nagar, 1st Stage,
            BTM 1st Stage, Bengaluru, Karnataka 560029
          </p>
        </div>
        <div className="w-full sm:w-6/12 py-3 lg:ps-0 md:ps-3 md:w-3/12">
          <h1 className="text-white font-medium">Follow Us</h1>
          <div className="flex mt-2 w-1/2 justify-between">
            <span className="border group rounded-full w-10 cursor-pointer hover:border-primarycolor  p-2 h-10">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white group-hover:text-primarycolor"
                size="xl"
              />
            </span>
            <span className="border group rounded-full w-10 cursor-pointer hover:border-primarycolor  p-2 h-10">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white group-hover:text-primarycolor"
                size="xl"
              />
            </span>
            <span className="border group rounded-full w-10 cursor-pointer hover:border-primarycolor  p-2 h-10">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-white group-hover:text-primarycolor"
                size="xl"
              />
            </span>
            <span className="border group rounded-full w-10 cursor-pointer hover:border-primarycolor  p-2 h-10">
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-white group-hover:text-primarycolor"
                size="xl"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between border-t border-[#ffffff56] mt-8">
        <span className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">© 2024 iLaczen Technology. All rights reserved.</span>
        <span className="text-white w-fit text-sm mt-2 text-opacity-75 cursor-pointer hover:text-primarycolor">Last Updated : December 6, 2024</span>
      </div>
    </div>
  );
};

export default Footer;
