import React from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Place } from "../types";

type Props = {
  close: () => void;
  place: Place | null;
};

const PlaceModal = ({ close, place }: Props) => {
  return (
    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <div className="flex w-full lg:max-w-full" key={place?._id as string}>
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${place?.images[0]?.image_url})` }}
            title={place?.name as string}
          ></div>
          <div className="flex-1 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal dark:bg-[#1f2124] dark:text-[#dcddde] dark:border-[#2f3136]">
            <div className="mb-8">
              <p className="text-xs text-gray-600 flex items-center dark:text-[#dcddde]">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2 dark:text-[#dcddde]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2 dark:text-[#dcddde]">
                {place?.name}
              </div>
              <p className="text-gray-700 text-base dark:text-[#dcddde]">
                {`${place?.building?.name} - Floor ${place?.floor}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 px-4 py-3 text-right flex justify-end dark:bg-[#2f3136]">
        <button
          type="button"
          className="flex items-center gap-2 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
          onClick={close}
        >
          <FaTimes /> Close
        </button>
      </div>
    </div>
  );
};

export default PlaceModal;
