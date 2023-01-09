import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
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
        <div className="flex items-center">
          <input type="checkbox" className="mr-[8px] w-[14px] h-[14px]"></input>
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
        <span className="text-black mr-[8px]">Don't have an account?</span>
        <span className="text-black font-[500] cursor-pointer underline">
          Sign up for free
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
