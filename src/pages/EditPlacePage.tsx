import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlaceForm from "../components/PlaceForm";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const EditPlacePage = (props: Props) => {
  const { store } = useContext(StoreContext);
  const { placeId } = useParams();
  const navigate = useNavigate();

  const place = (store?.places || []).find((p) => p._id === placeId);

  const id = place?.building._id;

  useEffect(() => {
    if (!id) {
      navigate("/buildings");
    } else if (!place) {
      navigate(`/buildings/${id}/places`);
    }
  }, [place]);

  return (
    <DashboardLayout title="Places">
      <div className="px-1 lg:px-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-[#dcddde]">
          Add Place
        </h2>
        <PlaceForm
          buildingId={id as string}
          edit={true}
          currentPlace={place}
          placeId={placeId}
        />
      </div>
    </DashboardLayout>
  );
};

export default EditPlacePage;
