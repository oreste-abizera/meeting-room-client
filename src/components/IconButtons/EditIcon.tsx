import React from "react";

type Props = {
  onClick?: () => void;
};

const EditIcon = ({ onClick }: Props) => {
  return (
    <button
      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
      type="button"
      aria-label="Edit"
      onClick={onClick}
    >
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
      </svg>
    </button>
  );
};

export default EditIcon;
