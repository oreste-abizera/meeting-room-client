import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import Table from "./reusable/Table";

type Props = {};

const BuildingsList = (props: Props) => {
  const { store } = useContext(StoreContext);
  const data = (store?.buildings || []).map((building) => {
    return {
      ...building,
      creationDate: new Date(building.createdAt).toLocaleDateString(),
    };
  });
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
