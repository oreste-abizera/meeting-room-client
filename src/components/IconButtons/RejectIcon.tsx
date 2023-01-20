import React from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  onClick?: () => void;
};

const RejectIcon = ({ onClick }: Props) => {
  return (
    <button
      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none text-gray-600 dark:text-[#ff7675] border border-transparent active:bg-transparent hover:bg-[#ff7675] focus:shadow-outline-gray dark:hover:bg-[#ff7675] dark:hover:text-gray-300 dark:hover:bg-opacity-10"
      type="button"
      aria-label="Reject"
      onClick={onClick}
    >
      <FaTimes className="w-5 h-5" />
    </button>
  );
};

export default RejectIcon;
