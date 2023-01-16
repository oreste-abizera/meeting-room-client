import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const DashboardPage = (props: Props) => {
  const navigate = useNavigate();
  const { handleLogout, isLoggedIn, user } = useContext(AppContext) || {};

  useEffect(() => {
    console.log(isLoggedIn, user);
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <DashboardLayout>
      <div className="p-4">
        <button
          className="bg-blue-500 p-6 py-2 rounded-lg text-white font-bold"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
