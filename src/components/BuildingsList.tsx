import React from "react";
import Table from "./reusable/Table";

type Props = {};

const BuildingsList = (props: Props) => {
  const data = [
    {
      name: "Building 1",
      address: "Address 1",
      floors: 10,
      creationDate: "2021-01-01",
    },
  ];
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Floors",
      accessor: "floors",
    },
    {
      Header: "Creation Date",
      accessor: "creationDate",
    },
  ];
  return <Table columns={columns} data={data} showActions={true}></Table>;
};

export default BuildingsList;
