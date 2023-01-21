import React, { useContext, useEffect } from "react";
import Navbar from "../components/reusable/Navbar";
import Sidebar from "../components/reusable/Sidebar";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const DashboardLayout = ({ children, title }: Props) => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AppContext) || {};

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[100vh] flex justify-end bg-[#F7F8FC]">
      <div
        className={`animated-sideview w-full lg:w-[17.7%] h-full fixed top-0 ${
          isOpen ? "left-0" : "-left-[100%]"
        } lg:left-0`}
      >
        <div
          className="absolute top-0 right-0 w-[30%] h-full bg-black opacity-40 lg:hidden"
          onClick={handleToggle}
        ></div>
        <Sidebar />
      </div>
      <div className="w-full lg:w-[82.3%] h-full bg-[#F7F8FC]">
        <Navbar handleToggle={handleToggle} title={title} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
