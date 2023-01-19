import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingsList from "../components/BookingsList";
import Button from "../components/Button";
import StoreContext from "../context/StoreContext";
import DashboardLayout from "../layouts/DashboardLayout";

type Props = {};

const BookingsPage = (props: Props) => {
  const navigate = useNavigate();
  const { loadBookings } = useContext(StoreContext);

  useEffect(() => {
    loadBookings();
  }, []);
  return (
    <DashboardLayout>
      <div className="px-1 lg:px-4">
        <BookingsList />
      </div>
    </DashboardLayout>
  );
};

export default BookingsPage;
