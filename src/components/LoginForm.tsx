import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { LoginInfo } from "../types";

type Props = {};

const LoginForm = (props: Props) => {
  const navigate = useNavigate();

  const { handleLogin, isLoggedIn, isLoading } = useContext(AppContext) || {};

  const [loginDetails, setLoginDetails] = useState<LoginInfo>({
    email: "",
    password: "",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleLogin?.(loginDetails);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="w-full py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
      ></input>
      <input
        type="password"
        className="w-full py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
      ></input>

      <div className="flex w-auto justify-between mb-[25px]">
        <div className="flex items-center">
          <input type="checkbox" className="mr-[8px] w-[14px] h-[14px]"></input>
          <p className="text-black text-[15px] leading-[19px] ">
            Remember for 30 days
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`bg-[#060606] text-white rounded-[6px] w-full h-[60px] mb-[16px] ${
          isLoading ? "opacity-[0.5] cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Wait..." : "Log in"}
      </button>
      <p>
        <span className="text-black mr-[8px]">Don't have an account?</span>
        <span
          className="text-black font-[500] cursor-pointer underline"
          onClick={() => navigate("/register")}
        >
          Sign up for free
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
