import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BuildingForm from "../components/BuildingForm";
import BuildingsList from "../components/BuildingsList";
import Button from "../components/Button";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const AddBuildingPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Buildings">
      <div className="px-1 lg:px-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-600">
          Add Building
        </h2>
        <BuildingForm />
      </div>
    </DashboardLayout>
  );
};

export default AddBuildingPage;
