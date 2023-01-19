import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlacesList from "../components/PlacesList";
import Button from "../components/Button";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const PlacesPage = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loadPlaces } = useContext(StoreContext);

  useEffect(() => {
    loadPlaces();
  }, []);
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <div className="flex flex-row justify-end mb-4">
          <Button
            title="Add Place"
            onClick={() => navigate(`buildings/${id}/places/new`)}
          />
        </div>
        <PlacesList id={id || ""} />
      </div>
    </DashboardLayout>
  );
};

export default PlacesPage;
