import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BuildingsList from "../components/BuildingsList";
import Button from "../components/Button";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const BuildingsPage = (props: Props) => {
  const navigate = useNavigate();
  const { loadBuildings } = useContext(StoreContext);

  useEffect(() => {
    loadBuildings();
  }, []);
  return (
    <DashboardLayout title="Buildings">
      <div className="px-1 lg:px-4">
        <div className="flex flex-row justify-end mb-4">
          <Button
            title="Add Building"
            onClick={() => navigate("/buildings/new")}
          />
        </div>
        <BuildingsList />
      </div>
    </DashboardLayout>
  );
};

export default BuildingsPage;
