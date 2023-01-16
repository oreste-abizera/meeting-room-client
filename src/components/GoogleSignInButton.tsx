import React from "react";
import googleLogo from "../static/google.svg";

type Props = {};

const GoogleSignInButton = (props: Props) => {
  return (
    <button
      className="w-full mb-[32px] h-[66px] border-[1px] border-[#D9D9D9] rounded-[6px] flex items-center justify-center outline-none"
      // onClick={handleClick}
    >
      <img src={googleLogo} alt="" className="w-[24px] h-[24px]"></img>
      <p className="text-black leaing-[26px] text-[20px] ml-[16px]">
        Log in with Google
      </p>
    </button>
  );
};

export default GoogleSignInButton;
