import UsersList from "../components/UsersList";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const UsersPage = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <UsersList />
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;
