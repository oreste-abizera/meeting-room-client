import React from "react";

type Props = {
  banner: string;
};

const AuthHero = ({ banner }: Props) => {
  return (
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
  );
};

export default AuthHero;
