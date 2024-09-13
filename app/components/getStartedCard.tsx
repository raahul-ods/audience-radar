import React from "react";
import RightArrow from "../icons/rightArrow";

const GetStartedCard: React.FC = () => {
  return (
    <div className="w-full  relative bg-[#55b271] rounded-xl">
      <div className="flex flex-col justify-center items-center gap-2 p-2 md:p-6">
        {/* Text Section */}
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <div className="text-white text-3xl font-bold font-inter leading-tight">
              Built with
            </div>
            <div className="text-white text-3xl font-bold font-bricolage uppercase leading-tight">
              🫶
            </div>
            <div className="text-white text-3xl font-bold font-inter leading-tight">
              by Experts at GoAudience
            </div>
          </div>
          <div className="text-center text-white text-lg font-normal font-inter leading-loose max-w-[90%] md:max-w-[70%]">
            GoAudience is an AI custom audience builder for meta ads with just
            one goal— providing enterprise-grade targeting to those who don’t
            have access to it. Our platform helps brands achieve profitable
            growth with benchmark-beating ROAS.
          </div>
        </div>

        {/* Button Section */}
        <div className="flex flex-col justify-center items-center gap-6 mt-6">
          <button className="px-4 py-2 bg-white text-[#55b271] rounded-md border border-white text-lg font-semibold font-inter flex items-center gap-2">
            <span className="text-xl">Get Started</span>
            <div className="w-6 h-6">
                <RightArrow color="#55b271"/>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCard;
