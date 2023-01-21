import React, { useContext } from "react";
import { FaBuilding } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type Props = {};

const DashboardBanner = (props: Props) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const isAdmin = context?.isAdmin;
  return (
    <div
      className="bg-[#363740] bg-opacity-90 rounded-[8px] h-[60px] w-full flex items-center justify-between px-2 lg:px-[16px] cursor-pointer"
      onClick={() => navigate("/bookings")}
    >
      <div className="flex items-center">
        <FaBuilding className="h-[20px] w-[20px] mr-2 lg:mr-[12px] text-[#DDE2FF]" />
        <h1 className="text-[#DDE2FF] text-[14px] lg:font-semibold">
          {isAdmin
            ? "Access Bookings in last 24 hours"
            : "Access your bookings history"}
        </h1>
      </div>
      <div className="flex items-center">
        <p className="text-[#DDE2FF] text-[14px] lg:font-semibold">View More</p>
        <AiOutlineArrowRight className="h-[20px] w-[20px] ml-1 lg:ml-[6px] text-[#DDE2FF]" />
      </div>
    </div>
  );
};

export default DashboardBanner;
