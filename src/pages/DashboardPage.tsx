import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type Props = {};

const DashboardPage = (props: Props) => {
  const navigate = useNavigate();
  const { handleLogout, isLoggedIn } = useContext(AppContext) || {};

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <div className="p-4">
      <button
        className="bg-blue-500 p-6 py-2 rounded-lg text-white font-bold"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
