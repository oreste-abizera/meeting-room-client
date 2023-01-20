import React from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ visible, onClose, children }: Props) => {
  return (
    <div
      className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${
        visible ? "block" : "hidden"
      }`}
      id="modal"
    >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
