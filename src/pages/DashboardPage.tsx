import DashboardLayout from "../layouts/DashboardLayout";
import DashboardBanner from "../components/DashboardBanner";
import StatisticsCards from "../components/StatisticsCards";

type Props = {};

const DashboardPage = (props: Props) => {
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
