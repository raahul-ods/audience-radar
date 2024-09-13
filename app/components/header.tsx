import Image from "next/image";
import React from "react";
import RightArrow from "../icons/rightArrow";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="w-full px-6 py-4 bg-white rounded-xl border border-[#f2f2f2] flex justify-between items-center">
      {/* Left Section */}
      <Link href="http://localhost:3000/home">
        <div className="relative">
          <Image
            src="/images/AudienceRadarLogo.svg"
            alt="Logo"
            width={172}
            height={26}
          />
        </div>
      </Link>

      {/* Right Section */}
      <div className="flex justify-start items-center gap-6">
        <Link href={"https://www.goaudience.com/blog"}>
          <div className="text-black text-sm font-medium font-in leading-tight">
            Blogs
          </div>
        </Link>
        <Link href={"https://www.goaudience.com/"}>
          <div className="p-1 bg-[#55b271] rounded-md border border-[#55b271] flex justify-center items-center gap-2">
            <div className="px-0.5 flex justify-center items-center">
              <div className="text-white text-sm font-semibold font-in leading-7">
                Try Goaudience
              </div>
            </div>
            <div className="flex justify-center items-center">
              <RightArrow />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
