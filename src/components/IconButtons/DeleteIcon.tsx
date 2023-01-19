import React from "react";

type Props = {};

const DeleteIcon = (props: Props) => {
  return (
    <button
      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
      type="button"
      aria-label="Delete"
    >
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default DeleteIcon;
