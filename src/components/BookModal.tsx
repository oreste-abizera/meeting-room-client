import React, { useContext, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import StoreContext from "../context/StoreContext";

type Props = {
  cancel: () => void;
  place: string;
};

const BookModal = ({ cancel, place: placeId }: Props) => {
  const { bookPlace, store } = useContext(StoreContext);
  const [values, setValues] = useState({
    startTime: "",
    endTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestData = {
      ...values,
      place: placeId,
    };
    bookPlace(requestData);
  };
  return (
    <form
      className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:bg-gray-800"
      onSubmit={handleSubmit}
    >
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800 dark:text-white">
        <label>Start Time</label>
        <input
          name="startTime"
          value={values.startTime}
          onChange={handleChange}
          type="datetime-local"
          className="w-full bg-gray-100 p-2 mt-2 mb-3 dark:bg-gray-700"
          required
        />
        <label>End Time</label>
        <input
          name="endTime"
          value={values.endTime}
          onChange={handleChange}
          type="datetime-local"
          className="w-full bg-gray-100 p-2 mt-2 mb-3 dark:bg-gray-700"
          required
        />
      </div>
      <div className="bg-gray-200 px-4 py-3 text-right flex justify-end dark:bg-gray-700">
        <button
          type="button"
          className="flex items-center gap-2 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
          onClick={cancel}
        >
          <FaTimes /> Cancel
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
          disabled={store?.isLoading}
        >
          <FaPlus /> {store?.isLoading ? "Wait..." : "Book"}
        </button>
      </div>
    </form>
  );
};

export default BookModal;
