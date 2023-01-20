import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  title,
  children,
  type,
  className = "",
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      className={`align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-[#363740] bg-opacity-90 border border-transparent focus:shadow-outline-purple ${className}`}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {title || children}
    </button>
  );
};

export default Button;
