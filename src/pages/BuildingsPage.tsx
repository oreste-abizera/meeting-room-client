import { useContext, useEffect } from "react";
import BuildingsList from "../components/BuildingsList";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const BuildingsPage = (props: Props) => {
  const { loadBuildings } = useContext(StoreContext);

  useEffect(() => {
    loadBuildings();
  }, []);
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <BuildingsList />
      </div>
    </DashboardLayout>
  );
};

export default BuildingsPage;
