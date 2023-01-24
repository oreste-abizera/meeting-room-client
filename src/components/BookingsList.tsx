import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import StoreContext from "../context/StoreContext";
import Table from "./reusable/Table";

type Props = {};

const BookingsList = (props: Props) => {
  const { store, approveBooking, rejectBooking } = useContext(StoreContext);
  const { isAdmin, user } = useContext(AppContext);
  const [activeTab, setActiveTab] = React.useState(1);
  let data = (store?.bookings || []).map((booking) => {
    return {
      ...booking,
      names: `${booking.user.firstName} ${booking.user.lastName}`,
      companyName: booking.user.companyName,
      place: booking.place.name,
      building: booking.place.building?.name,
      floor: booking.place.floor,
      creationDate: new Date(booking.createdAt).toLocaleDateString(),
      startTime: new Date(booking.startTime).toLocaleString(),
      endTime: new Date(booking.endTime).toLocaleString(),
    };
  });

  data = isAdmin
    ? data
    : data.filter((booking) => booking.user._id === user?.info._id);

  const columns = [
    {
      Header: "Names",
      accessor: "names",
    },
    {
      Header: "Company",
      accessor: "companyName",
    },
    {
      Header: "Place",
      accessor: "place",
    },
    // {
    //   Header: "Building",
    //   accessor: "building",
    // },
    {
      Header: "Floor",
      accessor: "floor",
    },
    {
      Header: "Start time",
      accessor: "startTime",
    },
    {
      Header: "End Time",
      accessor: "endTime",
    },
    {
      Header: "Status",
      accessor: "status",
      customCell: (row: any) => {
        return (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              row.status === "approved"
                ? "bg-green-100 text-green-800"
                : row.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {row.status}
          </span>
        );
      },
    },
  ];

  const approveHandler = (id: string) => {
    if (confirm("Are you sure you want to approve this booking?")) {
      approveBooking(id);
    }
  };

  const rejectHandler = (id: string) => {
    if (confirm("Are you sure you want to reject this booking?")) {
      rejectBooking(id);
    }
  };

  const changeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  let displayedData = data.filter((booking) => {
    if (activeTab === 1) {
      return booking.status === "pending";
    } else if (activeTab === 2) {
      return booking.status === "approved";
    } else if (activeTab === 3) {
      return booking.status === "rejected";
    }
  });
  return (
    <>
      <div className="flex mb-3 gap-2">
        <button
          className={`w-56 bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
            activeTab === 1 ? "bg-gray-200" : ""
          } dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600`}
          onClick={() => changeActiveTab(1)}
        >
          Pending
        </button>
        <button
          className={`w-56 bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
            activeTab === 2 ? "bg-gray-200" : ""
          } dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600`}
          onClick={() => changeActiveTab(2)}
        >
          Approved
        </button>
        <button
          className={`w-56 bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
            activeTab === 3 ? "bg-gray-200" : ""
          } dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600`}
          onClick={() => changeActiveTab(3)}
        >
          Rejected
        </button>
      </div>

      <Table
        columns={columns}
        data={displayedData}
        showActions={isAdmin && activeTab === 1}
        approveActions={true}
        handler1={rejectHandler}
        handler2={approveHandler}
      ></Table>
    </>
  );
};

export default BookingsList;
