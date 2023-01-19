import React, { useContext } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StoreContext from "../context/StoreContext";
import Table from "./reusable/Table";

type Props = {
  id: string;
};

const PlacesList = ({ id }: Props) => {
  const navigate = useNavigate();
  const { store } = useContext(StoreContext);
  const data = (store?.places || [])
    .filter((place) => place.building._id === id)
    .map((place) => {
      return {
        ...place,
        creationDate: new Date(place.createdAt).toLocaleDateString(),
      };
    });
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Location",
      accessor: "location",
    },
    {
      Header: "Floor",
      accessor: "floor",
    },
    {
      Header: "Creation Date",
      accessor: "creationDate",
    },
    {
      Header: "View",
      accessor: "view",
      customCell: (row: any) => {
        return (
          <button
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-lg text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
            type="button"
            onClick={() => {}}
          >
            <FaEye className="h-3 w-3" />
          </button>
        );
      },
    },
  ];
  return <Table columns={columns} data={data} showActions={true}></Table>;
};

export default PlacesList;
