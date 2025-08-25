"use client"

import React from "react";
import { FaSun, FaFileAlt, FaMicrophone } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { TbSunHigh } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="flex gap-5 flex-col-reverse sm:flex-row justify-between text-[#e8eaed] p-4 sm:p-10 mx-auto">
      {/* Left Side - Logo and Name */}
      <div className="flex flex-grow items-center max-w-5xl sm:mb-0">
        <Image
          src="/assets/images/profile.png"
          alt="Uttam's_Photo"
          width={999}
          height={999}
          className="rounded-full hidden sm:inline h-14 w-14 object-cover"
        />
        <div className="flex flex-grow max-w-xl md:max-w-md  lg:max-w-3xl relative sm:ml-4">
          <input
            type="text"
            placeholder="Uttam's Portfolio"
            className="w-full p-3 sm:p-4 bg-zinc-700 rounded-full focus:outline-none"
            value="Uttam's Portfolio"
            readOnly
          />
          <div className="absolute inset-y-0 right-5 flex items-center space-x-3">
            <RxCross2 className="cursor-pointer" size={24} />
            <IoSearchOutline className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>

      {/* Right Side - Icons */}
      <div className="flex justify-between  items-center space-x-4 gap-5">
        {/* Download CV Button */}
        <Tippy
          content="Download CV"
          placement="bottom"
          animation="scale"
          delay={[100, 50]}
          theme="dark"
        >
          <a
            href="/assets/files/Uttam Ghosh (3).pdf"
            download="Uttam's_Resume"
            className="flex items-center space-x-1 p-3 sm:p-4 xl:px-5 xl:py-4 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-all"
          >
            <FiDownload size={24} />
            <span className="hidden xl:inline font-semibold">Download CV</span>
          </a>
        </Tippy>


        <img
          src="/assets/images/profile.png"
          width="46"
          alt="Uttam's_Photo"
          className="rounded-full sm:hidden inline"
        />
      </div>
    </div>
  );
};
