import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BuildingForm from "../components/BuildingForm";
import BuildingsList from "../components/BuildingsList";
import Button from "../components/Button";
import PlaceForm from "../components/PlaceForm";
import ProfileForm from "../components/ProfileForm";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const UserSettingsPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-600">
          Edit Profile
        </h2>
        <ProfileForm />
      </div>
    </DashboardLayout>
  );
};

export default UserSettingsPage;
