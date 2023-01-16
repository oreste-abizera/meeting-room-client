import React from "react";
import avatar from "../../static/images/avatar.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";

type Props = {
  handleToggle: () => void;
};

const Navbar = ({ handleToggle }: Props) => {
  const lightMode = true;
  return (
    <div className="py-[10px] px-2 lg:p-[30px] flex justify-between mb-[20px]">
      <div className="flex items-center">
        <FaBars
          className="mr-[16px] text-[#252733] text-[18px] lg:text-[24px] cursor-pointer lg:hidden"
          onClick={handleToggle}
        />
        <h1 className="text-[#252733] tracking-[0.3px] text-[18px] lg:text-[24px] leading-[30px] font-bold">
          Overview
        </h1>
      </div>
      <div className="flex items-center">
        {lightMode ? (
          <MdDarkMode className="mr-0 lg:mr-[14px] text-[#252733] text-[18px] lg:text-[24px] cursor-pointer" />
        ) : (
          <MdLightMode className="mr-0 lg:mr-[14px] text-[#252733] text-[18px] lg:text-[24px] cursor-pointer" />
        )}
        <div className="h-[22px] lg:h-[32px] border-[1px] border-[#DFE0EB] mx-2 lg:mx-[32px]"></div>
        <p className="mr-[14px] text-[#252733] tracking-[0.2px] text- text-[14px] leading-[20px] font-semibold">
          Oreste Abizera
        </p>
        <div className="w-[22px] h-[22px] lg:w-[44px] lg:h-[44px] border-[1.5px] border-[#DFE0EB] rounded-full flex items-center justify-center">
          <img
            src={avatar}
            alt=""
            className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] rounded-full bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
