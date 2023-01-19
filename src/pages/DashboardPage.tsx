import DashboardLayout from "../layouts/DashboardLayout";
import DashboardBanner from "../components/DashboardBanner";
import StatisticsCards from "../components/StatisticsCards";
import { useContext, useEffect } from "react";
import StoreContext from "../context/StoreContext";
import { AppContext } from "../context/AppContext";
import BuildingsCards from "../components/BuildingsCards";

type Props = {};

const DashboardPage = (props: Props) => {
  const { loadStatistics, loadBuildings } = useContext(StoreContext);
  const { isAdmin } = useContext(AppContext);

  useEffect(() => {
    if (isAdmin) {
      loadStatistics();
    } else {
      loadBuildings();
    }
  }, []);
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <DashboardBanner />
        {isAdmin ? <StatisticsCards /> : <BuildingsCards />}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
