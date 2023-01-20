import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../context/StoreContext";

type Props = {};

const BuildingsCards = (props: Props) => {
  const { store } = useContext(StoreContext);
  const buildings = store?.buildings || [];
  return (
    <div className="py-4 flex justify-between flex-wrap gap-y-8">
      {buildings.map((building) => (
        <div
          className="w-full lg:w-[48%] bg-white rounded-lg shadow-lg"
          key={building._id as string}
        >
          <img
            src={
              (building.image?.image_url as string) ||
              "https://via.placeholder.com/300"
            }
            alt={building.name as string}
            className="rounded-t-lg h-60 w-full object-cover"
          />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-[#252733]">
              {building.name}
            </h2>
            <p className="text-[#252733] mb-2">
              {building.address} - {building.floors} floors
            </p>
            <Link
              to={`/buildings/${building._id}/places`}
              className="text-[#252733] underline text-sm"
            >
              View Places ▶
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildingsCards;
