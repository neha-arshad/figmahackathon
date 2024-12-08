import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon from React Icons

const MiddleHeader = () => {
  return (
    <div className="bg-[#F0F2F3] text-black  h-20 flex justify-between items-center px-4 sm:px-8">
      {/* Left Section - Logo */}
      <div className=" ml-40 flex items-center space-x-2 text-2xl ">
        <Image
          src="/Logoicon.png"
          alt="logo-icon"
          width={26.67}
          height={23.33}
        />
        <span>Comforty</span> {/* Your logo text */}
      </div>

      {/* Right Section - Cart Icon with Count */}
      <div className="flex mr-44 bg-[#FFFFFF] px-10 p-3  items-center space-x-3 rounded-lg">
        <div className="relative flex items-center space-x-2">
          <FiShoppingCart className="text-2xl cursor-pointer" />{" "}
          {/* Cart Icon */}
          <span className="absolute  right-[-25px] bg-[#007580] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>{" "}
          {/* Cart Count in Circle */}
          <span className="hidden sm:block">Cart</span>{" "}
          {/* Cart text (hidden on small screens) */}
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
