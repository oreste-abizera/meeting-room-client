import React from "react";
import banner from "../static/images/banner1.png";
import logo from "../static/logo.svg";
import LoginForm from "../components/LoginForm";
import AuthHero from "../components/AuthHero";
import GoogleSignInButton from "../components/GoogleSignInButton";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <AuthHero banner={banner} />
      <div className="w-full lg:w-[60%] lg:ml-[40%] min-h-full flex flex-col items-center">
        <div className="w-full p-4 max-w-[550px]">
          <div className="flex items-center my-[40px]">
            <img src={logo} className="mr-[8px] h-[24px] w-[24px]"></img>
            <p className="text-[#1D1D1B] leading-[27px] text-[20px] font-medium">
              Meeting Room
            </p>
          </div>

          <h1 className="text-black text-[36px] leading-[49px] font-bold mb-[5px]">
            Welcome back
          </h1>
          <p className="font-normal text-[20px] leading-[26px] mb-[46px]">
            Welcome back! Please enter your details.
          </p>

          <GoogleSignInButton />

          <div className="w-full flex items-center mb-[21px] h-[21px]">
            <div className="border-[#E0E0E0] border-b-[1px] h-[9px] flex-1"></div>
            <p className="text-[#7A7A7A] text-[20px] leading-[26px] mx-[10px]">
              or
            </p>
            <div className="border-[#E0E0E0] border-b-[1px] h-[9px] flex-1"></div>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
