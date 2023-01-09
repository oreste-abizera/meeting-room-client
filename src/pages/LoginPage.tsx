import React from "react";
import banner from "../static/images/banner1.png";
import logo from "../static/logo.svg";
import googleLogo from "../static/google.svg";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="hidden lg:block lg:w-[50%] h-full relative">
        <img src={banner} className="w-full h-full object-fill"></img>
        <div className="absolute left-0 right-0 mx-auto bottom-[50px] w-[85%]">
          <h1 className="max-w-[310px] text-white text-[40px] leading-[46px] font-[800]">
            Turn your ideas into reality
          </h1>
          <p className="mt-[20px] text-white text-[20px] leading-[27px] font-normal">
            Get a comfortable meeting room for your team on a fair price
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[50%] min-h-full flex flex-col items-center">
        <div className="w-full p-4 max-w-[430px]">
          <div className="flex items-center my-[60px]">
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

          <button className="w-full mb-[32px] h-[66px] border-[1px] border-[#D9D9D9] rounded-[6px] flex items-center justify-center">
            <img src={googleLogo} alt="" className="w-[24px] h-[24px]"></img>
            <p className="text-black leaing-[26px] text-[20px] ml-[16px]">
              Log in with Google
            </p>
          </button>

          <div className="w-full flex items-center mb-[21px] h-[21px]">
            <div className="border-[#E0E0E0] border-b-[1px] h-[9px] flex-1"></div>
            <p className="text-[#7A7A7A] text-[20px] leading-[26px] mx-[10px]">
              or
            </p>
            <div className="border-[#E0E0E0] border-b-[1px] h-[9px] flex-1"></div>
          </div>

          <form>
            <input
              type="email"
              className="w-full py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
              placeholder="Email"
            ></input>
            <input
              type="password"
              className="w-full py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
              placeholder="Password"
            ></input>

            <div className="flex w-auto justify-between mb-[30px]">
              <div className="flex">
                <input
                  type="checkbox"
                  className="mr-[8px] w-[14px] h-[14px]"
                ></input>
                <p className="text-black text-[15px] leading-[19px] ">
                  Remember for 30 days
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#060606] text-white rounded-[6px] w-full h-[60px] mb-[16px]"
            >
              Log in
            </button>
            <p>
              <span className="text-black mr-[8px]">
                Don't have an account?
              </span>
              <span className="text-black font-[500] cursor-pointer">
                Sign up for free
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
