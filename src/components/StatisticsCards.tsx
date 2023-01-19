import React, { useContext } from "react";
import { FaCalendarAlt, FaDoorOpen, FaUsers, FaBuilding } from "react-icons/fa";
import StoreContext from "../context/StoreContext";

type Props = {};

const StatisticsCards = (props: Props) => {
  const { store } = useContext(StoreContext);
  const statistics = store?.statistics;
  const data = [
    {
      title: "Total Bookings",
      value: statistics?.numberOfBookings || 0,
      icon: <FaCalendarAlt />,
      className:
        "text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500",
    },
    {
      title: "Total Users",
      value: statistics?.numberOfUsers || 0,
      icon: <FaUsers />,
      className:
        "text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500",
    },
    {
      title: "Total Buildings",
      value: statistics?.numberOfBuildings || 0,
      icon: <FaBuilding />,
      className:
        "text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500",
    },
    {
      title: "Total Places",
      value: statistics?.numberOfPlaces || 0,
      icon: <FaDoorOpen />,
      className:
        "text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500",
    },
  ];
  return (
    <div className="mt-[20px] flex flex-wrap items-center justify-between">
      {data.map((item, index) => {
        return (
          <div key={index} className="w-[48%] py-[12px]">
            <div
              className="w-full bg-white h-[88px] p-[16px] min-w-0 rounded-lg overflow-hidden"
              style={{ boxShadow: "0 0 0 1px rgb(0 0 0 / 5%)" }}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${item.className}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {item.title}
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatisticsCards;
