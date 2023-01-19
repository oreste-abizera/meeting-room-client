import React, { useContext } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaDoorOpen,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type Props = {};

const SidebarLinks = (props: Props) => {
  const navigate = useNavigate();
  const { isAdmin } = useContext(AppContext);
  let links = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      url: "/dashboard",
    },
    {
      name: "Bookings",
      icon: <FaCalendarAlt />,
      url: "/bookings",
    },
    {
      name: "Buildings",
      icon: <FaDoorOpen />,
      url: "/buildings",
    },
    {
      name: "Users",
      icon: <FaUsers />,
      url: "/users",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      url: "/settings",
    },
    {
      name: "Logout",
      icon: <FaSignOutAlt />,
      url: "/logout",
    },
  ];

  if (!isAdmin)
    links = links.filter(
      (link) => link.name !== "Users" && link.name !== "Buildings"
    );
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
            onClick={() => navigate(link.url)}
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
