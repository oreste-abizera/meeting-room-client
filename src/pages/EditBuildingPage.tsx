import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BuildingForm from "../components/BuildingForm";
import BuildingsList from "../components/BuildingsList";
import Button from "../components/Button";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const EditBuildingPage = (props: Props) => {
  const navigate = useNavigate();
  const { store } = useContext(StoreContext);
  const { id } = useParams();

  const currentBuilding = (store?.buildings || []).find(
    (building) => building._id === id
  );

  useEffect(() => {
    if (!currentBuilding) {
      navigate("/buildings");
    }
  }, [currentBuilding]);

  return (
    <DashboardLayout title="Buildings">
      <div className="px-1 lg:px-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-600">
          Edit Building
        </h2>
        <BuildingForm
          edit={true}
          id={id || ""}
          building={currentBuilding}
          key={currentBuilding?._id as string}
        />
      </div>
    </DashboardLayout>
  );
};

export default EditBuildingPage;
