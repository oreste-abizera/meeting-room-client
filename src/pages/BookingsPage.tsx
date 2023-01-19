import { useContext, useEffect } from "react";
import UsersList from "../components/UsersList";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const BookingsPage = (props: Props) => {
  const { loadBookings } = useContext(StoreContext);

  useEffect(() => {
    loadBookings();
  }, []);
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <UsersList />
      </div>
    </DashboardLayout>
  );
};

export default BookingsPage;
