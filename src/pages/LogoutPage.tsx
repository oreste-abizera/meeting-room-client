import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type Props = {};

const LogoutPage = (props: Props) => {
  const navigate = useNavigate();
  const { handleLogout, isLoggedIn } = useContext(AppContext) || {};

  useEffect(() => {
    handleLogout?.();
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <div className="p-4">
      <p>Logging out...</p>
    </div>
  );
};

export default LogoutPage;
