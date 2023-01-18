import BuildingsList from "../components/BuildingsList";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const BuildingsPage = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <BuildingsList />
      </div>
    </DashboardLayout>
  );
};

export default BuildingsPage;
