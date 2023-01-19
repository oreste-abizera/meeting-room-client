import React from "react";

type Props = {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  placeholder,
  name,
  type,
  value,
  required,
  onChange,
}: Props) => {
  return (
    <label className="block text-sm text-gray-700 dark:text-gray-400">
      <span>{label}</span>
      <input
        className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

export default Input;
