import React from "react";
import Table from "./reusable/Table";

type Props = {};

const UsersList = (props: Props) => {
  const data = [
    {
      names: "John Doe",
      companyName: "Company 1",
      place: "Place 1",
      building: "Building 1",
      floor: 1,
      from: "2021-01-01",
      to: "2021-01-01",
    },
  ];
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
      accessor: "from",
    },
    {
      Header: "To",
      accessor: "to",
    },
  ];
  return <Table columns={columns} data={data} showActions={true}></Table>;
};

export default UsersList;
