import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StoreContext from "../context/StoreContext";
import Table from "./reusable/Table";

type Props = {};

const BuildingsList = (props: Props) => {
  const navigate = useNavigate();
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
    {
      Header: "Places",
      accessor: "places",
      customCell: (row: any) => {
        return (
          <button
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-lg text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
            type="button"
            onClick={() => {
              navigate(`/buildings/${row._id}/places`);
            }}
          >
            <FaArrowRight className="h-3 w-3" />
          </button>
        );
      },
    },
  ];
  return <Table columns={columns} data={data} showActions={true}></Table>;
};

export default BuildingsList;
