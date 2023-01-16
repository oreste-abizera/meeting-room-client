import React from "react";
import Sidebar from "../components/reusable/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[100vh] flex justify-end">
      <div
        className={`animated-sideview w-full lg:w-[17.7%] h-full fixed top-0 ${
          isOpen ? "left-0" : "-left-[100%]"
        } lg:left-0`}
      >
        <div
          className="absolute top-0 right-0 w-[20%] h-full"
          onClick={handleToggle}
        ></div>
        <Sidebar />
      </div>
      <div
        className="w-full lg:w-[82.3%] h-full bg-gray-500"
        onClick={handleToggle}
      ></div>
    </div>
  );
};

export default DashboardLayout;
