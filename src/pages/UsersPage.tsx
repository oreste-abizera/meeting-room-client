import { useContext, useEffect } from "react";
import UsersList from "../components/UsersList";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const UsersPage = (props: Props) => {
  const { loadUsers } = useContext(StoreContext);
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <UsersList />
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;
