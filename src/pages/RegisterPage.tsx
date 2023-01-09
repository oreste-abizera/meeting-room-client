import React from "react";
import banner from "../static/images/banner1.png";
import logo from "../static/logo.svg";
import googleLogo from "../static/google.svg";
import RegisterForm from "../components/RegisterForm";
import AuthHero from "../components/AuthHero";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <AuthHero banner={banner} />
      <div className="w-full lg:w-[60%] min-h-full flex flex-col items-center">
        <div className="w-full p-4 max-w-[748px]">
          <div className="flex items-center my-[60px]">
            <img src={logo} className="mr-[8px] h-[24px] w-[24px]"></img>
            <p className="text-[#1D1D1B] leading-[27px] text-[20px] font-medium">
              Meeting Room
            </p>
          </div>

          <h1 className="text-black text-[36px] leading-[49px] font-bold mb-[5px]">
            Create account
          </h1>
          <p className="font-normal text-[20px] leading-[26px] mb-[46px]">
            For business, band or celebrity.
          </p>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
