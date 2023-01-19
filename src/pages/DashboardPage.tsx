import DashboardLayout from "../layouts/DashboardLayout";
import DashboardBanner from "../components/DashboardBanner";
import StatisticsCards from "../components/StatisticsCards";
import { useContext, useEffect } from "react";
import StoreContext from "../context/StoreContext";

type Props = {};

const DashboardPage = (props: Props) => {
  const { loadStatistics } = useContext(StoreContext);

  useEffect(() => {
    loadStatistics();
  }, []);
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <DashboardBanner />
        <StatisticsCards />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
