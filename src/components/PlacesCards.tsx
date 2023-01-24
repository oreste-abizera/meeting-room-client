import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import BookModal from "./BookModal";
import Button from "./Button";
import LockIcon from "./IconButtons/LockIcon";
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
    <div className="px-1 lg:px-4 flex flex-wrap justify-between gap-y-4">
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
          <div className="flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal dark:bg-[#1f2124] dark:text-[#dcddde] dark:border-[#2f3136]">
            <div className="mb-8">
              <p className="text-xs text-gray-600 flex items-center dark:text-[#dcddde]">
                <LockIcon />
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2 dark:text-[#dcddde]">
                {place.name}
              </div>
              <p className="text-gray-700 text-base dark:text-[#dcddde]">
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
          <div className="flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between dark:bg-[#1f2124] dark:text-[#dcddde] dark:border-[#2f3136]">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2 dark:text-[#dcddde]">
                No places available
              </div>
              <p className="text-gray-700 text-base dark:text-[#dcddde]">
                Please try again later
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacesCards;
