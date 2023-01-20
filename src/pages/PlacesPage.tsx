import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlacesList from "../components/PlacesList";
import Button from "../components/Button";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";
import { AppContext } from "../context/AppContext";
import PlacesCards from "../components/PlacesCards";

type Props = {};

const PlacesPage = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loadPlaces } = useContext(StoreContext);
  const { isAdmin } = useContext(AppContext);

  useEffect(() => {
    loadPlaces();
  }, []);
  return (
    <DashboardLayout title="Places">
      {isAdmin ? (
        <div className="px-1 lg:px-4">
          <div className="flex flex-row justify-end mb-4">
            <Button
              title="Add Place"
              onClick={() => navigate(`/buildings/${id}/add-place`)}
            />
          </div>
          <PlacesList id={id || ""} />
        </div>
      ) : (
        <PlacesCards id={id || ""} />
      )}
    </DashboardLayout>
  );
};

export default PlacesPage;
