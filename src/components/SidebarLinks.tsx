import React from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaDoorOpen,
  FaUsers,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};

const SidebarLinks = (props: Props) => {
  const navigate = useNavigate();
  const links = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      link: "/dashboard",
      url: "/dashboard",
    },
    {
      name: "Bookings",
      icon: <FaCalendarAlt />,
      link: "/bookings",
      url: "/bookings",
    },
    {
      name: "Buildings",
      icon: <FaDoorOpen />,
      link: "/buildings",
      url: "/buildings",
    },
    {
      name: "Users",
      icon: <FaUsers />,
      link: "/users",
      url: "/users",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      link: "/settings",
      url: "/settings",
    },
  ];
  return (
    <div className="mt-[25px]">
      {links.map((link, index) => {
        const active = window.location.pathname === link.url;
        return (
          <div
            key={index}
            className={`relative flex items-center pl-[32px] cursor-pointer sidebar-link h-[56px] ${
              active ? "active bg-[#9FA2B4] bg-opacity-[0.08]" : ""
            } hover:bg-[#9FA2B4] hover:bg-opacity-[0.08]`}
            onClick={() => navigate(link.link)}
          >
            <div className="divider absolute left-0 top-0 h-full w-[3px] bg-transparent"></div>
            {link.icon}
            <p className="pl-[24px] text-[#A4A6B3] tracking-[0.2px]">
              {link.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
