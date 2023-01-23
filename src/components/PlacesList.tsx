import React, { useContext } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StoreContext from "../context/StoreContext";
import PlaceModal from "./PlaceModal";
import Modal from "./reusable/Modal";
import Table from "./reusable/Table";

type Props = {
  id: string;
};

const PlacesList = ({ id }: Props) => {
  const [selectedPlace, setselectedPlace] = React.useState(null);

  const navigate = useNavigate();
  const { store, deletePlace } = useContext(StoreContext);
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
            onClick={() => {
              setselectedPlace(row);
            }}
          >
            <FaEye className="h-3 w-3" />
          </button>
        );
      },
    },
  ];

  const editHandler = (id: string) => {
    navigate(`/places/${id}/edit`);
  };

  const deleteHandler = (id: string) => {
    if (confirm("Are you sure you want to delete this place?")) deletePlace(id);
  };

  return (
    <>
      <Modal
        visible={selectedPlace !== null}
        onClose={() => setselectedPlace(null)}
      >
        <PlaceModal
          close={() => setselectedPlace(null)}
          place={selectedPlace}
        />
      </Modal>
      <Table
        columns={columns}
        data={data}
        showActions={true}
        handler1={editHandler}
        handler2={deleteHandler}
      ></Table>
    </>
  );
};

export default PlacesList;
