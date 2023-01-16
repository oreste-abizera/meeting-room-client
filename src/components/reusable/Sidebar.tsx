import React from "react";
import logo from "../../static/logo-white.svg";
import SidebarLinks from "../SidebarLinks";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-[70%] lg:w-full h-full overflow-y-auto bg-[#363740]">
      <div className="flex items-center justify-center my-[41px]">
        <img src={logo} className="mr-[12px] h-[32px] w-[32px]"></img>
        <p className="text-[#A4A6B3] opacity-70 tracking-[0.4px] text-[19px] leading-[24px] font-bold">
          Meeting Room
        </p>
      </div>

      <SidebarLinks />
    </div>
  );
};

export default Sidebar;
