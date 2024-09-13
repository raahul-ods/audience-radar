import React from "react";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";

const Footer = () => {
    const socials = [
        {logo: <Twitter/>}, 
        {logo: <Facebook/>}, 
        {logo: <Instagram/>}, 
        {logo: <Linkedin/>}, 
    ]
  return (
    <div className="w-full pt-[8vh] pb-[10vh] px-4 py-8 bg-[#181818] flex flex-col justify-start items-center gap-6">
      {/* Form Section */}
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Input and Submit Section */}
        <div className="w-full md:w-[30vw] flex flex-col justify-start items-start gap-4">
          <div className="text-white text-lg font-bold font-inter leading-tight">
            Stay up to date
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-[70%] px-4 py-2 rounded-lg shadow border border-[#8b95ad] bg-[#2c2c2c] text-[#d6d6d6] placeholder-[#d6d6d6] text-base font-light font-inter"
            />
            <button className="w-full md:w-[30%] p-2 bg-[#55b271] rounded-lg text-white text-lg font-bold font-inter">
              Submit
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex flex-wrap justify-end items-center gap-4 w-full md:w-[50%]">
          {socials.map((item, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-[#333333] rounded-full border flex items-center justify-center border-[#494949] relative cursor-pointer"
            >
                {/* <Facebook/> */}
                {item.logo}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-[90%] mt-8 flex justify-between items-center gap-4 border-t border-[#8b95ad] pt-4">
        <div className="text-white text-base font-light font-inter leading-normal">
          © 2024 GoAudience. All rights reserved.
        </div>
        <div className="flex gap-4">
          <div className="text-white text-base font-light font-inter leading-normal cursor-pointer">
            Terms
          </div>
          <div className="text-white text-base font-light font-inter leading-normal cursor-pointer">
            Privacy
          </div>
          <div className="text-white text-base font-light font-inter leading-normal cursor-pointer">
            Cookies
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
