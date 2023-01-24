import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlaceForm from "../components/PlaceForm";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const AddPlacePage = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Places">
      <div className="px-1 lg:px-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-[#dcddde]">
          Add Place
        </h2>
        <PlaceForm buildingId={id || ""} />
      </div>
    </DashboardLayout>
  );
};

export default AddPlacePage;
