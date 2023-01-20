import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  onClick?: () => void;
};

const ApproveIcon = ({ onClick }: Props) => {
  return (
    <button
      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none border border-transparent text-[#00b894] dark:text-[#00b894] hover:text-[#00b894] dark:hover:text-[#00b894] active:bg-transparent hover:bg-[#00b894] dark:hover:bg-[#00b894] focus:shadow-outline-gray dark:hover:bg-opacity-10"
      type="button"
      aria-label="Approve"
      onClick={onClick}
    >
      <FaCheck className="w-5 h-5" />
    </button>
  );
};

export default ApproveIcon;
