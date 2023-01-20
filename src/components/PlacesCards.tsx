import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import BookModal from "./BookModal";
import Button from "./Button";
import Modal from "./reusable/Modal";

type Props = {
  id: string;
};

const PlacesCards = ({ id }: Props) => {
  const { store } = useContext(StoreContext);
  const data = (store?.places || []).filter(
    (place) => place.building._id === id
  );

  const [selectedPlace, setSelectedPlace] = React.useState<any>(null);

  return (
    <div className="px-1 lg:px-4 flex flex-wrap gap-y-4">
      <Modal
        visible={selectedPlace !== null}
        onClose={() => setSelectedPlace(null)}
      >
        <BookModal
          cancel={() => setSelectedPlace(null)}
          place={selectedPlace}
        />
      </Modal>
      {data.map((place) => (
        <div
          className="flex w-full lg:w-[49%] lg:max-w-full"
          key={place._id as string}
        >
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${place.images[0]?.image_url})` }}
            title={place.name as string}
          ></div>
          <div className="flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-xs text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {place.name}
              </div>
              <p className="text-gray-700 text-base">
                {`${place.building?.name} - Floor ${place.floor}`}
              </p>
            </div>
            <div className="flex items-center">
              <Button
                title="Book Now"
                onClick={() => setSelectedPlace(place)}
              />
            </div>
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="flex w-full lg:w-[49%] lg:max-w-full">
          <div className="flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                No places available
              </div>
              <p className="text-gray-700 text-base">Please try again later</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacesCards;
