import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <DashboardLayout>
      <p className="px-4">Welcome!</p>
    </DashboardLayout>
  );
};

export default DashboardPage;
