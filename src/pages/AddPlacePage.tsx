import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BuildingForm from "../components/BuildingForm";
import BuildingsList from "../components/BuildingsList";
import Button from "../components/Button";
import PlaceForm from "../components/PlaceForm";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const AddPlacePage = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("here");

  return (
    <DashboardLayout title="Places">
      <div className="px-1 lg:px-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-600">Add Place</h2>
        <PlaceForm buildingId={id || ""} />
      </div>
    </DashboardLayout>
  );
};

export default AddPlacePage;
