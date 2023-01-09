import React from "react";
import banner from "../static/images/banner1.png";
import logo from "../static/logo.svg";
import googleLogo from "../static/google.svg";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="hidden lg:block lg:w-[40%] h-full relative">
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

          <form>
            <div className="w-full flex flex-wrap justify-between mb-[10px]">
              <input
                type="text"
                className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="w-full lg:w-[46%] py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
                placeholder="Last Name"
              ></input>
            </div>

            <div className="w-full flex flex-wrap justify-between mb-[10px]">
              <input
                type="email"
                className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
                placeholder="Email"
              ></input>
              <input
                type="text"
                className="w-full lg:w-[46%] py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
                placeholder="Company Name"
              ></input>
            </div>

            <div className="w-full flex flex-wrap justify-between mb-[10px]">
              <select
                className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
                placeholder="Country"
              >
                <option value="">Select Country</option>
              </select>
            </div>

            <div className="w-full flex flex-wrap justify-between mb-[10px]">
              <input
                type="password"
                className="w-full lg:w-[46%] py-[11px] mb-[15px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
                placeholder="Password"
              ></input>
              <input
                type="password"
                className="w-full lg:w-[46%] py-[11px] mb-[17px] h-[48px] border-[#E0E0E0] border-b-[1px] outline-none text-black text-[20px] leading-[26px] placeholder:text-black placeholder:text-[20px] placeholder:leading-[26px]"
                placeholder="Confirm Password"
              ></input>
            </div>

            <div className="flex w-auto justify-between mb-[30px]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-[8px] w-[14px] h-[14px]"
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
            >
              Create account
            </button>
            <div className="flex items-center">
              <span className="text-black mr-[8px]">
                Already have an account?
              </span>
              <span className="text-black font-[500] cursor-pointer underline">
                Log in
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
