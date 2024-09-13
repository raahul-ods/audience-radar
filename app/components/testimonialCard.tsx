import Image from "next/image";
import React from "react";

export interface TestimonialCardProps {
    mainText: string;
    name: string;
    position: string;
    profileImage: string;
  }

const TestimonialCard: React.FC<TestimonialCardProps> = ({ mainText, name, position, profileImage }) =>  {
  return (
    <div className="w-[24vw] relative bg-white rounded-[14px] shadow border border-1 mt-[60px]">
      {/* <div className="w-[465px] h-[430px] left-0 top-[48px] absolute bg-white rounded-[14px] shadow" /> */}
      <div className="w-[96px] h-[96px] left-[24px] top-[-48px] absolute">
        <div className="w-[97px] h-[97px] left-0 top-0 absolute bg-[#e5ffe7] rounded-full border-4 border-white" style={{ backgroundImage: `url(${profileImage})` }}/>
      </div>

      <div className="w-full p-4 flex-col justify-end items-start gap-6 inline-flex mt-12">
        <div className="w-full text-[#494949] text-md  font-normal font-inter leading-[31px]">{mainText}</div>
        <div className="w-full h-[0px] opacity-80 border border-0.5 border-[#8b95ad40]"></div>
        <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-black text-lg font-bold font-inter leading-relaxed">
            {name}
          </div>
          <div className="text-[#9b9b9b] text-sm font-medium font-inter leading-tight">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
