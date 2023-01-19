import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import Table from "./reusable/Table";

type Props = {};

const BookingsList = (props: Props) => {
  const { store } = useContext(StoreContext);
  const data = (store?.bookings || []).map((booking) => {
    return {
      ...booking,
      names: `${booking.user.firstName} ${booking.user.lastName}`,
      companyName: booking.user.companyName,
      place: booking.place.name,
      building: booking.place.building?.name,
      creationDate: new Date(booking.createdAt).toLocaleDateString(),
    };
  });

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
    {
      Header: "Building",
      accessor: "building",
    },
    {
      Header: "Floor",
      accessor: "floor",
    },
    {
      Header: "From",
      accessor: "startTime",
    },
    {
      Header: "To",
      accessor: "endTime",
    },
  ];
  return <Table columns={columns} data={data} showActions={true}></Table>;
};

export default BookingsList;
