import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { RegisterInfo } from "../types";

type Props = {};

const RegisterForm = (props: Props) => {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, handleRegister } =
    useContext(AppContext) || {};

  const [registerInfo, setregisterInfo] = useState<RegisterInfo>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setregisterInfo({
      ...registerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleRegister?.(registerInfo);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-wrap justify-between mb-[10px]">
        <input
          type="text"
          className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
          placeholder="First Name"
          name="firstName"
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="text"
          className="w-full lg:w-[46%] py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
          placeholder="Last Name"
          name="lastName"
          onChange={handleInputChange}
          required
        ></input>
      </div>

      <div className="w-full flex flex-wrap justify-between mb-[10px]">
        <input
          type="email"
          className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="text"
          className="w-full lg:w-[46%] py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
          placeholder="Company Name"
          name="companyName"
          onChange={handleInputChange}
          required
        ></input>
      </div>

      <div className="w-full flex flex-wrap justify-between mb-[10px]">
        <select
          className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
          placeholder="Country"
          name="country"
          onChange={handleInputChange}
          required
        >
          <option value="">Select Country</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Kenya">Kenya</option>
        </select>
      </div>

      <div className="w-full flex flex-wrap justify-between mb-[10px]">
        <input
          type="password"
          className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="password"
          className="w-full lg:w-[46%] py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleInputChange}
          required
        ></input>
      </div>

      <div className="flex w-auto justify-between mb-[30px]">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-[8px] w-[14px] h-[14px]"
            required
          ></input>
          <p className="text-black text-[15px] leading-[19px] ">
            I agree to all{" "}
            <span className="text-black font-[500] cursor-pointer underline">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-black font-[500] cursor-pointer underline">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#060606] text-white rounded-[6px] w-1/2 h-[60px] mb-[16px]"
        disabled={isLoading}
      >
        {isLoading ? "Wait..." : "Create account"}
      </button>
      <div className="flex items-center">
        <span className="text-black mr-[8px]">Already have an account?</span>
        <span
          className="text-black font-[500] cursor-pointer underline"
          onClick={() => navigate("/")}
        >
          Log in
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
